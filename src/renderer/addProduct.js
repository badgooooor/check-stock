const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

module.exports = {
    addProductWindow: function() {
        addWindow = new BrowserWindow({
            width: 500,
            height: 700,
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
