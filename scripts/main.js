const myHeading = document.querySelector('h1')
myHeading.textContent = 'Hello world!'


let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/crouch.webp') {
        myImage.setAttribute('src', 'images/new_crouch.jpg');
    } else {
        myImage.setAttribute('src', 'images/crouch.webp');
    }
}