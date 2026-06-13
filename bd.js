//Password check function//
let attempts = 0;
let floatingInterval = null;

function checkPassword() {
    const password = document.getElementById("password").value;
    const correctPassword = "twenty";

    if (password === correctPassword) {

        document.getElementById("birthdayContent").style.display = "block";
        document.getElementById("error").textContent = "";
        document.getElementById("clue").textContent = "";

        if (!floatingInterval) {
            startFloatingEffects();
        }

        attempts = 0;

    } else {

        attempts++;
        document.getElementById("error").textContent =
            "Incorrect password!";

        if (attempts === 1) {
            document.getElementById("clue").textContent =
                "💡1st Clue: Add today's date😝.";
        } else if (attempts === 2) {
            document.getElementById("clue").textContent =
                "💡2nd Clue: 13/6/2006 = 👀 (Don't think too hard)";
        } else {
            document.getElementById("clue").textContent =
                "💡3rd Clue: Unc! 😔 (Hint: It's a word, not a number)";
        }
    }
}

openImage("youngage.jpg")

function startFloatingEffects() {
    const container = document.getElementById("bubble-container");

    floatingInterval = setInterval(() => {

        const isStar = Math.random() > 0.5;

        if (isStar) {

            const star = document.createElement("div");
            star.classList.add("star");

            const stars = ["✨", "🫧", "🎀"];
            star.textContent =
                stars[Math.floor(Math.random() * stars.length)];

            star.style.left = Math.random() * 100 + "vw";
            star.style.fontSize =
                (Math.random() * 20 + 15) + "px";

            star.style.animationDuration =
                (Math.random() * 4 + 5) + "s";

            container.appendChild(star);

            star.addEventListener("animationend", () => {
                star.remove();
            });

        } else {

            const bubble = document.createElement("div");
            bubble.classList.add("bubble");

            const size = Math.random() * 35 + 15;

            const colors = [
                "#40e0d0",
                "#003366",
                "#e3085cff",
                "#dc1414ff",
                "#36013f",
                "#ffffff"
            ];

            bubble.style.width = size + "px";
            bubble.style.height = size + "px";
            bubble.style.left = Math.random() * 100 + "vw";
            bubble.style.background =
                colors[Math.floor(Math.random() * colors.length)];

            bubble.style.animationDuration =
                (Math.random() * 4 + 4) + "s";

            container.appendChild(bubble);

            bubble.addEventListener("animationend", () => {
                bubble.remove();
            });
        }

    }, 250);
}

const letterText = ` 
I'm not very good with words but I tried my best to express how much you mean to me in my own way. I thought about writing a long essay on how much I value you and youre friendship but I felt like this way felt right.

You know its funny that we've only known each other for a year, but it feels like we've been friends forever. As we continue growing together I hope we can continue to understand each other better, throught the good and bad times. I look forward to what's gonna happen ahead because I know that you would always have my back as I do with yours.🙃

Happy 20th birthday🫶🏾!

joyeux 20e anniversaire
Feliz 20 cumpleaños
furaha ya miaka 20 ya kuzaliwa
20번째 생일 축하해
20歳の誕生日おめでとう

P.S. I thank Romeo for the cute baby pictures😝
`;

function startTypewriter() {

    const element =
        document.getElementById("typewriter-text");

    element.textContent = "";

    let i = 0;

    const speed = 40;

    function type() {

        if (i < letterText.length) {

            element.textContent +=
                letterText.charAt(i);

            i++;

            setTimeout(type, 50);
        }
    }

    type();
}

function openLetter() {

    document.getElementById("letter-container")
        .style.display = "block";

    document.getElementById("envelope")
        .style.display = "none";

    document.getElementById("typewriter-text")
        .textContent = "TESTING...";
}

function openLetter() {

    burstPetals();

    document.getElementById(
        "letter-container"
    ).style.display = "block";

    document.getElementById(
        "envelope"
    ).style.display = "none";

    startTypewriter();
}

function startTypewriter() {

    const target =
        document.getElementById("typewriter");

    target.textContent = "";

    let i = 0;

    function type() {

        if(i < letterText.length){

            target.textContent +=
                letterText.charAt(i);

            i++;

            setTimeout(type, 40);
        }
    }

    type();
}

function burstPetals() {

    const container =
        document.getElementById(
            "petal-container"
        );

    for(let i = 0; i < 50; i++) {

        const petal =
            document.createElement("div");

        petal.className = "petal";

        petal.textContent = ["🌸","🌺","🎀"];

        petal.style.left = "50%";
        petal.style.top = "50%";

        container.appendChild(petal);

        const x =
            (Math.random() * 800) - 400;

        const y =
            (Math.random() * 800) - 400;

        petal.animate(
            [
                {
                    transform:
                        "translate(0,0)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(${x}px,${y}px)`,
                    opacity: 0
                }
            ],
            {
                duration: 3000
            }
        );

        setTimeout(() => {
            petal.remove();
        }, 3000);
    }
}