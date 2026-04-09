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
    },
    objective3: {
    images: ["assets/client.png"],
    captions: ["figure 1 - the client"],
    currentIndex: 0
    },
    role3: {
        images: ["assets/FinalScoop.png", "assets/rake.png"],
        captions: ["figure 1 - Our final CAD prototype", "figure 2 - A rake prototype"],
        currentIndex: 0
    },
    reflection3: {
        images: ["assets/fri-38.jpg"],
        captions: ["figure 1 - An award our tema won!",],
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

    // Separated these so the image still changes even if the caption is missing/wrong ID
    if (imgElement) {
        imgElement.src = data.images[data.currentIndex];
    }
    if (captionElement) {
        captionElement.innerText = data.captions[data.currentIndex];
    }
}

// INITIALIZE ALL IMAGES
window.addEventListener('DOMContentLoaded', () => {
    changeImage('objective', 0);
    changeImage('role', 0);
    changeImage('reflection', 0);
    
    changeImage('objective3', 0);
    changeImage('role3', 0);
    changeImage('reflection3', 0);
});

function showProject(projectId, clickedButton) {
    const allProjects = document.querySelectorAll('.project-section');
    allProjects.forEach(project => {
        project.classList.remove('active-project');
    });

    const allTabs = document.querySelectorAll('.tab-button');
    allTabs.forEach(tab => {
        tab.classList.remove('active');
    });

    document.getElementById(projectId).classList.add('active-project');

    clickedButton.classList.add('active');
}

// Function to Open the Modal
function openModal(contentId) {

    const hiddenContent = document.getElementById(contentId).innerHTML;
    
    document.getElementById('modal-body-content').innerHTML = hiddenContent;
    
    document.getElementById('project-modal').classList.add('show');
    
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('project-modal').classList.remove('show');
    
    document.body.style.overflow = 'auto';
    
    setTimeout(() => {
        document.getElementById('modal-body-content').innerHTML = "";
    }, 300); 
}