let btn = document.querySelector("#mybtn");
let div = document.querySelector(".maindiv");

console.log(btn, div);

// const successTogetLocation = function (location) {
const getlocation = function (location) {
  // console.log(location);
  // console.log(location.coords.latitude);
  // console.log(location.coords.longitude);
  let p = document.createElement("p");
  p.innerHTML = `<h3>latitude is</h3> <b> ${location.coords.latitude}</b>
                <h3>longitude is</h3> <b> ${location.coords.longitude}</b>`;

  div.appendChild(p);
};

// const failedtoGetLocation = function () {
const failedLocation = function () {
  let p = document.createElement("p");
  p.innerHTML =
    "we failed to get user location ,because user denied to give his/her location";
  div.appendChild(p);
};

btn.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(
    // successTogetLocation,sss
    getlocation,
    // failedtoGetLocation
    failedLocation
  );
});

console.log("hello world");
console.log(document.body);
