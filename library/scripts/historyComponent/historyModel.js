class HistoryModel extends EventEmitter {
    constructor(history, MAX_ELEMENTS) {
        super();
        this.history = history ? history : [];
        this.MAX_ELEMENTS = MAX_ELEMENTS;
        //this.emit('changed', this.historyComponent);
    }

    addHistoryRow(historyElement) {
        historyElement.timeStamp = new Date().getTime();
        if (this.history.length >= this.MAX_ELEMENTS) {
            this.history.pop();
            this.emit('delete_last_element');
        }
        this.history.unshift(historyElement);
        this.emit('add_element', historyElement);
    }
}