const express = require("express");
const router = express.Router();
const Item = require("../Models/ProductModel");

//NOw lets create some routes here
//First route for adding item in our database
router.post("/new_Item", async (req, res) => {
  const newItem = new Item({
    category: req.params.category,
    product_name: req.body.product_name,
    image: req.body.image,
    price: req.body.price,
    description: req.body.description,
    quantity: req.body.quantity,
    units_in_stock: req.body.units_in_stock,
    available: req.body.available,
  });
  try {
    const savedItem = await newItem.save();
    res.status(200).json(savedItem);
  } catch (err) {
    res.status(500).send({ message: err });
  }
});
// Lets create a route for getting all items that are present in our database
router.get("/all_items", async (req, res) => {
  try {
    const allItems = await Item.find();
    res.status(200).json(allItems);
  } catch (err) {
    res.status(404).send({ message: err });
  }
});
//Lets create a route for getting a single Item from our database
router.get("/:id", async (req, res) => {
  const Id = req.params.id;
  try {
    const item = await Item.findById(Id);
    res.status(200).json(item);
  } catch (err) {
    res.status(404).send({ message: err });
  }
});
//Lets create a route for updating an existing Item
router.put("/:id", async (req, res) => {
  const updateItem = await Item.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        category: req.params.category,
        product_name: req.body.product_name,
        image: req.body.image,
        price: req.body.price,
        description: req.body.description,
        quantity: req.body.quantity,
        units_in_stock: req.body.units_in_stock,
        available: req.body.available,
      },
    }
  );
  try {
    await updateItem.save();
    res.status(200).json({ message: "Item updated successfully!" });
  } catch (err) {
    res.status(500).send({ message: err });
  }
});
//Lets create a route for deleting an Item
router.delete("/:ItemId", async (req, res) => {
  try {
    const deleteItem = await Item.deleteOne({ _id: req.params.ItemId });
    res.status(200).json(deleteItem);
  } catch (err) {
    res.status(404).send({ message: err });
  }
});
module.exports = router;