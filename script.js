const likeButton = document.querySelector('.post-actions .fa-heart');

likeButton.addEventListener('click', function() {

    if (likeButton.classList.contains('far')) {

        likeButton.classList.remove('far');
        likeButton.classList.add('fas');
        likeButton.style.color = '#ed4956';
    
    } else {
        likeButton.classList.remove('fas');
        likeButton.classList.add('far');
        likeButton.style.color = 'inherit';
    }
});