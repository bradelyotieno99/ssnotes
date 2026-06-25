/* Core Color Variables Configuration */
:root {
    --bg-dark-blue: #0B192C;
    --card-dark-blue: #1E3E62;
    --text-white: #FFFFFF;
    --accent-blue: #008DDA;
    --text-dark: #1E293B;
    --bg-light: #F8FAFC;
    --card-light: #FFFFFF;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: background-color 0.2s ease, color 0.2s ease;
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
}

/* Base Body Modes */
body.dark-mode {
    background-color: var(--bg-dark-blue);
    color: var(--text-white);
}

body.light-mode {
    background-color: var(--bg-light);
    color: var(--text-dark);
}

/* Header Navbar Architecture */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 5%;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}
body.light-mode .navbar {
    border-bottom: 2px solid rgba(0, 0, 0, 0.05);
    background-color: var(--card-light);
}

.logo {
    font-size: 1.8rem;
    font-weight: 800;
    letter-spacing: 1px;
    cursor: pointer;
    color: var(--accent-blue);
}

.nav-controls {
    display: flex;
    gap: 15px;
}

.control-btn {
    background: transparent;
    border: 1px solid var(--accent-blue);
    color: var(--accent-blue);
    padding: 8px 16px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
}
.control-btn:hover {
    background: var(--accent-blue);
    color: white !important;
}

/* App Container Workspace */
.app-container {
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    min-height: 70vh;
}

/* Main Home Screen Split Layout */
.split-home-view {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-top: 50px;
}

@media(max-width: 768px) {
    .split-home-view { grid-template-columns: 1fr; }
}

/* Curriculum Card Blocks */
.curriculum-card {
    border-radius: 16px;
    padding: 60px 40px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

body.dark-mode .curriculum-card {
    background-color: var(--card-dark-blue);
}
body.light-mode .curriculum-card {
    background-color: var(--card-light);
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.curriculum-card h2 {
    font-size: 2.5rem;
    margin-bottom: 25px;
    font-weight: 800;
}

/* White Dashboard Selection Buttons */
.nav-selection-btn {
    background-color: #FFFFFF;
    color: var(--bg-dark-blue);
    border: none;
    border-radius: 30px;
    padding: 16px 45px;
    font-size: 1.25rem;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}
.nav-selection-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}

/* Button color swapping for light mode */
body.light-mode .nav-selection-btn {
    background-color: var(--bg-dark-blue);
    color: #FFFFFF;
}

/* Grid Layout for Classes and Subjects directory screens */
.directory-header {
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 30px;
}

.selection-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 20px;
}

.grid-item-card {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    padding: 25px 15px;
    border-radius: 12px;
    text-align: center;
    font-weight: 600;
    cursor: pointer;
}
.grid-item-card:hover {
    background: var(--accent-blue);
    color: white;
    transform: translateY(-2px);
}

body.light-mode .grid-item-card {
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    box-shadow: 0 4px 6px rgba(0,0,0,0.02);
}

/* Notes Reader View Styles */
.notes-view-wrapper {
    background: rgba(255,255,255,0.02);
    border-radius: 16px;
    padding: 40px;
    border: 1px solid rgba(255,255,255,0.08);
}
body.light-mode .notes-view-wrapper {
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
}

.notes-title-meta {
    border-bottom: 3px solid var(--accent-blue);
    padding-bottom: 15px;
    margin-bottom: 30px;
}

.note-section-block {
    margin-bottom: 35px;
}

.note-section-block h4 {
    color: var(--accent-blue);
    font-size: 1.4rem;
    margin-bottom: 12px;
}

.note-section-block p {
    line-height: 1.7;
    margin-bottom: 15px;
    font-size: 1.1rem;
    opacity: 0.9;
}

/* Formula Presentation Callout Boxes */
.formula-highlight-box {
    background: rgba(0, 141, 218, 0.1);
    border-left: 5px solid var(--accent-blue);
    padding: 20px;
    border-radius: 0 12px 12px 0;
    margin: 20px 0;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.15rem;
}

/* Memory Shortcuts Box Container */
.shortcut-tip-box {
    background: rgba(46, 204, 113, 0.1);
    border-left: 5px solid #2ecc71;
    padding: 20px;
    border-radius: 0 12px 12px 0;
    margin: 20px 0;
    font-size: 1.05rem;
}

/* Vector Graphic CSS Geometric Diagrams Layout Element */
.diagram-canvas-placeholder {
    width: 100%;
    max-width: 400px;
    height: 220px;
    border: 2px dashed rgba(255,255,255,0.2);
    margin: 25px auto;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
body.light-mode .diagram-canvas-placeholder {
    border: 2px dashed rgba(0,0,0,0.1);
    background: #F1F5F9;
}

.geometric-triangle-shape {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 80px solid var(--accent-blue);
    margin-bottom: 15px;
}
