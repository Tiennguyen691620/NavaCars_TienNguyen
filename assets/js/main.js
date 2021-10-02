$( document ).ready(function() { 
    window.addEventListener('scroll', function(){
        let header = this.document.querySelector('header');
        let windowPosition = window.scrollY > 68;
        header.classList.toggle('scrolling-active', windowPosition);
    })

    var header = document.getElementById('header');
            var mobileMenu = document.getElementById('mobile-menu');
            var headerHeight = header.clientHeight
            
            mobileMenu.onclick = function(){
                var isClose = header.clientHeight === headerHeight;
                if(isClose){
                    header.style.height='auto';
                }else {
                    header.style.height = null;
                }
            }

});
