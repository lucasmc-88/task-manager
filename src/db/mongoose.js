const mongoose = require('mongoose');

mongoose
    .connect(
        `${process.env.MONGODB_URL}`
    )
    .then(() => {
        //app.listen(5000);
    })
    .catch((err) => {
        console.log('probando conexion');
    } );

/*
const me = new User ({
    name: 'Lucas',
    age: 35,
    email: 'lucas@hotmail.com',
    password: '123456789'
})

try {
    me.save()
    console.log(me);
} catch (error) {
    console.log('Error!!');
}*/


/*
const task = new Task ({
    description: '       Eat lunch',
    completed: false
})

try {
    task.save()
    console.log(task);
} catch (error) {
    console.log('Error!!');
}*/