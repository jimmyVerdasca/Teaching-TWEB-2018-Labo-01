
function follow() {
    element = document.getElementsByClassName("increment-field");
    var i = parseInt(element[0].textContent);
    i = i + 1;
    element[0].innerHTML = i.toString();
}