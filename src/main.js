document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn')
    const datepicker = new PowerDatepicker(btn);
    console.log(datepicker)

    const h1 = document.getElementById('title')
    const datepickerTitle = new PowerDatepicker(h1);
    console.log(datepickerTitle)

    const onOpen = (event) => {
        console.log('Open outside', event)
        throw new Error('Uuups')
    }

    datepicker.addEventListener('opens', onOpen)
    datepicker.addEventListener('open', onOpen)

    // setTimeout(() => {
    //     datepicker.removeEventListener('open', onOpen)
    //     console.log('datepicker onOpen removed')
    // }, 5000)
})