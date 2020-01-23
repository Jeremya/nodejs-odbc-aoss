# Connect to AlwaysOn SQL using NodeJS

## Objectives
Simple Nodejs example that open a connection using [node-odbc](https://www.npmjs.com/package/odbc) to a running [AlwaysOn SQL on DSE](https://docs.datastax.com/en/dse/6.7/dse-dev/datastax_enterprise/spark/alwaysOnSql.html).

DataStax provides multiple ODBC/JDBC drivers to connect to Cassandra and DSE, please see [here](https://downloads.datastax.com/#odbc-jdbc-drivers) for more information.

## Setup and running

### Prerequisites

* NodeJS installed
* [Simba Spark ODBC installed](https://docs.datastax.com/en/dse/6.7/dse-dev/datastax_enterprise/spark/simbaOdbcDriver.html)
* DSE running with Analytics workload and AlwaysOn SQL enabled

### Running
#### Building
At the project root level run

```npm install```

This will create node_modules folder with all required dependencies.

#### Configuration changes
Change connection string at the top of `app.js` using your own values.
In this example, AlwaysOn SQL service is expected to be available on `localhost:10000` but you can change it.

#### Run the app
```npm start```

## Build Connection String
Connection string should look like this ```DRIVER=/opt/simba/spark/lib/64/libsparkodbc_sb64.so;UID=test_spark;PWD=test_spark;HOST=127.0.0.1;PORT=9000;AuthMech=3;```


### Authentication modes
You can use different authentication mechanisms like Kerberos. See details on [Simba Linux Authentication page](https://www.simba.com/products/Hive/doc/ODBC_InstallGuide/linux/content/odbc/hi/authoptions.htm)
Use AuthMech parameter to determine which authentication method you are using.

| AuthMech value  | Authentication type  |
|:---:|:---:|
|0   | No Authentication  |
| 1  | Using Kerberos  |
| 2  | Using Username  | 
| 3  | Using Username and Password  | 
| 6  | Using Windows Azure HDInsight Service  | 

Use ```UID``` and ```PWD``` parameters to put username and password.
