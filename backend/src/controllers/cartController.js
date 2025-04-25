import cartService from '../services/cartService.js';

const cartController = {
  getCart: async (req, res) => {
    try {
      const data = await cartService.getCart(req.userid);
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },

  addToCart: async (req, res) => {
    try {
      const data = await cartService.addToCart(req.userid, req.body);
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },

  deleteFromCart: async (req, res) => {
    try {
      const data = await cartService.deleteFromCart(req.userid, req.query.cartItemId);
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },

  buyCart: async (req, res) => {
    try {
      const data = await cartService.buyCart(req.userid);
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },
};

export default cartController;
