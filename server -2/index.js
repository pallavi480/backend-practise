import express from "express";
import fs from "fs";

const app = express();
let PORT = 3050;

// middleware to parse json body
app.use(express.json());

// crud
// create => POST request
// read  => get request
// Update => put/patch request
// delete => delete request

app.get("/getdata", (req, res) => {
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) res.send(err);
    else res.send(JSON.parse(data));
  });
});

app.post("/postdata", (req, res) => {
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) res.send(err);
    let jsondata = JSON.parse(data);
    jsondata.users.push(req.body);
    fs.writeFile("data.json", JSON.stringify(jsondata), (err, data) => {
      if (err) res.send(err);
      else res.send("data posted done");
    });
  });

  //  let x = req.body;
});

app.patch("/users/:id", (req, res) => {
  let x = JSON.parse(req.params.id);
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) res.send(err);
    let jsondata = JSON.parse(data);
    let user = jsondata.users.find((el) => el.id === x);
    if (!user) res.send("user not found");

    Object.assign(user, req.body);
    fs.writeFile("data.json", JSON.stringify(jsondata), (err, data) => {
      if (err) res.send(err);
      else res.send("user updated done");
    });
  });
});

app.delete("/users/:id", (req, res) => {
  let x = JSON.parse(req.params.id);
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) res.send(err);
    let jsondata = JSON.parse(data);
    let userindex = jsondata.users.findIndex((el) => el.id === x);
    // if (!userindex) res.send("user not found");

    jsondata.users.splice(userindex, 1); //remove
    fs.writeFile("data.json", JSON.stringify(jsondata), (err, data) => {
      if (err) res.send(err);
      else res.send("user deleted");
    });
  });
});

app.get("/abc/:id", (req, res) => {
  res.send(id);
});

app.get("/", (req, res) => {
  res.send("hello , welcome to our server");
});

app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});