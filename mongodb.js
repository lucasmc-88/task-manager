// CRUD create read update delete
const { MongoClient, ObjectId } = require('mongodb')


//const MongoClient = mongodb.MongoClient
const client = new MongoClient('mongodb://127.0.0.1:27017');

//const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

/*connect(connectionURL, (error, client) => {
    if (error) {
        return console.log('No se pudo conectar!')
    }
    console.log('conexión correcta');
    const db = client.db(databaseName)
    
    db.collection('users').insertOne({
        name: 'Lucas',
        age: 35
    })
})*/


async function connectDB() {
    try {
        await client.connect();
        console.log('SUCCESS');

        const db = client.db(databaseName);
        const result = await db.collection('users').deleteMany({ 
            age: 32
        }
        );
        console.log(result)
    } catch (error) {
        console.error('Error during database connection:', error);
    } finally {
        // Puedes cerrar la conexión aquí si es necesario
        await client.close();
    }
}

connectDB();

/* client.connect().then(() => {
 }).catch((err) => {
 }) ;*/


 // *************************** CREAR ************
/*const result = await db.collection('users').insertOne({
    name: 'Rocio',
    age: 28
})
console.log(result);
*/
/* db.collection('users').insertMany([
     {
         name: 'Rodrigo',
         age: 34
     },
     {
         name: 'Lucia',
         age: 30
     },
     {
         name: 'Mariana',
         age: 25 
     }
 ], (error, result ) => {
     console.log(result.ops);
 })*/
/*db.collection('tasks').insertMany([
    {
        description: 'Clean the house',
        completed: true
    },
    {
        description: 'Renew inspection',
        completed: false
    },
    {
        description: 'Pot plants',
        completed: false
    }  
], (error, result) => {
    if (error) {
        return console.log('no se pudo agregar');
    }
    console.log(result);
})*/

// *************************** LEER **********************************
  /*     const result = await db.collection('users').findOne({ _id: new ObjectId('655f572fd472acd2ba1cb3a3') });
         //const result = await db.collection('users').findOne({ name: 'Lucas' });
         console.log(result);
        const result = await db.collection('users').find({age: 35}).toArray()
        console.log(result)
        const count = await db.collection('users').countDocuments({ age: 30 });
        console.log(count)
    } catch (error) {
        console.error('Error during database connection:', error);
    } finally {
        // Puedes cerrar la conexión aquí si es necesario
        await client.close();
    }*/

    //****************** ACTUALIZAR updateMany O updateOne

  /*  const result = await db.collection('users').updateMany({ 
        age: 35
    }, {
        $set: {
            age: 34
        }
    });
    console.log(result)
} catch (error) {
    console.error('Error during database connection:', error);
} finally {
    // Puedes cerrar la conexión aquí si es necesario
    await client.close();
}
}*/

//************** ELIMINAR deleteMany O deleteOne */

/*        const result = await db.collection('users').deleteMany({ 
            age: 32
        }
        );
        console.log(result)
    } catch (error) {
        console.error('Error during database connection:', error);
    } finally {
        // Puedes cerrar la conexión aquí si es necesario
        await client.close();
    }*/