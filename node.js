let isDarkTheme = false;

function setFontSize(size) {
    const textarea = document.querySelector('.note');
    if (size === 'small') {
        textarea.style.fontSize = '14px';
    } else if (size === 'large') {
        textarea.style.fontSize = '20px';
    }
}

function toggleUnderline() {
    const textarea = document.querySelector('.note');
    textarea.style.textDecoration = textarea.style.textDecoration === 'underline' ? 'none' : 'underline';
}

function highlightText() {
    const textarea = document.querySelector('.note');
    textarea.style.backgroundColor = textarea.style.backgroundColor === 'yellow' ? 'transparent' : 'yellow';
}

function changeFont() {
    const textarea = document.querySelector('.note');
    const selectedFont = document.getElementById('fontSelect').value;
    textarea.style.fontFamily = selectedFont;
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    isDarkTheme = !isDarkTheme;
}

function addToFavorites(button) {
    button.textContent = button.textContent === '⭐' ? '★' : '⭐';
}

function saveNotes(textarea) {
    console.log('Note content:', textarea.value); // Save notes to a database or local storage here
}

// Optional: Implement voice-to-text feature
document.getElementById('micButton').addEventListener('click', () => {
    alert('Voice note functionality coming soon!');
});