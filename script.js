document.addEventListener("DOMContentLoaded", () => {
    const questions = [
        "Can I expect a reply from you without waiting forever? 🕰️😆",
        "Are you sure? 🧐",
        "Really really sure? 🤨",
        "Hmm... Sounds fake but okay! 😏",
        "I feel like you’re lying! 😆",
        "Wait, are you serious or joking? 😂",
        "I don’t believe you! 😜",
        "Tell me the truth, Fucchi! 🥹",
        "No way, you mean it?! 😍",
        "You're just messing with me, right? 😝",
        "Fine, I’ll trust you... but just this once! 😏",
        "One last chance to say the truth! 😆",
        "Okay, okay, I believe you now! 🥰"
    ];
    
    let currentQuestion = 0;
    const questionElement = document.getElementById("question");
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const bgMusic = document.getElementById("bg-music");

    function playMusic() {
        bgMusic.play().catch(error => console.log("Autoplay blocked: Click to start music"));
    }

    function addPetal() {
        const petal = document.createElement("div");
        petal.classList.add("petal");
        petal.style.left = Math.random() * window.innerWidth + "px";
        petal.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(petal);

        setTimeout(() => petal.remove(), 5000);
    }

    function startPetalShower() {
        setInterval(addPetal, 200);
    }

    noBtn.addEventListener("click", () => {
        currentQuestion = (currentQuestion + 1) % questions.length;
        questionElement.innerText = questions[currentQuestion];
    });

    yesBtn.addEventListener("click", () => {
        questionElement.innerHTML = "I knew you'd say yes! 🥰 And I promise to always appreciate every reply from you… and not annoy you too much (maybe! 😆)";
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
    });

    document.addEventListener("click", playMusic, { once: true });
    startPetalShower();
});
