const text = document.getElementById('text');
const count = document.getElementById('count-char');
const progressBg = document.getElementById('progress-bg');
const percent = document.querySelector('.percent')

const limit = 100;

text.oninput = () => {
    const textLength = text.value.length;
    count.textContent = textLength + ' / ' + limit;
    const percentage = Math.round((textLength / limit) * 100);
    progressBg.style.height = percentage + '%';
    progressBg.style.transition = 'all 0.2s'
    percent.textContent = percentage + '%'

    if (textLength <= 20) {
        progressBg.style.backgroundImage = 'linear-gradient(to top, rgba(157, 255, 123, 1), rgba(196, 252, 97, 1))';
    } else if (textLength <= 35) {
        progressBg.style.backgroundImage = 'linear-gradient(to top, rgba(196, 252, 97, 1), rgba(237, 251, 96, 1))';
    } else if (textLength <= 55) {
        progressBg.style.backgroundImage = 'linear-gradient(to top, rgba(237, 251, 96, 1), rgba(250, 190, 97, 1))';
    } else if (textLength <= 75) {
        progressBg.style.backgroundImage = 'linear-gradient(to top, rgba(250, 190, 97, 1), rgba(247, 99, 99, 1))';
    } else if (textLength <= 90) {
        progressBg.style.backgroundImage = 'linear-gradient(to top, rgba(247, 99, 99, 1), rgba(253, 61, 61, 1))';
    } else {
        progressBg.style.backgroundImage = 'linear-gradient(to top,rgba(253, 61, 61, 1), rgba(186, 0, 0, 1))';
    }
};
