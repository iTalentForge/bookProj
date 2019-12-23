import seeder from "mongoose-seed";
import dotenv from "dotenv";
import data from "./data.json";

dotenv.config();

seeder.connect(process.env.MONGODB_URL, () => {
  seeder.loadModels([
    "src/models/fanfics"
  ]);

  seeder.clearModels(["fanfics"], () => {
    seeder.populateModels(data, () => {
      seeder.disconnect();
    });
  });
});
