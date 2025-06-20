/*
CONSEGNA
Milestone 1
Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)
Milestone 2
Utilizzando Postman, testiamo una chiamata a questo endpoint:
https://lanciweb.github.io/demo/api/pictures/
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.
Milestone 3
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
Font utilizzati:
titoli: ‘Edu Tas Beginner’, sans-serif; date: ‘Sometype Mono’, ‘monospace’; (Dovreste sapere a questo punto cosa e come prendere da Google Fonts…
Bonus
rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata
Note
Non siete obbligati a usare Bootstrap: siete liberi di decidere come gestire lo stile
*/

const imgApiUrl = 'https://lanciweb.github.io/demo/api/pictures/?id=6';
const imgContainerEl = document.getElementById('imgContainer');
const overlayEl = document.getElementById('overlay');
const closeBtnEl = document.getElementById('close-btn');
const modalImgEl = document.getElementById('modal-img');
// Variable for the current img index 
let currentImgIndex = 0;
// Variable created for save data inside a new array 
let imagesData = [];

fetch(imgApiUrl)
    .then(response => response.json())
    .then(data => {
        data.forEach((card) => {
            const { title, url, date } = card;
            const cardEl = document.createElement('div');
            cardEl.innerHTML = `<div class="card col-sm-12 col-md-6 col-lg-3">
                <div class="pin">
                <img src="./assets/img/pin.svg" alt="pin for image">
                </div>
                <div class="card-header">
                <img src=${url} alt=${title} class="card-image">
                </div>
                <div class="card-body">
                <p>${title}</p>
                <p>${date}</p>
                </div>
                </div>`;
            imgContainerEl.appendChild(cardEl);
            const cardImage = cardEl.querySelector('.card-image')
            // Event listener for show img modal
            cardEl.addEventListener('click', () => {
                showModalImg(modalImgEl, cardImage);
            });
        });
        //  Event listener for hide modal
        closeBtnEl.addEventListener('click', hideModal);
    });


// Functions
// Function show img modal
function showModalImg(nodeEl, image) {
    nodeEl.src = image.src;
    overlayEl.classList.remove('d-none');
};

// Function hide modal
function hideModal() {
    overlayEl.classList.add('d-none');
};