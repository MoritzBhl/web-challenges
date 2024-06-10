console.clear();
/*
Progress Bar

Build a progress bar that indicates how much the user has scrolled down the page.
For that:
 - change the starting width of the progressBar in the CSS file to 0%
 - write a function "calculateScrollPercentage" which calculates and returns in percent
   how far the user has scrolled down the page.
   Use the following attributes to achieve this:
    - window.scrollY: the Y position of the window on the total webpage
    - window.innerHeight: height of the window
    - document.body.clientHeight: height of the webpage

 - change the width of the progressBar whenever the user scrolls down or up. Use your
   function to calculate the current scroll percentage.

 (HINT: you can add a 'scroll' event listener to the document )
 (HINT: you can change the width of an element like this: element.style.width = '10px')

 window.scrollY: Misst den Scroll-Offset von der obersten Position des Dokuments.
window.innerHeight: Misst die Höhe des Viewports, also den sichtbaren Teil des Browserfensters.
document.body.clientHeight: Misst die Höhe des gesamten Inhalts des body-Elements, ohne Rand und Margin.

*/

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.clientHeight;
  return (scrollPosition / (documentHeight - windowHeight)) * 100;
}
document.addEventListener("scroll", () => {
  const scrollPositionInPercentage = calculateScrollPercentage();
  progressBar.style.width = scrollPositionInPercentage + "%";
});
