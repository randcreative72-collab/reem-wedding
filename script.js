// =========================
// عناصر الصفحة
// =========================

const envelope = document.getElementById("envelope");
const intro = document.getElementById("intro");
const musicSection = document.getElementById("music-section");

const cd = document.getElementById("cd");
const music = document.getElementById("music");
window.addEventListener("load", () => {

    music.volume = 0.6;

    music.play().then(() => {

        cd.classList.add("spin");

    }).catch(() => {

        console.log("Autoplay blocked");

    });

});

let opened = false;
let playing = false;

// =========================
// فتح الظرف
// =========================

envelope.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    // وقف حركة الظرف
    envelope.style.animation = "none";

    // الظرف المفتوح
    envelope.src = "assets/images/envelope-open.png";

    // الظرف مع الكرت
    setTimeout(() => {

        envelope.src = "assets/images/envelope-card.png";

    }, 700);

    // الانتقال لسكشن الموسيقى
    setTimeout(() => {

        intro.style.display = "none";
        musicSection.classList.add("show");

    }, 2200);

});

// =========================
// تشغيل الموسيقى تلقائياً
// =========================

window.addEventListener("load", () => {

    music.volume = 0.6;

    music.play().then(() => {

        cd.classList.add("spin");
        playing = true;

        const playIcon = document.querySelector(".play-icon");
        if (playIcon) playIcon.style.display = "none";

    }).catch(() => {

        console.log("Autoplay blocked");

    });

});

// =========================
// الضغط على السي دي
// =========================

cd.addEventListener("click", () => {

    const playIcon = document.querySelector(".play-icon");
    const envelopeCard = document.querySelector(".music-envelope");

    if (music.paused) {

        music.play();

        cd.classList.add("spin");

        if (playIcon) {
            playIcon.style.display = "none";
        }

        if (envelopeCard) {
            envelopeCard.classList.add("open");
        }

        playing = true;

    } else {

        music.pause();

        cd.classList.remove("spin");

        if (playIcon) {
            playIcon.style.display = "block";
        }

        playing = false;

    }

});
// =========================
// ظهور الكرت
// =========================

const card = document.querySelector(".card-image");

if (card) {

    const cardObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                cardObserver.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.35

    });

    cardObserver.observe(card);

}

// =========================
// العد التنازلي
// =========================

const weddingDate = new Date("July 10, 2026 20:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);
/*=========================
FALLING FLOWERS
=========================*/

const petals = document.querySelector(".petals");

function createPetal(){

    const petal = document.createElement("img");

    petal.src = "assets/images/flower.png";

    petal.className = "petal";

    petal.style.left = Math.random()*100+"vw";

    const size = Math.random()*18+18;

    petal.style.width = size+"px";

    petal.style.animationDuration =
        Math.random()*5+6+"s";

    petal.style.opacity =
        Math.random()*0.5+0.5;

    petals.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },12000);

}

setInterval(createPetal,700);