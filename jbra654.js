const getPieces = () => {
    const secretPieces = fetch("http://localhost:5000/api/S");
    const streamPromise = secretPieces.then((response) => response.text());
    streamPromise.then((data) => { document.getElementById("secretPieces").innerText = data; });
}

const getIcon = () => {
    const fetchPromise = fetch("http://localhost:5000/api/GetIcon");
    const streamPromise = fetchPromise.then((response) => response.text());
    streamPromise.then((data) => { document.getElementById("head").innerHTML += data; });
}

getPieces();
getIcon();

