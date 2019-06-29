import * as mongoose from "mongoose";
import databaseConstants from "./constants/database.constants";

const db = async () => {
   mongoose.connect(databaseConstants.URL_CONNECTION, { useNewUrlParser: true }, err => {
      if (err) console.log(err);

      console.log("Connection =>", mongoose.connection.readyState);
   });
};

export default db;
