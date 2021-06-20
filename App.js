function createheart() {
    const heart = document.createElement("div");
    heart.innerText = "💜";
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 5 + "s";

    setTimeout(() => {
        heart.remove();
    }, 5000);

    document.body.appendChild(heart);
}

setInterval(createheart, 300);