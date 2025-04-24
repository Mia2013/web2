import express from 'express';
import cors from 'cors';
import loggerMiddleware from './middlewares/logger.js';
import wineController from './controllers/wineController.js';
import imageController from './controllers/imageController.js';
import registerController from './controllers/registerController.js';
import loginController from './controllers/loginController.js';
import authorization from './middlewares/authorization.js';
import cartController from './controllers/cartController.js';

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

app.get('/images', imageController.getImages);
app.get('/wines', wineController.getWines);

app.post('/register', registerController.registerUser);
app.post('/login', loginController.loginUser);

app.get('/cart', authorization, cartController.getCart);
app.post('/cart', authorization, cartController.addToCart);
app.delete('/cart', authorization, cartController.deleteFromCart);
app.post('/buyCart', authorization, cartController.buyCart);



app.listen(port, () => {
  console.log(`Szerver fut: http://localhost:${port}`);
});
