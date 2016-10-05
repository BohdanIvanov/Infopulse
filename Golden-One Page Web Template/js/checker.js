function checker(sSelector){
    var f = this;
    
    f.init(sSelector);
    f.fields = f.find('.b-textfield');
    f.errorMessage = f.find('.b-form__message_error');
    
    //logic
    f.check = function(event){
        event.preventDefault();
        
        var bFormError = false;
        
        f.fields.each(function(){
           
            var jqField = $(this)
            , sFieldName = jqField.attr('name')
            , sRegExp = settings.get('regexps')[sFieldName]
            , oRegExp = new RegExp(sRegExp);
            
            if(!jqField.val().match(oRegExp)){
                bFormError = true;
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

checker.prototype = new Component();