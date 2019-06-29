import db from "./database";
import cluster from "./cluster";

const bootstrap = async () => {
   await db();
   await cluster();
};

bootstrap();
