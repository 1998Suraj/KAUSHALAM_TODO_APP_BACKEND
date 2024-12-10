const mongoose = require('mongoose');

const URI = "mongodb+srv://vakilraj26031997:Sx8egwe7ZrncGf9d@mydatabase.nunb2lw.mongodb.net/kaushalam";

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database is accessible and connected!"))
  .catch((err) => console.error("Database connection failed:", err));

module.exports = mongoose;
