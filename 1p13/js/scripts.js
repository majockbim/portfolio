const projectData = {
    objective: {
        images: ["assets/one.jpg", "assets/two.png", "assets/three.jpg"],
        captions: ["figure 1 - Jane Remover & The Guys", "figure 2 - not sure", "figure 3 - another one"],
        currentIndex: 0
    },
    role: {
        images: ["assets/one.jpg", "assets/two.png", "assets/three.jpg"],
        captions: ["figure 1 - Jane Remover & The Guys", "figure 2 - not sure", "figure 3 - another one"],
        currentIndex: 0
    },
    reflection: {
        images: ["assets/one.jpg", "assets/two.png", "assets/three.jpg"],
        captions: ["figure 1 - Jane Remover & The Guys", "figure 2 - not sure", "figure 3 - another one"],
        currentIndex: 0
    }
};

function changeImage(section, direction) {
    const data = projectData[section];
    if (!data) return;

    data.currentIndex += direction;

    if (data.currentIndex < 0) data.currentIndex = data.images.length - 1;
    if (data.currentIndex >= data.images.length) data.currentIndex = 0;

    const imgElement = document.getElementById(`img-${section}`);
    const captionElement = document.getElementById(`caption-${section}`);

    if (imgElement && captionElement) {
        imgElement.src = data.images[data.currentIndex];
        captionElement.innerText = data.captions[data.currentIndex];
    }
}

// INITIALIZE ALL THREE
window.addEventListener('DOMContentLoaded', () => {
    changeImage('objective', 0);
    changeImage('role', 0);
    changeImage('reflection', 0);
});