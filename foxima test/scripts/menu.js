function menu(sSelector){
    var m = this;
    
    m.init(sSelector);
    m.mobileIcon = m.find('.mobile-menu');
    m.navMenu = m.find('.nav');
    
    
    //logic
    m.menuToggle = function(){
        m.navMenu.toggleClass('active');
    }
    
    
    //events
    m.mobileIcon.click(m.menuToggle);
}

menu.prototype = new Component();