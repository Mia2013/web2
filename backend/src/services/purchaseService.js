import { dbAll } from '../utils/db.js';

const purchaseService = {
    getPurchasesByUserId: async (userId) => {
        const sql = 'SELECT * FROM PURCHASES WHERE user_id = ?'
        return await dbAll(sql, [userId]);
    },

};

export default purchaseService;
