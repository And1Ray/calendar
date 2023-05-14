## PowerDatepicker

This is a calendar that is easy to work with.

To connect, take our bundle and instantiate it in your code by passing the instance id of the tag on which we will perform a click.

## Installation
To install PowerDatepicker in your project, simply add the following script tag to your HTML file:

```html
<script type="module" src="path/bundle.js"></script>
```

Then, instantiate PowerDatepicker as shown in the example above.

```javascript
const btn = document.getElementById('btn')
const datepicker = new PowerDatepicker(btn);
```

### Example of event processing:
```javascript
const onOpen = (event) => {
    console.log('Open outside', event)
}
datepicker.addEventListener('open', onOpen)
datepicker.removeEventListener('open', onOpen)
```

### List of events that can be handled:

**open** - triggered when the calendar is opened

**close** - triggered when the calendar is closed (the calendar is also closed when clicking outside the area)

**timeupdate** - triggered every second on table content update

**eventupdatetablecontent** - triggered when table content is updated

### Additions:

Fonts are embedded in base64 in the calendar and will automatically be added to the page without additional requests.

This is an alpha version of the project, expect improvements, such as the ability to customize styles based on the received config. Also, events on dates are being developed and the ability to set the required date, which will allow you to send and receive notes on selected dates, etc.



Note: that this is an alpha version of the project, so there may be bugs and limitations. We welcome your feedback and contributions!