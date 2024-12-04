        //ChatGpt segített kártya kód
        const card = document.querySelector('.card');
        const rotationText = document.getElementById('rotation-values');

        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;

            const rotateX = -y * 10; // Adjust the multiplier for intensity
            const rotateY = x * 10; 

            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });