import express from "express";
import {
  createUser,
  GetData,
  updateUser,
  deleteUser
} from "../controller/usercontroller.js";

const UserRouter = express.Router();

UserRouter.post("/create", createUser);
UserRouter.get("/get", GetData);
UserRouter.put("/update:id", updateUser);
UserRouter.delete("/delete:id", deleteUser);

export default UserRouter;