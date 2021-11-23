let products_wrapper = document.querySelector('.product-list')
const product = document.querySelectorAll('.product')
let display_status = document.querySelector('.display-status')

const ongoing = document.querySelectorAll(".ongoing")
const finished = document.querySelectorAll(".finished")
const upcoming = document.querySelectorAll(".upcoming")

const ongoing_btn = document.querySelector("#ongoing_btn")
const finished_btn = document.querySelector("#finished_btn")
const upcoming_btn = document.querySelector("#upcoming_btn")
const all_tournaments = document.querySelector("#all_tournaments_btn")

let status_btns = [ongoing_btn, finished_btn, upcoming_btn, all_tournaments];


//filtring function
const filtred = (list) => {
    while (products_wrapper.firstChild) {
        products_wrapper.removeChild(products_wrapper.firstChild);
    }

    if (list == product) {
        list.forEach(child => {
            products_wrapper.appendChild(child)
        })
    } else {
        console.log(list)
        list.forEach(child => {
            products_wrapper.appendChild(child)
        })
    }
}

// status btns
status_btns.forEach((btn, i) => {
    let product_list;
    switch (i) {
        case 0:
            product_list = ongoing
            break;

        case 1:
            product_list = finished
            break;

        case 2:
            product_list = upcoming
            break;
        
        case 3:
            product_list = product
            break;
    }

    btn.addEventListener('click', () => {
        filtred(product_list)
        switch (i) {
            case 0:
                display_status.innerHTML = `Ongoing Tournaments`
                break;
    
            case 1:
                display_status.innerHTML = `Finished Tournaments`
                break;
    
            case 2:
                display_status.innerHTML = `Upcoming Tournaments`
                break;
            
            case 3:
                display_status.innerHTML = `All Tournaments`
                break;
        }
    })
})

// Drop down menu

let click = document.querySelector('.click');
let list = document.querySelector('.list');

click.addEventListener("click", () => {

    list.classList.toggle('newlist');

});