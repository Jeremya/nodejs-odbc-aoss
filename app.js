const odbc = require('odbc');
const util = require('util');

// building connection stream. Add Uid=username and Pwd=password if necessary.
let CONNECTION_STRING = 'DRIVER=/opt/simba/spark/lib/64/libsparkodbc_sb64.so;UID=user;PWD=password;HOST=127.0.0.1;PORT=9000;AuthMech=3;';


async function connectToDatabase() {
    const connection = await odbc.connect(CONNECTION_STRING).catch(err => console.error('There was an error trying to connect', err));
    const result = await connection.query("select * from join_test.carts as a inner join join_test.users as b on a.user_id=b.user_id where a.user_id='6eb572ad-7cec-442b-9f50-c0da7938218c';");

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


