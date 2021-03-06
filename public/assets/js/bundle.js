'use strict';

const render = (root) => {

	root.empty();
	const wrapper = $('<div class="wrapper"></div>');

	const update = function() {
		render(root);
	};

	wrapper.append(Header(update));
	wrapper.append(Frontpage(update));
	wrapper.append(Mundosection(update));
	wrapper.append(Tecnologiasection(update));
	wrapper.append(Educacionsection(update));
	wrapper.append(Opinionsection(update));
	wrapper.append(Carrousel(update));
	wrapper.append(Footer(update));
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

const Carrousel = (update) => {
	
	const workspace = $('<div class="carrousel-workspace"></div>');
	const container = $('<div class="carrousel-container"></div>');
	const carrousel = $('<div class="carrousel"></div>');

	for(var i = 27; i < 31; i++){

		let images = $('<div class="images"></div>');
		const content = $('<img class="content" src="../assets/img/news/news-'+i+'.png">');
		images.append(content);
		carrousel.append(images)
	}

	const btn = $('<div class="buttons"></div>');
	const btnLeft = $('<div href="" class="btn-left"><img src="../assets/img/flecha1.png" alt="search"></div>');
	const btnRight = $('<div href="" class="btn-right"><img src="../assets/img/flecha2.png" alt="search"></div>');

	$(document).ready(function(){

		$('.carrousel div:last').insertBefore('.carrousel div:first');
		carrousel.css('margin-left', '-'+100+'%');

		function next(){
			carrousel.animate({marginLeft:'-'+200+'%'},700,function(){
				$('.carrousel div:first').insertAfter('.carrousel div:last');
				carrousel.css('margin-left', '-'+100+'%');
			});
		}

		function previous(){
			carrousel.animate({marginLeft:0},700,function(){
				$('.carrousel div:last').insertBefore('.carrousel div:first');
				carrousel.css('margin-left', '-'+100+'%');
			});
		}

		btnRight.on('click', function(){
			next();
		})

		btnLeft.on('click', function(){
			previous();
		})

		var timer = setInterval(function(){
			next();
		},5000);

	});
	btn.append(btnLeft,btnRight);
	container.append(carrousel,btn);
	workspace.append(container);

	return workspace

}
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
'use strict';

const Footer = (update) => {
	
}
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
	const today1Text = $('<div class="col s12 small-container"><p class="col s12 l7 small-title">'+state.news[1].title+'</p></div>');
	const today2Text = $('<div class="col s12 small-container"><p class="col s12 l7 small-title">'+state.news[2].title+'</p></div>');
	const today3Text = $('<div class="col s12 small-container"><p class="col s12 l7 small-title">'+state.news[3].title+'</p></div>');

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

const Mundosection = (update) => {

	const section = $('<section id="mundo"></section>');
	const title = $('<p>Mundo</p>');

	const container = $('<div class="container"></div>');
	const principalRow = $('<div class="row"></div>');
	const principal = $('<div></div>');

	const left = $('<div class="col s12 l3"></div>');
	const textLeft = $('<div class="small-container"><p class="col s12">'+state.news[4].title+'</p></div>');
	const imageLeft = $('<div class="image news-4"></div>');

	const center = $('<div class="col l6"></div>');

	const center1 = $('<div class="col l6 s12 control-padding-left"></div>');
	const textCenter1 = $('<div class="small-container"><p class="col s12">'+state.news[5].title+'</p></div>');
	const imageCenter1 = $('<div class="small-image news-5"></div>');

	const center2 = $('<div class="col l6 s12 control-padding-right"></div>');
	const textCenter2 = $('<div class="small-container"><p class="col s12">'+state.news[6].title+'</p></div>');
	const imageCenter2 = $('<div class="small-image news-6"></div>');

	const right = $('<div class="col s12 l3"></div>');
	const textRight = $('<div class="small-container"><p class="col s12">'+state.news[7].title+'</p></div>');
	const imageRight = $('<div class="image news-7"></div>');

	const center3 = $('<div class="col s12 l12 center-padding"></div>');
	const textCenter3 = $('<div class="col l6 s12 center-large-container"><p class="col s12">'+state.news[8].title+'</p></div>');
	const imageCenter3 = $('<div class="small-image col l6 s12 news-8"></div>');

	const center4 = $('<div class="col s12 l12 center-padding"></div>');
	const textCenter4 = $('<div class="col l6 s12 center-large-container"><p class="col s12">'+state.news[9].title+'</p></div>');
	const imageCenter4 = $('<div class="small-image news-9 col s12 l6"></div>');

	const secondaryRow = $('<div class="row"></div>');
	const secondary = $('<div class="secondary-mundo"></div>');

	const sec1 = $('<div class="col s12 l3"></div>');
	const sec1Text = $('<div class="small-container"><p class="col s12">'+state.news[10].title+'</p></div>');
	const sec1Image = $('<div class="small-image news-10"></div>');

	const sec2 = $('<div class="col s12 l3"></div>');
	const sec2Text = $('<div class="small-container"><p class="col s12">'+state.news[11].title+'</p></div>');
	const sec2Image = $('<div class="small-image news-11"></div>');

	const sec3 = $('<div class="col s12 l3"></div>');
	const sec3Text = $('<div class="small-container"><p class="col s12">'+state.news[12].title+'</p></div>');
	const sec3Image = $('<div class="small-image news-12"></div>');

	const sec4 = $('<div class="col s12 l3"></div>');
	const sec4Text = $('<div class="small-container"><p class="col s12">'+state.news[13].title+'</p></div>');
	const sec4Image = $('<div class="small-image news-13"></div>');

	sec1.append(sec1Image, sec1Text);
	sec2.append(sec2Image, sec2Text);
	sec3.append(sec3Image, sec3Text);
	sec4.append(sec4Image, sec4Text);

	secondary.append(sec1,sec2,sec3,sec4);
	secondaryRow.append(secondary);

	left.append(imageLeft,textLeft);
	center1.append(imageCenter1,textCenter1);
	center2.append(imageCenter2,textCenter2);
	center3.append(imageCenter3,textCenter3);
	center4.append(imageCenter4,textCenter4);
	right.append(imageRight,textRight);

	center.append(center1,center2,center3,center4);
	principal.append(left,center,right);
	principalRow.append(principal);
	container.append(title, principalRow, secondaryRow);
	section.append(container)

	return section;
}
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