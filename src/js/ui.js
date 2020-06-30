var navDrawer = document.querySelector('.drawer');

// Event Handlers
window.onload = function () {
	$('.window-title').addClass('effect-shine');
}

// Play/Pause switch
$('.btn-play').click(function () {
	TweenMax.to($('.btn-play'), 0.2, { x: 20, opacity: 0, scale: 0.3, display: 'none', ease: Power2.easeInOut });
	TweenMax.fromTo($('.btn-pause'), 0.2, { x: -20, opacity: 0, scale: 0.3, display: 'none' }, { x: 0, opacity: 1, scale: 1, display: 'block', ease: Power2.easeInOut });
});

$('.btn-pause').click(function () {
	TweenMax.to($('.btn-pause'), 0.2, { x: 20, opacity: 0, display: 'none', scale: 0.3, ease: Power2.easeInOut });
	TweenMax.fromTo($('.btn-play'), 0.2, { x: -20, opacity: 0, scale: 0.3, display: 'none' }, { x: 0, opacity: 1, display: 'block', scale: 1, ease: Power2.easeInOut });
});