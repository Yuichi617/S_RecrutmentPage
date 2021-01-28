'use strict'

{
    const header_nav_item = document.querySelectorAll(".header_nav_item");
    const global_nav_inner = document.querySelector(".global_nav_inner");
    const header_nav = document.querySelector("header nav");
    const nav_wrap = document.querySelector(".nav_wrap");

    function open_tabMenu() {
        // ウィンドウのオープン
        global_nav_inner.classList.add('active');
        nav_wrap.classList.add('show');
        header_nav.style.borderRadius = "50px 50px 0 0"
        global_nav_inner.style.height = "450px";

        // コンテントの表示
        const open_content = document.getElementById(this.dataset.id);
        open_content.style.visibility = "visible";

    }

    function close_tabMenu() {
        // ウィンドウのクローズ
        global_nav_inner.classList.remove('active');
        nav_wrap.classList.remove('show');
        header_nav.style.borderRadius = "50px"
        global_nav_inner.style.height = "0";

        //コンテントのクローズ
        const close_content = document.getElementById(this.dataset.id);
        close_content.style.visibility = "hidden";

    }

    header_nav_item.forEach(function(item){
        item.addEventListener("mouseover", open_tabMenu);
        item.addEventListener("mouseout", close_tabMenu);
    });

}