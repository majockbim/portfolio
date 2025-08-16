
/*

*/
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


/*

*/
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


/*

*/
const projectsWrapper = document.getElementById('projectsWrapper');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const projectsSection = document.getElementById('projectsSection');
const projectsContainer = document.getElementById('projectsContainer');

let currentProject = 0;
const totalProjects = 2;

/*
function updateArrows() {
    // Show/hide arrows with smooth transitions
    if (currentProject === 0) {
        leftArrow.classList.remove('visible');
        rightArrow.classList.add('visible');
        // Show right blur, hide left blur
        projectsContainer.classList.remove('show-left-blur');
        projectsContainer.classList.remove('hide-right-blur');
    } else if (currentProject === totalProjects - 1) {
        leftArrow.classList.add('visible');
        rightArrow.classList.remove('visible');
        // Show left blur, hide right blur
        projectsContainer.classList.add('show-left-blur');
        projectsContainer.classList.add('hide-right-blur');
    }
}

*/

function scrollToProject(index) {
  const cards = projectsWrapper.querySelectorAll('.project-card');
  const first = cards[0];
  const last  = cards[cards.length - 1];

  const containerWidth = projectsContainer.clientWidth;

  // The initial left spacing of project 1 (10px margin-left)
  const peekDistance = first.offsetLeft;

  if (index === 0) {
    // Project 1 focused: 10px (peekDistance) from the left
    projectsWrapper.style.transform = 'translateX(0px)';
  } else {
    // Project 2 focused: its RIGHT edge should be (containerWidth - peekDistance)
    const lastStyles = getComputedStyle(last);
    const lastMarginRight = parseFloat(lastStyles.marginRight) || 0;

    // Right edge of last card within the wrapper’s coordinate system
    const lastRight = last.offsetLeft + last.offsetWidth + lastMarginRight;

    // We want: (lastRight - translate) = containerWidth - peekDistance
    const translate = lastRight - (containerWidth - peekDistance);

    projectsWrapper.style.transform = `translateX(${-translate}px)`;
  }

  currentProject = index;
  updateArrows();
}

// keep alignment correct on viewport changes
window.addEventListener('resize', () => {
  scrollToProject(currentProject);
});



// Arrow click handlers
leftArrow.addEventListener('click', () => {
    if (currentProject > 0) {
        scrollToProject(currentProject - 1);
    }
});

rightArrow.addEventListener('click', () => {
    if (currentProject < totalProjects - 1) {
        scrollToProject(currentProject + 1);
    }
});

// Prevent wheel scrolling in projects section only
projectsSection.addEventListener('wheel', (e) => {
    e.preventDefault();
    e.stopPropagation();
}, { passive: false });

// Initialize arrows
updateArrows();