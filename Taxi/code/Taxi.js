$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

function ibg() {
let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}
ibg();

$(document).ready(function() {
 	$('a[href*=#]').bind('click', function(e) {
 	e.preventDefault();
 
 	var target = $(this).attr("href");
 
$('html, body').stop().animate({ scrollTop: $(target).offset().top}, 500, function() {
 	location.hash = target;
});
 
 	return false;
 	});
});

const tabsBtn = document.querySelectorAll(".order-tabs__nav-btn");
const tabsItems = document.querySelectorAll(".order-tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
	item.addEventListener("click", function () {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId);

		if (!currentBtn.classList.contains('active')) {
			tabsBtn.forEach(function (item) {
				item.classList.remove('active');
			});
			tabsItems.forEach(function (item) {
				item.classList.remove('active');
			});

			currentBtn.classList.add('active');
			currentTab.classList.add('active');
		}
	});
}

document.querySelector('.order-tabs__nav-btn:nth-child(1)').click();

$(document).ready(function () {
	$('.classes__slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		easing: 'ease',
		prevArrow: '.classes__arrow-prev',
		nextArrow: '.classes__arrow-next',
		responsive: [{
			breakpoint: 1400,
			settings: {
				slidesToShow: 4,
			}
		}, {
			breakpoint: 1100,
			settings: {
				slidesToShow: 3,
			}
		}, {
			breakpoint: 730,
			settings: {
				slidesToShow: 2,
			}
		}, {
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
			}
		}]
	});
});

$(document).ready(function () {
	$('.reviews__slider').slick({
		arrows: true,
		adaptiveHeight: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		easing: 'ease',
		prevArrow: '.text-block-reviews__arrow-prev',
		nextArrow: '.text-block-reviews__arrow-next',
		responsive: [{
			breakpoint: 767.98,
			settings: {
				vertical: true,
			}
		}, {
			breakpoint: 330,
			settings: {
				vertical: false,
				slidesToShow: 1,
			}
		}]
	});
});

$(document).ready(function () {
	$('.spoilers-block__title').click(function (event) {
		if ($('.spoilers-block').hasClass('one')) {
			$('.spoilers-block__title').not($(this)).removeClass('active');
			$('.spoilers-block__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}
function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}
function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}
function bodyUnlock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.PaddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);
	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (UIEvent.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});