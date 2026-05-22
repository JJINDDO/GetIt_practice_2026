import express from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  replaceProduct,
  updateProduct,
  deleteProduct
} from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get('/',      getAllProducts);    // GET    /users
productRouter.get('/:id',   getProductById);    // GET    /users/:id
productRouter.post('/',     createProduct);     // POST   /users
productRouter.put('/:id',   replaceProduct);    // PUT    /users/:id
productRouter.patch('/:id', updateProduct);     // PATCH  /users/:id
productRouter.delete('/:id', deleteProduct);    // DELETE /users/:id

export default productRouter;