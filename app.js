const accesKey = 'uUb1rxsL-y7XPor2jpDGvSi50DnIS--J0WYCNEXUCe0'

let searchForm = document.getElementById("row");
let input = document.getElementById("input");
// let searchBtn = document.getElementById("btn");
let searchResult = document.getElementById("images-result");
let showMore = document.getElementById("showmore");

let keyword = "";
let page  = 1;
async function searchImages() {
    console.log(input.value);
    keyword = input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
        searchResult.innerHTML = "";
    }

    const results = data.results;
    let imagesHTML = "";

    // showing images
    for (var i = 0; i < results.length; i++) {
        imagesHTML += `<img src=${results[i].urls.small} alt=""/>`;
    }

    // Append new images to the existing content
    searchResult.innerHTML += imagesHTML;

    showMore.style.display = "block";
}



searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page = 1
    searchImages()
});

showMore.addEventListener("click",()=>{
    page+=1;
    searchImages()
})



//this is original
    
    // results.map((result)=>{
    //     console.log(result,"DATA MAP")
    //     // const Image = document.createElement("img");
    //     // Image.src = result.urls.small;
    //     // const imageLink = document.createElement("a");
    //     // imageLink.href = result.links.html;
    //     // imageLink.target = "_blank";

    //     // imageLink.appendChild(Image);

    //     // searchResult.appendChild(imageLink)
    // })
