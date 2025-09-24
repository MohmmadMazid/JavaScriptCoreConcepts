async function postRequst() {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "mazid",
      rollNo: 123654,
      course: "Master Of Science",
    }),
  };
  let respose = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    options
  );
  let data = await respose.json();

  return data;
}

postRequst()
  .then((res) => {
    console.log(res, "data has been added to the database");
  })
  .catch((err) => {
    console.log(err, "something went wrong during api request");
  });
