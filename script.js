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

        //on click function
        function showBuildingInfo(buildingName) {
        alert("You clicked on: " + buildingName);
        }
