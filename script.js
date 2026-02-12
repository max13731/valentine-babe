const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const container = document.querySelector('.container');

// Function to move the 'No' button to a random position
function moveButton() {
    // Get the width and height of the container
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    // Calculate a random position within the container
    const maxWidth = containerRect.width - btnRect.width;
    const maxHeight = containerRect.height - btnRect.height;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Add event listener to move the 'No' button when the mouse hovers over it
noBtn.addEventListener('mouseover', moveButton);
// Also move it on click, for mobile devices where hover doesn't exist
noBtn.addEventListener('click', moveButton);

// Add event listener to the 'Yes' button to show the success message
yesBtn.addEventListener('click', () => {
    container.classList.add('success');
});