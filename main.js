const electron = require('electron');
const url = require('url');
const path = require('path');
const model = require('./src/db/model');

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

    model.initDb(app.getPath('userData'), 
        mainwindow.loadURL(url.format({
            pathname: path.join(__dirname, 'browser', 'index.html'),
            protocol: 'file:',
            slashes: true
        }))
    );

    mainwindow.on('closed', () => {
        app.quit();
    });

    require('./src/renderer/mainMenu');

    mainwindow.on('closed', () => mainwindow = null);
};




app.on('ready', createWindow);
app.on('window-all-closed', () => app.quit());