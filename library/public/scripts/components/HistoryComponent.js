function HistoryComponent(historyHtmlElement, prevHistory) {
    var prevHistory = prevHistory ? prevHistory : [];
    var maxHistoryList = 3;

    //UpdateHistoryTiming
    setInterval(() => {
        forEach(historyHtmlElement.querySelectorAll('.prev-active__time'), element => {
            var time = element.getAttribute('data-timestamp');
            element.innerText = timeAgoFromTimestamp(time);
        });
    }, 1000);

    var textFromEvent = function (obj) {
        var event = obj.event;
        switch (event) {
            case 'user_added_book':
                return `You added <span class="prev-active__light">${obj.title}</span> by <span
                                class="prev-active__light">${obj.author}</span>`;
            case 'changed_searchString':
                return `You searched <span class="prev-active__light">${obj.search_string}</span>`;
            case 'changed_rating':
                return `You changed rating for a book <span class="prev-active__light">${obj.title}</span> by <span class="prev-active__light">${obj.author}</span> to <span class="prev-active__light">${obj.newRating}</span> stars`;
            case 'changed_category':
                return `You were looking for books from <span class="prev-active__light">${obj.category}</span> category`;

        }
    };
    var createHistoryRow = function (innerHtml, timeStamp) {
        var result = document.createElement('li');
        var historyClock = document.createElement('i');
        historyClock.classList.add('far', 'fa-clock');
        result.appendChild(historyClock);
        var innerElement = document.createElement('span');
        innerElement.classList.add('prev-active__text');
        innerElement.innerHTML = innerHtml;
        innerElement.innerHTML += `<p data-timestamp="${timeStamp}" class="prev-active__time">${timeAgoFromTimestamp(timeStamp)}</p>`;
        result.appendChild(innerElement);
        return result;
    };
    var renderHistoryElement = function (historyElement) {
        var historyHtmlString = textFromEvent(historyElement);
        prepend(historyHtmlElement, createHistoryRow(historyHtmlString, historyElement.timeStamp));
    };
    return {
        addHistoryEvent: function (event, obj) {
            var newHistoryEvent = obj;
            Object.assign(newHistoryEvent, obj);
            newHistoryEvent.timeStamp = new Date().getTime();
            newHistoryEvent.event = event;
            if (prevHistory.length >= maxHistoryList) {
                prevHistory.splice(-1, 1);
                historyHtmlElement.removeChild(historyHtmlElement.lastChild);
            }
            prevHistory.unshift(newHistoryEvent);
            renderHistoryElement(newHistoryEvent);
        }
    }
}