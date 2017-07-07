'use strict';

const Header = (update) => {
	const top = $('<div class="top-bar container"></div>')
	const column = $('<div class="col s12"></div>');
	const options = $('<div class="options col s6"></div>');
	const sections = $('<a href="" class="btn__sections lab-grey"><img src="assets/img/menu.png" alt="menu"><span>Sections</span></a>');
	const search = $('<a href="" class="btn__search lab-grey"><img src="assets/img/search.png" alt="search"><span>Social</span></a>');
	const social = $('<div class="social col s6 right"></div>');
	const facebook = $('<img src="assets/img/fb.png" alt="facebook logo">');
	const twitter = $('<img src="assets/img/tw.png" alt="twitter logo">');
	const linkedin = $('<img src="assets/img/in.png" alt="linkedin logo">');
	const row = $('<div class="row"></div>');
	const header = $('<header></header>');
	const main = $('<div class="logo-main text-center"></div>');
	const logo = $('<img src="assets/img/logoicon.png" alt="logo">');
	const date = $('<p>Lunes, Junio 12 de 2017 | <img src="assets/img/cloud.png" alt="cloud"> 22°</p>');

	const menu = $('<div class="menu container"></div>');
	const ul = $('<ul></ul>');
	const ultimo = $('<li><a href="">Lo último</a></li>');
	const opinion = $('<li><a href="">Opinión</a></li>');
	const cultura = $('<li><a href="">Cultura</a></li>');
	const peru = $('<li><a href="">Perú</a></li>');
	const tecnologia = $('<li><a href="">Tecnología</a></li>');
	const mundo = $('<li><a href="">Mundo</a></li>');
	const economia = $('<li><a href="">Economía</a></li>');
	const lifestyle = $('<li><a href="">Lifestyle</a></li>');
	const deporte = $('<li><a href="">Deporte</a></li>');

	social.append(facebook,twitter,linkedin);
	options.append(sections,search);
	column.append(options,social);
	row.append(column);
	top.append(row);
	main.append(logo,date);
	ul.append(ultimo,opinion,cultura,peru,tecnologia,mundo,economia,lifestyle,deporte);
	menu.append(ul);
	header.append(top,main,menu);

	return header;
};
