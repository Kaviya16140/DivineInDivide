(() => {
  const LOADING_MS = 5000;

  const CHARACTERS = [
    { id: "C01", name: "Balakrishna", weightGrams: 273, image: "assets/characters/Balakrishnan_png-d79330a9-5952-41db-a5bd-ee9a4ddf806c.png", cclass: "Devotion", baseMass: 48, stats: { strength: 6, speed: 7, agility: 8, tech: 7 }, sentences: ["The child form of Krishna, adored as the butter thief and soul of playful grace.", "He draws every heart toward devotion through innocence, charm, and divine love."] },
    { id: "C02", name: "Karuppusamy", weightGrams: 117, image: "assets/characters/karuppusamy-png-6f11f902-3eca-42b1-aa34-3e7c05882e9f.png", cclass: "Protector", baseMass: 72, stats: { strength: 9, speed: 6, agility: 6, tech: 5 }, sentences: ["A fierce guardian deity of the Tamil countryside, bound to justice and village honor.", "He is invoked for protection, oaths, and the settling of what cannot be ignored."] },
    { id: "C03", name: "Hanuman", weightGrams: 152, image: "assets/characters/Hanuman-png-31e1f6a8-6834-4349-9b00-6c210284f875.png", cclass: "Champion", baseMass: 78, stats: { strength: 10, speed: 9, agility: 9, tech: 4 }, sentences: ["The devoted servant of Rama, strength incarnate and humility perfected.", "He leaps across impossible distance and never wavers from the path of dharma."] },
    { id: "C04", name: "Murugan", weightGrams: 139, image: "assets/characters/Murugan-png-c44fd5d4-6ad2-4e4f-b2c9-964e6f7682b4.png", cclass: "Warrior", baseMass: 62, stats: { strength: 9, speed: 7, agility: 8, tech: 6 }, sentences: ["The youthful god of the vel, victory, and Tamil bhakti.", "He leads devotees through discipline, courage, and the ascent of the spirit."] },
    { id: "C05", name: "Shani", weightGrams: 160, image: "assets/characters/Shani-png-87629d42-3639-4181-8da9-83a5cb9ce605.png", cclass: "Judge", baseMass: 68, stats: { strength: 7, speed: 5, agility: 6, tech: 9 }, sentences: ["The graha of Saturn, slow-moving and exacting in his lessons.", "He weighs karma with patience; what he grants is rarely careless, always earned."] },
    { id: "C06", name: "Shrinathji", weightGrams: 195, image: "assets/characters/Shrinathji-png-6170aa49-18e0-4495-8ae1-957cafb5f907.png", cclass: "Avatar", baseMass: 52, stats: { strength: 6, speed: 6, agility: 7, tech: 8 }, sentences: ["Krishna as lord of Nathdwara, lifting Govardhan in eternal gesture.", "His image anchors Pushti Marg: surrender, nourishment, and the sweetness of seva."] },
    { id: "C07", name: "Saraswati", weightGrams: 258, image: "assets/characters/Saraswathi-png-ef002160-531b-4bab-acb0-a09c03963cea.png", cclass: "Devi", baseMass: 50, stats: { strength: 5, speed: 6, agility: 7, tech: 10 }, sentences: ["Goddess of learning, music, and flowing speech, borne by the white swan.", "She blesses the student, the artist, and every seeker of true discernment."] },
    { id: "C08", name: "Mariamman", weightGrams: 137, image: "assets/characters/Mariamma-png-03e6b687-5b71-4abb-907d-932d9f532ea7.png", cclass: "Healer", baseMass: 70, stats: { strength: 8, speed: 6, agility: 7, tech: 7 }, sentences: ["The mother goddess of fever and rain, fierce compassion at the village gate.", "She heals and tests in the same breath, binding communities to her fiery care."] },
    { id: "C09", name: "Kali", weightGrams: 101, image: "assets/characters/8981171_orig-71b9047d-36bf-4062-b4e5-062090807fb2.png", cclass: "Destroyer", baseMass: 74, stats: { strength: 9, speed: 8, agility: 7, tech: 5 }, sentences: ["Time’s dark mother, garlanded with skulls, tongue of truth unveiled.", "She cuts through illusion without mercy, freeing the soul from what binds it."] },
    { id: "C10", name: "Shiva", weightGrams: 314, image: "assets/characters/Siva-png-e55cc656-4f2c-4ad6-af4a-58b8020e053f.png", cclass: "Mahadeva", baseMass: 66, stats: { strength: 9, speed: 6, agility: 7, tech: 8 }, sentences: ["The great ascetic, destroyer and source, riding the bull Nandi.", "His stillness holds the cosmos; his dance begins and ends every age."] },
    { id: "C11", name: "Lakshmi", weightGrams: 186, image: "assets/characters/Lakshmi-png-99ecce2d-25d4-4c52-97a0-b7296526ce1d.png", cclass: "Devi", baseMass: 54, stats: { strength: 5, speed: 6, agility: 7, tech: 9 }, sentences: ["Goddess of prosperity, seated on the lotus, showering fortune and poise.", "She favors the generous heart and steadies the home with gentle abundance."] },
    { id: "C12", name: "Khandoba", weightGrams: 112, image: "assets/characters/Khandoba-79bb1810-f41d-4650-87bc-c1af0063ec78.png", cclass: "Warrior", baseMass: 76, stats: { strength: 10, speed: 7, agility: 6, tech: 5 }, sentences: ["The martial lord of Maharashtra, husband of Mhalsa, smiter of demons.", "He rides for dharma in the Deccan hills, a shepherd-king of thunderous vow."] },
    { id: "C13", name: "Ayyanar", weightGrams: 172, image: "assets/characters/ayyanar-png-c2247fac-8475-434c-bec8-b651832fc58c.png", cclass: "Sentinel", baseMass: 71, stats: { strength: 9, speed: 7, agility: 7, tech: 5 }, sentences: ["The guardian at the village edge, spear in hand, eyes on the dark road.", "Travelers and fields alike rest safer for his tireless, silent watch."] },
    { id: "C14", name: "Parashurama", weightGrams: 241, image: "assets/characters/Parashurama-png-dd81f9e8-960f-47ef-81d8-ed1d45cbc928.png", cclass: "Warrior", baseMass: 69, stats: { strength: 10, speed: 6, agility: 7, tech: 6 }, sentences: ["The sixth avatar, axe-bearer, who cleared the earth of corrupt kshatriya pride.", "His fury serves cosmic order; his hermit’s calm follows the storm."] },
    { id: "C15", name: "Vishnu", weightGrams: 314, image: "assets/characters/Vishnu-png-f57d74e3-7f81-4731-ab70-b47d502fc182.png", cclass: "Preserver", baseMass: 58, stats: { strength: 8, speed: 6, agility: 7, tech: 9 }, sentences: ["The pervader, blue-skinned, holding discus and conch across endless ages.", "Whenever dharma falters, he returns—measured, merciful, and resolute."] },
    { id: "C16", name: "Durga", weightGrams: 260, image: "assets/characters/Durga-png-703e34b4-0efc-46d4-a25a-9af8a84cda37.png", cclass: "Devi", baseMass: 73, stats: { strength: 9, speed: 8, agility: 8, tech: 6 }, sentences: ["The invincible goddess astride the tiger, many-armed and radiant with war.", "She is the mother who fights for her children until every demon falls."] },
    { id: "C17", name: "Muni", weightGrams: 124, image: "assets/characters/Muni-png-d7a13364-cbdc-4678-a9d0-9bb3160e4436.png", cclass: "Sovereign", baseMass: 65, stats: { strength: 7, speed: 5, agility: 6, tech: 8 }, sentences: ["A regal presence of judgment and restraint, enthroned in gold and garland.", "He embodies sober rule: consequence measured, favor never given lightly."] },
    { id: "C18", name: "Venkateshwara", weightGrams: 212, image: "assets/characters/Venkateshwar-png-e7dca202-f612-44b0-9657-ef047a414513.png", cclass: "Lord", baseMass: 56, stats: { strength: 7, speed: 6, agility: 6, tech: 8 }, sentences: ["Vishnu as lord of the Seven Hills, dark and jewel-laden, arms open in blessing.", "Millions climb to his threshold; his glance is said to settle every debt of devotion."] },
    { id: "C19", name: "Meenakshi", weightGrams: 230, image: "assets/characters/Meenakshi-png-64b33d4e-406e-453b-a271-ca61d7264d7c.png", cclass: "Devi", baseMass: 60, stats: { strength: 7, speed: 6, agility: 8, tech: 8 }, sentences: ["The fish-eyed queen of Madurai, sovereign and bride of Sundareshvara.", "Her glance is law and love together; her city blooms under her golden gaze."] },
  ];

  const $ = (sel) => document.querySelector(sel);
  const grid = $("#char-grid");
  const leftPanContent = $("#left-pan-content");
  const rightPanContent = $("#right-pan-content");
  const balanceBeam = $("#balance-beam");

  const bottomPanel = $("#bottom-panel");
  const statusText = $("#status-text");

  const infoName = $("#info-name");
  const infoBlurb = $("#info-blurb");

  const weighSelectedBtn = $("#weigh-selected-btn");
  const resetBtn = $("#reset-btn");

  const LOADER_BAR_FILL = $("#loader-bar-fill");
  const loadingScreen = $("#loading-screen");
  const mainScreen = $("#main-screen");
  const gridWrap = $("#grid-wrap");

  function computeWeight(character) {
    return character.weightGrams;
  }

  /** Min/max mass across the roster — used to map weight → how low the figure sits on the cloud. */
  const WEIGHT_RANGE = (() => {
    let min = Infinity;
    let max = -Infinity;
    for (const c of CHARACTERS) {
      const w = computeWeight(c);
      if (w < min) min = w;
      if (w > max) max = w;
    }
    return { min, max, span: max - min };
  })();

  /** Extra downward shift (px) on the cloud: lighter gods sit lower; heavier sit higher. */
  function weightToPanDropPx(weight) {
    const { min, span } = WEIGHT_RANGE;
    if (span <= 0) return 0;
    const t = Math.max(0, Math.min(1, (weight - min) / span));
    return Math.round((1 - t) * 24);
  }

  const characterById = new Map(CHARACTERS.map((c) => [c.id, c]));

  let selectedId = null;
  /** @type {string | null} */
  let leftPanCharacterId = null;
  /** @type {string | null} */
  let rightPanCharacterId = null;

  function setStatus(text) {
    statusText.textContent = text;
  }

  function updateBottomPanel(character) {
    if (!character) {
      infoName.textContent = "No figure selected";
      infoBlurb.textContent = "Select a figure to read a short description.";
      return;
    }

    infoName.textContent = character.name;
    const [a, b] = character.sentences;
    infoBlurb.textContent = `${a} ${b}`;
  }

  /**
   * Beam + hangs: reversed balance — heavier side rises, lighter side dips.
   * Same (lw − rw) / (lw + rw) signal, inverted for tilt and hang offset.
   */
  function updateBeamFromPans() {
    if (!balanceBeam) return;
    const leftChar = leftPanCharacterId ? characterById.get(leftPanCharacterId) : null;
    const rightChar = rightPanCharacterId ? characterById.get(rightPanCharacterId) : null;
    const lw = leftChar ? computeWeight(leftChar) : 0;
    const rw = rightChar ? computeWeight(rightChar) : 0;
    const total = lw + rw;
    if (total === 0) {
      balanceBeam.style.setProperty("--beam-angle", "0deg");
      balanceBeam.style.setProperty("--left-hang-drop", "0px");
      balanceBeam.style.setProperty("--right-hang-drop", "0px");
      return;
    }
    const normalized = (lw - rw) / total;
    const maxTilt = 28;
    const beamAngleDeg = -normalized * maxTilt;
    balanceBeam.style.setProperty("--beam-angle", `${beamAngleDeg}deg`);

    const maxExtraDrop = 16;
    const leftDrop = -normalized * maxExtraDrop;
    const rightDrop = normalized * maxExtraDrop;
    balanceBeam.style.setProperty("--left-hang-drop", `${leftDrop}px`);
    balanceBeam.style.setProperty("--right-hang-drop", `${rightDrop}px`);
  }

  function createTile(character) {
    const tile = document.createElement("div");
    tile.className = "char-tile";
    tile.draggable = true;
    tile.dataset.id = character.id;

    tile.title = character.name;
    const imgSrc = escapeHtml(character.image);
    tile.innerHTML = `
      <div class="char-tile__thumb">
        <img src="${imgSrc}" alt="${escapeHtml(character.name)}" draggable="false" loading="lazy" width="120" height="120" decoding="async" />
      </div>
    `;

    tile.addEventListener("click", () => {
      selectCharacter(character.id);
    });

    tile.addEventListener("dragstart", (e) => {
      // Use text/plain so it works across browsers consistently.
      e.dataTransfer.setData("text/plain", character.id);
      e.dataTransfer.effectAllowed = "move";
    });

    return tile;
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function selectCharacter(id) {
    selectedId = id;
    const character = characterById.get(id);
    updateBottomPanel(character);
    setStatus(`Selected: ${character.name}`);
  }

  function buildPanChip(character) {
    const chip = document.createElement("div");
    chip.className = "pan__chip";
    const w = computeWeight(character);
    chip.style.setProperty("--weight-drop", `${weightToPanDropPx(w)}px`);
    const imgSrc = escapeHtml(character.image);
    chip.innerHTML = `
      <div class="pan__chip__thumb"><img src="${imgSrc}" alt="${escapeHtml(character.name)}" draggable="false" /></div>
    `;
    return chip;
  }

  /**
   * @param {"left" | "right"} side
   */
  function placeCharacterOnPan(id, side, { fromDrop = false } = {}) {
    const character = characterById.get(id);
    if (!character) return;

    if (side === "left") {
      leftPanCharacterId = id;
      leftPanContent.innerHTML = "";
      leftPanContent.appendChild(buildPanChip(character));
    } else {
      rightPanCharacterId = id;
      rightPanContent.innerHTML = "";
      rightPanContent.appendChild(buildPanChip(character));
    }

    selectCharacter(id);
    updateBeamFromPans();

    const w = computeWeight(character);
    const place = side === "left" ? "left cloud" : "right cloud";
    setStatus(`${fromDrop ? "Dropped on" : "Placed on"} ${place}: ${character.name} (${w} g)`);
  }

  /** Primary action: place selection on the left pan. */
  function weighCharacter(id, { fromDrop = false } = {}) {
    placeCharacterOnPan(id, "left", { fromDrop });
  }

  function clearWeighing() {
    leftPanContent.innerHTML = "";
    rightPanContent.innerHTML = "";
    leftPanCharacterId = null;
    rightPanCharacterId = null;
    updateBeamFromPans();
    setStatus("Scale reset. Awaiting input...");
    if (selectedId) {
      updateBottomPanel(characterById.get(selectedId));
    } else {
      updateBottomPanel(null);
    }
  }

  function initGrid() {
    grid.innerHTML = "";
    for (const c of CHARACTERS) {
      grid.appendChild(createTile(c));
    }
    const gridMeta = $("#grid-meta");
    if (gridMeta) gridMeta.textContent = `${CHARACTERS.length} figures`;
  }

  function setTilesEnabled(enabled) {
    const tiles = grid.querySelectorAll(".char-tile");
    tiles.forEach((t) => {
      t.style.pointerEvents = enabled ? "auto" : "none";
      t.draggable = enabled;
      t.style.opacity = enabled ? "1" : "0.55";
    });
  }

  function bindPanDrop(panEl, side) {
    panEl.addEventListener("dragover", (e) => {
      e.preventDefault();
      panEl.classList.add("is-dragover");
      e.dataTransfer.dropEffect = "move";
    });

    panEl.addEventListener("dragleave", () => {
      panEl.classList.remove("is-dragover");
    });

    panEl.addEventListener("drop", (e) => {
      e.preventDefault();
      panEl.classList.remove("is-dragover");
      if (!e.dataTransfer) return;
      const id = e.dataTransfer.getData("text/plain");
      placeCharacterOnPan(id, side, { fromDrop: true });
    });
  }

  function initScaleInteractions() {
    bindPanDrop($("#left-pan"), "left");
    bindPanDrop($("#right-pan"), "right");
  }

  function initButtons() {
    weighSelectedBtn.addEventListener("click", () => {
      if (!selectedId) return setStatus("Select a character first.");
      weighCharacter(selectedId);
    });

    resetBtn.addEventListener("click", () => clearWeighing());
  }

  function startLoaderSequence() {
    const startTs = performance.now();
    setStatus("The scale finds its center...");

    const tick = (now) => {
      const elapsed = now - startTs;
      const pct = Math.max(0, Math.min(1, elapsed / LOADING_MS));
      LOADER_BAR_FILL.style.width = `${Math.round(pct * 100)}%`;
      if (pct < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    // Sequence requested by the prompt:
    // 1) Loading for ~5 seconds
    // 2) Show weighing scale
    // 3) Reveal bottom info box
    // 4) Finally reveal the 3x7 grid
    setTimeout(() => {
      loadingScreen.classList.remove("is-active");
      mainScreen.classList.add("is-active");
      setStatus("Scale online. Select or drop a character.");

      // Step 3: show bottom panel shortly after the scale.
      setTimeout(() => {
        bottomPanel.classList.remove("is-hidden");
        setStatus("Info panel online. Select or weigh a character.");
      }, 500);

      // Step 4: show character grid last.
      setTimeout(() => {
        gridWrap.classList.add("is-visible");
        setTilesEnabled(true);
        setStatus("Drag a tile onto a cloud, or click to select.");
      }, 1000);
    }, LOADING_MS);
  }

  function bootstrap() {
    initGrid();
    initScaleInteractions();
    initButtons();

    updateBeamFromPans();
    setTilesEnabled(false);
    bottomPanel.classList.add("is-hidden");

    // Update the header during the opening sequence.
    setStatus("The scale finds its center...");
    startLoaderSequence();
  }

  bootstrap();
})();

