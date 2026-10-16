let name = document.getElementById("Name");
let output = document.getElementById("output");
function upload() {
    fetch("/upload", {
        method: "POST",
        body: name.value
    })
    .catch((error) => alert("Error: " + error));
}

function showData() {
    fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
        output.innerText = data.names.join(", ");
    })
    .catch((error) => alert("Error: " + error));
}
