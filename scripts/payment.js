function goBack() {
    window.history.back();
}

const close_btn = document.querySelector('.close')
const submit_btn = document.querySelector('.submit-btn')
const verified_panel = document.querySelector('.verified-panel')
const dark = document.querySelector('.dark')


submit_btn.addEventListener('click', () => {
    verified_panel.classList.add('show')
    dark.classList.add('show')
})

close_btn.addEventListener('click', () => {
    verified_panel.classList.remove('show')
    dark.classList.remove('show')
})
