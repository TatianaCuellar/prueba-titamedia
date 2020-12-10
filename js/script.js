function toggleMainMobile() {
    let classActiveContent = document.querySelector('.content-items');
    classActiveContent.classList.toggle("mobile")
    let classActiveUl = document.querySelector('.content-items ul');
    let classActiveToggle = document.querySelector('.content-items .toggle-mobile');

    classActiveUl.classList.toggle("active");
    classActiveToggle.classList.toggle("active");
}

function blockColumns() {
    let classActiveGrid = document.querySelector('.content-images .grid-images');
    classActiveGrid.classList.toggle("activecolumns");
}

let request = new XMLHttpRequest();
request.open("GET", "js/data.json");

request.onreadystatechange = function () {
    if (this.readyState === request.DONE && this.status === 200) {
        let my_JSON_object = JSON.parse(this.responseText);
        media(my_JSON_object);
    }
}
request.send();


function media(response) {
    const contentMedia = document.querySelector('.grid-images');
    for (let data of response.media) {
        const contentItem = document.createElement('div');
        contentItem.setAttribute('class', 'item');
        const newElement = document.createElement('img');
        newElement.setAttribute('src', data['image'])
        contentItem.appendChild(newElement);
        contentMedia.appendChild(contentItem);
    }

    const second = document.querySelectorAll('.grid-images .item');
    const qty = second.length;
    for (let i = 0; i < qty; i++) {
        if (i === i++) {
            second[i].classList.toggle('opt-2');
        }
    }


}
