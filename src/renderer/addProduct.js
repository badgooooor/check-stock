const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

module.exports = {
    addProductWindow: function() {
        addWindow = new BrowserWindow({
            width: 400,
            height: 600,
            title: 'Add Product'
        });
        addWindow.loadURL(url.format({
            pathname: path.join(__dirname,'..','..','browser', 'addProduct.html'),
            protocol: 'file:',
            slashes: true
        }));
    
        addWindow.on('close', () => {
            window = null;
        });
    }
}
