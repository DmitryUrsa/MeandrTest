$(function() {

	var form = $('.contact-form');
	var formFields = form.find('.form-input');
	var submitButton = form.find('.contact-form__submit');
	var formName = form.find('.contact-form__name');
	var formEmail = form.find('.contact-form__email');
	var formPhone = form.find('.contact-form__phone');
	var formComment = form.find('.contact-form__comment');

	form.bind('submit', function (e) {
		e.preventDefault();

		var countValid = 0;

		$('.validate-error').remove();

		for (var i = 0; i < formFields.length; i++) {
			if (!formFields[i].value && !$(formFields[i]).hasClass('contact-form__comment')) {
				var thing	  = '<div class="thing"></div>';
				var close	  = '<a href="#" class="close">close</a>';
				console.log('Пустое поле', formFields[i]);
				$(formFields[i]).after('<div class="validate-error">Ошибка валидации</div>');
				
				$([document.documentElement, document.body]).animate({
					scrollTop: $(".contact-form").offset().top
				}, 300);
			} else {
				countValid++;
				$(formFields[i]).addClass('valid');
			}
		}

		if(countValid == formFields.length) {
			console.log('All correct!');
			$('.validate-success').remove();
			submitButton.parent().append('<div class="validate-success">Отлично! Вы все сделали правильно и мы скоро с вами свяжемся 💧</div><br/>(Но на самом деле нет, это тестовая форма)');
		}
	})

});
