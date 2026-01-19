# 🪙 Coin Flip & Dice Roll

A simple, interactive web interface featuring a 3D animated coin flipper and a 3D dice roller. This project demonstrates pure CSS 3D transformations, JavaScript DOM manipulation, and audio integration.

## 🌟 Features

* **Real-time 3D Animations:**
    * **Coin:** Realistic rotation physics that align with the random result (Heads/Tails).
    * **Dice:** 3D cube rotation using `rotateX` and `rotateY` to land on the correct face (1-6).
* **Sound Effects:** Audio feedback triggered on button clicks for a more immersive experience.
* **Responsive Design:** Automatically switches from a split-screen layout (desktop) to a stacked layout (mobile).
* **Pure CSS Visuals:** The dice dots and coin texture are created entirely with CSS (no external images required).

## 📂 Project Structure

Ensure your folder looks like this for the application to work correctly:

```text
/project-folder
  ├── index.html       # Main HTML structure
  ├── style.css        # Styles and 3D animations
  ├── script.js        # Logic for randomization and audio
  ├── coin-flip.mp3    # Audio file (You must add this)
  ├── dice-roll.mp3    # Audio file (You must add this)
  └── README.md        # Documentation
```
##🚀 Getting Started
**Prerequisites**
You need a modern web browser (Chrome, Firefox, Edge, or Safari). No server or installation is required.

**Installation**
1. Clone or Download this repository.

2. Add Audio Files:
  * Download a coin flip sound effect and rename it to coin-flip.mp3.
  * Download a dice roll sound effect and rename it to dice-roll.mp3.

3. Place both files in the root folder.

4. Run the App:
  * Double-click index.html to open it in your browser.

##🛠️ Technologies Used
**HTML5**: Semantic structure.
**CSS3**: Flexbox for layout and transform-style: preserve-3d for the animations.
**JavaScript (ES6)**: Event listeners, random number generation, and dynamic DOM updates.
