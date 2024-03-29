const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsDetails,
} = require("../controller/productController");
const { isAuthenticateUser } = require("../middleware/auth");
const router = express.Router();

router.route("/products").get(isAuthenticateUser, getAllProducts);
router.route("/product/new").post(createProduct);
router
  .route("/product/:id")
  .put(updateProduct)
  .delete(deleteProduct)
  .get(getProductsDetails);

module.exports = router;
