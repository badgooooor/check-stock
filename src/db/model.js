const path = require('path')
const fs = require('fs')
const SQL = require('sql.js')

/*
  SQL.js returns a compact object listing the columns separately from the
  values or rows of data. This function joins the column names and
  values into a single objects and collects these together by row id.
*/
let _rowsFromSqlDataObject = function (object) {
    let data = {};
    let i = 0;
    let j = 0;
    for (let valueArray of object.values) {
        data[i] = {};
        j = 0;
        for (let column of object.columns) {
            Object.assign(data[i], {[column]: valueArray[j]});
            j++;
        }
        i++;
    }
    return data;
};

// Return a string of placeholders for use in a prepared statement.
let _placeHoldersString = function (length) {
    let places = '';
    for (let i = 1; i <= length; i++) {
        places += '?, ';
    }
    return /(.*),/.exec(places)[1];
}

// Open and close connection handler.
SQL.dbOpen = function (databaseFileName) {
    try {
        return new SQL.Database(fs.readFileSync(databaseFileName));
    } catch (error) {
        console.log("Can't open database file.", error.message);
        return null;
    }
};

SQL.dbClose = function (databaseHandle, databaseFileName) {
    try {
        let data = databaseHandle.export();
        let buffer = Buffer.alloc(data.length, data);
        fs.writeFileSync(databaseFileName, buffer);
        databaseHandle.close();
        return true;
    } catch (error) {
        console.log("Can't close database file.", error.message);
        return null;
    }
};

// Initialize a new SQLite3 database from schema.sql
// (Called from main.js during initialization)
module.exports.initDb = function (appPath, callback) {

};

// List products.
module.exports.getProducts = function () {

};

// Fetch single product.
module.exports.getProduct = function (id) {

};

// Delete product's data.
module.exports.deleteProducts = function (id, callback) {

};

// Insert or update data in the database.
module.exports.saveFormData = function (tableName, keyValue, callback) {

}