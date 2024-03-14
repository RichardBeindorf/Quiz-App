const bookmark = document.querySelector('[data-js="bookmark"]');

bookmark.addEventListener("click", () => {
    const currentStyle = window.getComputedStyle(bookmark);
    const currentFill = currentStyle.getPropertyValue("font-variation-settings");
    
    // Toggle the font fill value
    const newFill = currentFill.includes('"FILL" 0') ? currentFill.replace('"FILL" 0', '"FILL" 1') : currentFill.replace('"FILL" 1', '"FILL" 0');
    
    // Apply the updated font-variation-settings value to the element's style
    bookmark.style.fontVariationSettings = newFill;
}
);

const questCard = document.querySelector('data-js="card1"');
const toggleButton = document.querySelector('data-js="showButton"');
const toggleAnswer = document.querySelector('data-js="answer"');

toggleButton.addEventListener("click", () => {
    
}
);