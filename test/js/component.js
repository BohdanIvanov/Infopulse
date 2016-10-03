function Component(){
    this.elem = null;
    
    this.init = function(sSelector){
        this.elem = $(sSelector);
        if(!this.elem.length){
            alert("can't find html element on selector" + sSelector);
        }
    }
    
    this.find = function(sSelector){
     return this.elem.find(sSelector);
    }
}