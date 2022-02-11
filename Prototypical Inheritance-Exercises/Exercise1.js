function HtmlElement () {
    this.click = function() {
        console.log('clicked');
    }
}

HtmlElement.prototype.focus = function () {
    console.log('Focused');
}

function HtmlSelectElement (...items) {
    this.arrItems = [...items];

    this.addItem = function (item) {
        this.arrItems.push(item);
    }

    this.removeItem = function (item) {
        this.arrItems.splice(this.arrItems.indexOf(item),1);
    }

    this.render = function () {
        return `
        <select> ${this.arrItems.map(item => `
            <option> ${item} </option>`).join('')}
        </select> ` ;
    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
    this.src = src;

    this.render = function() {
        return `<img src="${this.src}" />`
    }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement();

const ss = new HtmlSelectElement([1,2,3,4,5]);