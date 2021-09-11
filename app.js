const openModal = document.querySelector('.open-modal');
const modalContainer = document.querySelector('.modal-container');
const closeModal = document.querySelector('.close-modal');

openModal.addEventListener('click', function () {
  modalContainer.style.display = 'block';
});

closeModal.addEventListener('click', function () {
  modalContainer.style.display = 'none';
});

modalContainer.addEventListener('click', function (event) {
  if (event.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
});
