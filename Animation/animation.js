const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const frames = ["pikachu/1.gif", "pikachu/2.gif", 'pikachu/3.gif', 'pikachu/4.gif', 'pikachu/5.gif',
'pikachu/6.gif', 'pikachu/7.gif', 'pikachu/8.gif', 'pikachu/9.gif'];

let currentFrame = 0;

let images = [];
let frameDelay = 650; //Delay in ms
let moveDelay = 50; //Delay in ms
let x_coord = 0; //X Coordinate Value for Animation Image.
let direction = 1; //1 for right, -1 for left.

// Load all images
for (let i = 0; i < frames.length; i++) {
    let img = new Image();
    img.src = frames[i];
    images.push(img);
}

canvas.style.background = "grey";

function updateAnimation() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw the background
    drawSun();
    drawClouds(100);
    for (let i = 0; i < canvas.width; i = i + 175) { //Loop to draw trees on the canvas
        drawTree(i, 200);
    }
    drawGround();
    drawFence();
    drawHouse(canvas.width/2 - 75, canvas.height/2);
    drawText();

    // Draw the current frame
    ctx.save(); // Save the current state
    ctx.translate(x_coord, canvas.height - 175); // Move to the new drawing location
    if (direction === -1) {
        ctx.scale(-1, 1); // Flip the image horizontally
    }
    ctx.drawImage(images[currentFrame], 0, 0, images[currentFrame].width, images[currentFrame].height, 0, 0, 150, 150);
    ctx.restore(); // Restore the state

    // Move to the next frame, looping back if at the end
    currentFrame = (currentFrame + 1) % frames.length;

    // Update the x-coordinate and check for boundaries
    x_coord = x_coord + (5 * direction);
    if (x_coord > canvas.width - 150) { // Reached the right boundary
        direction = -1;
    } else if (x_coord < 150) { // Reached the left boundary
        direction = 1;
    }

    setTimeout(updateAnimation, delay);
}

// Call updateAnimation once to start the animation
updateAnimation();

function drawSun() {
    ctx.beginPath();
    ctx.arc(0, 0, 75, 0, 2 * Math.PI); 
    ctx.fillStyle = "yellow"; // Sun color
    ctx.fill();
    ctx.closePath();
}

function drawClouds(numClouds) {
    const cloudWidth = 475; // Width of each cloud
    const cloudHeight = 50; // Height of each cloud
    const cloudSpacing = 100; // Spacing between clouds

    for (let i = 0; i < numClouds; i++) {
        const x = i * cloudSpacing; // X-coordinate for each cloud
        const y = 35; // Y-coordinate for clouds at the top

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.bezierCurveTo(x + 20, y - cloudHeight, x + 40, y - cloudHeight, x + cloudWidth / 2, y); //Creates the curved clouds
        ctx.bezierCurveTo(x + cloudWidth - 40, y + 10, x + cloudWidth - 20, y + 10, x + cloudWidth, y);
        ctx.bezierCurveTo(x + cloudWidth + 20, y - 20, x + cloudWidth + 40, y - 20, x + cloudWidth * 1.5, y);
        ctx.fillStyle = "white"; //Color of clouds
        ctx.fill();
        ctx.closePath();
    }
}

function drawTree(x, y) {
    // Draw the trunk
    ctx.fillStyle = "brown";
    ctx.fillRect(x, y, 20, 50);

    // Draw the leaves
    ctx.beginPath();
    ctx.moveTo(x - 30, y);
    ctx.lineTo(x + 10, y - 100);
    ctx.lineTo(x + 50, y);
    ctx.closePath();
    ctx.fillStyle = "green";
    ctx.fill();
}

function drawHouse(x, y) {
    // Draw the main building
    ctx.fillStyle = "lightgrey";
    ctx.fillRect(x, y, 200, 200);

    // Draw the roof
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 100, y - 100);
    ctx.lineTo(x + 200, y);
    ctx.closePath();
    ctx.fillStyle = "darkgrey";
    ctx.fill();

    // Draw the door
    ctx.fillStyle = "brown";
    ctx.fillRect(x + 80, y + 120, 40, 80);

    // Draw the windows
    ctx.fillStyle = "blue";
    ctx.fillRect(x + 20, y + 20, 60, 60); // Left window
    ctx.fillRect(x + 120, y + 20, 60, 60); // Right window
}

function drawGround() {
    ctx.fillStyle= "green"; //Ground color
    ctx.fillRect(0, (canvas.height / 2) - 75, canvas.width, canvas.height)

     // Draw grass
     const grassHeight = 175;
     const grassWidth = 50;
     ctx.fillStyle = "darkgreen";
     for (let i = 0; i < canvas.width; i += grassWidth) {
         const grassX = i;
         const grassY = (canvas.height / 2) - 75;
         ctx.fillRect(grassX, grassY, grassWidth, grassHeight);
     }
}

function drawFence() {
    // Set the fence post width and gap
    let fencePostWidth = 10;
    let gap = 27;

    // Calculate the number of fence posts
    let numFencePosts = canvas.width / (fencePostWidth + gap);

    // Draw the fence
    for (let i = 0; i < numFencePosts; i++) {
        let x = i * (fencePostWidth + gap);
        drawFencePost(x, canvas.height / 2 + 100, fencePostWidth);
    }
    
    // Draw the top horizontal line
    ctx.strokeStyle = "grey";
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2 + 100 - 80); // 80 is the height of the fence post
    ctx.lineTo(canvas.width, canvas.height / 2 + 100 - 80);
    ctx.stroke();

    // Draw the bottom horizontal line
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2 + 80);
    ctx.lineTo(canvas.width, canvas.height / 2 + 80);
    ctx.stroke();
}

// Function to draw a single fence post
function drawFencePost(x, y, width) {
    ctx.fillStyle = "white";
    ctx.fillRect(x, y, width, -100); // -100 for the height to draw upwards
}

function drawText() {
    ctx.fillStyle = "black";
    ctx.font = "bold 16px Arial";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillText("Gloomy Day by Amir", (canvas.width / 2), (canvas.height));
}
