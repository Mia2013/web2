import imageService from '../services/imageService.js';

const imageController = {
  getImages: async (req, res) => {
    try {
      const data = await imageService.getAllImages();
      res.json(data);
    } catch (error) {
      console.error('Hiba a képnevek lekérdezésekor:', error.message);
      res.status(500).json({ message: error.message });
    }
  },
};

export default imageController;