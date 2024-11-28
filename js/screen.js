if (window.innerWidth >= 760) {
    let currentIndex = 0;
    const sections = document.querySelectorAll('.album-section');

    function updateSections(index) {
        sections.forEach((section, i) => {
            section.classList.remove('active', 'previous', 'next');
            if (i === index) {
                section.classList.add('active');
            } else if (i < index) {
                section.classList.add('previous');
            } else {
                section.classList.add('next');
            }
        });
    }

    document.addEventListener('wheel', (e) => {
        
        if (e.deltaY > 0 && currentIndex < sections.length - 1) {
            currentIndex++;
        } else if (e.deltaY < 0 && currentIndex > 0) {
            currentIndex--;
        }
        updateSections(currentIndex);
    });

    updateSections(currentIndex);
}