import minifaker, { name, array, lastName, password, username, email } from 'minifaker';
import 'minifaker/locales/en'
import mysql from 'mysql';


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'login'

})

connection.connect(err => {
    if(err) {
        console.log(`Error: ${err}`)
        return;
    }

    console.log('Succesfully')
    return 'Succesfully'
})


let pass = '$2a$08$Sv/bJdPrWpA89qzCvLiOQO0LYfLTfhDYh31FGltIYMTWJuDUq8iDW';




for( let i = 0; i <= 50; i++){

   let data = {
        firstName: `${name()} ${lastName()}`,
        user: username(),
        pass,
        mail: email(),
        rol: i % 2 == 0 ? 'admin': 'data entry'
    }

    let {firstName, user, pass: passwordUser, mail, rol} = data;

    connection.query('INSERT INTO users SET ?', {
        name: firstName, 
        user, 
        pass: passwordUser, 
        mail,
        rol
    })

}
