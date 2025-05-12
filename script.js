        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(function() {
                document.getElementById('loadingScreen').style.opacity = '0';
                setTimeout(function() {
                    document.getElementById('loadingScreen').style.display = 'none';
                }, 500);
            }, 1500);
        });

        function startAdventure() {
            // document.getElementById('glitchAudio').play();

            const cover = document.getElementById('cover');
            const glitchTransition = document.getElementById('glitch-transition');
            
            // Add glitch effect to cover
            cover.classList.add('glitch-effect');
            
            // Show glitch transition screen
            glitchTransition.style.opacity = '1';
            
            // Add scanlines effect
            const scanlines = document.createElement('div');
            scanlines.className = 'scanlines';
            glitchTransition.appendChild(scanlines);
            
            // Random glitch effects during transition
            const glitchInterval = setInterval(() => {
                const randomX = Math.random() * 10 - 5;
                const randomY = Math.random() * 10 - 5;
                glitchTransition.style.transform = `translate(${randomX}px, ${randomY}px)`;
            }, 50);
            
            setTimeout(() => {
                // Clear effects
                clearInterval(glitchInterval);
                cover.classList.add('hidden');
                document.getElementById('main-content').classList.remove('hidden');
                showSection('map');
                
                // Hide glitch transition
                setTimeout(() => {
                    glitchTransition.style.opacity = '0';
                    glitchTransition.style.transform = 'translate(0)';
                }, 500);
            }, 1500);
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
