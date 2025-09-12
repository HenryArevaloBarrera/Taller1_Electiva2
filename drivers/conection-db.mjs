import mongoose from "mongoose";

const URL = "mongodb+srv://Henry:Aa12345678@cluster0.lm4vhrm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(URL)
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch(err => console.error("❌ Error al conectar:", err));
