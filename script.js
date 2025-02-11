// Funkcja dla przycisku "Yes", która może przekierować użytkownika na inną stronę lub wykonać jakąś akcję
function nextPage() {
    // Na przykład przekierowanie na inną stronę
    window.location.href = "https://www.facebook.com/royalkebab.przysucha/?locale=pl_PL"; // Tutaj wpisz URL strony, na którą chcesz przekierować
}

// Funkcja dla przycisku "No", która zmienia położenie przycisku
function moveButton() {
    // Pobierz przycisk "No"
    var noButton = document.getElementById("noButton");

    // Wymiary okna przeglądarki
    var maxWidth = window.innerWidth - noButton.offsetWidth;
    var maxHeight = window.innerHeight - noButton.offsetHeight;

    // Losowe położenie w obrębie dostępnego obszaru
    var randomX = Math.floor(Math.random() * maxWidth);
    var randomY = Math.floor(Math.random() * maxHeight);

    // Zmieniamy położenie przycisku
    noButton.style.position = 'absolute'; // Ustawiamy pozycję przycisku na absolutną
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}
