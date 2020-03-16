/* Función que ejecuta cuando el documento o página esté cargada */


window.onload = () => {
    

    let el = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
    el.parentNode.removeChild(el);


$('.go-up').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if ($(this).scrollTop() > 0) {
			$('.go-up').slideDown(300);
		}else{
			$('.go-up').slideUp(300);
		}
	});




}

