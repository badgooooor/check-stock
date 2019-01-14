const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

module.exports = {
    adjStockWindow: function() {
        editWindow = new BrowserWindow({
            width: 400,
            height: 600,
            title: 'Title Product'
        });
        editWindow.loadURL(url.format({
            pathname: path.join(__dirname,'..','..','browser', 'adjStock.html'),
            protocol: 'file:',
            slashes: true
        }));
    
        editWindow.on('close', () => {
            window = null;
        });
    }
}