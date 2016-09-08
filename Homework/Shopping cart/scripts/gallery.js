function b_gallery(sSelector){
    var g = this;
    
    //Data
    //g.gallery = $(sSelector);
    /*g.find = function (sSelector){
        return g.gallery.find(sSelector);
    }*/
    g.init(sSelector);
    g.pictures			       = g.find('.b-picture');                          //фото в галерее
    g.arrowPrev		           = g.find('.b-preview__arrow_prev');              //стрелка на следующее фото	
    g.arrowNext		           = g.find('.b-preview__arrow_next');              //стрелка на предыдущее фото
    g.preview			       = g.find('.b-preview');                          //блок просмотра
    g.previewImage	           = g.find('.b-preview__image');                   //большое фото
    g.previewText              = g.find('.b-preview__text');                    //текст под фото                                        
    g.current 			       = 0;                                             //номер текущего фото
    g.qty				       = g.pictures.length;                             //количество фотографий можно узнать из g.pictures через length
    
    
    g.showPicture   = function(){
        //g.current = g.pictures.index($(this));        // узнать номер текущего фото
        g.current = g.pictures.index(this);             // узнать номер текущего фото, можно без $
        g.showImage(0);                                 // показали текущее изображение
        g.preview.addClass('b-preview_shown');          // показ блока просмотра
    }	
    
    g.showImage     = function(iShift){                 // выполнить смещение, показать фото
        g.current += iShift;
       var jqPicture = g.pictures.eq(g.current)         // доступ к картинке по номеру
        , jqSmallImage = jqPicture.find('.b-picture__image')
        , sBigImagePath = jqSmallImage.attr('src').replace('small_', '')
        ;
    g.previewImage.attr('src', sBigImagePath);
    g.previewText.text('Pic. ' + (g.current + 1));
        
    }
    
    g.showPrevious  = function(){
        if(g.current <= g.qty - 1 && g.current > 0){
        g.showImage(-1);
        }
    }	
    g.showNext      = function(){
        if(g.current < g.qty - 1 && g.current >= 0){
        g.showImage(+1);
        }
    }
    g.closePreview  = function(event){
        // event.target - обьект JS
        // g.elem.find(event.target) - обьект JQ
        if(g.find(event.target).hasClass('b-preview')){
            g.preview.removeClass('b-preview_shown');
        }
        
    }	
    
    
    g.pictures  .click(g.showPicture);	//при клике по картинке - показать изображение
    g.arrowPrev .click(g.showPrevious);	//при клике на стрелке предыдущ. - показать предыдущее изображение
    g.arrowNext .click(g.showNext);		//при клике на стрелке след. - показать следующее изображение
    g.preview   .click(g.closePreview);	//при клике на блоке просмотра - закрыть блок просмотра

}

b_gallery.prototype = new Component();   // наследование другого класса Component

// b_gallery.prototype = new Component();
/*g.elem.find(event.target).hasClass('b-preview')
			 $(event.target).hasClass('b-preview')
			 
доступимся к целевому HTML-элементу события, узнаем имеет ли он класс "b-preview"

целевому HTML-элементу события = тот с которым событие произошло непосредственно*/