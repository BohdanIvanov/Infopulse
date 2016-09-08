function form_checker(sSelector){
    var f = this;
    // elem - общее наименование главного HTML-элемента для всех компонентов
    //f.elem      = $(sSelector);
    f.init(sSelector);
    //f.fields = f.form.find('.b-textfield');
    f.fields    = f.find('.b-textfield');
    f.errorMessage = f.find('.b-form__message_error');
    
    //logic
    f.check = function(event){
        event.preventDefault();  // предотвратить реакцию на событие по умолчанию
        
        var bFormError = false;
            
        f.fields.each(function(){
            
            var jqField = $(this)
            
            , sFieldName = jqField.attr('name')
            
            , sRegExp = settings.get('regexps')[sFieldName]
            
            , oRegExp = new RegExp(sRegExp)
            ;
            //if(!jqField.val()){                             // if there is NO field value or == ''
            if(!jqField.val().match(oRegExp)){                // if field value does not match regexp
                bFormError = true;                          // also has error(s)
                 jqField.addClass('b-textfield_error');
            }
            else{
                jqField.removeClass('b-textfield_error');
            }
        });
        
        if(bFormError){
            f.errorMessage.stop().slideDown();
        }
        
        else{
            f.errorMessage.stop().slideUp();
        }
    }
    
    
    
    //events
    f.elem.submit(f.check);
}

form_checker.prototype = new Component();

//[а-щьюяєіїґ']

/*найти:
все HTML атрибуты в коде       \w+\s?=\s?["]\S+["]|\w+\s?=\s?["]\S+((\s\S+)?)*["]  (\w+\s?=\s?["].+["])
все закрывающие теги в коде     (<\/[a-z0-9]*>)
день месяца                 ([0-3][1-9]\.[0-1][0-9]\.[1-2][0-9]{3})  (([0-2][0-9]|3[0-1])\.(0[1-9]|1[0-2])\.[1-2][0-9]{3})
год 1900-2016               (1[0-9]{3}-2[0-9]{3})  (19[0-9]{2})?-?(200[0-9]|201[0-6])?   ((19[0-9]{2}|200[0-9]|201[0-6])(-20[0-1][0-6])?)
упражнения из файла             ((\([0-9]{3}\)\s)?(([0-9]-?){6}[0-9]))   ((\([0-9]{3}\)\s)?([0-9-]{7,13}))
+ сайт упражнений http://regexone.com*/

/*Название товара [а-яё \-]{3,100}
Марка [a-z0-9\'\-\&\!\$]{2,100}
Цена ((\d){1,}\.?((\d))?{2})
описание (.){10,100}*/
