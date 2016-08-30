function Door(sSelector){
    //var f = $(this)
	this.door = $(sSelector);
    this.pol = 'close';			// closed
    this.size = 'small';
    this.color = 'red';
    this.option = $('select').children('option').attr('value');
    //this.door = $('.border');
    /*
    this.open = function(){
        this.door.removeClass(this.status).addClass('open');
        this.status = 'open';
    }
    
    this.close = function(){
        this.door.removeClass(this.status).addClass('close');
        this.status = 'close';
    }
    
    this.withoutHinges = function(){
        this.door.removeClass(this.status).addClass('without-hinges');
        this.status = 'without-hinges';
    }
	*/
	this.status = function (sNewStatus){
        this.door.removeClass(this.pol).addClass(sNewStatus);
        this.pol = sNewStatus;		
		}
    
    /*this.changeSize = function(){
        var selected = $('.b-form_label__size').find('option:selected')
			,sNewSize = selected.attr('value')
			;
        this.door.removeClass('b-door_' + this.size).addClass('b-door_' + sNewSize);
        this.size = sNewSize;
        
    }
    
    this.changeColor = function(){
        var selected = $('.b-form_label__color').find('option:selected')
			,sNewColor = selected.attr('value')
			;
        this.door.removeClass('b-door_' + this.color).addClass('b-door_' + sNewColor);
        this.color = sNewColor;
        
    }*/
    
    /*this.changeValue = function(value, key){
        var selected = $('.b-form_label__' + value).find('option:selected')
        , sNewValue = selected.attr('value')
        ;
        this.door.removeClass('b-door_' + key).addClass('b-door_' + sNewValue);
        this.color = sNewValue;
    }*/
    this.changeValue = function(value, key){
        var selected = $('.b-form_label__' + value).find('option:selected')
        , sNewValue = selected.attr('value')
        ;
        if(key == this.color){
        this.door.removeClass('b-door_' + key).addClass('b-door_' + sNewValue);
        this.color = sNewValue;
        }
        
        else if(key == this.size){
        this.door.removeClass('b-door_' + key).addClass('b-door_' + sNewValue);
        this.size = sNewValue;
        }
    }
    
    
    this.increaseBorder = function(){
        this.door.css({'border-width':'+=1px'});
    }
    
    this.decreaseBorder = function(){
        this.door.css({'border-width':'-=1px'});
    }
}