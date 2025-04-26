import registerService from '../services/registerService.js';

const registerController = {
  registerUser: async (req, res) => {
    try {
      const data = await registerService.addUser(req);
      res.json(data);
    } catch (error) {
      console.error('Hiba a felhasználó hozzáadásakor:', error.message);
      res.status(400).json({ message: error.message });
    }
  },
};

export default registerController;