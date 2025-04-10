import wineService from '../services/wineService.js';

const wineController = {
  getWines: async (req, res) => {
    try {
      const data = await wineService.getAllWines();
      res.json(data);
    } catch (error) {
      console.error('Hiba a borok lekérdezésekor:', error.message);
      res.status(500).json({ message: error.message });
    }
  },
};

export default wineController;