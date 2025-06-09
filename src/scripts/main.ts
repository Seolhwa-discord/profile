

document.getElementById('copyEmail')?.addEventListener('click', function (event) {
    event.preventDefault()
    const email = 'znzsndj@gmail.com'
    navigator.clipboard.writeText(email).then(() => {
        showToast('이메일 주소가 클립보드에 복사되었습니다.')
    }).catch(err => {
        showToast('복사 실패.')
    });
});

function showToast(message: string) {
    const toast = document.getElementById('toast') as HTMLElement | null;
    if (!toast) return;
    toast.textContent = message;
    toast.style.visibility = 'visible';
    toast.style.opacity = '1';

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            toast.style.visibility = 'hidden';
        }, 500);
    }, 2500);
}