const express = require("express");
const harrow = require("./data/Harrow.json");
const heathrow = require("./data/Heathrow.json");
const stratford = require("./data/Stratford.json");
require("dotenv").config();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to London Mini Guide</h1>");
});

app.get("/:city/pharmacies", (req, res) => {
  const city = req.params.city;
  if (city === "harrow") {
    res.send(harrow.pharmacies);
  } else if (city === "stratford") {
    res.send(stratford);
  } else if (city === "heathrow") {
    res.send(heathrow.pharmacies);
  } else {
    res.send("no city found");
  }

  res.send(city.pharmacies);
});

app.get("/:city/colleges", (req, res) => {
  const city = req.params.city;
  if (city === "harrow") {
    res.send(harrow.colleges);
  } else if (city === "stratford") {
    res.send(stratford);
  } else if (city === "heathrow") {
    res.send(heathrow.colleges);
  } else {
    res.send("no city found");
  }

  res.send(city.colleges);
});

app.get("/:city/doctors", (req, res) => {
  const city = req.params.city;
  if (city === "harrow") {
    res.send(harrow.doctors);
  } else if (city === "stratford") {
    res.send(stratford);
  } else if (city === "heathrow") {
    res.send(heathrow.doctors);
  } else {
    res.send("no city found");
  }
  res.send(city.doctors);
});

app.get("/:city/hospitals", (req, res) => {
  const city = req.params.city;
  if (city === "harrow") {
    res.send(harrow.hospitals);
  } else if (city === "stratford") {
    res.send(stratford);
  } else if (city === "heathrow") {
    res.send(heathrow.hospitals);
  } else {
    res.send("no city found");
  }

  res.send(city.hospitals);
});

app.get("/:city/:category", (req, res) => {
  const city = req.params.city;
  const category = req.params.category;
  if (city === "harrow") {
    res.send(harrow[category]);
  } else if (city === "stratford") {
    res.send(stratford[category]);
  } else if (city === "heathrow") {
    res.send(heathrow[category]);
  } else {
    res.send("no city found");
  }

  res.send(city.hospitals);
});

const port = process.env.PORT || 3000 ;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
