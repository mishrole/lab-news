'use strict';

const Tecnologiasection = (update) => {

	const section = $('<section id="tecnologia"></section>');
	const title = $('<p>Tecnología</p>');

	const container = $('<div class="container"></div>');
	const principalRow = $('<div class="row"></div>');
	const principal = $('<div></div>');

	const left = $('<div class="col s12 l6"></div>');
	const textLeft = $('<div class="small-container"><p class="col s12">'+state.news[14].title+'</p></div>');
	const imageLeft = $('<div class="image news-14"></div>');

	const right = $('<div class="col s12 l6"></div>');

	const right1 = $('<div class="col s12 l6 control-padding-left"></div>');
	const right1Text = $('<div class="small-container"><p class="col s12">'+state.news[15].title+'</p></div>');
	const right1Image = $('<div class="small-image news-15"></div>');

	const right2 = $('<div class="col s12 l6 control-padding-right"></div>');
	const right2Text = $('<div class="small-container"><p class="col s12">'+state.news[16].title+'</p></div>');
	const right2Image = $('<div class="small-image news-16"></div>');

	const right3 = $('<div class="col s12 l12 center-padding"></div>');
	const right3Text = $('<div class="center-large-container"><p class="col s12">'+state.news[17].title+'</p></div>');
	const right3Image = $('<div class="small-image news-17 col l6 s6"></div>');

	const right4 = $('<div class="col s12 l12 center-padding"></div>');
	const right4Text = $('<div class="center-large-container"><p class="col s12">'+state.news[18].title+'</p></div>');
	const right4Image = $('<div class="small-image news-18 col l6 s6"></div>');

	right1.append(right1Image, right1Text);
	right2.append(right2Image, right2Text);
	right3.append(right3Image, right3Text);
	right4.append(right4Image, right4Text);

	left.append(imageLeft,textLeft);
	right.append(right1,right2,right3,right4);
	principal.append(left,right);
	principalRow.append(principal);
	container.append(principalRow);
	section.append(container);

	return section
}