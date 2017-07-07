'use strict';

const Frontpage = (update) => {

	const principalContainer = $('<div class="container"></div>');
	const principalRow = $('<div class="row"></div>');
	const principal = $('<div class="principal col s12"></div>');
	const imagePrincipal = $('<img src="assets/img/news/news-0.png" alt="news-0" class="responsive-img">');
	const textContainer = $('<div class="container"></div>');
	const titlePrincipal = $('<div class="title"><h1>'+state.news[0].title+'</h1></div>');
	const briefPrincipal = $('<div class="subtitle"><p>'+state.news[0].brief+'</p></div>');

	textContainer.append(titlePrincipal, briefPrincipal);
	principal.append(imagePrincipal, textContainer);
	principalRow.append(principal);
	principalContainer.append(principalRow);

	return principalContainer;
}