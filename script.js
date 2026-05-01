const projects = {
  'truck-driver': {
    title: 'Truck Driver',
    image: 'assets/truck-driver.jpg',
    tags: ['Lead Developer', 'Mobile Port', 'Live Ops', 'Bug Fixes'],
    role: 'Lead Senior Game Developer · Studd Games · Oct 2023 – Present',
    tech: 'Unity · C# · Firebase · AWS · Addressables',
    overview: 'A truck simulation game with story and missions. I served as lead on porting the game from Steam to mobile — adding new missions, in-game cutscenes, and building the full live-ops backend from scratch. Also shipped bug fixes across the PC, Xbox, and PS4 versions.',
    challenge: 'Downgrading a mid-to-high-end PC game to mobile while preserving most of its features required aggressive optimization — reworking rendering, memory management, and asset streaming without gutting the experience.',
    details: [
      'Developed core gameplay systems and LiveOps features including Daily Rewards, Store, and Events.',
      'Integrated Firebase and AWS for remote data management, enabling live balancing without update patches.',
      'Built asset downloading, versioning, and management systems using Unity Addressables.',
      'Optimized the full game for mobile — rendering, memory, and asset streaming.',
      'Fixed major bugs from the PC version and shipped the fixes across PC, Xbox, and PS4.'
    ],
    links: [
      { label: 'Steam', url: 'https://store.steampowered.com/app/768180/Truck_Driver/' }
    ]
  },

  'food-truck-chef': {
    title: 'Food Truck Chef: Full Course Edition',
    image: 'assets/food-truck-chef.jpg',
    tags: ['Porting', 'Steam', 'Nintendo Switch'],
    role: 'Lead Senior Game Developer · Studd Games · Oct 2023 – Present',
    tech: 'Unity · C# · Platform SDKs (Steam, macOS, Nintendo Switch)',
    overview: 'A fast-paced cooking management game where you build and run a food truck. I led the full port from mobile to Steam (PC, Mac, Steam Deck) and Nintendo Switch — handling everything from Unity upgrades to platform certification.',
    challenge: 'Each platform required its own save system, achievement integration, and full input rewrite. Managing all platforms simultaneously while keeping a single maintainable codebase was the core challenge.',
    details: [
      'Upgraded Unity version to meet platform certification requirements.',
      'Integrated platform-specific SDKs for Steam, macOS, Steam Deck, and Nintendo Switch.',
      'Implemented full controller support across all platforms.',
      'Rewrote save, achievements, and input systems to be platform-aware.',
      'Optimized memory allocation specifically for Nintendo Switch hardware constraints.'
    ],
    links: [
      { label: 'Steam', url: 'https://store.steampowered.com/app/3653750/Food_Truck_Chef__Full_Course_Edition/' }
    ]
  },

  'farming-camp': {
    title: 'Farming Camp',
    image: 'assets/farming-camp.jpg',
    tags: ['Porting', 'PlayStation', 'Nintendo Switch', 'Xbox'],
    role: 'Lead Senior Game Developer · Studd Games · Oct 2023 – Present',
    tech: 'Unity · C# · Platform SDKs (PS5, Nintendo Switch, Xbox)',
    overview: 'A cozy single-player farm management game about an ambitious teenager competing to be the best farmer at camp. I led the port from PC to Nintendo Switch, PS5, and Xbox.',
    challenge: 'Each console has strict certification requirements and different hardware constraints — particularly Switch\'s memory limits and PlayStation\'s trophy and save system specifics — all requiring separate, careful implementation.',
    details: [
      'Led porting from PC to Nintendo Switch, PS5, and Xbox.',
      'Integrated platform-specific SDKs for each certification pipeline.',
      'Rewrote save, achievement, and input systems per platform requirements.',
      'Optimized performance and memory to meet Nintendo Switch hardware constraints.',
      'Resolved platform-specific dependency issues throughout the codebase.'
    ],
    links: [
      { label: 'Steam', url: 'https://store.steampowered.com/app/2985880/Farming_Camp/' }
    ]
  },

  'orange-season': {
    title: 'Orange Season',
    image: 'assets/orange-season.jpg',
    tags: ['Bug Fixes', 'Lead Dev — Sequel'],
    role: 'Lead Senior Game Developer · Studd Games · Oct 2023 – Present',
    tech: 'Unity · C#',
    overview: 'A charming farming RPG set in Orange Town — grow crops, raise animals, fish, and mine. I resolved critical bugs in the original release and am currently leading development of Orange Season 2 as lead architect and developer.',
    challenge: 'The original codebase had deep-rooted legacy issues. Resolving them without breaking existing content — then redesigning the architecture for the sequel to be scalable from the ground up — required careful system-level planning.',
    details: [
      'Resolved critical legacy system issues and improved overall stability of the original game.',
      'Architected new gameplay systems for Orange Season 2 from scratch.',
      'Revamped legacy systems for long-term scalability and maintainability.',
      'Currently serving as lead developer and system architect on Orange Season 2.'
    ],
    links: [
      { label: 'Steam', url: 'https://store.steampowered.com/app/416000/Orange_Season/' }
    ]
  },

  'chain-heros': {
    title: "Chain Hero's",
    image: 'assets/chain-heros.png',
    tags: ['Grid Puzzle', 'Procedural Generation', 'Solo Project'],
    role: 'Solo Developer · Personal Project',
    tech: 'Unity · C#',
    overview: "A grid-based puzzle game where you tap a hero to send them moving in their set direction — killing all monsters in their path and triggering chain reactions with other heroes. Every level is solvable with a single tap, and you have 3 chances to clear the board.",
    challenge: 'Designing a generation algorithm that produces levels which feel intentional and hand-crafted — while guaranteeing every level has a valid single-tap solution. The solution was to build the chain in reverse: start from a known solution and construct the level outward from it.',
    details: [
      'Built a custom procedural level generation algorithm: places a character randomly on the grid, then constructs the full chain in reverse to guarantee a valid solution exists.',
      'Grid size, monster count, and hero count are all freely scalable.',
      'Turn-based grid logic with priority-driven chain reactions between heroes.',
      'Shipped 5 levels as a complete personal project.',
      'Performance is the only real constraint on how large levels can scale.'
    ],
    links: [
      { label: 'Download APK', url: 'https://drive.google.com/file/d/1GK1B9Og7LGFUzO16p5jSfydwaejDv-6I/view?usp=sharing' }
    ]
  },

  'ruins-hunter': {
    title: "Ruin's Hunter",
    image: 'assets/ruins-hunter.png',
    tags: ['Platformer Shooter', 'Solo Project'],
    role: 'Solo Developer · Personal Project',
    tech: 'Unity · C#',
    overview: 'A platformer shooter where you play as an astronaut discovering different worlds and monsters. Every level ends with a unique boss whose mechanics you must figure out through experimentation before you can progress to the next world.',
    challenge: 'Designing bosses that feel mechanically distinct and require the player to discover their gimmick organically — without explicit tutorials — while still being fair and readable.',
    details: [
      'Designed and built a complete platformer shooter from scratch.',
      'Each level features a unique boss with its own attack patterns and mechanics.',
      'Distinct gameplay style and puzzle layout for every level.',
      'Players must discover each boss\'s mechanic through observation and trial — no tutorials.',
      'Built entirely solo as a personal project.'
    ],
    links: [
      { label: 'Download APK', url: 'https://drive.google.com/file/d/1WeAddp5d53hUEDTmf-kH3GD-E8kSd0AF/view?usp=sharing' },
      { label: 'Gameplay Video', url: 'https://drive.google.com/file/d/1OVVVqBlQ0Kvd0VEeGV_9Ektx5F99KpnA/view?usp=sharing', secondary: true },
      { label: 'Boss Fight Video', url: 'https://drive.google.com/file/d/1uMvRhS6QmH4OXG1wzZNAQtVJgLXf2o-N/view?usp=sharing', secondary: true }
    ]
  },

  'music-pop': {
    title: 'Music Pop',
    image: 'assets/music-pop.png',
    tags: ['Top-Down Scroller', 'Solo Project'],
    role: 'Solo Developer · Personal Project',
    tech: 'Unity · C#',
    overview: 'A top-down scroller where bubbles and obstacles spawn as you fly — collect bubbles to play music notes while avoiding the obstacles. Features 3 built-in tunes, and a custom music creation mode where your own recordings become playable levels.',
    challenge: 'Building the recording system accurately — capturing note timings from the virtual guitar and replaying them as synchronized game events (bubble spawns at the correct screen positions and timings) required careful timing and state architecture.',
    details: [
      'Top-down scroller with a music note-based bubble collection mechanic.',
      '3 built-in musical tunes included out of the box.',
      'Custom music creation mode: play strings on a virtual guitar to record a note sequence.',
      'Saved recordings are stored and converted into playable levels — bubbles spawn timed to your notes.',
      'Built entirely solo as a personal project.'
    ],
    links: [
      { label: 'Gameplay Video', url: 'https://drive.google.com/file/d/12sB2PaROLcHKCwp0LWxB3_5Ir5WnNvEN/view?usp=sharing', secondary: true }
    ]
  }
};

// Modal elements
const backdrop   = document.getElementById('modalBackdrop');
const modalImg   = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalTags  = document.getElementById('modalTags');
const modalRole  = document.getElementById('modalRole');
const modalTech  = document.getElementById('modalTech');
const modalOv    = document.getElementById('modalOverview');
const modalCh    = document.getElementById('modalChallenge');
const modalDets  = document.getElementById('modalDetails');
const modalLinks = document.getElementById('modalLinks');
const modal      = document.getElementById('modal');

function openModal(id) {
  const p = projects[id];
  if (!p) return;

  modalImg.src        = p.image;
  modalImg.alt        = p.title;
  modalTitle.textContent = p.title;
  modalTags.innerHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
  modalRole.innerHTML = `<span class="label">Role:</span> ${p.role}`;
  modalTech.innerHTML = `<span class="label">Tech:</span> ${p.tech}`;
  modalOv.textContent = p.overview;
  modalCh.textContent = p.challenge;
  modalDets.innerHTML = p.details.map(d => `<li>${d}</li>`).join('');
  modalLinks.innerHTML = p.links.map(l =>
    `<a href="${l.url}" target="_blank" class="link-btn${l.secondary ? ' secondary' : ''}">${l.label}</a>`
  ).join('');

  modal.scrollTop = 0;
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

// Open on card click (but not when clicking links inside the card)
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.id));
});

// Close on X button
document.getElementById('modalClose').addEventListener('click', closeModal);

// Close on backdrop click
backdrop.addEventListener('click', e => {
  if (e.target === backdrop) closeModal();
});

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// Scroll fade
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
