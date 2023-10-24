function checkData(){
    var enterEmail = document.getElementById('email').value;
    var enterPwd = document.getElementById('pwd').value;

    var getEmail = localStorage.getItem('userEmail');
    var getPwd = localStorage.getItem('userPwd');

    if(enterEmail == getEmail){
        if(enterPwd == getPwd){
            alert("Logando...");
        }
        else{
            alert("Email ou Senha incorreta!");
        }
    }
    else{
        alert("Dados inválidos");
    }
}