document.getElementById('lixiButton').addEventListener('click', function() {
    document.getElementById('moneyOptions').classList.remove('hidden');
});

document.querySelectorAll('.moneyOption').forEach(button => {
    button.addEventListener('click', function() {
        // Tạo một thẻ img để hiển thị ảnh
        const img = document.createElement('img');
        img.src = 'PHU.jpg'; // Đường dẫn đến ảnh của bạn
        img.alt = 'PHÚ CHAN!!!!';
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
        img.style.marginTop = '20px';

        // Xóa các nút lựa chọn tiền
        const moneyOptions = document.getElementById('moneyOptions');
        moneyOptions.innerHTML = '';

        // Thêm ảnh vào container
        moneyOptions.appendChild(img);
    });
});