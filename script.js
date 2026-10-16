function upload() {
    const name = document.getElementById("Name").value;

    fetch("/upload", {
        method: "POST",
        body: name
    });
}