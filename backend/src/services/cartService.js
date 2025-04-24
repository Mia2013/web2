import { dbAll, dbGet, dbRun } from '../utils/db.js';

const cartService = {
    getCart: async (userId) => {
        const sql = `
            SELECT 
                WINES.id AS wine_id,
                WINES.name,
                WINES.description,
                WINES.price,
                SUM(CART.quantity) AS quantity
            FROM CART
            JOIN WINES ON CART.wine_id = WINES.id
            WHERE CART.user_id = ?
            GROUP BY WINES.id, WINES.name, WINES.description, WINES.price;
        `;
        return await dbAll(sql, [userId]);
    },


    addToCart: async (userId, reqBody) => {
        const { wineId, quantity } = reqBody;
        if (!wineId) {
            throw new Error('Nem található termék azonosító');
        }

        const wine = await dbGet('SELECT * FROM WINES WHERE id = ?', [wineId]);
        if (!wine) {
            throw new Error('A termék nem létezik');
        }

        const sql = `
        INSERT INTO CART (user_id, wine_id, quantity)
        VALUES (?, ?, ?);
    `;
        await dbRun(sql, [userId, wineId, quantity]);

        return { message: 'Termék hozzáadva a kosárhoz' };
    },

    // Termék törlése a kosárból
    deleteFromCart: async (reqParams) => {
        const { cartItemId } = reqParams;
        if (!cartItemId) {
            throw new Error('Nem található rendelés azonosító');
        }

        const sql = `DELETE FROM CART WHERE id = ?;
    `;
        await dbRun(sql, [cartItemId]);

        return { message: 'Termék törölve a kosárból' };
    },

    // Kosár fizetése
    buyCart: async (userId) => {
        if (!userId) {
            throw new Error('Nem található felhasználó');
        }

        const pendingCart = await dbAll(
            'SELECT CART.*, WINES.name AS wine_name, WINES.price AS wine_price FROM CART JOIN WINES ON CART.wine_id = WINES.id WHERE CART.user_id = ? AND CART.status = ?',
            [userId, 'pending']
        );

        if (!pendingCart.length) {
            throw new Error('A kosár üres');
        }

        const paidDate = new Date().toString();

        let totalPrice = 0;
        const winesSummary = pendingCart
            .map(item => {
                totalPrice += item.wine_price * item.quantity;
                const line = `${item.wine_name}: ${item.quantity} db`;
                return line;
            })
            .join(', ');

        // Lementjük a vásárlást
        const insertPurchaseSql = `
      INSERT INTO PURCHASES (user_id, price, wines, paid_date)
      VALUES (?, ?, ?, ?, ?);
    `;

        await dbRun(insertPurchaseSql, [
            userId,
            totalPrice,
            winesSummary,
            paidDate,
        ]);

        // Frissítjük a kosár elemeit 'paid' státuszra
        await dbRun(
            'UPDATE CART SET status = ? WHERE user_id = ? AND status = ?',
            ['paid', userId, 'pending']
        );

        return {
            message: 'Vásárlás sikeres',
            totalPrice,
            winesSummary,
        };
    }

};

export default cartService;
