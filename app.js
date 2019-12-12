const odbc = require('odbc');
let util = require('util');
let async = require('async');

// building connection stream. Add Uid=username and Pwd=password if necessary.
let CONNECTION_STRING = 'DRIVER=/opt/simba/spark/lib/64/libsparkodbc_sb64.so;HOST=localhost;PORT=10000';

async function connectToDatabase() {
    console.log("Connect to database");

    const connection = await odbc.connect(CONNECTION_STRING).catch(console.log(err => console.error('There was an error trying to connect', err)));
    const result = await connection.query("select * from customers.data limit 10");

    await connection.close();

    // Another way to connect using object
    // const connectionConfig = {
    //     connectionString: 'DRIVER=/opt/simba/spark/lib/64/libsparkodbc_sb64.so;HOST=localhost;PORT=10000',
    //     connectionTimeout: 10,
    //     loginTimeout: 10
    // }
    // const connection2 = await odbc.connect(connectionConfig);

    return result;
}

async function queryExample() {
    const pool = await odbc.pool(CONNECTION_STRING);
    const result = await pool.query('select * from customers.data limit 10');
    return result;
}

connectToDatabase()
    .then((result) => console.log('Retrieved successfully data from cluster' + util.inspect(result)))
    .catch(err => console.error('There was an error trying to connect', err));


