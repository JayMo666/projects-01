const EventEmitter = require("events").EventEmitter;
const emitter = new EventEmitter();

emitter.on("起床", function (time) {
  console.log(`早上 ${time} 开始起床，新的一天加油！`);
  //console.log(`关注公众号Nodejs技术栈，早上 ${time} 点开始起床阅读，从 Node.js 技术栈`);
});

emitter.emit("起床", "6:00");
