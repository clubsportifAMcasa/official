const seperators = document.querySelectorAll('.seperator')
let products_wrapper = document.querySelector('.product-list')
const product = document.querySelectorAll('.product')
let display_status = document.querySelector('.display-status')

const inners = document.querySelectorAll('.inner-card')
const front_cards = document.querySelectorAll('.front-card')
const back_cards = document.querySelectorAll('.back-card')

const close_btn = document.querySelector('.close')
const dark = document.querySelector('.dark')
const personnal_contact_container = document.querySelector('.personal-contact-container')
const buy_btns = document.querySelectorAll('.buy-product')

const product_imgs = document.querySelectorAll('.product_img')
const product_prices = document.querySelectorAll('.price')
const product_title = document.querySelectorAll('.product .description h3')

const one_stars = document.querySelectorAll(".one_stars")
const two_stars = document.querySelectorAll(".two_stars")
const three_stars = document.querySelectorAll(".three_stars")
const four_stars = document.querySelectorAll(".four_stars")
const five_stars = document.querySelectorAll(".five_stars")

const one_stars_btn = document.querySelector("#one_stars_btn")
const two_stars_btn = document.querySelector("#two_stars_btn")
const three_stars_btn = document.querySelector("#three_stars_btn")
const four_stars_btn = document.querySelector("#four_stars_btn")
const five_stars_btn = document.querySelector("#five_stars_btn")

const grid_btn = document.querySelector("#grid-btn")
const list_btn = document.querySelector("#list-btn")


let rating_btns = [one_stars_btn, two_stars_btn, three_stars_btn, four_stars_btn, five_stars_btn];


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


// grid - list Buttons
grid_btn.addEventListener('click', () => {
    products_wrapper.classList.remove('listed')
    seperators.forEach(element => {
        element.classList.remove('hide-sep')
    })
    front_cards.forEach(element => {
        element.classList.remove('product_listed')
    })
    product_prices.forEach(price => {
        price.classList.remove('price_listed')
    })
    product_title.forEach(title => {
        title.classList.remove('h3_listed')
    })
    inners.forEach(inner =>{
        inner.classList.add('flip-product')
    })
    back_cards.forEach(back_card =>{
        back_card.classList.remove('listed-back-card')
    })
    product_imgs.forEach(img =>{
        img.classList.remove('img_listed')
        img.classList.add('product_img')
    })
})

list_btn.addEventListener('click', () => {
    products_wrapper.classList.add('listed')
    seperators.forEach(element => {
        element.classList.add('hide-sep')
    })
    front_cards.forEach(element => {
        element.classList.add('product_listed')
    })
    product_prices.forEach(price => {
        price.classList.add('price_listed')
    })
    product_title.forEach(title => {
        title.classList.add('h3_listed')
    })
    inners.forEach(inner =>{
        inner.classList.remove('flip-product')
        inner.classList.add('flex')
    })
    back_cards.forEach(back_card =>{
        back_card.classList.add('listed-back-card')
    })
    product_imgs.forEach(img =>{
        img.classList.add('img_listed')
        img.classList.remove('product_img')
    })
})


buy_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        dark.classList.add('show')
        personnal_contact_container.classList.add('show')
    })
})

close_btn.addEventListener('click', () => {
    dark.classList.remove('show')
    personnal_contact_container.classList.remove('show')
})