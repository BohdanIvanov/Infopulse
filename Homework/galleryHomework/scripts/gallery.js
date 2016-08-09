function b_gallery(sSelector){
    var g = this;
    
    //Data
    g.init(sSelector);
    g.pictures			       = g.find('.b-picture');                          //photo in gallery
    g.arrowPrev		           = g.find('.b-preview__arrow_prev');              //next photo	
    g.arrowNext		           = g.find('.b-preview__arrow_next');              //previous photo
    g.preview			       = g.find('.b-preview');                          //preview block
    g.previewImage	           = g.find('.b-preview__image');                   //preview photo
    g.previewText              = g.find('.b-preview__text');                    //text for pic
    g.current 			       = 0;                                             //current photo number
    g.qty				       = g.pictures.length;                             // length of photos
    
    
    g.showPicture   = function(){
        g.current = g.pictures.index(this);
        g.showImage(0);
        g.preview.addClass('b-preview_shown');

    }	
    
    g.showImage     = function(iShift){
        g.current += iShift;
        var jqPicture = g.pictures.eq(g.current)
        , jqSmallImage = jqPicture.find('.b-picture__image')
        , sBigImagePath = jqSmallImage.attr('src').replace('small_', '')
        ;
        g.previewImage.attr('src', sBigImagePath);
        g.previewText.text('Pic. ' + (g.current +1));
    }
    g.showPrevious  = function(){
        if(g.current <= g.qty -1 && g.current > 0){
            g.showImage(-1);
        }
    }	
    g.showNext      = function(){
        if(g.current < g.qty -1 && g.current >= 0)
        g.showImage(+1); 
    }
    g.closePreview  = function(event){
        if(g.elem.find(event.target).hasClass('b-preview')){
            g.preview.removeClass('b-preview_shown');
        }
    }	
    
    
    g.pictures  .click(g.showPicture);	//при клике по картинке - показать изображение
    g.arrowPrev .click(g.showPrevious);	//при клике на стрелке предыдущ. - показать предыдущее изображение
    g.arrowNext .click(g.showNext);		//при клике на стрелке след. - показать следующее изображение
    g.preview   .click(g.closePreview);	//при клике на блоке просмотра - закрыть блок просмотра

}

b_gallery.prototype = new Component();