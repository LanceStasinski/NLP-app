//post user-entered data to server then pass the results to constructEntry()
async function postData(data) {
  try {
    await fetch("http://localhost:3030/add", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: data }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        myLibrary.constructEntry(response);
      });
  } catch (error) {
    console.log("error", error);
    alert("Oops, something went wrong.");
  }
}

export { postData };
