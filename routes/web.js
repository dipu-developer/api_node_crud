import express from "express";
const routes = express.Router();
import UserCollections from "../controllers/usercollection.js";

routes.post("/", UserCollections.createData);
routes.get("/", UserCollections.getAllData);
routes.get("/:id", UserCollections.getSingleDataById);
routes.put("/:id", UserCollections.updateSingleDataById);
routes.delete("/:id", UserCollections.deleteSingleDataById);

export default routes;
