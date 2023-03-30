require("dotenv").config();
const db = require("./data");

const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");

// do this better
app.use(cors());

app.use(express.json());

// healthcheck
router.get("/healthcheck", (req, res) => {
  const data = {
    uptime: process.uptime(),
    message: "Ok",
    date: new Date(),
  };
  res.status(200).send(data);
});

// get all
router.get("/", (req, res) => {
  res.json(Object.values(db));
});

// get specific
router.get("/:productId", (req, res) => {
  let product = db[req.params.productId];

  if (product === undefined) {
    res.status(404).json({ message: "Cannot find productId" });
    return;
  }
  res.json(product);
});

// get specific scrum master products
router.get("/scrum-master/:scrumMasterName", (req, res) => {
  let name = req.params.scrumMasterName.replace("-", " ");
  let scrumMasterProducts = Object.values(db).filter((product) => {
    return product.scrumMasterName === name;
  });

  if (scrumMasterProducts.length === 0) {
    res
      .status(404)
      .json({ message: "Cannot find Scrum Master Products", name });
    return;
  }
  res.json(scrumMasterProducts);
});

// post request
router.post("/", (req, res) => {
  const product = {
    productId: req.body.productId,
    productName: req.body.productName,
    productOwnerName: req.body.productOwnerName,
    developers: req.body.developers,
    scrumMasterName: req.body.scrumMasterName,
    startDate: req.body.startDate,
    methodology: req.body.methodology,
  };

  if (db[product.productId]) {
    res.status(400).json({
      message: "productId already exists in the db",
    });
    return;
  }

  db[product.productId] = product;
  res.status(201).json(product);
});

// put request
router.put("/", (req, res) => {
  const product = {
    productId: req.body.productId,
    productName: req.body.productName,
    productOwnerName: req.body.productOwnerName,
    developers: req.body.developers,
    scrumMasterName: req.body.scrumMasterName,
    startDate: req.body.startDate,
    methodology: req.body.methodology,
  };

  if (db[product.productId] === undefined) {
    res.status(404).json({
      message: "productId does no exists in the db",
    });
    return;
  }

  db[product.productId] = product;
  res.status(201).json(product);
});

// delete by ID
router.delete("/delete/:productId", (req, res) => {
  if (db[req.params.productId] === undefined) {
    res.status(404).json({ message: "productId does not exist in the db" });
    return;
  }
  delete db[req.params.productId];
  res.json({ message: "Successfully deleted product" });
});

app.use("/api", router);

app.listen(3008, () => console.log("Server started"));
