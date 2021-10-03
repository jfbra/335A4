const getIcon = () => {
    const fetchPromise = fetch("http://localhost:5000/api/GetIcon");
    const streamPromise = fetchPromise.then((response) => response.text());
    streamPromise.then((data) => {
        document.getElementById("head").innerHTML += data;
    });
}

const getPieces = () => {
    const fetchPromise = fetch("http://localhost:5000/api/S");
    const streamPromise = fetchPromise.then((response) => response.text());
    streamPromise.then((data) => {
        let pieces = JSON.parse(data);
        pieces.forEach(displayPiss);
        document.getElementById("array").innerText = pieces;
    });
}

const displayPiss = (data) => {
    let htmlString = ""; 
    for (let i = 0; i < parseInt(data); i++) {
        if (i % 2 == 0) {
            htmlString += '<svg width="15" height="30"><use href="#sDrop" /></svg>';
        } else {
            htmlString += '<svg width="15" height="30" transform="rotate(180)"><use href="#sDrop" /></svg>';
        };
    };
    document.getElementById("pissTable").innerHTML += `<tr><td>${data}</td><td>${htmlString}</td></tr>`;
}

getIcon();
getPieces();