/*
 
 

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error("Request failed: " + xhr.status);
    }
  }
};
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/2", true);
xhr.send();



// POST request with JSON
let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 201 || xhr.status === 200) {
      console.log("Response:", xhr.responseText);
    } else {
      console.error("Request failed: " + xhr.status);
    }
  }
};

xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

let data = JSON.stringify({
  title: "foo",
  body: "bar",
  userId: 1,
});

xhr.send(data);


*/

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 201 || xhr.status === 200) {
      console.log("Response:", xhr.responseText);
    } else {
      console.error("Request failed: " + xhr.status);
    }
  }
};

xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
xhr.setRequestHeader(
  "Content-Type",
  "application/x-www-form-urlencoded ;charset=UTF-8"
);

let formData = "title=foo&body=bar&userId=1";
xhr.send(formData);
