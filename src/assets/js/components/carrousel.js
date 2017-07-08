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