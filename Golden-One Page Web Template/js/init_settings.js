var _page_settings = {
	 'b-form__yourform' 	: 'Ваша форма'
	,'b-form__languages' 	: 'Языки'
	,'langs' : {							
		 "ru"	: "Русский"
		,"en"	: "Английский"
		,"uk"	: "Украинский"
		,"de"	: "Немецкий"
		}
    ,'regexps'	: {
		 'name'			: '^[A-Z][a-z\\- ]{1,100}$'
		,'email'		: '^[a-z0-9\\-_\\.]{2,64}@[a-z0-9]{1,64}\\.[a-z\\-]{2,20}$'
		,'subject'		: '^[a-z0-9]{1,100}$'
		,'message'	    : '^[a-z0-9\\-_\\.]{1,400}$'
		}
	};
// инициализировать
settings.init(_page_settings);