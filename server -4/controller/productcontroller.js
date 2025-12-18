import productmodel from "../models/productmodels.js";

// CREATE PRODUCT
const createProduct = async (req, res) => {
  try {
    const { name, price, mobile } = req.body;

    const product = await productmodel.create({
      name,
      price,
      mobile,
    });

    res.status(201).json({
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL PRODUCTS
const GetData = async (req, res) => {
  try {
    const products = await productmodel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE PRODUCT
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await productmodel.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE PRODUCT
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await productmodel.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product deleted successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  createProduct,
  GetData,
  updateProduct,
  deleteProduct,
};
