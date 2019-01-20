const fs = require('fs')
const electron = require('electron');
const url = require('url');
const path = require('path');
const cheerio = require('cheerio')

const {app, BrowserWindow} = electron;
const model = require(path.join(__dirname, '..', '..', 'src', 'db', 'model.js'))
const view = require(path.join(__dirname, '..', '..', 'src', 'view', 'dbView.js'))

let body = fs.readFileSync(path.join(__dirname , '..', '..', 'browser', 'listStock.html'), 'utf8')
let $ = cheerio.load(body)

module.exports.listStockWindow = () => {
    listWindow = new BrowserWindow({
        width: 768,
        height: 768,
        title: 'Title Product'
    });

    listWindow.loadURL(url.format({
        pathname: path.join(__dirname , '..', '..', 'browser', 'listStock.html'),
        protocol: 'file:',
        slashes: true
    }));

    listWindow.on('close', () => {
        window = null;
    }); 
}

module.exports.stockRender = () => {
    
}