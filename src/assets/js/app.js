'use strict';

const render = (root) => {

	root.empty();
	const wrapper = $('<div class="wrapper"></div>');

	const update = function() {
		render(root);
	};

	wrapper.append(Header(update));
	wrapper.append(Frontpage(update));
	wrapper.append(Mundosection(update));
	wrapper.append(Tecnologiasection(update));
	wrapper.append(Educacionsection(update));
	root.append(wrapper);

};

const state = {
	news: null
};

$( _ => {

	$.get('api/news', function(data){
		state.news = data

		
	const root = $('.root');
	render(root)

	});

});
