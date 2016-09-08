function weboap(sSelector){
	var w = this;
	
	w.tbls = $(sSelector);
	
	
	w.toggleDetails = function ()
	{
	$(this).closest('tr').siblings('tr:nth-child(n+4)').toggle();
	}
	
	
	w.tbls.find('tr:nth-child(1) .condition').bind('click', w.toggleDetails);
	}