function openGame() {
    var gameUrl = "https://rekoJay.github.io/my-webgl-game/";
    var newWindow = window.open(gameUrl, "_blank", "width=800,height=600");

    if (!newWindow) {
        alert("Popup blocked. Please allow popups and try again.");
    }
}
