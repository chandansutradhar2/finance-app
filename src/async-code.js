import { Observable } from "rxjs";
function fun1() {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      console.log("inside setInterval");
      resolve(Date.now());
      console.log("after resolve ");
    }, 2000);
  });
}

fun1().then((res) => {
  console.log(res);
});
