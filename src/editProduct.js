const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

module.exports = {
    editProductWindow: function() {
        editWindow = new BrowserWindow({
            width: 600,
            height: 400,
            title: 'Add Product'
        });
        editWindow.loadURL(url.format({
            pathname: path.join(__dirname,'..','browser', 'editProduct.html'),
            protocol: 'file:',
            slashes: true
        }));
    
        editWindow.on('close', () => {
            window = null;
        });
    }
}
