let div1 = document.getElementById("div-1");
let div2 = document.getElementById("div-2");
let div3 = document.getElementById("div-3");
let div4 = document.getElementById("div-4");
let div5 = document.getElementById("div-5");

let flag1 = true;
let flag2 = true;
let flag3 = true;
let flag4 = true;

function myFunc1() {
  if (flag1) {
    div1.style.zIndex = "1";
    div5.style.zIndex = "0";
    flag1 = false;
  } else {
    div1.style.zIndex = "0";
    div5.style.zIndex = "1";
    flag1 = true;
  }
}
function myFunc2() {
  if (flag2) {
    div2.style.zIndex = "1";
    div5.style.zIndex = "0";
    flag2 = false;
  } else {
    div2.style.zIndex = "0";
    div5.style.zIndex = "1";
    flag2 = true;
  }
}
function myFunc3() {
  if (flag3) {
    div3.style.zIndex = "1";
    div5.style.zIndex = "0";
    flag3 = false;
  } else {
    div3.style.zIndex = "0";
    div5.style.zIndex = "1";
    flag3 = true;
  }
}
function myFunc4() {
  if (flag4) {
    div4.style.zIndex = "1";
    div5.style.zIndex = "0";
    flag4 = false;
  } else {
    div4.style.zIndex = "0";
    div5.style.zIndex = "1";
    flag4 = true;
  }
}
function myFunc5() {
  div5.style.zIndex = "1";
  div1.style.zIndex = "0";
  div2.style.zIndex = "0";
  div3.style.zIndex = "0";
  div4.style.zIndex = "0";
}
