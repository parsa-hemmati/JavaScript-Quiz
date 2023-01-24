
var list = document.getElementById("highscores");

for (let i = 0; i < localStorage.length; i++) {
    var data = JSON.parse(localStorage.getItem(localStorage.key(i)));
    var item = document.createElement('li');
    item.innerHTML = localStorage.key(i) + " has scored " + localStorage.key(i).data;
    list.appendChild(item);

}
