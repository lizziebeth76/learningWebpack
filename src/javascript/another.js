function sayHello(){
    let header = document.querySelector("#greeting");
    let hello = ("<h1> hello MY world </h1>");
    header.innerHTML = hello;
  }
   
  sayHello();
  module.exports = sayHello();