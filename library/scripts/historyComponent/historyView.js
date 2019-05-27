class HistoryView extends EventEmitter {
    constructor(model, historyElementHtml) {
        super();
        this._model = model;
        this._historyElementHtml = historyElementHtml;
        model.on('add_element', this.addNewElement.bind(this));
        model.on('delete_last_element', this.deleteLastElement.bind(this));

        setInterval(this.updateHistoryTimer.bind(this), 1000);
    }

    get model() {
        return this._model;
    }

    get historyElementHtml() {
        return this._historyElementHtml;
    }

    show() {
        this.model.history.forEach(element => {
            this.historyElementHtml.appendChild(this.createHistoryRow(element));
        })
    }

    updateHistoryTimer() {
        forEach(this.historyElementHtml.querySelectorAll('.prev-active__time'), element => {
            var time = element.getAttribute('data-timestamp');
            element.innerText = timeAgoFromTimestamp(time);
        });
    }

    addNewElement(newElement) {
        var newHtmlElement = this.createHistoryRow(newElement);
        prepend(this.historyElementHtml, newHtmlElement);
    }

    deleteLastElement() {
        this.historyElementHtml.removeChild(this.historyElementHtml.lastElementChild);
    }

    createHistoryRow(historyObj) {
        var result = document.createElement('li');
        var historyClock = document.createElement('i');
        historyClock.classList.add('far', 'fa-clock');
        result.appendChild(historyClock);
        var innerElement = document.createElement('span');
        innerElement.classList.add('prev-active__text');
        innerElement.innerHTML = this.textFromEvent(historyObj);
        innerElement.innerHTML += `<p data-timestamp="${historyObj.timeStamp}" class="prev-active__time">${timeAgoFromTimestamp(historyObj.timeStamp)}</p>`;
        result.appendChild(innerElement);
        return result;
    };

    textFromEvent(obj) {
        var event = obj.event;
        switch (event) {
            case 'added_book':
                return `You added new book <span class="prev-active__light">${obj.title}</span> by <span
                                class="prev-active__light">${obj.author}</span>`;
            case 'changed_search_string':
                if (obj.search_string == '')
                    return `You have cleared the search string`;
                return `You searched <span class="prev-active__light">${obj.search_string}</span>`;
            case 'changed_rating':
                return `You changed rating for a book <span class="prev-active__light">${obj.title}</span> by <span class="prev-active__light">${obj.author}</span> to <span class="prev-active__light">${obj.newRating}</span> stars`;
            case 'changed_category':
                return `You were looking for books from <span class="prev-active__light">${obj.category}</span> category`;

        }
    };
}