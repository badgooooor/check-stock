'use strict'
const model = require('../db/model')

module.exports.showStock = function (rowsObject) {
    let markup = ''
    for (let rowId in rowsObject) {
        let row = rowsObject[rowId]
        markup += '<tr>'
        + '<td>' + row.id + '</td>'
        + '<td>' + row.name + '</td>'
        + '</tr>'
    }
    const list = document.getElementById("stock-list")
    list.insertAdjacentHTML('beforeend', markup)
}