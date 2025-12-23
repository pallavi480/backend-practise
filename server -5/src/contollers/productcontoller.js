import productModel from "../models/productmodel.js";

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
    const product = await productModel.create(req.body);
    res.status(201).json({
      message: "product added",
      product
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export { getProduct, postProduct };
