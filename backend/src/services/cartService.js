import { dbAll, dbGet, dbRun } from '../utils/db.js';
const defaultCartStatus = "pending";

const cartService = {
    getCart: async (userId) => {
        const sql = `
            SELECT 
                CART.id AS cartItem_id,
                WINES.id AS wine_id,
                WINES.name,
                WINES.description,
                WINES.price,
                CART.quantity
            FROM CART
            JOIN WINES ON CART.wine_id = WINES.id
            WHERE CART.user_id = ? AND CART.status = ?;
        `;
        return await dbAll(sql, [userId, defaultCartStatus]);
    },

    addToCart: async (userId, reqBody) => {
        const { wineId, quantity } = reqBody;
        if (!wineId || !quantity) {
            throw new Error('Hiányzó adat');
        }

        const wine = await dbGet('SELECT * FROM WINES WHERE id = ?', [wineId]);
        if (!wine) {
            throw new Error('A termék nem létezik');
        }

        const existing = await dbGet(
            'SELECT * FROM CART WHERE user_id = ? AND wine_id = ? AND status = ?',
            [userId, wineId, defaultCartStatus]
        );

        if (existing) {
            await dbRun(
                'UPDATE CART SET quantity = quantity + ? WHERE id = ?',
                [quantity, existing.id]
            );
        } else {
            await dbRun(
                'INSERT INTO CART (user_id, wine_id, quantity, status) VALUES (?, ?, ?, ?)',
                [userId, wineId, quantity, defaultCartStatus]
            );
        }

        return await cartService.getCart(userId);
    },

    deleteFromCart: async (userId, cartItemId) => {
        if (!cartItemId) {
            throw new Error('Nem található rendelés azonosító');
        }

        await dbRun('DELETE FROM CART WHERE id = ?', [cartItemId]);

        return await cartService.getCart(userId);
    },

    buyCart: async (userId) => {
        if (!userId) {
            throw new Error('Nem található felhasználó');
        }

        const pendingCart = await dbAll(
            'SELECT CART.*, WINES.name AS wine_name, WINES.price AS wine_price FROM CART JOIN WINES ON CART.wine_id = WINES.id WHERE CART.user_id = ? AND CART.status = ?',
            [userId, defaultCartStatus]
        );

        if (!pendingCart.length) {
            throw new Error('A kosár üres');
        }

        const paidDate = new Date().toString();

        let totalPrice = 0;
        const winesSummary = pendingCart
            .map(item => {
                totalPrice += item.wine_price * item.quantity;
                return `${item.wine_name}: ${item.quantity} db`;
            })
            .join(', ');

        const insertPurchaseSql = `
            INSERT INTO PURCHASES (user_id, price, wines, paid_date)
            VALUES (?, ?, ?, ?);
        `;

        await dbRun(insertPurchaseSql, [
            userId,
            totalPrice,
            winesSummary,
            paidDate,
        ]);

        await dbRun(
            'UPDATE CART SET status = ? WHERE user_id = ? AND status = ?',
            ['paid', userId, defaultCartStatus]
        );

        return {
            message: 'Vásárlás sikeres',

        };
    }
};

export default cartService;
