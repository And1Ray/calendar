document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn')
    const datepicker = new Datepicker(btn);
    console.log(datepicker)

    const h1 = document.getElementById('title')
    const datepickerTitle = new Datepicker(h1);
    console.log(datepickerTitle)
})