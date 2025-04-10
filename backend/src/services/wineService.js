import { dbAll } from "../utils/db.js";

const wineService = {
  getAllWines: async () => {
    const sql = 'SELECT * FROM WINES';
    return await dbAll(sql);
  }
};

export default wineService;
