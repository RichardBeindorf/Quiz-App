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

//Now i want to toggle the answer area, for now its display = none i want to switch that to default on click -->

//const questCard = document.querySelector('[data-js="card1"]');

// these are the connections to html
const toggleButton = document.querySelector('[data-js="showButton"]');
const toggleAnswer = document.querySelector('[data-js="answer"]');

toggleButton.addEventListener("click", () => {
    //here im looking to read the display value
    const findCSSAnswer = window.getComputedStyle(toggleAnswer);
    const findDisplay = findCSSAnswer.getPropertyValue('display');
    //now i want to change the display value
    if (findDisplay === 'none') {toggleAnswer.style.display = 'block'}
    else if (findDisplay === 'block') {toggleAnswer.style.display = 'none'}
}
);
