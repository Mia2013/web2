import { dbAll } from "../utils/db.js";

const imageService = {
  getAllImages: async () => {
    const sql = 'SELECT * FROM IMAGES';
    return await dbAll(sql);
  }
};

export default imageService;
