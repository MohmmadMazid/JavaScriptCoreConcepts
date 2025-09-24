async function deleteRequest() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({                     cant  do this in request of delete we have to pass the id into the url for deleting the data

      //     id: 1,
      //   }),
    });

    if (response.ok) {
      console.log("DELETE successful, status:", response.status);
    } else {
      console.error("DELETE failed with status:", response.status);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

deleteRequest();
