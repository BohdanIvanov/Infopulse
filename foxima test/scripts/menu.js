function menu(sSelector){
    var m = this;
    
    m.init(sSelector);
    m.mobileIcon = m.find('.mobile-menu');
    m.navMenu = m.find('.nav');
    m.pictures = m.find('.news-list__item_img');
    
    m.changePic = function(){
        var sPath = m.pictures.attr('src'),
            sNewPath = sPath + '-small';
        m.pictures.attr('src', sNewPath);
    }
    
    
    //logic
    m.menuToggle = function(){
        m.navMenu.toggleClass('active');
    }
    
    m.changeIcon = function(){
        $(this).toggleClass('open');
    }
    
    
    //events
    m.mobileIcon.click(m.menuToggle);
    m.mobileIcon.click(m.changeIcon);
}

menu.prototype = new Component();