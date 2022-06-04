const router = require("express").Router();
const { register, login } = require("../controller/auth.controller");
const {
  verifyToken,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken.middleware");
const { newCategory, getAllCategory, deleteCategorys, getOneCategorybyIds } = require("../controller/category.controller");
const { newProduct, allProducts, updatedProduct, deleteProduct, singleProduct } = require("../controller/product.controller");



//auth route
router.post("/auth/register", register);
router.post("/auth/login", login);



//product route

router.post('/product/new',verifyTokenAndAdmin, newProduct)
router.get('/product/all', allProducts)
router.get('/product/:id',singleProduct)
router.delete('/product/:id', verifyTokenAndAdmin, deleteProduct)
router.put('/product/:id',verifyTokenAndAdmin, updatedProduct)


//category route
router.post('/category/new',verifyTokenAndAdmin, newCategory)
router.get('/category/all', verifyToken, getAllCategory)
router.get('/category/:id',getOneCategorybyIds)
router.delete('/category/:id', verifyToken, deleteCategorys)







module.exports = router;
