const prefix = "I";
const phrases = [
"'m an engineering student",
"'m a problem solver",
"'m a software developer",
" love learning new things"
];
const el = document.getElementById("typewriter");
let i = 0; // phrase index
let j = 0; // char index of suffix
let deleting = false;

function type() {
const suffix = phrases[i];
if (!deleting && j < suffix.length) {
    // Typing forward
    el.textContent = prefix + suffix.slice(0, ++j);
} 
else if (!deleting && j === suffix.length) {
    // Pause when full phrase is typed
    deleting = true;
    return setTimeout(type, 1200);
} 
else if (deleting && j > 0) {
    // Deleting backward (only suffix)
    el.textContent = prefix + suffix.slice(0, --j);
} 
else if (deleting && j === 0) {
    // Move to next phrase
    deleting = false;
    i = (i + 1) % phrases.length;
}
// Adjust speed depending on action
const speed = deleting ? 45 : 85;
setTimeout(type, speed);
}

// Start the typewriter effect
type();

const container = document.querySelector(".hero-image");
function map(value, fromStart, fromEnd, toStart, toEnd) {
const percentage = (value - fromStart) / (fromEnd - fromStart);
return percentage * (toEnd - toStart) + toStart;
}
document.addEventListener("mousemove", (event) => {
const rPer = 15;
const rF = 5;
const {clientX: x, clientY: y} = event;
const r = map(y, 0, window.innerHeight, rPer, -rPer);
const offsetX = map(x, 0, window.innerWidth, rF, -rF);
const offsetY = map(y, 0, window.innerHeight, rF, -rF);
container.style.setProperty("--angle", `${r}deg`);
container.style.setProperty("--offsetX", `${offsetX}%`);
container.style.setProperty("--offsetY", `${offsetY}%`);
});

// Ensure mask is applied after image loads
const img = document.querySelector('.hero-image img');
const bg = document.querySelector('.hero-image .bg');

// Force reload the mask after image is loaded
img.addEventListener('load', function() {
    const maskUrl = img.src;
    bg.style.webkitMaskImage = `url("${maskUrl}")`;
    bg.style.maskImage = `url("${maskUrl}")`;
});

// If image is already cached and loaded
if (img.complete) {
    const maskUrl = img.src;
    bg.style.webkitMaskImage = `url("${maskUrl}")`;
    bg.style.maskImage = `url("${maskUrl}")`;
}

window.addEventListener('scroll', function() {
    const scrollArrow = document.getElementById('scrollArrow');
    const scrollPosition = window.scrollY;
    const scrollThreshold = 100; // Trigger after 100px of scrolling
    
    if (scrollPosition > scrollThreshold) {
        scrollArrow.classList.add('scrolled');
    } else {
        scrollArrow.classList.remove('scrolled');
    }
});