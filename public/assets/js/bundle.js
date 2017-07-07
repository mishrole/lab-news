'use strict';

const render = (root) => {

	root.empty();
	const wrapper = $('<div class="wrapper"></div>');

	const update = function() {
		render(root);
	};

	wrapper.append(Header(update));
	wrapper.append(Frontpage(update));
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

'use strict';

const Frontpage = (update) => {

	const container = $('<div class="container"></div>');
	const principalRow = $('<div class="row"></div>');
	const principal = $('<div class="principal col s12"></div>');
	const imagePrincipal = $('<div class="image news-0"></div>');
	//const imagePrincipal = $('<img src="assets/img/news/news-0.png" alt="news-0" class="responsive-img">');
	const textContainer = $('<div class="text-container"></div>');
	const titlePrincipal = $('<p class="title col s12 l9">'+state.news[0].title+'</p>');
	const briefPrincipal = $('<p class="subtitle col l6 hide-on-small-only">'+state.news[0].brief+'</p>');

	const secondaryContainer = $('<div class="container"></div>');
	const secondaryRow = $('<div class="row"></div>');
	const secondary = $('<div class="secondary"></div>');
	const today1 = $('<div class="col s12 l6"></div>');
	const today2 = $('<div class="col s12 l3"></div>');
	const today3 = $('<div class="col s12 l3"></div>');
	const today1Img = $('<div class="image news-1"></div>');
	const today2Img = $('<div class="image news-2"></div>');
	const today3Img = $('<div class="image news-3"></div>');
	const today1Text = $('<div class="col s12 l7"><p sub-text">'+state.news[1].title+'</p></div>');
	const today2Text = $('<div class="col s12 l8"><p sub-text">'+state.news[2].title+'</p></div>');
	const today3Text = $('<div class="col s12 l9"><p sub-text">'+state.news[3].title+'</p></div>');

	textContainer.append(titlePrincipal, briefPrincipal);
	imagePrincipal.append(textContainer);
	principal.append(imagePrincipal);
	principalRow.append(principal);

	today1.append(today1Img, today1Text);
	today2.append(today2Img, today2Text);
	today3.append(today3Img, today3Text);

	secondary.append(today1,today2,today3);
	secondaryRow.append(secondary);

	container.append(principalRow,secondaryRow);
	return container;
}
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

	const menu = $('<div class="menu container hide-on-small-only"></div>');
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

'use strict';