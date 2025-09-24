let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status == 200 || xhr.status === 201) {
      console.log("response text is ", xhr.responseText);
    } else {
      console.log(xhr.status);
    }
  }
};

// xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/2", true); this is for the get request

// this is for the post request and passing the data to the server

xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
let data = JSON.stringify({
  name: "mazid",
  rollNo: "123654",
  course: "Master Of Science",
});
xhr.send(data);

// delete request start from here

// let xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//     if (xhr.status === 200) {
//       console.log("DELETE successful, response:", xhr.responseText);
//     } else {
//       console.error("Request failed with status:", xhr.status);
//     }
//   }
// };

// xhr.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1", true);
// xhr.send();

// patch request start from here

// let xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//     if (xhr.status === 200) {
//       console.log("PATCH response:", xhr.responseText);
//     } else {
//       console.error("Request failed with status:", xhr.status);
//     }
//   }
// };

// xhr.open("PATCH", "https://jsonplaceholder.typicode.com/posts/1", true);
// xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

// let data = JSON.stringify({
//   title: "Updated title only",
// });

// xhr.send(data);
