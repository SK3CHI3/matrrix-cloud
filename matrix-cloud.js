function randomText(){
    var text =("!@#$%^*()")
    letters = text[Math.floor(Math.random() * text.length)];
    return letters;
}

function rain() {
    let cloud = document.querySelector('.cloud');
    e.classlist.add('drop');
    cloud.appendChild(e);

    let left = Math.floor(Math.random() * 300)
    let size = Math.random() * 1.5;
    let duration = Math.random() *1;

    e.innerText = randomText();
    e.style.left = left + 'px';
    e.style.fontSize = 0.5+size +'em';
    e.style.animationDuration = 1+duration+'s';

        setTimeoout(function(){
            cloud.removeChild(e)
        },2000)
}
setInterval(function(){
    rain()
},20);