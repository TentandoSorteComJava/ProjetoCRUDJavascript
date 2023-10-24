function addData(){
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pwd').value;

    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPwd', pass);
}