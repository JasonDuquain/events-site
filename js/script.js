

let accordionItems = document.querySelectorAll('.about__accordion-item');

accordionItems.forEach((el) => {
    el.addEventListener('click', (e) => {
        if ( e.target.classList.contains('about__accordion-item')) {
        let height = e.target.scrollHeight;
            for (let i = 0; i < accordionItems.length; i++) {
                accordionItems[i].classList.remove('js--visible');
                e.target.classList.add('js--visible');
                e.target.style.setProperty('height', height + 'px');
                
                if (!accordionItems[i].classList.contains('js--visible')) {
                    accordionItems[i].style.setProperty('height', 0);
                }
            }
            
            
           
        }
    });
});


