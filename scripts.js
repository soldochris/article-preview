const shareButton = document.querySelector('.share-icon');
const shareContent = document.querySelector('.share-content');

shareButton.addEventListener('click', () => {
  shareContent.classList.toggle('show');
})