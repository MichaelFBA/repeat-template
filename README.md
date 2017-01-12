


# Repeat Template
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://beta.webcomponents.org/element/MichaelFBA/repeat-template)

It does what it says on the wrapper. It repeats elements inside the template element.
We pass **data in** via standard html attributes and listen to **custom events out**.

## Usage
- Pass in an stringified array of objects via a **repeat** attribute.
- repeat-template will send out a number of custom events (correlating to the length of the array data you passed in)
- Set up a custom event listener, it will contain an object with a reference to the duplicated `element` and `data` which you can then inject into the element where ever you want

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="src/repeat-template.html">
  </template>
</custom-element-demo>
```
-->
```html
<repeat-template id="repeater">
    <template>
        <h1>Name</h1>
        <img src="http://placehold.it/50x50">
    </template>
</repeat-template>
```

```js
<script>
// Dummy Data
var data = [
    {
        name: "Ernst Haeckel",
        profilePicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Ernst_Haeckel_1860.jpg/220px-Ernst_Haeckel_1860.jpg"
    },
    {
        name: "Lazar Markovich Lissitzky",
        profilePicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/El_Lissitzky_-_1o_Kestnermappe_Proun_%28Proun._1st_Kestner_Portfolio%29_-_Google_Art_Project.jpg/220px-El_Lissitzky_-_1o_Kestnermappe_Proun_%28Proun._1st_Kestner_Portfolio%29_-_Google_Art_Project.jpg"
    }
];
// Add ID or Class to element so it can be targeted
var repeaterEl = document.getElementById('repeater');

// Listen to Custom Event that will broadcast each cloned element and its associated data.
// You can then modify the stamped element before it is inserted into the DOM
repeaterEl.addEventListener('repeatTemplateEvent', function(e){
    var duplicatedElement = e.detail.element;
    var data = e.detail.data;

    // Do you modifications
    duplicatedElement.querySelector('h1').innerHTML = data.name;
    duplicatedElement.querySelector('img').setAttribute('src', data.profilePicture);
})

// Dynamically Add the data to the element via JS
repeaterEl.setAttribute('repeat', JSON.stringify(data));
</script>
```

## Browser Support (With polyfills)
Simply include [Webcomponent-lite](https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.23/webcomponents-lite.min.js)  


| Polyfill   | IE10 | IE11+ | Chrome* | Firefox* | Safari 7+* | Chrome Android* | Mobile Safari* |
| ---------- |:----:|:-----:|:-------:|:--------:|:----------:|:---------------:|:--------------:|
| Custom Elements | ~ | ✓ | ✓ | ✓ | ✓ | ✓| ✓ |
| HTML Imports | ~ | ✓ | ✓ | ✓ | ✓| ✓| ✓ |
| Templates | ✓ | ✓ | ✓ | ✓| ✓ | ✓ | ✓ |

*Indicates the current version of the browser

~Indicates support may be flaky. If using Custom Elements or HTML Imports with Shadow DOM, you will get the non-flaky Mutation Observer polyfill that Shadow DOM includes.

## Tests
TODO

## Size
2.23kb Minifed

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

`1.0.0` - Beta version working in Chrome

## License

#### MIT
Copyright 2017 Michael Bell

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
