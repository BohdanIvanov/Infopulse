function d_door(sSelector/* , oOptions */){
	var d = this;
	
	// 1. Data ====================
	d.door 		= $(sSelector);
    d.status 	= "close";						//d.status 	= ('open close without-hinges');
    d.size 		= 'small';
    d.color     = 'red';
	
	// d.changeStatus('status', 'close');
	// d.changeStatus('size', 'small');
	d.thickness = $('.border');

	// 2. Logic ===================
	// class_pointer.methodName = function (){}
    d.changeColor = function(){
            var selected = $(this).find('option:selected')
            , sNewColor = selected.attr('name')
            ;
        $('.b-door').removeClass('b-door_red b-door_blue b-door_green');
        $('.b-door').addClass('b-door_' + sNewColor);
            
        
    }
    
    d.changeSize = function(){
        var selected = $(this).find('option:selected')
			,sNewSize = selected.attr('value')
			;
        $('.b-door').removeClass('b-door_small b-door_middle b-door_large');
        $('.b-door').addClass('b-door_' + sNewSize);
			//.removeClass('b-door_' + d.size)
    }
    
	d.open = function(){
        $('.b-door').removeClass(d.status).addClass('open');
        d.status = 'open';
    }
 
    d.close = function(){
        //d.status.removeClass('open without-hinges');
         $('.b-door').removeClass(d.status).addClass('close');
         d.status = 'close';
    }
    
    d.doorWithoutHinges = function(){
       // d.status.removeClass('close open');
        $('.b-door').removeClass(d.status).addClass('without-hinges');
        d.status = 'without-hinges';
    }
	
	d.increaseBorder = function(){
		d.thickness.css({'border-width':'+=1px'});
	}
	
	d.decreaseBorder = function(){
		d.thickness.css({'border-width':'-=1px'});
	}
	
	// 3. Events ==================
	// class_pointer.jqHTMLElement.eventName(class_pointer.eventHandler);
	// при наведении мыши на пункт меню - показать подменю
	d.door.find('.b-form__button_open-door').click(d.open);
	d.door.find('.b-form__button_closed-door').click(d.close);
	d.door.find('.b-form__button_door-hinges').click(d.doorWithoutHinges);
	d.door.find('.b-form__button_increase').click(d.increaseBorder);
	d.door.find('.b-form__button_decrease').click(d.decreaseBorder);
    d.door.find('.b-form_label__color').change(d.changeColor);
    d.door.find('.b-form_label__size').change(d.changeSize);

	}

/*Меню
§	вертикальное
§	аккордеон
§	закладки
§	выезжающее из-за боковушки страницы
§	для мобильного устройства */