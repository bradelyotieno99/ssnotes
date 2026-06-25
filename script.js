// 1. MEMORY BANK
// Unify the structure: Everything in the stack is now an object
let navigationHistoryStack = [{ view: 'home', data: null }]; 
const mainContainerView = document.getElementById("app-view");

// Complete Curriculum Lists for Kenya
const classesData = {
    cbc: ["PP1", "PP2", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    844: ["Form 1", "Form 2", "Form 3", "Form 4"]
};

const subjectsData = {
    cbc: ["Mathematics", "English", "Kiswahili", "Integrated Science", "Social Studies", "Creative Arts and Sports", "Agriculture and Nutrition"],
    844: ["Mathematics", "English", "Kiswahili", "Biology", "Chemistry", "Physics", "History & Government", "Geography", "Business Studies"]
};

// 2. ROUTER ENGINE
function navigateToView(viewId, payload = null, pushToHistory = true) {
    if (pushToHistory) {
        const lastState = navigationHistoryStack[navigationHistoryStack.length - 1];
        
        // Deep string comparison to check if BOTH the view and data actually changed
        const isDuplicate = lastState && 
                            lastState.view === viewId && 
                            JSON.stringify(lastState.data) === JSON.stringify(payload);

        if (!isDuplicate) {
            navigationHistoryStack.push({ view: viewId, data: payload });
        }
    }

    // Clear the screen cleanly
    if (mainContainerView) mainContainerView.innerHTML = ""; 

    // Route matching
    if (viewId === 'home') {
        renderHomeMenuScreen();
    } else if (viewId === 'classes_menu') {
        renderClassesMenuScreen(payload);
    } else if (viewId === 'subjects_menu') {
        renderSubjectsMenuScreen(payload);
    } else if (viewId === 'notes_reader') {
        renderNotesReaderScreen(payload);
    }
}

// 3. HOME SCREEN RENDERER
function renderHomeMenuScreen() {
    const homeView = document.createElement("div");
    homeView.className = "split-home-view";

    homeView.innerHTML = `
        <div class="curriculum-card">
            <h2>CBC</h2>
            <button class="nav-selection-btn" id="btn-cbc">Open CBC</button>
        </div>
        <div class="curriculum-card">
            <h2>8-4-4</h2>
            <button class="nav-selection-btn" id="btn-844">Open 8-4-4</button>
        </div>
    `;
    mainContainerView.appendChild(homeView);

    document.getElementById("btn-cbc").onclick = () => navigateToView('classes_menu', { system: 'cbc' });
    document.getElementById("btn-844").onclick = () => navigateToView('classes_menu', { system: '844' });
}

// 4. CLASSES SCREEN RENDERER
function renderClassesMenuScreen(payload) {
    if (!payload || !payload.system) return navigateToView('home'); // Defensive fallback

    const headerTitle = payload.system === 'cbc' ? "Competency Based Curriculum (PP1 - Grade 12)" : "8-4-4 Education System (Form 1 - 4)";
    const targetClasses = classesData[payload.system] || [];

    const wrapper = document.createElement("div");
    wrapper.innerHTML = `<h3 class="directory-header">${headerTitle}</h3>`;
    
    const grid = document.createElement("div");
    grid.className = "selection-grid";

    targetClasses.forEach(className => {
        const item = document.createElement("div");
        item.className = "grid-item-card";
        item.innerText = className;
        item.onclick = () => navigateToView('subjects_menu', { system: payload.system, class: className });
        grid.appendChild(item);
    });

    wrapper.appendChild(grid);
    mainContainerView.appendChild(wrapper);
}

// 5. SUBJECTS SCREEN RENDERER
function renderSubjectsMenuScreen(payload) {
    if (!payload || !payload.system || !payload.class) return navigateToView('home');

    const wrapper = document.createElement("div");
    wrapper.innerHTML = `<h3 class="directory-header">${payload.class} — Course Subjects</h3>`;
    
    const grid = document.createElement("div");
    grid.className = "selection-grid";

    const targetSubjects = subjectsData[payload.system] || [];

    targetSubjects.forEach(subjectName => {
        const item = document.createElement("div");
        item.className = "grid-item-card";
        item.innerText = subjectName;
        item.onclick = () => navigateToView('notes_reader', { system: payload.system, class: payload.class, subject: subjectName });
        grid.appendChild(item);
    });

    wrapper.appendChild(grid);
    mainContainerView.appendChild(wrapper);
}

// 6. NOTES CONTENT SCREEN RENDERER
function renderNotesReaderScreen(payload) {
    if (!payload) return navigateToView('home');

    const wrapper = document.createElement("div");
    wrapper.className = "notes-view-wrapper";
    let generatedNotesHTML = "";

    if (payload.class === "Grade 9" && payload.subject === "Mathematics") {
        generatedNotesHTML = `
            <div class="notes-title-meta">
                <h2>${payload.class} — ${payload.subject} Complete Notes</h2>
                <p>Curriculum Architecture: Kenyan National CBC Strand Implementation Framework</p>
            </div>
            <div class="note-section-block">
                <h4>Unit 1: Linear Inequalities in One Variable</h4>
                <p>An inequality is a statement comparing mathematical values using size comparison operators...</p>
                <div class="formula-highlight-box">
                    Inequality Operators Reference Summary:<br>
                    &gt;  : Greater Than<br>
                    &lt;  : Less Than
                </div>
            </div>
        `;
    } else if (payload.class === "Form 4" && payload.subject === "Mathematics") {
        generatedNotesHTML = `
            <div class="notes-title-meta">
                <h2>${payload.class} — ${payload.subject} Complete Notes</h2>
                <p>Curriculum Architecture: National 8-4-4 KCSE Review</p>
            </div>
        `;
    } else {
        generatedNotesHTML = `
            <div class="notes-title-meta">
                <h2>${payload.class} — ${payload.subject} Unit Portal</h2>
                <p>Curriculum System Index: ${payload.system ? payload.system.toUpperCase() : ''}</p>
            </div>
        `;
    }

    wrapper.innerHTML = generatedNotesHTML;
    mainContainerView.appendChild(wrapper);
}

// 7. GLOBAL INTERACTION HANDLERS (With existence checks)
const themeBtn = document.getElementById("theme-toggle");
if (themeBtn) {
    themeBtn.onclick = () => {
        const targetBody = document.body;
        if (targetBody.classList.contains("dark-mode")) {
            targetBody.classList.replace("dark-mode", "light-mode");
            themeBtn.innerText = "🌙 Dark Mode";
        } else {
            targetBody.classList.replace("light-mode", "dark-mode");
            themeBtn.innerText = "🌓 Light Mode";
        }
    };
}

// HISTORICAL NAVIGATION BACK BUTTON LOGIC
const backBtn = document.getElementById("back-btn");
if (backBtn) {
    backBtn.onclick = () => {
        if (navigationHistoryStack.length > 1) {
            navigationHistoryStack.pop(); // Remove current screen
            const previousTargetState = navigationHistoryStack[navigationHistoryStack.length - 1];
            navigateToView(previousTargetState.view, previousTargetState.data, false);
        } else {
            navigateToView('home', null, false);
        }
    };
}

const navLogo = document.getElementById("nav-logo");
if (navLogo) {
    navLogo.onclick = () => {
        navigationHistoryStack = [{ view: 'home', data: null }]; 
        navigateToView('home', null, false);
    };
}

// Initialize Application on page load
navigateToView('home', null, false);
