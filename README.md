# Connect to AlwaysOn SQL using NodeJS

## Objectives
Simple Nodejs example that open a connection using [node-odbc](https://www.npmjs.com/package/odbc) to a running [AlwaysOn SQL on DSE](https://docs.datastax.com/en/dse/6.7/dse-dev/datastax_enterprise/spark/alwaysOnSql.html).

## Setup and running

### Prerequisites

* NodeJS installed
* Simba Spark ODBC installed (https://docs.datastax.com/en/dse/6.7/dse-dev/datastax_enterprise/spark/simbaOdbcDriver.html)
* DSE running with AlwaysOn SQL enabled

### Running
#### Building
At the project root level

```npm install```

This will create node_modules folder with all required dependencies.

#### Configuration changes
Change connection string at the top of app.js using your own values.

#### Run the app
```npm start```