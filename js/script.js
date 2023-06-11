'use strict';

 let menu = document.querySelector('.menu'),
    navvlinks = document.querySelector('nav ul');

    menu.onclick = function(){
        navvlinks.classList.toggle('active')
    }

