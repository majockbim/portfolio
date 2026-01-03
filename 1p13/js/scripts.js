const projectData = {
    objective: {
        images: ["assets/qarm.jpg", "assets/3dmodel.png"],
        captions: ["figure 1 - The Quanser Arm (Qarm)", "figure 2 - A 3D model of our end effector"],
        currentIndex: 0
    },
    role: {
        images: ["assets/code-snippet.png", "assets/mymodel.png", "assets/final-model.jpg"],
        captions: ["figure 1 - A snippet from my lookup_products() function", "figure 2 - My original CAD model", "figure 3 - Our teams final design"],
        currentIndex: 0
    },
    reflection: {
        images: ["assets/fri-45.jpg"],
        captions: ["figure 1 - A photo of the team :)",],
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