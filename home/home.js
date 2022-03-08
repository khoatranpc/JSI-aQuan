if (!localStorage.getItem('curr_user')) {
    location.assign('.././index.html')
} else {
}
document.querySelector('button').onclick = (e) => {
    e.preventDefault();
    localStorage.removeItem('curr_user');
    location.assign('../index.html');
}