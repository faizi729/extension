const extensions = [
    { title: "DevLens", desc: "Quickly inspect page layouts and visualize element boundaries.", img: "./assets/images/logo-devlens.svg", active: true },
    { title: "StyleSpy", desc: "Instantly analyze and copy CSS from any webpage element.", img: "./assets/images/logo-style-spy.svg", active: false },
    { title: "SpeedBoost", desc: "Optimizes browser resource usage to accelerate page loading.", img: "./assets/images/logo-speed-boost.svg", active: true },
    { title: "JSONWizard", desc: "Formats, validates, and prettifies JSON responses in-browser.", img: "./assets/images/logo-json-wizard.svg", active: false },
    { title: "TabMaster Pro", desc: "Organizes browser tabs into groups and sessions.", img: "./assets/images/logo-tab-master-pro.svg", active: true },
    { title: "ViewportBuddy", desc: "Simulates various screen resolutions directly within the browser.", img: "./assets/images/logo-viewport-buddy.svg", active: false },
    { title: "Markup Notes", desc: "Enables annotation and notes directly onto webpages for collaborative debugging.", img: "./assets/images/logo-markup-notes.svg", active: true },
    { title: "GridGuides", desc: "Overlay customizable grids and alignment guides on any webpage.", img: "./assets/images/logo-grid-guides.svg", active: false },
    { title: "Palette Picker", desc: "Instantly extracts color palettes from any webpage.", img: "./assets/images/logo-palette-picker.svg", active: true },
    { title: "LinkChecker", desc: "Scans and highlights broken links on any page.", img: "./assets/images/logo-link-checker.svg", active: false },
    { title: "DOM Snapshot", desc: "Capture and export DOM structures quickly.", img: "./assets/images/logo-dom-snapshot.svg", active: true },
    { title: "ConsolePlus", desc: "Enhanced developer console with advanced filtering and logging.", img: "./assets/images/logo-console-plus.svg", active: false }
  ];
  
  const container = document.getElementById("cardContainer");
  const filterButtons = document.querySelectorAll(".filter"); // All 3 buttons should have class "filter"
  
  // Function to render cards
  function renderCards(list) {
    container.innerHTML = list.map(ext => `
      <div class="card">
        <div class="card-header">
          <img src="${ext.img}" alt="${ext.title}">
          <h3>${ext.title}</h3>
        </div>
        <p>${ext.desc}</p>
        <div class="card-bottom">
          <button class="remove-btn">Remove</button>
          <label class="toggle">
            <input type="checkbox" ${ext.active ? "checked" : ""}>
            <span class="slider"></span>
          </label>
        </div>
      </div>
    `).join('');
  }
  
  // Initial render
  renderCards(extensions);
  
  // Add click listeners to filter buttons
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      document.querySelector(".filter.active")?.classList.remove("active");
      button.classList.add("active");
  
      const filter = button.innerText.trim();
  
      if (filter === "All") {
        renderCards(extensions);
      } else if (filter === "Active") {
        renderCards(extensions.filter(ext => ext.active));
      } else if (filter === "Inactive") {
        renderCards(extensions.filter(ext => !ext.active));
      }
    });
  });
  