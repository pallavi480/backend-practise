import express from "express";
import {
  // createUser,
  GetData,
  updateUser,
  deleteUser,
  Signup
} from "../controller/usercontroller.js";

const UserRouter = express.Router();

UserRouter.post("/login", Signup);
UserRouter.get("/Signup", GetData);
UserRouter.put("/update:id", updateUser);
UserRouter.delete("/delete:id", deleteUser);

export default UserRouter;