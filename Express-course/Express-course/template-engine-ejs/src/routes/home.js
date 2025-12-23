const { Router } = require("express");
const router = Router();

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

module.exports = router