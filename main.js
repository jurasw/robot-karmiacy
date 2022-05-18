const menu = document.querySelector('.menu');
        const close = document.querySelector('.close');
        const nav = document.querySelector('nav');

        menu.addEventListener('click', () => {
            //When menu is clicked, it adds a new css class
            nav.classList.add('open-nav')
        })

        close.addEventListener('click', () => {
            //When close button is clicked, it removes the new css class
            nav.classList.remove('open-nav')
        })