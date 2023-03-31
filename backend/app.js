require("dotenv").config();
const db = require("./data");

const express = require("express");
const app = express();
const router = express.Router();

// swagger implementation to /api-docs route
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swaggerAPI.yaml");
app.use("/api/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const cors = require("cors");

// enable cors
app.use(cors());

// parse incoming json requests
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
router.get("/products", (req, res) => {
  res.json(Object.values(db));
});

// get specific
router.get("/products/:productId", (req, res) => {
  let product = db[req.params.productId];

  if (product === undefined) {
    res.status(404).json({ message: "Cannot find productId" });
    return;
  }
  res.json(product);
});

// post request
router.post("/products", (req, res) => {
  let getRandomNumber = Math.floor(Math.random() * 100_000);

  // collision detector, if collision,
  // keep changing getRandomNumber until collision is gone
  while (db[getRandomNumber]) {
    getRandomNumber = Math.floor(Math.random() * 100_000);
  }
  const product = {
    productId: getRandomNumber,
    productName: req.body.productName,
    productOwnerName: req.body.productOwnerName,
    developers: req.body.developers,
    scrumMasterName: req.body.scrumMasterName,
    startDate: req.body.startDate,
    methodology: req.body.methodology,
  };

  db[product.productId] = product;
  res.status(201).json(product);
});

// put request
router.put("/products/:productId", (req, res) => {
  const product = {
    productId: req.body.productId,
    productName: req.body.productName,
    productOwnerName: req.body.productOwnerName,
    developers: req.body.developers,
    scrumMasterName: req.body.scrumMasterName,
    startDate: req.body.startDate,
    methodology: req.body.methodology,
  };

  //verify productId exists in database
  if (db[product.productId] === undefined) {
    res.status(404).json({
      message: "productId does not exist in the db",
    });
    return;
  }

  db[product.productId] = product;
  res.status(201).json(product);
});

// delete by ID
router.delete("/products/:productId", (req, res) => {
  // verify productId exists in database
  if (db[req.params.productId] === undefined) {
    res.status(404).json({ message: "productId does not exist in the db" });
    return;
  }
  delete db[req.params.productId];
  res.json({ message: "Successfully deleted product" });
});

app.use("/api", router);

app.listen(3000, () => console.log("Server started"));
