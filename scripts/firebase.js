
            // Import the functions you need from the SDKs you need
            import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
            import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

            // TODO: Add SDKs for Firebase products that you want to use
            // https://firebase.google.com/docs/web/setup#available-libraries
          
            // Your web app's Firebase configuration
            const firebaseConfig = {
              apiKey: "AIzaSyB85ZEE9YNJp3Ko8bS5e3FayZXE6Ue3yRc",
              authDomain: "learnprogresswebsite.firebaseapp.com",
              projectId: "learnprogresswebsite",
              storageBucket: "learnprogresswebsite.appspot.com",
              messagingSenderId: "183073848158",
              appId: "1:183073848158:web:3a82ff83512da79c8aedcf",
              databaseURL: "https://learnprogresswebsite-default-rtdb.europe-west1.firebasedatabase.app"
            };
          
            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            const database = getDatabase(app);

             // save checkbox state
            function saveProgress(videoId, isChecked) {
                set(ref(database, 'progress/' + videoId), {
                checked: isChecked
                });
            }

            // load checkbox state
            function loadProgress(videoId, checkboxElement) {
                get(ref(database, 'progress/' + videoId)).then((snapshot) => {
                if (snapshot.exists()) {
                    checkboxElement.checked = snapshot.val().checked;
                }
                });
            }

            // Event-Listener for all checkboxes
            document.addEventListener('DOMContentLoaded', function() {
                const checkboxes = document.querySelectorAll('#checklist input[type="checkbox"]');
                checkboxes.forEach(function(checkbox) {
                    checkbox.addEventListener('change', function() {
                        saveProgress(this.id, this.checked);
                    });

                    //load checkbox state at refresh 
                    loadProgress(checkbox.id, checkbox);
                });
            });
          