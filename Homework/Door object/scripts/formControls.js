function doorControlsForm(sSelector){
	/* работает с формой которая управляет дверью
	Этот класс отвечает за интерфейс или же т.н.
	презентационную логику
	*/
    var f = this;
    f.form = $(sSelector);
    f.door = new Door('#door1');
    
    
    f.openDoor = function(){
        f.door.status('open');
    }
    
    f.closeDoor = function(){
        f.door.status('close');
    }
    
    f.withoutHinges = function(){
        f.door.status('without-hinges');
    }
    
    /*f.changeSize = function(){
        f.door.changeSize();
    }
    
    f.changeColor = function(){
        f.door.changeColor();
    }*/
    
    f.changeSize = function(){
        f.door.changeValue('size', f.door.size);
    }
    
    f.changeColor = function(){
        f.door.changeValue('color', f.door.color);
    }
    
    f.increaseBorder = function(){
        f.door.increaseBorder();
    }
    
    f.decreaseBorder = function(){
        f.door.decreaseBorder();
    }
    
    
    f.form.find('.b-form__button_open-door').click(f.openDoor);
    f.form.find('.b-form__button_closed-door').click(f.closeDoor);
    f.form.find('.b-form__button_door-hinges').click(f.withoutHinges);
    f.form.find('.b-form_label__size').change(f.changeSize);
    f.form.find('.b-form_label__color').change(f.changeColor);
    f.form.find('.b-form__button_increase').click(f.increaseBorder);
    f.form.find('.b-form__button_decrease').click(f.decreaseBorder);
}