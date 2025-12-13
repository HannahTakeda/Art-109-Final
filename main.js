var drag = false;
var elem = null;
var x = 0;
var y = 0;
var work = document.getElementById('workspace');
var pics = document.querySelectorAll('#picker img');

for(var i = 0; i < pics.length; i++) {
    pics[i].onclick = function() {
        var img = document.createElement('img');
        img.src = this.getAttribute('data-img');
        img.className = 'img';
        img.style.left = Math.random() * 500 + 'px';
        img.style.top = Math.random() * 300 + 'px';
        work.appendChild(img);
        
        img.onmousedown = function(e) {
            drag = true;
            elem = this;
            x = e.clientX - this.offsetLeft;
            y = e.clientY - this.offsetTop;
        }
    }
}

document.onmousemove = function(e) {
    if(drag && elem) {
        elem.style.left = e.clientX - x + 'px';
        elem.style.top = e.clientY - y + 'px';
    }
}

document.onmouseup = function() {
    drag = false;
    elem = null;
}