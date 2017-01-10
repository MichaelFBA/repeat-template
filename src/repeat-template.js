// Polyfill
(function () {

  if ( typeof window.CustomEvent === "function" ) return false;

  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
})();

class RepeatTemplate extends HTMLElement {
    constructor() {
            super();
            this.template = this.querySelector('template');
        }
        // Listen to Repeat attribute
    static get observedAttributes() {
        return ['repeat'];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        //Called when an attribute is changed, appended, removed, or replaced on the element.
        if (attrName == "repeat" && newVal) {
            let parsedData = this.parseJson(newVal)
            if (parsedData) {
                this.render(parsedData);
            }
        }
    }

    parseJson(repeatData) {
        let parsedData = null;
        try {
            parsedData = JSON.parse(repeatData);
        } catch (e) {
            throw new Error("Invalid JSON string provided.");
        }
        return parsedData;
    }

    callCustomEvent(data, element, parentElement) {
        // create and dispatch the event
        var event = new CustomEvent("repeatTemplateEvent", {
            detail: {
                data: data,
                element: element
            }
        });
        parentElement.dispatchEvent(event);
    }

    render(parsedData) {
        let parentNode = this;
        let template = this.template;
        let emitEvent = this.callCustomEvent;

        //TODO optimise when changing data dynamically
        parentNode.innerHTML = '';

        parsedData.forEach(function(data) {
            //Duplicate Template
            let clone = document.importNode(template, true);
            //Emit Event
            emitEvent(data, clone.content, parentNode)
                //Append Child
            parentNode.appendChild(clone.content);
        });
    }
}
customElements.define('repeat-template', RepeatTemplate);
