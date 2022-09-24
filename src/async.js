let timeout = setTimeout(()=>{console.log("timeout")},5000);
function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
    console.log("setTimeout");
  });
}

let res = async ()=> {
  try {
    await timeout(5000);
    console.log("object");
  } catch (err) {
    console.log(err);
  }
}
res();


function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
}

asyncPrint('hello world', 3000);


// `运行  yarn nodemon xx.js`