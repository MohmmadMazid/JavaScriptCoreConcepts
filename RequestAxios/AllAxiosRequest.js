import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// 1. GET Request
async function getRequest() {
  try {
    const response = await axios.get(BASE_URL);
    console.log("GET Response:", response.data.slice(0, 5)); // show only first 5
  } catch (error) {
    console.error("GET Error:", error.message);
  }
}

// 2. POST Request
async function postRequest() {
  try {
    const response = await axios.post(BASE_URL, {
      title: "foo",
      body: "bar",
      userId: 1,
    });
    console.log("POST Response:", response.data);
  } catch (error) {
    console.error("POST Error:", error.message);
  }
}

// 3. PUT Request (replace full data)
async function putRequest() {
  try {
    const response = await axios.put(`${BASE_URL}/1`, {
      id: 1,
      title: "updated title",
      body: "updated body",
      userId: 1,
    });
    console.log("PUT Response:", response.data);
  } catch (error) {
    console.error("PUT Error:", error.message);
  }
}

// 4. PATCH Request (update partial data)
async function patchRequest() {
  try {
    const response = await axios.patch(`${BASE_URL}/1`, {
      title: "patched title",
    });
    console.log("PATCH Response:", response.data);
  } catch (error) {
    console.error("PATCH Error:", error.message);
  }
}

// 5. DELETE Request
async function deleteRequest() {
  try {
    const response = await axios.delete(`${BASE_URL}/1`);
    console.log("DELETE Response Status:", response.status);
  } catch (error) {
    console.error("DELETE Error:", error.message);
  }
}

// Run all requests one by one
async function runAllRequests() {
  await getRequest();
  await postRequest();
  await putRequest();
  await patchRequest();
  await deleteRequest();
}

runAllRequests();
