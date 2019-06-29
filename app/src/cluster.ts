import * as cluster from "cluster";
import { cpus } from "os";
import server from "./server";
import clusterConstants from "./constants/cluster.constants";

const start = async () => {
   // try {
   //    const numCPUs = cpus().length;

   //    if (cluster.isMaster) {
   //       for (let index = 0; index < numCPUs; index++) {
   //          cluster.fork();
   //       }

   //       cluster.on(clusterConstants.EXIT, (worker, code, signal) => {
   //          console.log(clusterConstants.WORKER_OFF, worker.process.id, code, signal);
   //          console.log(clusterConstants.WORKER_START);

   //          cluster.fork();
   //       });
   //    } else {
   //       server();
   //       console.log(clusterConstants.SERVER_RUNNING);
   //    }
   // } catch (erro) {
   //    console.error(clusterConstants.SERVER_ERROR, erro.message);

   //    throw erro;
   // }
   server();
};

export default start;
