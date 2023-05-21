document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn')
    const datepicker = new PowerDatepicker(btn);
    // console.log(datepicker)
    //
    // const onOpen = (event) => {
    //     console.log('Open outside', event)
    //     // throw new Error('Uuups')
    // }
    //
    // const onClickFromDate = (event) => {
    //     console.log('onClickFromDate outside', event)
    // }
    //
    // datepicker.addEventListener('clickfromdate', onClickFromDate)
    //
    // datepicker.addEventListener('opens', onOpen)
    // datepicker.addEventListener('open', onOpen)
    //
    // const onTimeupdate = (event) => {
    //     console.log('Timeupdate outside', event)
    // }
    //
    // datepicker.addEventListener('timeupdate', onTimeupdate);
    //
    // setTimeout(() => {
    //     datepicker.removeEventListener('open', onOpen)
    //     console.log('datepicker onOpen removed')
    // }, 5000)
})