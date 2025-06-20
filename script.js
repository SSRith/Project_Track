// Custom cursor logic
const cursor = document.querySelector('.comic-cursor');
const cursorDot = document.querySelector('.comic-cursor-dot');

// Only enable on non-touch devices
if (!('ontouchstart' in window)) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
    });

    // Hover effects
    document.querySelectorAll('a, button, .comic-button, .gallery-item, .comic-panel').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('active'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });
}

// Add this at the top of script.js
const typingSound = new Audio('typing_sound.mp3');

// Modify the startAdventure function
function startAdventure() {
    document.getElementById('cover').classList.add('hidden');          // Hide cover
    document.getElementById('main-content').classList.remove('hidden'); // Show main content
    const cover = document.getElementById('cover');
    const typingTransition = document.getElementById('typing-transition');
    
    // Show typing transition
    typingTransition.classList.remove('hidden');
    
    // Start typing animation and sound
    setTimeout(() => {
        typingTransition.classList.add('typing-animation');
        typingSound.currentTime = 0; // Reset audio
        typingSound.play(); // Start playing
        
        // After animation completes
        setTimeout(() => {
            cover.classList.add('hidden');
            document.getElementById('main-content').classList.remove('hidden');
            showSection('map');
            
            // Hide typing transition and stop sound
            setTimeout(() => {
                typingTransition.classList.remove('typing-animation');
                typingTransition.classList.add('hidden');
                typingSound.pause();
            }, 500);
        }, 1200); // Matches animation duration
    }, 500);
}

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.remove('hidden');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Add some random motion to characters on page
document.addEventListener('DOMContentLoaded', () => {
    const characters = document.querySelectorAll('.character');
    
    characters.forEach(char => {
        // Random slight initial rotation
        const rotate = (Math.random() * 10) - 5;
        char.style.transform = `rotate(${rotate}deg)`;
        
        // Add hover effect
        char.addEventListener('mouseenter', () => {
            const float = Math.random() * 20 - 10;
            const rotate = Math.random() * 20 - 10;
            char.style.transform = `translateY(-10px) rotate(${rotate}deg)`;
        });
        
        char.addEventListener('mouseleave', () => {
            const rotate = (Math.random() * 10) - 5;
            char.style.transform = `rotate(${rotate}deg)`;
        });
    });
    
    // Add comic "sound effects"
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('comic-button')) {
                const sounds = ['POW!', 'BAM!', 'ZAP!', 'BOOM!', 'WHAM!'];
                const effect = document.createElement('div');
                effect.className = 'action-line absolute';
                effect.textContent = sounds[Math.floor(Math.random() * sounds.length)];
                effect.style.left = `${Math.random() * 80 + 10}%`;
                effect.style.top = `${Math.random() * 80 + 10}%`;
                e.target.parentElement.appendChild(effect);
                
                setTimeout(() => {
                    effect.remove();
                }, 1000);
            }
        });
    });
// fetching each html files to index
const loads = [
  { id: 'typing-transition', file: 'partials/typing-transition.html' },
  { id: 'cover', file: 'partials/cover.html' },
  { id: 'nav-placeholder', file: 'partials/navigation.html' },
  { id: 'map-intro-placeholder', file: 'partials/map-intro.html' },
  { id: 'interactive-map-placeholder', file: 'partials/interactive-map.html' }, 
  { id: 'scavenger-placeholder', file: 'partials/scavenger-hunt.html' },
  { id: 'buildings-placeholder', file: 'partials/buildings.html' },
  { id: 'resources-placeholder', file: 'partials/resources.html' },
  { id: 'tips-placeholder', file: 'partials/tips.html' },
  { id: 'socials-placeholder', file: 'partials/socials.html' },
  { id: 'about-placeholder', file: 'partials/about_us.html' },
  { id: 'faq-placeholder', file: 'partials/faq.html' },
  { id: 'footer-placeholder', file: 'partials/footer.html' }
];

loads.forEach(({ id, file }) => {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      const container = document.getElementById(id);
      if (container) container.outerHTML = html;
    });
});


// Show building info inside side panel
function showBuildingInfo(code) {
  const panel = document.getElementById('side-panel');
  const title = document.getElementById('buildingTitle');
  const desc = document.getElementById('buildingDescription');
  const img = document.getElementById('buildingImage');
  const link = document.getElementById('learnMoreLink');

  window.buildings = {
  BB: {
    name: "Birmingham Block",
    description: "Here is where the Huskies pass on through from GWP to BHS!",
    image: "images/gallery/bb/bb1.jpg",
    link: "#building-BB"
  },
  BHS: {
    name: "Birmingham Hay & Seed",
    description: "This building is home to study spaces and big auditorium style rooms, where Huskies can gather and study!",
    image: "images/gallery/bhs/bhs1.jpg",
    link: "#building-BHS"
  },
  CP: {
    name: "Cherry Parkes",
    description: "The tech-saavy Huskies gather here to build and program in the many Computer, Tech & Media Labs found here!",
    image: "images/gallery/cp/cp1.jpg",
    link: "#building-CP"
  },
  Court17: {
    name: "Court 17 Student Housing",
    description: "Every Husky needs a home base! Here is where the Huskies live and sleep!",
    image: "images/gallery/court17/court1.jpg",
    link: "#building-Court17"
  },
  DOU: {
    name: "Dougan",
    description: "Science labs, research, and STEM resources.",
    image: "images/gallery/dou/dou1.jpg",
    link: "#building-DOU"
  },
  GWP: {
    name: "Garretson Woodruff & Pratt",
    description: "If there are any Huskies in need of Academic Guidance, give GWP a visit! Academic Advising Offices are located here!",
    image: "images/gallery/gwp/gwp1.jpg",
    link: "#building-GWP"
  },
  HAR: {
    name: "Harmon",
    description: "Science labs and STEM-focused facilities.",
    image: "images/gallery/har/har1.jpg",
    link: "#building-HAR"
  },
  JOY: {
    name: "Russell T. Joy",
    description: "Connected to the WCG building, the JOY building is where a multitude of classrooms are!",
    image: "images/gallery/joy/joy1.jpg",
    link: "#building-JOY"
  },
  KEY: {
    name: "Keystone",
    description: "Home of the beautiful Carwein Auditorium!",
    image: "images/gallery/key/key1.jpg",
    link: "#building-KEY"
  },
  LBH: {
    name: "Laborers Hall",
    description: "Located next to the UWY, this small building is currently not in use to Huskies but is more for construction workers.",
    image: "images/gallery/lbh/lbh1.jpg",
    link: "#building-LBH"
  },
  MAT: {
    name: "Mattress Factory",
    description: "The main hub for Husky Relaxation! Here, the Dawg House welcomes Huskies with billiards, video games and a hot dog restauraunt built right into the Building!",
    image: "images/gallery/mat/mat1.jpg",
    link: "#building-MAT"
  },
  MDS: {
    name: "McDonald Smith",
    description: "Connected to the Cherry Parkes building, this is where the Campus Safety & Transportation Services Offices are located!",
    image: "images/gallery/mds/mds1.jpg",
    link: "#building-MDS"
  },
  MLG: {
    name: "Milgard Hall",
    description: "The Business Major Huskies gather here! With centers for Business Analytics, Accounting & Success!",
    image: "images/gallery/mlg/mlg1.jpg",
    link: "#building-MLG"
  },
  WPH: {
    name: "William W. Philip Hall",
    description: "This is where large scale conferences and events are held. Huskies Assemble!",
    image: "images/gallery/wph/wph1.jpg",
    link: "#building-WPH"
  },
  PNK: {
    name: "Pinkerton",
    description: "If you're a Husky focused on Urban Studies and in need of advising, give this building a visit!",
    image: "images/gallery/pnk/pnk1.jpg",
    link: "#building-PNK"
  },
  SCI: {
    name: "Science Building",
    description: "If you are a Husky with a science related major, you will love to visit here! Filled to the brim with Science labs, ranging from Chemistry to Biology, to Physics to Geology!",
    image: "images/gallery/sci/sci1.jpg",
    link: "#building-SCI"
  },
  SNO: {
    name: "Snoqualmie Building",
    description: "With a Makers space, reading room, and center for student involvement in equality, the SNO building welcomes all huskies with open paws!",
    image: "images/gallery/sno/sno1.jpg",
    link: "#building-SNO"
  },
  TPS: {
    name: "Tacoma Paper & Stationery",
    description: "Feeling hungry or need to study? Come grab a bite to eat at the Student Convenience Store and come hang out or study at the commons!",
    image: "images/gallery/tps/tps1.jpg",
    link: "#building-TPS"
  },
  TLB: {
    name: "Tioga Library Building",
    description: "Shh... this is where the Library is, where our studious Huskies read & study",
    image: "images/gallery/tlb/tlb1.jpg",
    link: "#building-TLB"
  },
  UWY: {
    name: "University Y Student Center",
    description: "This building has it all! Huskies who want to work out, play a game of basketball, or relax in the recreation center, make your way here!",
    image: "images/gallery/uwy/uwy1.jpg",
    link: "#building-UWY"
  },
  WG: {
    name: "Walsh Gardner",
    description: "Need something printed? Need a computer problem fixed? Look no further, Huskies! The WG building has you covered!",
    image: "images/gallery/wg/wg1.jpg",
    link: "#building-WG"
  },
  WCG: {
    name: "West Coast Grocery",
    description: "Huskies looking to pursue a future in Education, Social Work and Criminal Justice should visit this building!",
    image: "images/gallery/wcg/wcg1.jpg",
    link: "#building-WCG"
  },
  WHT: {
    name: "The Whitney",
    description: "Located deep into the campus, this historic building houses classrooms and a seminar room!",
    image: "images/gallery/wht/wht1.jpg",
    link: "#building-WHT"
  }
};


  const data = buildings[code];

  if (data) {
    title.textContent = data.name;
    desc.textContent = data.description;
    img.src = data.image;
    img.alt = data.name;

    // Update href and set scroll behavior
    link.href = "#building-" + code;
    link.onclick = function (e) {
    e.preventDefault();
    closeSidePanel();
    showSection('buildings'); // make sure this un-hides the section

    setTimeout(() => {
        console.log("Scrolling to:", "building-" + code);

        const target = document.getElementById("building-" + code);

        if (target) {
        target.scrollIntoView({
          behavior: "smooth", 
          block: "center" });
        }
    }, 300); // delay to match panel close animation
    }; 

    panel.classList.add("open");
  }
}

function closeSidePanel() {
  const panel = document.getElementById('side-panel');
  panel.classList.remove("open");
}



