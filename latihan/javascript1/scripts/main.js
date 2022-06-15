var myButton = document.querySelector('button');

var myHeading = document.querySelector('h1');
myHeading.innerHTML = "hello world!";

var myImage = document.querySelector('img');
myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src','images/logo.png');
    } else{
        myImage.setAttribute('src','images/firefox-icon.png');
    }
}

function setUserName(){
    var myName = prompt("Please Enter Your Name.");
    localStorage.setItem('name', myName);
    myHeading.innerHTML = "Mozilla is Cool, " + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else{
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = "Mozilla is Cool, " + storedName;
}

myButton.onclick = function(){
    setUserName();
}