function upload() {
    const name = document.getElementById("Name").value;

    fetch("/upload", {
        method: "POST",
        body: name
    })
    .catch((error) => alert("Error: " + error));
}

function showData() {
    fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("output").innerText = data.names.join(", ");
    })
    .catch((error) => alert("Error: " + error));
}
