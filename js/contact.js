function sendMensaje() {
    let nombre, email, mensaje;
    nombre = document.getElementById('form_name').value;
    email = document.getElementById('form_email').value;
    mensaje = document.getElementById('form_message').value;
    alert(nombre + '\n' + email + '\n' + mensaje);

    Email.send({
        Host : "smtp.yourisp.com", //servidor de correos
        Username : "juancarsolio@outlook.com",
        Password : "711059810Corona",
        To : email,
        From : 'juancarsolio@gmail.com',   
        Subject : nombre,
        Body : mensaje
    }).then(
      message => alert(message)
);
}

function sendCorreo(){
    let nombre, email, mensaje;
    nombre = document.getElementById('form_name').value;
    email = document.getElementById('form_email').value;
    mensaje = document.getElementById('form_message').value;

    Email.send({
        //smtp.gmail.com    smtp.yourisp.com
        Host : "smtp.gmail.com",
        Username : "juancarsolio@gmail.com",
        Password : "711059810Corona",
        To : email,
        From : "juancarsolio@gmail.com",
        Subject : nombre,
        Body : mensaje
    }).then(
      message => alert(message)
    );
}

