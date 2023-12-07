
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


window.onload = function() {
    let divs = document.querySelectorAll('div');
    divs.forEach(function(div) {
        div.style.backgroundColor = getRandomColor();
    });
};
