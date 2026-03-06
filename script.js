const messageEl = document.getElementById("message");
const imageEl = document.getElementById("loveImage");
const lockScreenEl = document.getElementById("lockScreen");
const protectedContentEl = document.getElementById("protectedContent");
const accessCodeInputEl = document.getElementById("accessCodeInput");
const unlockButtonEl = document.getElementById("unlockButton");
const codeErrorEl = document.getElementById("codeError");

const ACCESS_CODE = "678969";

const texts = [
    "Hey cutie van meeee 😝",
    "I LOVE YOUUUUUU 😘",
    "Weet je.. 🥹",
    "Ik kan niet meer zonder jou 🥰",
    "Jij maakt mij zo gelukkig 🥹",
    "Ik ben je zo dankbaar voor al je liefde 🥰",
    "Ik hou zoveel van je dat... ",
    "... ik hier sinds half 1 als een nerd achter een scherm zat 😂",
    "En het is 4u geworden 😅",
    "Maar het is de glimlach op je gezicht waard 🥹",
    "Want jij verdient echt ALLES 🤗",
    "Ik ben echt maar ook echt zo blij dat ik je aangesproken had 🥹",
    "Want nu ben ik de gelukkigste persoon op aarde 🥰",
    "Oh en alles dat je doet...",
    "..echt..",
    "Ik ben zo trots dat ik jou MIJN VRIENDIN,..",
    "MIJN MEISJE,..",
    "MIJN SCHATTIEE, ...",
    "MIJN LIEFJE,...",
    "MIJN ALLESSSS mag noemen 🥹",
    "Ik kan oprecht niet wachten om iedere dag met jou tijd door te kunnen brengen 😝",
    "Al zijn het kleine momentjes...",
    "Van Tiktok's maken 💃🕺 tot ...",
    "samen koken/bakken 🍽️,...",
    "samen in slaap vallen tijdens een film 🎬,...",
    "samen op reis 🧳,...",
    "Iedere seconden met jou telt 🥰",
    "Zelfs de momentjes wanneer je het moeilijk hebt 🥹",
    "Ik zal er altijd en ook altijd voor jou zijn 😘",
    "DUSS...",
    "VERGEET NIET...",
    "DAT...",
    "IK VAN JE HOUUUUUUUU 😛❤️ ",
];

const images = [
    "Schermafbeelding 2026-03-06 004320.png",
    "Schermafbeelding 2026-03-06 020210.png",
    "Schermafbeelding 2026-03-06 020358.png",
    "Schermafbeelding 2026-03-06 021632.png",
    "Schermafbeelding 2026-03-06 021016.png",
    "Schermafbeelding 2026-03-06 004320.png",
    "Schermafbeelding 2026-03-06 021016.png",
    "Schermafbeelding 2026-03-06 004522.png",
    "Schermafbeelding 2026-03-06 020210.png",
    "Schermafbeelding 2026-03-06 020358.png",
    "Schermafbeelding 2026-03-06 020535.png",
    "Schermafbeelding 2026-03-06 020838.png",
    "Schermafbeelding 2026-03-06 021016.png",
    "Schermafbeelding 2026-03-06 021112.png",
    "Schermafbeelding 2026-03-06 021146.png",
    "Schermafbeelding 2026-03-06 021219.png",
    "Schermafbeelding 2026-03-06 021301.png",
    "Schermafbeelding 2026-03-06 021355.png",
    "Schermafbeelding 2026-03-06 021429.png",
    "Schermafbeelding 2026-03-06 021535.png",
    "Schermafbeelding 2026-03-06 021632.png",
];

let index = 0;

function renderSlide() {
    messageEl.textContent = texts[index];
    imageEl.src = images[index % images.length];
}

renderSlide();

function next() {
    if (index < texts.length - 1) {
        index++;
    }
    renderSlide();
}

function prev() {
    if (index > 0) {
        index--;
    }
    renderSlide();
}

function unlockSite() {
    const enteredCode = accessCodeInputEl.value.trim();

    if (enteredCode === ACCESS_CODE) {
        lockScreenEl.classList.add("is-hidden");
        protectedContentEl.classList.remove("is-hidden");
        codeErrorEl.textContent = "";
        window.scrollTo({ top: 0, behavior: "auto" });
        return;
    }

    codeErrorEl.textContent = "Onjuiste code. Probeer opnieuw.";
    accessCodeInputEl.value = "";
    accessCodeInputEl.focus();
}

unlockButtonEl.addEventListener("click", unlockSite);
accessCodeInputEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        unlockSite();
    }
});
