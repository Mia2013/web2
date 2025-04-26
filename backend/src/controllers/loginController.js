import loginService from '../services/loginService.js';

const loginController = {
  loginUser: async (req, res) => {
    try {
      const data = await loginService.verifyUser(req);
      res.json(data);
    } catch (error) {
      console.error('Hiba a bejelentkezéskor:', error.message);
      res.status(400).json({ message: error.message });
    }
  },
};

export default loginController;