document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    showAlert(`Terima kasih, Saran dari Anda sudah terkirim!`);

    const checkmarkContainer = document.getElementById('checkmark-container');
    checkmarkContainer.classList.add('show');

    document.getElementById('contact-form').reset();

    setTimeout(() => {
        checkmarkContainer.classList.remove('show');
    }, 5000);
});

function showAlert(message) {
    const alertBox = document.getElementById('alert-box');
    const alertMessage = document.getElementById('alert-message');
    
    alertMessage.textContent = message;
    
    alertBox.classList.add('show');

    setTimeout(() => {
        closeAlert();
    }, 3000);
}

function closeAlert() {
    const alertBox = document.getElementById('alert-box');
    
    alertBox.style.transition = "opacity 0.5s ease-out";
    alertBox.style.opacity = "0";

    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 500);
}
