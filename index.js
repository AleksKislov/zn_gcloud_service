const app = require("express")();
const axios = require("axios");
const auth = require("./middleware/auth");
require("dotenv").config();

const { SPECIAL_TOKEN } = process.env;
const authGet = auth(true);

app.get("/reset", authGet, async (req, res) => {
  try {
    await axios.post();

    res.status(200).send("Success");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

const PORT = process.env.PORT || 6060;
app.listen(PORT, () => console.log(`App is up on port ${PORT}`));
