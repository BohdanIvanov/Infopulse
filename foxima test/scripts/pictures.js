function news(sSelector){
    var n = this;
    
    n.init(sSelector);
    n.items = n.find('.news-list__item');
    n.view = n.find('.news-mobile__view');
    
    n.viewAll = function(event){
        event.preventDefault();
       n.items.css({'display':'block'});
       n.view.css({'display':'none'});
    }

   n.view.click(n.viewAll); 
}

news.prototype = new Component();