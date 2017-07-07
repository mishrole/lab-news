'use strict';

const Header = (update) => {
	const header = $('<header></header>');
	const h1 = $('<h1>Texto de prueba</h1>')

	header.append(h1);
	return header;
};
