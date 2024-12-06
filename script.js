document.querySelector('.yes-button').addEventListener('click', () => {
    const heartPopup = document.getElementById('heartPopup');
    heartPopup.style.display = 'block';
    setTimeout(() => {
        heartPopup.style.display = 'none';
    }, 2000); // Heart will disappear after 2 seconds
});

document.querySelector('.think-button').addEventListener('click', () => {
    alert('Hmm... No need to think, it’s a YES! 😍');
});
