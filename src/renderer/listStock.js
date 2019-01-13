const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

module.exports = {
    listStockWindow: function() {
        editWindow = new BrowserWindow({
            width: 768,
            height: 768,
            title: 'Title Product'
        });
        editWindow.loadURL(url.format({
            pathname: path.join(__dirname,'..','..','browser', 'listStock.html'),
            protocol: 'file:',
            slashes: true
        }));
    
        editWindow.on('close', () => {
            window = null;
        });
    }
}