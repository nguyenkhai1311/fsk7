const btnFile = document.querySelector('.text-file');
const btnNew = document.querySelector('.btn-new');
const btnTxt = document.querySelector('.btn-txt');
const btnPdf = document.querySelector('.btn-pdf');
const btnSave = document.querySelector('.btn-save');
const content = document.querySelector('.content');
const inputName = document.querySelector('.name-file');
const btnStrong = document.querySelector('.btn-strong');
const btnItalic = document.querySelector('.btn-italic');
const btnUnderline = document.querySelector('.btn-underline');
const btnColor = document.querySelector('.btn-color');

document.body.addEventListener('click', (e) => {
    const active = document.querySelector('.active');
    if (active) {
        active.classList.remove('active');
    }
});

btnFile.addEventListener('click', (e) => {
    e.stopPropagation();
    btnSave.classList.toggle('active');
});

btnNew.addEventListener('click', () => {
    content.innerHTML = '';
});

btnTxt.addEventListener('click', () => {
    var a = document.createElement('a');
    document.body.appendChild(a);
    const blob = new Blob([content.textContent], { type: 'text/plain' });
    const nameFile = inputName.value || 'untitled';

    const url = URL.createObjectURL(blob);
    a.href = url;
    a.download = `${nameFile}.txt`;
    a.click();
});

function formatText(command, color) {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;
    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.style.cssText = getStyleForCommand(command, color);
    range.surroundContents(span);
}

function getStyleForCommand(command, color = '') {
    switch (command) {
        case 'bold':
            return 'font-weight: bold;';
        case 'italic':
            return 'font-style: italic;';
        case 'underline':
            return 'text-decoration: underline;';
        case 'foreColor':
            return `color: ${color};`;
        default:
            return '';
    }
}

btnStrong.addEventListener('click', () => {
    formatText('bold');
});

btnItalic.addEventListener('click', () => {
    formatText('italic');
});

btnUnderline.addEventListener('click', () => {
    formatText('underline');
});

btnColor.addEventListener('change', () => {
    const color = document.querySelector('input[type="color"]').value;
    formatText('foreColor', color);
});

btnPdf.addEventListener('click', () => {
    var element = document.getElementById('content');
    const nameFile = inputName.value || 'untitled';
    const opt = {
        margin: 1,
        filename: `${nameFile}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, logging: true, scrollX: 0, scrollY: 0 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    html2pdf().from(element).set(opt).save();
});
