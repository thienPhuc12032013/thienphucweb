// Kiểm tra đăng nhập (Áp dụng cho các trang cần bảo mật)
function checkAuth() {
    const isLoginPage = window.location.pathname.includes('login.html') || window.location.pathname.includes('register.html');
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn && !isLoginPage) {
        // Nếu chưa đăng nhập mà cố vào trang trong -> đá về login
        window.location.href = 'login.html';
    }
}

// Hàm hiển thị thông báo nổi (Toast)
function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.style.borderLeftColor = type === 'error' ? '#ff5555' : '#00ff9c';
    toast.innerHTML = `
        <span style="margin-right:10px; font-weight:bold; color: ${type === 'error' ? '#ff5555' : '#00ff9c'}">
            [${type === 'error' ? 'ERR' : 'OK'}]
        </span> 
        ${message}
    `;

    container.appendChild(toast);

    // Tự xóa sau 3s
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Định dạng tiền tệ VN
const formatMoney = (amount) => {
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};

// Chạy check auth khi load
document.addEventListener('DOMContentLoaded', () => {
    // Chỉ check auth nếu không phải đang ở trang login/register
    // checkAuth(); // Bỏ comment dòng này nếu muốn bắt buộc đăng nhập
});