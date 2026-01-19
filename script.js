const coinAudio = new Audio('coin-flip.mp3'); 
const diceAudio = new Audio('dice-roll.mp3');

const coin = document.getElementById('coin');
const flipBtn = document.getElementById('flip-btn');
const coinResult = document.getElementById('coin-result');

flipBtn.addEventListener('click', () => {

    coinAudio.currentTime = 0;
    coinAudio.play().catch(error => console.log("Audio file missing or blocked"));


    const outcome = Math.floor(Math.random() * 2); // 0 = Heads, 1 = Tails
    const currentRotation = coin.style.transform.match(/rotateY\((\d+)deg\)/);
    let baseRotation = currentRotation ? parseInt(currentRotation[1]) : 0;

    let newRotation = baseRotation + 1800;

    const isCurrentlyHeads = (baseRotation % 360 === 0);

    if (outcome === 0) { // Target: Heads
        if (!isCurrentlyHeads) newRotation += 180; 
    } else { // Target: Tails
        if (isCurrentlyHeads) newRotation += 180;
    }


    coin.style.transform = `rotateY(${newRotation}deg)`;
    coinResult.textContent = "Flipping...";

    setTimeout(() => {
        coinResult.textContent = outcome === 0 ? "Result: HEADS" : "Result: TAILS";
    }, 3000);
});

const dice = document.getElementById('dice');
const rollBtn = document.getElementById('roll-btn');
const diceResult = document.getElementById('dice-result');

rollBtn.addEventListener('click', () => {
    diceAudio.currentTime = 0;
    diceAudio.play().catch(error => console.log("Audio file missing or blocked"));

    const result = Math.floor(Math.random() * 6) + 1;
    
    const rotations = {
        1: { x: 0, y: 0 },
        2: { x: -90, y: 0 },
        3: { x: 0, y: -90 },
        4: { x: 0, y: 90 },
        5: { x: 90, y: 0 },
        6: { x: 180, y: 0 }
    };

    const target = rotations[result];

    const xRand = 720 + (Math.floor(Math.random() * 3) * 360); 
    const yRand = 720 + (Math.floor(Math.random() * 3) * 360);

    const finalX = target.x + xRand;
    const finalY = target.y + yRand;

    dice.style.transform = `rotateX(${finalX}deg) rotateY(${finalY}deg)`;
    diceResult.textContent = "Rolling...";

    setTimeout(() => {
        diceResult.textContent = `Result: ${result}`;
    }, 1500);
});