 // with local storage
 document.addEventListener('DOMContentLoaded', function() {
    // Funktion zum Setzen der Checkbox-Zustände
    function setCheckboxStates() {
        const checkboxes = document.querySelectorAll('#checklist input[type="checkbox"]');
        checkboxes.forEach(function(checkbox) {
            const checkboxId = checkbox.id;
            const isChecked = localStorage.getItem(checkboxId) === 'true';
            checkbox.checked = isChecked;

            // Event Listener für Änderungen speichern
            checkbox.addEventListener('change', function() {
                localStorage.setItem(checkboxId, this.checked);
            });
        });
    }
    setCheckboxStates(); // Beim Laden der Seite Checkbox-Zustände setzen
});