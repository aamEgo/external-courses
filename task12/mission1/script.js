function prepend(container, newElement) {
    container.insertBefore(newElement, container.firstChild);
}

function htmlToElement(html) {
    var template = document.createElement('div');
    html = html.trim();
    template.innerHTML = html;
    return template.firstChild;
}

window.onload = () => {
    var prependPressed = 0;

    document.querySelector('#prependButton').addEventListener('click', () => {
        prependPressed++;
        prepend(document.querySelector('#container'), htmlToElement('<div>prepend working - ' + prependPressed + '</div>'));
    });
}