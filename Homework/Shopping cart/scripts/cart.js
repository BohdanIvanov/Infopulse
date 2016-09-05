function cart(sSelector, sMinicartSelector){
	var c = this;
	
	// 1. Data ====================
	c.init(sSelector);
	
	c.minicart = $(sMinicartSelector);
    c.goods = c.minicart.find('.b-goods_cart');             // table goods in cart
    c.list = c.minicart.find('.b-minicart__list');          // list of goods in cart
    c.button = c.minicart.find('.b-minicart__button');
	c.cartData = { /*  iGoodId : iQty */ };
	
	// 2. Logic ===================
	c.add = function (event){
		event.preventDefault();			
		
		  var 
			 jqOrderForm = $(this)
            , jqGood = jqOrderForm.closest('.b-good');
        
        
        
        c.put(jqGood);
        //открыть список
        c.list.stop().slideDown();
		}
    
    c.increase = function(){
        

        }
        
    c.decrease = function(){
            
    }
    
    c.put = function(jqGood){
        	var		
			 iGoodId    = jqGood.attr('class').match(/b-good_id_([0-9]{1,8})/)[1]
			,iQty		= jqGood.find('.b-order-form__quantity').val()
		  , sGoodIdClassName = 'b-good_id_' + iGoodId
		c.cartData[iGoodId] = iQty;
        
        Cookies.set('goods', c.cartData, { expires: 14, path: '/' }); //    name of cookie choosing for yourself
        jqGood.addClass('b-good_in-cart');
        
        var jqCartGood = c.goods.find('.' + sGoodIdClassName)     //    find current good in the cart      
        
        if(!jqCartGood.length){         // no goods in cart
            //склонировать шаблонный ряд
            jqCartGood = c.goods.find('.b-good:first-child').clone().appendTo(c.goods); //copy of object in the memory
            //fill it with data from the product catalog
            //read the data from catalog
       
            //to write                              //to read
            jqCartGood.find('.b-good__name').html( jqGood.find('.b-good__name').html() ); //название
            jqCartGood.find('.b-good__price').html( jqGood.find('.b-good__price').html()); //цена
            jqCartGood.find('.b-good__image').attr('src', jqGood.find('.b-good__image').attr('src')); //фото
            jqCartGood.addClass(sGoodIdClassName);
        }
        
        // the product is already in cart
        jqCartGood.find('.b-order-form__quantity').val( jqGood.find('.b-order-form__quantity').val());//количество
    }
    c.toggleList = function(){
        c.list.slideToggle();
    }
    c.load = function(){
       c.cartData = Cookies.getJSON('goods') || {};       /*82=1 83=4*/
        
        $.each(c.cartData, function(iGoodId, iQty){
            var jqGood = c.find('.b-good_id_' + iGoodId);           //find the product in catalog
            jqGood.find('.b-order-form__quantity').val(iQty);
            c.put(jqGood);                                          //?
        });
    }
    
   
	
	// 3. Events ==================
	c.find('.b-order-form').on('submit', c.add);
    c.button.on('click', c.toggleList);
    c.find('.b-order-form__plus').on('click', c.increase);
    c.find('.b-order-form__minus').on('click', c.decrease);
    $(document).ready(c.load);                              //When document is ready - load a cart
}                                       

cart.prototype = new Component();