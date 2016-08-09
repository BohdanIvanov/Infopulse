function Component(){
    this.elem = null;
    this.init = function(sSelector){
        this.elem = $(sSelector);
        if(this.elem.length == 0){
            alert('No match name: ' + sSelector);
        }
    }
    
    this.find = function(sSelector){
        return this.elem.find(sSelector);
    }
}