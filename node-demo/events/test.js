async function async1() {
  console.log("async 1 start");
  await async2(); //undefined
  // await 的后面，都可以看做callback里面的内容，即异步
  console.log("async 1 end");
  await async3();
  console.log("async 1 end 2");
}
async function async2() {
  console.log("async 2");
}
async function async3() {
  console.log("async 3");
}
console.log("script start");
async1();
console.log("script end");
