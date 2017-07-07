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
	data: null
};

$( _ => {

	$.get('api/news', function(data){
		state.data = data
	});

	const root = $('.root');
	render(root)

});
