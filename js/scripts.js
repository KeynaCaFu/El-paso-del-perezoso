/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// Lightbox trigger for carousels in the features section
document.addEventListener('click', function (e) {
	const trigger = e.target.closest('.lightbox-trigger');
	if (!trigger) return;
	e.preventDefault();

	const modalId = trigger.getAttribute('data-modal');
	const index = parseInt(trigger.getAttribute('data-index') || '0', 10);
	const modalEl = document.getElementById(modalId);
	if (!modalEl) return;

	// Show modal
	const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
	modal.show();

	// Determine carousel inside the modal
	const carouselId = modalId === 'modalPlantaAlta' ? 'lightboxPlantaAlta' : 'lightboxPlantaBaja';
	const carouselEl = document.getElementById(carouselId);
	if (!carouselEl) return;

	// Move to the same slide index
	const carousel = bootstrap.Carousel.getOrCreateInstance(carouselEl, { interval: false, ride: false, wrap: true });
	carousel.to(index);
});

// Pause carousels when modals are hidden (cleanup)
['modalPlantaAlta', 'modalPlantaBaja'].forEach((id) => {
	const el = document.getElementById(id);
	if (!el) return;
	el.addEventListener('hidden.bs.modal', () => {
		const carouselId = id === 'modalPlantaAlta' ? 'lightboxPlantaAlta' : 'lightboxPlantaBaja';
		const carouselEl = document.getElementById(carouselId);
		if (carouselEl) {
			const c = bootstrap.Carousel.getInstance(carouselEl);
			if (c) c.pause();
		}
	});
});