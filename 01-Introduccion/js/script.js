document.querySelector('#toastBtn').onclick = e => {
    e.preventDefault();
    //mostrar el toast
    const toastEl = document.querySelector('#toast');
    const toast = new bootstrap.Toast(toastEl);
    toast.show();

}