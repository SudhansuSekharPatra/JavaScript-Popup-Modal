const openModalBtns = document.querySelectorAll("[data-model-target]");
const closeModalBtns = document.querySelectorAll("[data-modal-close-btn]");
const modalOverlay = document.querySelector(".modal-overlay");

openModalBtns.forEach((button) => {
	button.addEventListener("click", () => {
		const modal = document.querySelector(button.dataset.modelTarget);
		openModal(modal);
	});
});

closeModalBtns.forEach((button) => {
	button.addEventListener("click", () => {
		const modal = button.closest(".modal");
		closeModal(modal);
	});
});

modalOverlay.addEventListener("click", () => {
	const modals = document.querySelectorAll(".modal.modal--active");
	modals.forEach((modal) => {
		closeModal(modal);
	});
});

function openModal(modal) {
	if (modal == null) return;
	modal.classList.add("modal--active");
	modalOverlay.classList.add("modal-overlay--active");
}

function closeModal(modal) {
	if (modal == null) return;
	modal.classList.remove("modal--active");
	modalOverlay.classList.remove("modal-overlay--active");
}
