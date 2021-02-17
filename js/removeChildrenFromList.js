/* Remove all child nodes from a collection of DOM elements
const removeChildfrenFromCollection = () => {
const list = document.querySelectorAll("li a.l5bg + ul");
list.forEach(l => {
    while(l.hasChildNodes()) {
        l.removeChild(l.firstChild);
    }
})
