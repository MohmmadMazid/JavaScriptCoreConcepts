async function patchRequest() {
  let options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "title of the content is upated",
    }),
  };
  let response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/10",
    options
  );

  console.log(response.status);
  if (response.status === 200) {
    console.log("data is updated successfully");
  }
  if (
    response.status === 404 ||
    response.status == 400 ||
    response.status === 401
  ) {
    console.log("data is not updated because something went wrong  ");
  }
}

patchRequest();
