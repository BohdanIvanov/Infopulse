function b_menu(sSelector){
	var m = this;
	
	// 1. Data ====================
	m.menu = $(sSelector);
	
	// 2. Logic ===================
	// class_pointer.methodName = function (){}
	m.toggleSubmenu = function(oMenuItem){
		console.log('toggleSubmenu');
		//$(this).children('.b-submenu').stop().slideToggle(); this ссылается на текущий класс b_menu см. this.png
		$(oMenuItem).children('.b-submenu').stop().slideToggle();
	}
	
	m.showSubmenu = function (){
		// Подменю текущего пункта меню - показать
		//$(this).children('.b-submenu').show();
		//$(this).children('.b-submenu').stop().slideDown();
		$(this).children('.b-submenu')
			.css({'display': 'block'})
			.stop().animate({       			// для css свойств из этого массива
			"opacity" : 1						// Прозрачность будет равна 1
			}			
			,			
			400									// за 400 милисекунд
			);
		//m.toggleSubmenu(this);		
	}
	
	m.hideSubmenu = function (){
		// Подменю текущего пункта меню - скрыть
		//$(this).children('.b-submenu').hide();
		//$(this).children('.b-submenu').stop().slideUp();
		//m.toggleSubmenu(this);
		$(this).children('.b-submenu')
			.stop().animate({       			// для css свойств из этого массива
			"opacity" : 0						// Прозрачность будет равна 0
			}			
			,			
			400
			,								// за 400 милисекунд
			function(){
				$(this).css({'display': 'none'});
				}						
			)
		;
	}
	
	
	
	// 3. Events ==================
	// class_pointer.jqHTMLElement.eventName(class_pointer.eventHandler);
	
	
	m.menu.find('.b-menu__item')	// для пункта меню
		.mouseover(m.showSubmenu)	// при наведении мыши - показать подменю
		.mouseout(m.hideSubmenu);	// при убирании мыши - скрыть подменю
	}

/*Меню
§	вертикальное
§	аккордеон
§	закладки
§	выезжающее из-за боковушки страницы
§	для мобильного устройства */