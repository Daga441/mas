function nextPage() {
  
    window.location.href = "https://www.instagram.com/calitacos.pl/"; 
}


function moveButton() {
 
    var noButton = document.getElementById("noButton");

    var maxWidth = window.innerWidth - noButton.offsetWidth;
    var maxHeight = window.innerHeight - noButton.offsetHeight;

  
    var randomX = Math.floor(Math.random() * maxWidth);
    var randomY = Math.floor(Math.random() * maxHeight);

    noButton.style.position = 'absolute'; 
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}

