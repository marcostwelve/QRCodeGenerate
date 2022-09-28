const wrapper = document.querySelector('.wrapper'),
qrInput  = wrapper.querySelector('.form input'),
generateBtn = wrapper.querySelector('.form button'),
qrImg = wrapper.querySelector('.qr-code img');



generateBtn.addEventListener('click', () => {
    let qrValue = qrInput.value;
    if(!qrValue) return; // Se a entrada estiver vazia, retorne daqui
    generateBtn.innerText = 'Generating QR Code...';
    // Obtendo um código QR do valor inserido pelo usuário usando o qrserver
    // e passando a api retornou img src para qrImg
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener('load', () => {
        wrapper.classList.add('active');
        generateBtn.innerText = 'Generate QR Code';
    });
});

qrInput.addEventListener('keyup', () => {
    if(!qrInput.value) {
        wrapper.classList.remove('active');
    }
});