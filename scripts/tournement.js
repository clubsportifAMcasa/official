let news = document.querySelector(".news");
let scores = document.querySelector(".scores");
let fixtures = document.querySelector(".fixtures");
let brackets = document.querySelector(".brackets");
let gol = document.querySelector(".gol");
let main = document.querySelector(".MAIN_WRAPPER");

let news_btn = document.querySelector(".news_btn");
let scores_btn = document.querySelector(".scores_btn");
let fixtures_btn = document.querySelector(".fixtures_btn");
let brackets_btn = document.querySelector(".brackets_btn");
let gol_btn = document.querySelector(".gol_btn");


let dicti = [
    {
        "btn":news_btn,
        "content":news
    },
    {
        "btn":scores_btn,
        "content":scores
    },
    {
        "btn":fixtures_btn,
        "content":fixtures
    },
    {
        "btn":brackets_btn,
        "content":brackets
    },
    {
        "btn":gol_btn,
        "content":gol
    }
]

const destroy = (elemt) =>{
    while (elemt.firstChild) {
        elemt.removeChild(elemt.firstChild);
    }
}

const append = (holder, list) =>{
    console.log(list);
    holder.appendChild(list)
}

dicti.forEach(button =>{
    button["btn"].addEventListener('click', () => {
        destroy(main);
        append(main, button["content"]);
    })
})
