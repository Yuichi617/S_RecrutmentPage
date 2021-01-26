'use strict'

{
    const menu = document.getElementById('menu');
    const menu_overlay = document.querySelector('.menu-overlay')
    const menu_close = document.getElementById('menu-close')
    const menu_wrap = document.querySelector('.menu-wrap')

    // メニューを開く
    menu.addEventListener('click', () => {
        menu_overlay.classList.add('show');
        menu_wrap.classList.add('show');
    })

    // メニューを閉じる
    menu_close.addEventListener('click', () => {
        menu_overlay.classList.remove('show');
        menu_wrap.classList.remove('show');
    })

    // 背景をクリックしてもメニューが閉じるようにする
    menu_wrap.addEventListener('click', () => {
        if(menu_wrap.classList.contains('show')){
            menu_overlay.classList.remove('show');
            menu_wrap.classList.remove('show');
        }
    })
}