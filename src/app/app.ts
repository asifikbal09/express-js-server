import express from "express";
const app = express();
const port = 3000;

//parsers
app.use(express.json());
app.use(express.text());

app.get("/", (req, res) => res.send("Hello Developers!"));

app.post("/", (req, res) => {
  console.log(req.body);
  res.json({
    got:"i got a plan text"
  });
});

export default app;
