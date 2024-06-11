const btnSpeak = document.querySelector('.btnSpeak');
const result = document.querySelector('.result');
const text = document.querySelector('.text');

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
    console.log('Your Browser supports speech Recognition');

    const recognition = new SpeechRecognition();
    // recognition.continuous = true;

    btnSpeak.addEventListener('click', () => {
        recognition.start();
    });

    recognition.addEventListener('result', (e) => {
        const transcript = e.results[0][0].transcript.toLowerCase();
        console.log(transcript);
        result.style.display = 'block';
        text.textContent = `Đang thực hiện: ${transcript}`;

        setTimeout(() => {
            switch (transcript) {
                case 'youtube'.toLowerCase():
                    window.open('https://www.youtube.com');
                    text.textContent = 'Đã thực hiện xong';
                    break;
                case 'facebook'.toLowerCase():
                    window.open('https://www.facebook.com');
                    text.textContent = 'Đã thực hiện xong';
                    break;
                case 'google drive'.toLowerCase():
                    window.open('https://www.google.com/drive');
                    text.textContent = 'Đã thực hiện xong';
                    break;
                case 'google maps'.toLowerCase():
                case 'bản đồ'.toLowerCase():
                    window.open('https://www.google.com/maps');
                    text.textContent = 'Đã thực hiện xong';
                    break;

                case 'chỉ đường vinhomes smart city Tây Mỗ'.toLowerCase():
                case 'Chỉ đường tới Vinhomes Smart city Tây Mỗ'.toLowerCase():
                case 'tới Vinhomes Smart City Tây Mỗ'.toLowerCase():
                case 'đường tới Vinhomes Smart city Tây Mỗ'.toLowerCase():
                    window.open(
                        'https://www.google.com/maps/search/Vinhomes+Smartcity+T%C3%A2y+M%E1%BB%97/'
                    );
                    text.textContent = 'Đã thực hiện xong';
                    break;
                case 'bài hát ai chung tình được mãi'.toLowerCase():
                case 'Mở bài hát ai chung tình được mãi'.toLowerCase():
                case 'Nghe bài hát ai chung tình được mãi'.toLowerCase():
                    window.open(
                        'https://zingmp3.vn/bai-hat/Ai-Chung-Tinh-Duoc-Mai-Dinh-Tung-Huy-ACV/ZUB790F8.html'
                    );
                    text.textContent = 'Đã thực hiện xong';
                    break;
                case 'video ai chung tình được mãi'.toLowerCase():
                case 'mở video ai chung tình được mãi'.toLowerCase():
                case 'xem video ai chung tình được mãi'.toLowerCase():
                    window.open('https://www.youtube.com/watch?v=eZpJdO22jZ0');
                    text.textContent = 'Đã thực hiện xong';
                    break;
                default:
                    text.textContent = 'Không thực hiện được yêu cầu';
            }
        }, 800);
    });
}
