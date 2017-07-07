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