'use strict';

const Opinionsection = (update) => {
	
	const section = $('<section id="opinion"></section>');
	const title = $('<p>Opinión</p>');

	const container = $('<div class="container"></div>');
	const principalRow = $('<div class="row"></div>');
	const principal = $('<div></div>');

	const opinion1 = $('<div class="col s12 l3"></div>');
	const opinion2 = $('<div class="col s12 l3"></div>');
	const opinion3 = $('<div class="col s12 l3"></div>');
	const opinion4 = $('<div class="col s12 l3"></div>');

	const opinion1Image = $('<div class="image news-24"></div>');
	const opinion2Image = $('<div class="image news-25"></div>');
	const opinion3Image = $('<div class="image news-26"></div>');
	const opinion4Image = $('<div class="image news-27"></div>');

	const opinion1Text = $('<div class="col s12 small-container"><p class="col s12 l7 small-title">'+state.news[24].title+'</p></div>');
	const opinion2Text = $('<div class="col s12 small-container"><p class="col s12 l7 small-title">'+state.news[25].title+'</p></div>');
	const opinion3Text = $('<div class="col s12 small-container"><p class="col s12 l7 small-title">'+state.news[26].title+'</p></div>');
	const opinion4Text = $('<div class="col s12 small-container"><p class="col s12 l7 small-title">'+state.news[27].title+'</p></div>');

	opinion1.append(opinion1Image,opinion1Text);
	opinion2.append(opinion2Image,opinion2Text);
	opinion3.append(opinion3Image,opinion3Text);
	opinion4.append(opinion4Image,opinion4Text);

	principal.append(opinion1,opinion2,opinion3,opinion4);

	principalRow.append(principal);
	container.append(title,principalRow);
	section.append(container);

	return section
}