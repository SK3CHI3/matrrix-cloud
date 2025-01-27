// matrix-cloud.js
function randomText() {
    var text = "!@#$%^*()";
    return text[Math.floor(Math.random() * text.length)];
}

function rain() {
    let cloud = document.querySelector('.cloud');
    let e = document.createElement('span'); // Create a new element for the raindrop
    e.classList.add('drop'); // Add the 'drop' class
    e.innerText = randomText(); // Set random symbol
    e.style.left = Math.floor(Math.random() * window.innerWidth) + 'px'; // Random horizontal position
    e.style.fontSize = (0.5 + Math.random() * 1.5) + 'em'; // Random font size
    e.style.animationDuration = (1 + Math.random()) + 's'; // Random animation duration

    cloud.appendChild(e); // Add the raindrop to the cloud

    setTimeout(function() {
        cloud.removeChild(e); // Remove the raindrop after 2 seconds
    }, 2000);
}

setInterval(function() {
    rain();
}, 20);
