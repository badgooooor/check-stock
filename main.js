const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu, ipcMain} = electron;
let mainwindow;


// Initialize main window.
const createWindow = () => {
    mainwindow = new BrowserWindow({
        width: 1024,
        height:768,
        minWidth: 1024,
        minHeight: 768
    });
    mainwindow.loadURL(url.format({
        pathname: path.join(__dirname, 'browser', 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainwindow.on('closed', () => {
        app.quit();
    });

    require('./src/mainMenu');
};



app.on('ready', createWindow);