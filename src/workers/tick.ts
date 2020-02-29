// import { parentPort, workerData } from "worker_threads";
import { expose } from "threads";

// const { parentPort, workerData } = require("worker_threads");

// const path = require("path");
// const { workerData, parentPort } = require("worker_threads");

// require("ts-node").register();
// require(path.resolve(__dirname, workerData.path));

expose(function tick(time) {
  const startTime = new Date().getTime();
  // console.log(time);
  while (true) {
    const nextTick = new Date().getTime() - startTime;

    if (nextTick >= time) {
      return time;
      // break;
    }
  }
});
// console.table(workerData);
// tick(workerData.value);
