const accessKey = "7AE_nt5EiWcOiGIVF81bpamSkLx7qn6zWNmauNF6kPQ"

const formEl = document.querySelector("form")
const inputEl = document.getElementById("search-input")
const searchResult = document.querySelector(".search-results")
const showMore = document.getElementById("show-more-button")

let inputData = ""
let page = 1;

async function searchImage() {
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photo?page = ${page}&query=${inputData}&client_id=${accessKey}`

    const response = await fetch(url)
    const data = await response.json()

    const results = data.results

    if (page === 1) {
        searchResult.innerHTML = ""
    }
}


results.map((result) => {
    const imageWrapper = document.createElement('div')
    imageWrapper.classList.add('search-result')
    const image = document.createElement('img')
    image.src = result.url.small
    image.alt = result.alt_description
    const imageLink = document.createElement('a')


})

