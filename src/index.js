function print(){
  console.log("Hello World!!!");
}

for(let i = 0; i < 3; i ++){
   print();
}

setTimeout(print, 2000);
console.log("同步代码end");
