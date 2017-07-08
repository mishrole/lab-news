'use strict';

const Educacionsection = (update) => {

	const section = $('<section id="educacion"></section>');
	const title = $('<p>Educación</p>');

	const container = $('<div class="container"></div>');
	const principalRow = $('<div class="row"></div>');
	const principal = $('<div></div>');

	const left = $('<div class="col s12 l6"></div>');

	const left1 = $('<div class="col s12 l6 control-padding-left"></div>');
	const left1Text = $('<div class="small-container"><p class="col s12">'+state.news[20].title+'</p></div>');
	const left1Image = $('<div class="small-image news-20"></div>');

	const left2 = $('<div class="col s12 l6 control-padding-right"></div>');
	const left2Text = $('<div class="small-container"><p class="col s12">'+state.news[21].title+'</p></div>');
	const left2Image = $('<div class="small-image news-21"></div>');

	const left3 = $('<div class="col s12 l12 center-padding"></div>');
	const left3Text = $('<div class="center-large-container"><p class="col s12">'+state.news[22].title+'</p></div>');
	const left3Image = $('<div class="small-image news-22 col l6 s6"></div>');

	const right = $('<div class="col s12 l6"></div>');

	const right1 = $('<div class="col s12 l6 control-padding-left"></div>');
	const right1Text = $('<div class="small-container"><p class="col s12">'+state.news[23].title+'</p></div>');
	const right1Image = $('<div class="small-image news-23"></div>');

	const right2 = $('<div class="col s12 l6 control-padding-right"></div>');
	const right2Text = $('<div class="small-container"><p class="col s12">'+state.news[24].title+'</p></div>');
	const right2Image = $('<div class="small-image news-24"></div>');

	const right3 = $('<div class="col s12 l12 center-padding"></div>');
	const right3Text = $('<div class="center-large-container"><p class="col s12">'+state.news[23].title+'</p></div>');
	const right3Image = $('<div class="small-image news-23 col l6 s6"></div>');

	left1.append(left1Image, left1Text);
	left2.append(left2Image, left2Text);
	left3.append(left3Image, left3Text);

	right1.append(right1Image, right1Text);
	right2.append(right2Image, right2Text);
	right3.append(right3Image, right3Text);

	left.append(left1,left2,left3);
	right.append(right1,right2,right3);
	principal.append(left,right);
	principalRow.append(principal);
	container.append(title,principalRow);
	section.append(container);

	return section

}