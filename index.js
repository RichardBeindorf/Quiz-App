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

