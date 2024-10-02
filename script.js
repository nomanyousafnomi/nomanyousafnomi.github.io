function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const texts = ["Computer Scientist", "Data Scientist"];
let index = 0;
let charIndex = 0;
const typingText = document.getElementById("typing-text");

function type() {
    if (charIndex < texts[index].length) {
        typingText.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Adjust speed (100ms per character)
    } else {
        // Pause before deleting
        setTimeout(deleteText, 1000);
    }
}

function deleteText() {
    if (charIndex > 0) {
        typingText.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, 50); // Adjust speed (50ms per character)
    } else {
        // Switch to the next text
        index = (index + 1) % texts.length;
        setTimeout(type, 500); // Pause before starting to type again
    }
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", () => {
    type();
});
