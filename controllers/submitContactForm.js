const { ContactCollection } = require("../db/collections");

async function submitContactForm(req, res) {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      throw new Error("Name, email, or message is required.");
    }

    await ContactCollection.insertOne({ name, email, message }).then(() => {
      res.status(200).json({
        message: "Your message successfully sent to database.",
      });
    });
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = submitContactForm;
