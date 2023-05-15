const searchEl = document.getElementById("searchInput");
const form = document.querySelector(".form-wrapper");
const buttonWrap = document.querySelector(".button-wrap");
const searchBtn = document.querySelector(".searchBtn");
const clearBtn = document.querySelector(".clearBtn");
const imageListWrapper = document.querySelector(".image-list")
const card = document.querySelector(".card")

runEventLisner();


function runEventLisner(){
    form.addEventListener("submit" , search)
    clearBtn.addEventListener("click", deleteUI)

}

function search(e){
    const value = searchEl.value.trim();

    const url = `https://api.unsplash.com/search/photos?query=${value}`
    fetch(url,{
        method : "GET",
        headers: {
            Authorization: "" //! Your Access Key
        }
    })
    .then(res => res.json())
    .then(data => {
        Array.from(data.results).forEach((img) => addImageToUI(img.urls.regular))
    })
    .catch(err => console.log(err));

    e.preventDefault();
}

function addImageToUI(url){
    let html = "";

    html += `<div class="card">
                <img id="images" src="${url}" alt="">
            </div>`
    imageListWrapper.insertAdjacentHTML("afterbegin",html)
}

function deleteUI(){
    searchEl.value = "";
    imageListWrapper.innerHTML = "";
}