$(document).ready(function() {
    const canvas = document.getElementById('memeCanvas');
    const ctx = canvas.getContext('2d');
    
    const imageThumbnails = document.querySelectorAll('.img-thumbnail');
    const topTextInput = document.getElementById('topText');
    const bottomTextInput = document.getElementById('bottomText');
    const generateMemeBtn = document.getElementById('generateMeme');
    
    let currentImage = new Image();
    
    function loadImage(src) {
        currentImage.src = src;
        currentImage.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.height);
            drawText();
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

    imageThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            loadImage(thumbnail.dataset.src);
        });
    });

    topTextInput.addEventListener('input', drawText);
    bottomTextInput.addEventListener('input', drawText);

    generateMemeBtn.addEventListener('click', function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.height);
        drawText();
    });
    

    loadImage(imageThumbnails[0].dataset.src);
});
