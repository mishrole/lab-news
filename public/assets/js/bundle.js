'use strict';

const render = (root) => {

	root.empty();
	const wrapper = $('<div class="wrapper"></div>');

	const update = function() {
		render(root);
	};

	wrapper.append(Header(update));
	root.append(wrapper);

};

const state = {
	news: null
};

$( _ => {

	$.get('api/news', function(data){
		state.news = data
	});

	const root = $('.root');
	render(root)

});

'use strict';

const Header = (update) => {
	const header = $('<header></header>');
	const h1 = $('<h1>Texto de prueba</h1>')

	header.append(h1);
	return header;
};
