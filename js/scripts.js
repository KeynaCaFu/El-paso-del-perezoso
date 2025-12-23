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
	// Derive carousel id automatically (modalX -> lightboxX)
	const carouselId = (trigger.getAttribute('data-carousel')) || modalId.replace('modal', 'lightbox');
	const carouselEl = document.getElementById(carouselId);
	if (!carouselEl) return;

	// Move to the same slide index
	const carousel = bootstrap.Carousel.getOrCreateInstance(carouselEl, { interval: false, ride: false, wrap: true });
	carousel.to(index);
});

// Pause any carousel inside any modal when it is hidden (generic cleanup)
document.addEventListener('hidden.bs.modal', (e) => {
	const modalEl = e.target;
	if (!modalEl) return;

	const candidates = [];
	// First, try derived id approach (modalX -> lightboxX)
	if (modalEl.id) {
		const derivedId = modalEl.id.replace('modal', 'lightbox');
		const derivedEl = document.getElementById(derivedId);
		if (derivedEl) candidates.push(derivedEl);
	}
	// Fallback: any carousels inside the modal
	modalEl.querySelectorAll('.carousel').forEach((el) => candidates.push(el));

	candidates.forEach((carouselEl) => {
		const instance = bootstrap.Carousel.getInstance(carouselEl);
		if (instance) instance.pause();
	});
});