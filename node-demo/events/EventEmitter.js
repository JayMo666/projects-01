const EventEmitter = require("events");

function OneDayPlan() {
  EventEmitter.call(this);
}

Object.setPrototypeOf(OneDayPlan.prototype, EventEmitter.prototype);
Object.setPrototypeOf(OneDayPlan, EventEmitter);
const oneDayPlan = new OneDayPlan();

oneDayPlan.on("6:00", function () {
  console.log("now is 6:00");
});

oneDayPlan.on("7:00", function () {
  console.log("now is 7:00");
});

async function doMain() {
  oneDayPlan.emit("6:00");

  await sleep(2000); // 间隔 2 秒钟输出

  oneDayPlan.emit("7:00");
}

doMain();

async function sleep(s) {
  return new Promise(function (reslve) {
    setTimeout(function () {
      reslve(1);
    }, s);
  });
}
