import { videos } from './videos.js';

const checklist = document.getElementById('checklist');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;
const videosPerPage = 3;

// Funktion zum Rendern der Videos
function renderVideos() {
    // Leeren der aktuellen Video-Liste
    checklist.innerHTML = '';

    // Videos für die aktuelle Seite auswählen
    const videosToShow = videos.slice(currentIndex, currentIndex + videosPerPage);

    // Wenn weniger als 8 Videos vorhanden sind, leere Elemente hinzufügen
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
            listItem.textContent = ''; // Leeres Element, wenn kein Video vorhanden
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

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= videosPerPage;
        renderVideos();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex + videosPerPage < videos.length) {
        currentIndex += videosPerPage;
        renderVideos();
    }
});

// Erste Anzeige der Videos
renderVideos();