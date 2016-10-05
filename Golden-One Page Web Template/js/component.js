function Component(){
    this.elem = null;
    
    this.init = function(sSelector){
        this.elem = $(sSelector);
        if(!this.elem.length){
            alert('Class ' + sSelector + "doesn't excist");
        }
    }
    
    this.find = function(sSelector){
        return this.elem.find(sSelector);
    }
}