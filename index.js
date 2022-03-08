let user = {
    user_account: "",
    password: "",
    repassword: ""
}

let onType = (e) => {
    user[e.target.id] = e.target.value;
}
if (localStorage.getItem('curr_user')){
    location.assign('./home/home.html')
}else{
}
document.querySelector('button.btn-login').onclick = (e) => {
    localStorage.removeItem('curr_user');
    try {
        e.preventDefault();
        const existedUser = JSON.parse(localStorage.getItem('user'));
        if (user.user_account != existedUser.user_account) throw new Error('Tài khoản hoặc mật khẩu không chĩnh xác!')
        if (user.password != existedUser.password) throw new Error('Tài khoản hoặc mật khẩu không chĩnh xác!')
        else {
            alert("Đăng nhập thành công!");
            localStorage.setItem('curr_user',user.user_account);
            location.assign('./home/home.html');
        }
    } catch (error) {
        alert(error.message)
    }
}
document.querySelector('button.btn-register').onclick = (e) => {
    e.preventDefault();
    // location.assign('./home/home.html');
}
const allInput = document.querySelectorAll('input');
[...allInput].map((item) => {
    item.addEventListener('change', (e) => {
        onType(e);
    })
})