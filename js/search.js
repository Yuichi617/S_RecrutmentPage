'use strict'

{
    const search = document.getElementById('search');
    const search_overlay = document.querySelector('.search-overlay')
    const search_close = document.getElementById('search-close')

    search.addEventListener('click', () => {
        search_overlay.classList.add('show');
    })

    search_close.addEventListener('click', () => {
        search_overlay.classList.remove('show');
    })
}