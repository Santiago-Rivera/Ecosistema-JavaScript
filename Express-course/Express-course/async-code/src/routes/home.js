const { Router } = require("express");
const router = Router();
const axios = require("axios");

router.get("/", (req, res) => {
  let isActive = true;

  const users = [
    { name: "Santiago", age: 25 },
    { name: "Maria", age: 30 },
    { name: "Pedro", age: 28 },
  ];

  res.render("index", { title: "Home Page", isActive, users });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard", { title: "Dashboard Page" });
});

router.get("/post", async (req, res) => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts")

  res.render("post", { Route: "Post Page", posts: response.data });
});

module.exports = router