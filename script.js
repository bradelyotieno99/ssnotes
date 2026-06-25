// ==========================================
// 1. HISTORICAL NAVIGATION SYSTEM (THE MEMORY STACK)
// ==========================================
let navigationHistoryStack = ['home']; 
const mainContainerView = document.getElementById("app-view");

// Complete Curriculum Lists for Kenya
const classesData = {
    cbc: ["PP1", "PP2", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    844: ["Form 1", "Form 2", "Form 3", "Form 4"]
};

// UPDATED: Added Pre-Technical Studies and CRE directly into the CBC curriculum array list
const subjectsData = {
    cbc: ["Mathematics", "English", "Kiswahili", "Integrated Science", "Social Studies", "Pre-Technical Studies", "CRE", "Creative Arts and Sports", "Agriculture and Nutrition"],
    844: ["Mathematics", "English", "Kiswahili", "Biology", "Chemistry", "Physics", "History & Government", "Geography", "Business Studies"]
};

// ==========================================
// 2. ROUTER ENGINE
// ==========================================
function navigateToView(viewId, payload = null, pushToHistory = true) {
    if (pushToHistory && navigationHistoryStack[navigationHistoryStack.length - 1] !== viewId) {
        navigationHistoryStack.push({ view: viewId, data: payload });
    }

    mainContainerView.innerHTML = ""; 

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

// 3. HOME SCREEN RENDERER (CBC vs 8-4-4)
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
    const headerTitle = payload.system === 'cbc' ? "Competency Based Curriculum (PP1 - Grade 12)" : "8-4-4 Education System (Form 1 - 4)";
    const targetClasses = classesData[payload.system];

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
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `<h3 class="directory-header">${payload.class} — Course Subjects</h3>`;
    
    const grid = document.createElement("div");
    grid.className = "selection-grid";

    const targetSubjects = subjectsData[payload.system];

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

// ==========================================
// 6. NOTES CONTENT SCREEN RENDERER (UPDATED DATABASE)
// ==========================================
function renderNotesReaderScreen(payload) {
    const wrapper = document.createElement("div");
    wrapper.className = "notes-view-wrapper";

    let generatedNotesHTML = "";

    // --- GRADE 9 MATHEMATICS ROUTING ---
    if (payload.class === "Grade 9" && payload.subject === "Mathematics") {
        generatedNotesHTML = `
            <div class="notes-title-meta">
                <h2>${payload.class} — ${payload.subject} Complete Notes</h2>
                <p>Curriculum Architecture: Kenyan National CBC Strand Implementation Framework</p>
            </div>
            <div class="note-section-block">
                <h4>Unit 1: Linear Inequalities in One Variable</h4>
                <p>An inequality is a statement comparing mathematical values using size comparison operators rather than a standard equals sign.</p>
                <div class="formula-highlight-box">
                    Inequality Operators Reference Summary:<br>
                    &gt;  : Greater Than | &lt;  : Less Than<br>
                    &ge; : Greater Than or Equal To | &le; : Less Than or Equal To
                </div>
                <p><strong>Core Golden Rule:</strong> Whenever you multiply or divide both sides of a given linear inequality expression by a negative number, you MUST reverse the direction arrow of the inequality symbol completely!</p>
                <div class="shortcut-tip-box">
                    <strong>💡 Easy Way to Remember (The Balance Flip):</strong> Think of a negative sign as changing directions completely. If you walk backwards, left becomes right. Multiplying by a negative turns the inequality symbol right around!
                </div>
                <div class="diagram-canvas-placeholder">
                    <div style="width:80%; height:2px; background:currentColor; position:relative;">
                        <div style="position:absolute; left:50%; top:-4px; width:10px; height:10px; border-radius:50%; border:2px solid var(--accent-blue); background:transparent;"></div>
                        <div style="position:absolute; left:55%; top:-10px; font-size:1.5rem; color:var(--accent-blue);">➔</div>
                    </div>
                    <span style="font-size:0.85rem; margin-top:25px; opacity:0.7;">[Fig 1.1: Graphing Open Interval Coordinate Intercept Paths (e.g. x &gt; 3)]</span>
                </div>
            </div>
        `;
    } 
    // --- UPDATED: GRADE 9 PRE-TECHNICAL STUDIES NOTES ---
    else if (payload.subject === "Pre-Technical Studies") {
        generatedNotesHTML = `
            <div class="notes-title-meta">
                <h2>${payload.class} — ${payload.subject} Notes</h2>
                <p>Curriculum Architecture: Junior Secondary School Engineering & Technical Strands</p>
            </div>
            <div class="note-section-block">
                <h4>Unit 1: Foundations of Technical Drawing</h4>
                <p>Technical drawing is a precise graphic language used by designers and engineers to convey exact sizes and structural features of products.</p>
                <div class="formula-highlight-box">
                    Standard Projections Used in Kenya:<br>
                    • First-Angle Projection (Standard British/Kenyan format)<br>
                    • Third-Angle Projection (Standard American format)
                </div>
                <p><strong>Orthographic Projection:</strong> A way of drawing a 3D object by flattening it into separate 2D perspective blocks: the Front Elevation, Side Elevation, and Plan View (looking straight down).</p>
                <div class="shortcut-tip-box">
                    <strong>💡 Memory Shortcut (The Glass Box Trick):</strong> Imagine the tool you are drawing is frozen inside a clear glass box. Staring straight at the front face gives your Front Elevation; looking through the roof gives your Plan View!
                </div>
                <div class="diagram-canvas-placeholder">
                    <div style="width: 100px; height: 100px; border: 2px solid currentColor; position: relative;">
                        <div style="width: 100px; height: 100px; border: 2px dashed var(--accent-blue); position: absolute; top: -15px; left: 15px;"></div>
                    </div>
                    <span style="font-size:0.85rem; margin-top:20px; opacity:0.7;">[Fig 2.1: Projecting Isometric Cubes Into 2D Orthographic Planes]</span>
                </div>
            </div>
        `;
    }
    // --- UPDATED: GRADE 9 CRE NOTES ---
    else if (payload.subject === "CRE") {
        generatedNotesHTML = `
            <div class="notes-title-meta">
                <h2>${payload.class} — ${payload.subject} Notes</h2>
                <p>Curriculum Architecture: Christian Religious Education Moral-Values Framework</p>
            </div>
            <div class="note-section-block">
                <h4>Unit 1: Leadership Models in the Old Testament</h4>
                <p>This unit analyzes the specific characters, duties, shortcomings, and lessons learned from leaders appointed by God to manage the Israelites.</p>
                <div class="formula-highlight-box">
                    The 3 Pillars of Old Testament Leadership:<br>
                    1. Direct Divine Calling (Chosen by God, not voted in)<br>
                    2. Moral Integrity (Standing firmly for justice and fairness)<br>
                    3. Prophetic Courage (Willingness to correct kings when wrong)
                </div>
// =========================================================================
// LINE 188: CONTINUATION OF THE CRE ROUTING ENGINE
// =========================================================================
                <p><strong>The Call of Prophet Jeremiah:</strong> God tells Jeremiah that his destiny was locked in before he was even formed in the womb. This teaches students that individual purpose is independent of age or physical limitations.</p>
                <div class="shortcut-tip-box">
                    <strong>💡 Easy Exam Review Tip (The 3 Cs of Amos and Jeremiah):</strong><br>
                    Remember: <strong>C</strong>alling, <strong>C</strong>haracter, and <strong>C</strong>ourage. These are the three primary qualities tested in the KCSE and junior school evaluation frameworks!
                </div>
            </div>
        `;
    } 
    // --- FORM 4 MATHEMATICS ROUTING (8-4-4) --- 
    else if (payload.class === "Form 4" && payload.subject === "Mathematics") { 
        generatedNotesHTML = `
            <div class="notes-title-meta">
                <h2>${payload.class} — ${payload.subject} Complete Notes</h2>
                <p>Curriculum Architecture: National 8-4-4 KCSE Examination Review Framework</p>
            </div>
            <div class="note-section-block">
                <h4>Chapter 3: Three Dimensional Geometry & Trigonometry</h4>
                <p>This unit examines measuring projections, intersecting vectors lines, and computing angles formed between straight lines and flat surfaces.</p>
                <div class="formula-highlight-box">
                    Pythagorean Theorem Extensions inside 3D Cuboids:<br>
                    Resultant Diagonal Length Space Vector (d) = √(Length² + Width² + Height²)
                </div>
                <div class="shortcut-tip-box">
                    <strong>💡 Easy Way to Remember (Finding Angles Between a Line and a Plane):</strong><br>
                    1. Imagine holding a flashlight directly above the line.<br>
                    2. Look closely at the flat shadow it casts on the floor plane.<br>
                    3. Calculate the angle between the original line and its shadow using standard SOH-CAH-TOA triangle formulas!
                </div>
                <div class="diagram-canvas-placeholder">
                    <div class="geometric-triangle-shape"></div>
                    <span style="font-size:0.85rem; opacity:0.7;">[Fig 3.2: Spatial Orthogonal Normal Projection Vector Diagram]</span>
                </div>
            </div>
        `;
    }  
    // --- GENERAL CATCH-ALL PLACEHOLDER --- 
    else { 
        generatedNotesHTML = `
            <div class="notes-title-meta">
                <h2>${payload.class} — ${payload.subject} Unit Portal</h2>
                <p>Curriculum System Index: ${payload.system.toUpperCase()}</p>
            </div>
            <div class="note-section-block">
                <h4>Instructional Syllabus Summary Document</h4>
                <p>Welcome to the SSNotes learning vault portal for ${payload.class} ${payload.subject}. Detailed notes, core formulas, interactive diagrams, and simplified memory tricks for this unit are being prepared for publishing.</p>
                <div class="shortcut-tip-box">
                    <strong>📝 Revision Tip:</strong> Use active recall frameworks and structured flashcards to study this material efficiently.
                </div>
            </div>
        `;
    }

    wrapper.innerHTML = generatedNotesHTML;
    mainContainerView.appendChild(wrapper);
}

// ==========================================
// 7. BUTTON CLICK EVENT HANDLERS
// ==========================================
document.getElementById("theme-toggle").onclick = () => {
    const targetBody = document.body;
    const btn = document.getElementById("theme-toggle");
    if (targetBody.classList.contains("dark-mode")) {
        targetBody.classList.replace("dark-mode", "light-mode");
        btn.innerText = "🌙 Dark Mode";
    } else {
        targetBody.classList.replace("light-mode", "dark-mode");
        btn.innerText = "🌓 Light Mode";
    }
};

document.getElementById("back-btn").onclick = () => {
    if (navigationHistoryStack.length > 1) {
        navigationHistoryStack.pop();
        const previousTargetState = navigationHistoryStack[navigationHistoryStack.length - 1];
        if (previousTargetState === 'home') {
            navigateToView('home', null, false);
        } else {
            navigateToView(previousTargetState.view, previousTargetState.data, false);
        }
    } else {
        navigateToView('home', null, false);
    }
};

document.getElementById("nav-logo").onclick = () => {
    navigationHistoryStack = ['home'];
    navigateToView('home', null, false);
};

navigateToView('home', null, false);
