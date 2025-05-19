
       
       
       
       document.addEventListener('DOMContentLoaded', function() {
            setTimeout(function() {
                document.getElementById('loadingScreen').style.opacity = '0';
                setTimeout(function() {
                    document.getElementById('loadingScreen').style.display = 'none';
                }, 500);
            }, 1500);
        });


        document.addEventListener('DOMContentLoaded', function() {
            const progressBar = document.querySelector('.progress-inner');
            let progress = 0;
            
            const fakeLoad = setInterval(() => {
                progress += Math.random() * 10;
                if(progress >= 100) {
                    progress = 100;
                    clearInterval(fakeLoad);
                }
                progressBar.style.width = progress + '%';
            }, 150);

            setTimeout(function() {
                document.getElementById('loadingScreen').style.opacity = '0';
                setTimeout(function() {
                    document.getElementById('loadingScreen').style.display = 'none';
                }, 1000);
            }, 3000);
        });
      
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
            document.getElementById('earth-section').classList.add('hidden');  // Hide earth background
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
                }, 2600); // Matches animation duration
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
            
            // Add comic "sound effects" to buttons
            const buttons = document.querySelectorAll('.comic-button');
            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    const sounds = ['POW!', 'BAM!', 'ZAP!', 'BOOM!', 'WHAM!'];
                    const effect = document.createElement('div');
                    effect.className = 'action-line absolute';
                    effect.textContent = sounds[Math.floor(Math.random() * sounds.length)];
                    effect.style.left = `${Math.random() * 80 + 10}%`;
                    effect.style.top = `${Math.random() * 80 + 10}%`;
                    button.parentElement.appendChild(effect);
                    
                    setTimeout(() => {
                        effect.remove();
                    }, 1000);
                });
            });
        });

        // When the document is loaded, load the interactive map
document.addEventListener('DOMContentLoaded', () => {
    fetch('interactive-map.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('map-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading map:', error));
});

// Show building info inside side panel
function showBuildingInfo(code) {
  const panel = document.getElementById('side-panel');
  const title = document.getElementById('buildingTitle');
  const desc = document.getElementById('buildingDescription');
  const img = document.getElementById('buildingImage');
  const link = document.getElementById('learnMoreLink');

  const buildings = {
  BB: {
    name: "Birmingham Block",
    description: "Features classrooms, computer labs, and study spaces.",
    image: "images/buildings/bb.jpg",
    link: "#building-BB"
  },
  BHS: {
    name: "Birmingham Hay & Seed",
    description: "Home to student services, advising, and registration.",
    image: "images/buildings/bhs.jpg",
    link: "#building-BHS"
  },
  CP: {
    name: "Cherry Parkes",
    description: "Focuses on Computer Science, Engineering, and Tech Labs.",
    image: "images/buildings/cp.jpg",
    link: "#building-CP"
  },
  Court17: {
    name: "Court 17 Student Housing",
    description: "Includes Writing Center, Tutoring, and Academic Support.",
    image: "images/buildings/court.jpg",
    link: "#building-Court17"
  },
  DOU: {
    name: "Dougan",
    description: "Science labs, research, and STEM resources.",
    image: "images/buildings/dougan.jpg",
    link: "#building-DOU"
  },
  GWP: {
    name: "Garretson Woodruff & Pratt",
    description: "Library, study rooms, and research help.",
    image: "images/buildings/gwp.jpg",
    link: "#building-GWP"
  },
  HAR: {
    name: "Harmon",
    description: "Science labs and STEM-focused facilities.",
    image: "images/buildings/har.jpg",
    link: "#building-HAR"
  },
  JOY: {
    name: "Russell T. Joy",
    description: "Houses lecture halls and general classrooms.",
    image: "images/buildings/joy.jpg",
    link: "#building-JOY"
  },
  KEY: {
    name: "Keystone",
    description: "Science and research labs.",
    image: "images/buildings/key.jpg",
    link: "#building-KEY"
  },
  LBH: {
    name: "Laborers Hall",
    description: "STEM resources and research rooms.",
    image: "images/buildings/lab.jpg",
    link: "#building-LAB"
  },
  MAT: {
    name: "Mattress Factory",
    description: "Labs and experimental workspaces.",
    image: "images/buildings/mat.jpg",
    link: "#building-MAT"
  },
  MDS: {
    name: "McDonald Smith",
    description: "Science and research-related classrooms.",
    image: "images/buildings/mds.jpg",
    link: "#building-MDS"
  },
  MLG: {
    name: "Milgard Hall",
    description: "STEM and business hub.",
    image: "images/buildings/mlg.jpg",
    link: "#building-MLG"
  },
  WPH: {
    name: "William W. Philip Hall",
    description: "Public events and STEM programs.",
    image: "images/buildings/wph.jpg",
    link: "#building-WPH"
  },
  PNK: {
    name: "Pinkerton",
    description: "Home to advanced labs and classrooms.",
    image: "images/buildings/pnk.jpg",
    link: "#building-PNK"
  },
  SCI: {
    name: "Science Building",
    description: "Dedicated to scientific research and education.",
    image: "images/buildings/sci.jpg",
    link: "#building-SCI"
  },
  SNO: {
    name: "Snoqualmie Building",
    description: "Linked to academic services and research.",
    image: "images/buildings/sno.jpg",
    link: "#building-SNO"
  },
  TPS: {
    name: "Tacoma Paper & Stationery",
    description: "Facilities for STEM and innovation.",
    image: "images/buildings/tps.jpg",
    link: "#building-TPS"
  },
  TLB: {
    name: "Tioga Library Building",
    description: "Library services and quiet study areas.",
    image: "images/buildings/tlb.jpg",
    link: "#building-TLB"
  },
  UWY: {
    name: "University Y Student Center",
    description: "Student recreation, fitness, and services.",
    image: "images/buildings/uwy.jpg",
    link: "#building-UWY"
  },
  WG: {
    name: "Walsh Gardner",
    description: "Research support and classroom facilities.",
    image: "images/buildings/wg.jpg",
    link: "#building-WG"
  },
  WCG: {
    name: "West Coast Grocery",
    description: "Mixed-use academic and resource building.",
    image: "images/buildings/wcg.jpg",
    link: "#building-WCG"
  },
  WHT: {
    name: "The Whitney",
    description: "Labs and classroom spaces.",
    image: "images/buildings/wht.jpg",
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
        const target = document.getElementById("building-" + code);
        if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });

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






