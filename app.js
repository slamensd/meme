$(document).ready(function() {
    const canvas = document.getElementById('memeCanvas');
    const ctx = canvas.getContext('2d');
    
    const imageSelect = document.getElementById('imageSelect');
    const topTextInput = document.getElementById('topText');
    const bottomTextInput = document.getElementById('bottomText');
    const generateMemeBtn = document.getElementById('generateMeme');
    const postToTwitterBtn = document.getElementById('postToTwitter');
    
    let currentImage = new Image();
    
    function loadImage() {
        currentImage.src = imageSelect.value;
        currentImage.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.height);
        };
    }
    
    function drawText() {
        const topText = topTextInput.value;
        const bottomText = bottomTextInput.value;
        
        ctx.font = '40px Impact';
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.textAlign = 'center';
        
        ctx.fillText(topText, canvas.width / 2, 50);
        ctx.strokeText(topText, canvas.width / 2, 50);
        ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20);
        ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 20);
    }

    imageSelect.addEventListener('change', loadImage);
    topTextInput.addEventListener('input', drawText);
    bottomTextInput.addEventListener('input', drawText);

    generateMemeBtn.addEventListener('click', function() {
        loadImage();
        setTimeout(() => {
            drawText();
        }, 100);
    });

    postToTwitterBtn.addEventListener('click', function() {
        // Add Twitter API integration here
    });

    loadImage();
});

