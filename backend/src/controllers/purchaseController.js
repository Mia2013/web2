import purchaseService from '../services/purchaseService.js';

const purchaseontroller = {
  getPurchases: async (req, res) => {
    try {
      const data = await purchaseService.getPurchasesByUserId(req.userid);
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }
};

export default purchaseontroller;
