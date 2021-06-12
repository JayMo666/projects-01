const events = require("events");
const emitter = new events.EventEmitter();
emitter.on("test2", function () {
  console.log(2222);
});
emitter.on("test", function () {
  console.log(111);
});

emitter.emit("test");
emitter.emit("test2");
console.log("aaaa");
