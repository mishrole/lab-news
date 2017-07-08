'use strict';

const Carrousel = (update) => {
	
	const container = $('<div class="carrousel-container"></div>');
	const carrousel = $('<div class="carrousel"></div>');
	const images = $('<div class="images"></div>');

	for(var i = 27; i < 31; i++){

		const content = $('<img class="content" src="../assets/img/news/news-'+i+'.png">');
		images.append(content);
	}

	const btn = $('<div class="buttons"></div>');
	const btnLeft = $('<a href="" class="btn-left"><img src="../assets/img/flecha1.png" alt="search"></a>');
	const btnRight = $('<a href="" class="btn-right"><img src="../assets/img/flecha2.png" alt="search"></a>');

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
	carrousel.append(images);
	container.append(carrousel,btn);

	return container

}