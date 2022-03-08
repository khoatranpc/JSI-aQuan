let user_detail = {
    user_account: "",
    password: "",
    repassword: ""
}

let onType = (e) => {
    user_detail[e.target.id] = e.target.value;
}
//btn đăng ký
document.querySelector('button.btn-register').onclick = (e) => {
    e.preventDefault();

    try {
        if (user_detail[user_account] == "") throw new Error('Bạn cần nhập tài khoản!');
        if (user_detail[password] == "" || user_detail[repassword] == "") {
            throw new Error('Bạn cần nhập các trường mật khẩu!');
        }
        if (user_detail.password != user_detail.repassword) {
            throw new Error('Mật khẩu không khớp');
        }
        else {
            localStorage.setItem('user', JSON.stringify(user_detail));
            alert('Đăng ký thành công');
            location.assign('.././index.html');
        }

    } catch (error) {
        alert(error.message);
    }
}
document.querySelector('button.btn-login').onclick = (e) => {
    e.preventDefault();
}
// duyệt sự kiện cho các input tại form register
const allInput = document.querySelectorAll('input');
[...allInput].map((item) => {
    item.addEventListener('change', (e) => {
        onType(e);
    })
})