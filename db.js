const mongoose = require("mongoose");

// @ is not allowed → converted to %40
const dbUrl = "mongodb+srv://navpreetsinghcse:Navkajalcse@techdb.xwk7lbd.mongodb.net/classroom?retryWrites=true&w=majority&appName=TechDB";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);

    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("🔥 MongoDB Connected Successfully (Render)");
  } catch (error) {
    console.log("❌ MongoDB Connection Failed");
    console.log(error);
  }
};

module.exports = connectToMongo;
