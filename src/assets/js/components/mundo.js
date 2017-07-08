'use strict';

const Mundosection = (update) => {

	const container = $('<div class="container"></div>');
	const principalRow = $('<div class="row"></div>');
	const principal = $('<div class="principal-mundo"></div>');

	const left = $('<div class="col s12 l3 no-padding"></div>');
	const textLeft = $('<div class="small-container"><p class="col s12">'+state.news[4].title+'</p></div>');
	const imageLeft = $('<div class="image news-4"></div>');

	const center = $('<div class="col l6 s12"></div>');

	const center1 = $('<div class="col l6 s12"></div>');
	const textCenter1 = $('<div class="small-container"><p class="col s12">'+state.news[5].title+'</p></div>');
	const imageCenter1 = $('<div class="small-image news-5"></div>');

	const center2 = $('<div class="col l6 s12"></div>');
	const textCenter2 = $('<div class="small-container"><p class="col s12">'+state.news[6].title+'</p></div>');
	const imageCenter2 = $('<div class="small-image news-6"></div>');

	const right = $('<div class="col s12 l3 no-padding"></div>');
	const textRight = $('<div class="small-container"><p class="col s12">'+state.news[7].title+'</p></div>');
	const imageRight = $('<div class="image news-7"></div>');

	const center3 = $('<div class="col s12 l12 center-large"></div>');
	const textCenter3 = $('<div class="col l6 s12 center-large-container"><p class="col s12">'+state.news[8].title+'</p></div>');
	const imageCenter3 = $('<div class="small-image col l6 s12 news-8"></div>');

	const center4 = $('<div class="col s12 l12 center-large"></div>');
	const textCenter4 = $('<div class="col l6 s12 center-large-container"><p class="col s12">'+state.news[9].title+'</p></div>');
	const imageCenter4 = $('<div class="small-image news-9 col s12 l6"></div>')

	left.append(imageLeft,textLeft);
	center1.append(imageCenter1,textCenter1);
	center2.append(imageCenter2,textCenter2);
	center3.append(imageCenter3,textCenter3);
	center4.append(imageCenter4,textCenter4);
	right.append(imageRight,textRight);

	center.append(center1,center2,center3,center4);
	principal.append(left,center,right);
	principalRow.append(principal);
	container.append(principalRow);

	return container;
}