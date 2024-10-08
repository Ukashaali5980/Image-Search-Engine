const accesskey = "_RpyTeMtysutQ3K6haHecTsfmRkAgBX57BkjHbPvhdA";
const searchForm = document.getElementById("search_form");
const searchBox = document.getElementById("search_box");
const searchResult = document.getElementById("search_result");
const showMoreBtn = document.getElementById("show_more_btn");


let Keyword = "";
let page = 1;

async function searchImages() {
    Keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${Keyword}&client_id=${accesskey}&per_page=12`;
    
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit" , (e)=>{
    e.preventDefault();
    page = 1;
    searchResult.innerHTML = "";
    searchImages();
});

showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();
})