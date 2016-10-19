/*
This plug-in was made by Antonio Braz Salsa Papaleo (Tota Braz) - me.
You can use it as a NonCommercial license (non commercial use). 

Site: https://deveart.com/
Instagram: https://instagram.com/deveartbr
Facebook: https://facebook.com/deveartbr




#####################################################
#################### How to use: ####################
#####################################################

#01 - Use a ID in  TAG father: 
      
      Example: 
        <section id="heyFather">
          ...
        </section>

#02 - Put the class name 'parralaxZ' as a class of each element you want to anime.

      <section id="heyFather">
        ...
        <div class="... parallaxZ">
        </div>
        ...
      </section>

#03 - use the datas input:
      <section id="heyFather">
        ...
        <div class="... parallaxZ"  data-direction="up" data-id-father="heyFather" >
        </div>
        ...
      </section>

*/


$.fn.parallaxZ = function(){

	$(window).scroll( function(){

		$('.parallaxZ').each( function(){
			var wScroll = $(window).scrollTop(); 
			winHeight = $(window).height();
			eHeight = $(this).height();
			eOffset =$(this).offset().top;

			speed = $(this).data('speed');
			direction = $(this).data('direction');
			father = $(this).data('id-father');
			$father = $("#"+father);
			fatherHeight = $father.height();
			fatherOffset = $father.offset().top;
			var percent = (((wScroll + winHeight) - (fatherOffset + fatherHeight) )/winHeight);
			var move = percent*eHeight*(speed/10);


			if (direction == "up"){
				$(this).css({
					'transform' : 'translate(0px, -' + move + '%)'
				});
			} 
			else if (direction == "down"){
				$(this).css({
					'transform' : 'translate(0px, +' + move + '%)'
				});
			}  
		});
	});
}

$(document).load().parallaxZ();
