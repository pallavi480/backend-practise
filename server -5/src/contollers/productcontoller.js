import productModel from "../models/productmodel.js";
import sendMail from "../utities/mailer.js"
const getProduct = async (req, res) => {
  try {

  const {page=1,limit=5,search=""} = req.query

   const query = {
        title:{$regex: search, $options:"i"}
   }
    const product = await productModel.find(query).skip((page-1)*limit).limit(Number(limit))

    const totle = await productModel.countDocuments(query)
    res.status(200).json({
      totle,
      page:Number(page),
      pages:Math.ceil(totle/limit),
      product
    })
  } catch (error) {
    res.status(500).send(error);
  }
};


const postProduct = async (req, res) => {
  try {
    const { title, price } = req.body;

    // Validation
    if (!title || !price) {
      return res.status(400).json({ message: "All fields required" });
    }

    //  Multiple images handle
    const images = req.files
      // ? req.files.map(file => `products/${file.filename}`)
      // : [];
      ? req.files.map(file => `gallary/${file.filename}`)
      : [];

    const product = await productModel.create({
      title,
      price,
      images   
    });

    res.status(201).json({
      message: "Product added",
      product
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


  
    //   await sendMail({
  //   to:"pallavigayaki@gmail.com",
  //   subject:"new mail send",
  //   html:`<h2>check out new mail send</h2>
  //          <p><br>Name:</b> ${product.title}</p>
  //          <p><br>price:</b> ${product.price}</p>`
  // });



const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await productModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }

    res.status(200).json({
      message: "product updated",
      product
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await productModel.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }

    res.status(200).json({
      message: "product deleted"
    });
  } catch (error) {
    res.status(500).json(error);
  }
};



export { getProduct, postProduct,updateProduct,deleteProduct };

// green commit test

