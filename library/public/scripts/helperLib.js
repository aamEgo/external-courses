function prepend(container, newElement) {
    container.insertBefore(newElement, container.firstChild);
}

var myDebounce = function () {
    var lastTimer;
    return (cb, delay) => {
        clearTimeout(lastTimer);
        lastTimer = setTimeout(cb, delay);
    }
}();

function myFetchGet(url, options) {
    return new Promise(function (resolve, reject) {
        options = options ? options : {};
        options.method = options.method ? options.method : 'GET';
        options.params = options.params ? options.params : [];

        var xhr = new XMLHttpRequest();
        xhr.open(options.method, url, true);
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState == 4) {
                if (xhr.status < 400) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.statusText);
                }
            }
        };
        xhr.onerror = function (e) {
            reject(xhr.statusText);
        };
        xhr.send();
    });
}

function removeAttribute(element, attribute) {
    if (element.getAttribute(attribute) != null)
        element.removeAttribute(attribute);
}

function timeAgoFromTimestamp(timeFrom) {
    return timeDifference(new Date().getTime(), timeFrom);
}


class EventEmitter {
    constructor() {
        this._events = {};
    }

    on(evt, listener) {
        (this._events[evt] || (this._events[evt] = [])).push(listener);
        return this;
    }

    emit(evt, ...arg) {
        (this._events[evt] || []).slice().forEach(lsn => lsn(...arg));
    }
}

//

function formToJSON( elem ) {
    let output = {};
    new FormData( elem ).forEach(
        ( value, key ) => {
            // Check if property already exist
            if ( Object.prototype.hasOwnProperty.call( output, key ) ) {
                let current = output[ key ];
                if ( !Array.isArray( current ) ) {
                    // If it not an array, convert it to an array.
                    current = output[ key ] = [ current ];
                }
                current.push( value ); // Add the new value to the array.
            } else {
                output[ key ] = value;
            }
        }
    );
    return output;
}

var forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
        callback.call(scope, array[i], i); // passes back stuff we need
    }
};

function timeDifference(current, previous) {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
        return Math.round(elapsed / 1000) + ' seconds ago';
    }

    else if (elapsed < msPerHour) {
        return Math.round(elapsed / msPerMinute) + ' minutes ago';
    }

    else if (elapsed < msPerDay) {
        return Math.round(elapsed / msPerHour) + ' hours ago';
    }

    else if (elapsed < msPerMonth) {
        return 'approximately ' + Math.round(elapsed / msPerDay) + ' days ago';
    }

    else if (elapsed < msPerYear) {
        return 'approximately ' + Math.round(elapsed / msPerMonth) + ' months ago';
    }

    else {
        return 'approximately ' + Math.round(elapsed / msPerYear) + ' years ago';
    }
}

var TimeAgo = (function () {
    var self = {};

    // Public Methods
    self.locales = {
        prefix: '',
        sufix: 'ago',

        seconds: 'less than a minute',
        minute: 'about a minute',
        minutes: '%d minutes',
        hour: 'about an hour',
        hours: 'about %d hours',
        day: 'a day',
        days: '%d days',
        month: 'about a month',
        months: '%d months',
        year: 'about a year',
        years: '%d years'
    };

    self.inWords = function (timeAgo) {
        var seconds = Math.floor((new Date() - parseInt(timeAgo)) / 1000),
            separator = this.locales.separator || ' ',
            words = this.locales.prefix + separator,
            interval = 0,
            intervals = {
                year: seconds / 31536000,
                month: seconds / 2592000,
                day: seconds / 86400,
                hour: seconds / 3600,
                minute: seconds / 60
            };

        var distance = this.locales.seconds;

        for (var key in intervals) {
            interval = Math.floor(intervals[key]);

            if (interval > 1) {
                distance = this.locales[key + 's'];
                break;
            } else if (interval === 1) {
                distance = this.locales[key];
                break;
            }
        }

        distance = distance.replace(/%d/i, interval);
        words += distance + separator + this.locales.sufix;

        return words.trim();
    };

    return self;
}());