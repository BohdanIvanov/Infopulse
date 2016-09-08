function b_form(sSelector){
	var f = this;
	
	// 1. Data ====================
	// class_pointer.propertyName = null;
	f.form = $(sSelector);
	// 2. Logic ===================
	// class_pointer.methodName = function (){}
	f.val = function(sSelector){
		var jqField = f.form.find(sSelector)    				// поле текстовое, чекбоксы, селекты, радио
			, sFieldType = jqField.attr('type')
            , sFieldTag = jqField.prop('tagName')               //A, DIV, UL, INPUT, SELECT                                                  
			;				
																// отличать по типу и имени тега
																// Чекбоксы 
																// радио
		if(sFieldType == 'radio'){  							// если тип поля - радио
			//console.log(this,'\n',jqField);
			return jqField.filter(':checked').val();
            
		}
        
        else if(sFieldType == 'checkbox'){
            var sCheckboxes = '';
		
		jqField.filter(':checked').each(function(){
			var jqCheckbox = $(this);
			// ? :
			sCheckboxes += (sCheckboxes ? ',' : '') + jqCheckbox.val()
		  });
            return sCheckboxes;
        }
        
        else if(sFieldTag == 'SELECT'){
            return jqField.children('option').filter(':selected').html();
        }
        
		else{   												 // относиться к текстовому полю
			return jqField.val();
		}
																// sелекты
	}
	
	f.label = function(sSelector){
		return f.form.find(sSelector).html();
	}
	
	f.getLanguages = function(){
		
		var langs = settings.get('langs')
		var sLang = '';
		$.each(										// jquery перебиреи каждую пару
			langs									// в массиве языки	
			, function(sLangCode , sLangName){ 		// и сделай с кодом языка и назв. языка следующее..
			sLang += 								// в переменную языки дописываем в конец
			( sLang  								// если в языках что - то есть
			? "\n" 									// тогда перенос строки
			: "" 									// иначе ничего
			) 
			+ sLangCode 							// код языка
			+ " - " 								// дефис
			+ sLangName;							// название языка
		});
		return sLang;
	}
	
	f.showInfo = function (){
		
		
		alert(settings.get('b-form__yourform') + ':'
			+ '\n' + f.label('.b-form__label_name') + ':' + f.val('.b-form__name')
			+ '\n' + f.label('.b-form__label_surname') + ':' + f.val('.b-form__surname')
			+ '\n' + f.label('.b-form__label_fruit') + ':' + f.val('.b-form__fruit')
			+ '\n' + f.label('.b-form__label_season') + ':' + f.val('.b-form__season')
			+ '\n' + f.label('.b-form__label_animals') + ':' + f.val('.b-form__animals')
			+ '\n' + f.label('.b-form__label_review') + ':' + f.val('.b-form__review')
			+ '\n' + settings.get('b-form__languages') + ':\n' + f.getLanguages()
		);
	}
	
	// 3. Events ==================
	f.form.find('.b-form__ok-button').click(f.showInfo);
	

	}
	
	/*ДВЕРЬ	
§ толщина  § цвет § размер	
§ открыть § закрыть § снять с петель	

НОУТБУК	
§ диагональ § цвет § ОС	
§ включить § загрузить операционную систему § выключить § перезагрузить § ввести пароль (оригинал "123") § зайти в интернет § скачать файл § проверить почту § включить музыку § выключить музыку § распечатать документ*/