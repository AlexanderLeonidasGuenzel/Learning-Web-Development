import { videos } from './videos.js';

const checklist = document.getElementById('checklist');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;
const videosPerPage = 6;

function renderVideos() {

    checklist.innerHTML = '';

    const videosToShow = videos.slice(currentIndex, currentIndex + videosPerPage);

    for (let i = 0; i < videosPerPage; i++) {
        const video = videosToShow[i];
        const listItem = document.createElement('li');

        if (video) {
            const videoId = extractVideoId(video.url);
            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

            const label = document.createElement('label');
            label.htmlFor = video.id;

            const thumbnail = document.createElement('img');
            thumbnail.src = thumbnailUrl;
            thumbnail.alt = video.title;

            const link = document.createElement('a');
            link.href = video.url;
            link.target = '_blank';
            link.textContent = video.title;

            label.appendChild(thumbnail);
            label.appendChild(link);
            listItem.appendChild(label);
        } else {
            listItem.textContent = ''; 
        }

        checklist.appendChild(listItem);
    }

    // Buttons aktivieren/deaktivieren basierend auf der Position im Karussell
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex + videosPerPage >= videos.length;
}

function extractVideoId(url) {
    const regex = /(?:\?v=|\/embed\/|\.be\/|\/v\/|\/watch\?v=|\/watch\?[^#]*v=|\/shorts\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

prevButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (currentIndex > 0) {
        currentIndex -= videosPerPage;
        renderVideos();
    }
});

nextButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (currentIndex + videosPerPage < videos.length) {
        currentIndex += videosPerPage;
        renderVideos();
    }
});

// Erste Anzeige der Videos
renderVideos();