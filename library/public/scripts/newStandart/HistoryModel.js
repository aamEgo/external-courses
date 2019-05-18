class HistoryModel extends EventEmitter {
    constructor(history, MAX_ELEMENTS) {
        super();
        this.history = history ? history : [];
        this.MAX_ELEMENTS = MAX_ELEMENTS;
        this.emit('changed', this.history);
    }

    addHistoryRow(historyElement) {
        historyElement.timeStamp = new Date().getTime();
        if (this.history.length >= this.MAX_ELEMENTS) {
            this.history.splice(-1, 1);
            this.emit('delete_last_element');
        }
        this.history.push(historyElement);
        this.emit('add_element', historyElement);
    }
}