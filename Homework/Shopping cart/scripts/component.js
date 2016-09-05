// родительский класс раздающий свою функциональность всем компонентам (b_menu, b_form, b_gallery, ...)

function Component(){
    //this.asd = null;
    this.elem = null;
    this.init = function(sSelector){
        this.elem = $(sSelector);
        if(this.elem.length == 0){  //elem not found or (!this.elem.length)
            alert('Невозможно найти html элемент по селектору: ' + sSelector)
        }
    }
    this.find = function(sSelector){
        return this.elem.find(sSelector);
    }
}


/*The planet does not need more 'successful people'. The planet desperately needs more peacemakers, healers, restorers, storytellers and lovers of all kinds. It needs people to live well in their places. It needs people with moral courage willing to join the struggle to make the world habitable and humane and these qualities have little to do with success as our culture is the set.

	— Tenzin Gyatso, The 14th Dalai Lama

	Sample text for testing:
	abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ
	0123456789 +-.,!@#$%^&*();\/|<>"'
	12345 -98.7 3.141 .6180 9,000 +42
	555.123.4567	+1-(800)-555-2468
	foo@demo.net	bar.ba@test.co.uk
	www.demo.com	http://foo.co.uk/
	http://someurl.com/foo.html?q=bar*/