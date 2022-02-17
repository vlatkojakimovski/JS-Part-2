const _st_items = new WeakMap();

class Stack {
    constructor(...items) {
        _st_items.set(this, ...items)
    }

    push(item) {
        _st_items.get(this).push(item);
    }

    pop() {
        const items = _st_items.get(this);

        if (items.length === 0) 
            throw new Error('Stack is empty');

            return items.pop();
    }


    peek() {
        const items = _st_items.get(this);
        if(items.length === 0)
        throw new Error ('Stack is empty')

        return items[items.length - 1];
    }

    getItems() {
        return _st_items.get(this);

    }

    get count () {
        return _st_items.get(this).length;
    }
}

const st = new Stack([2, 3, 6]);


