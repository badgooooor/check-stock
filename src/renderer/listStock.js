const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;
const model = require('../db/model');

module.exports = {
    listStockWindow: function() {
        listWindow = new BrowserWindow({
            width: 768,
            height: 768,
            title: 'Title Product'
        });

        listWindow.loadURL(url.format({
            pathname: path.join(__dirname,'..','..','browser', 'listStock.html'),
            protocol: 'file:',
            slashes: true
        }));

        listWindow.on('close', () => {
            window = null;
        });
    }
}