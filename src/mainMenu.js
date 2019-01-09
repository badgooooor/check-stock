const electron = require('electron');
const {Menu} = require('electron');
const app = electron.app

const addProduct = require('./addProduct');
const editProduct = require('./editProduct')
const mainMenuTemplate = [
    {
        label: 'Products',
        submenu: [
            {
                label: 'Add Product',
                click() {
                    addProduct.addProductWindow();
                }
            },
            {
                label: 'Delete Product',
                click() {
                    
                }
            },
            {
                label: 'Edit Product',
                click() {
                    editProduct.editProductWindow();
                }
            }
        ]
    },
    
];

if (process.env.NODE_ENV != 'production') {
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu: [
            {
                label: 'Toggle DevTools',
                accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    })
};


const menu = Menu.buildFromTemplate(mainMenuTemplate);
Menu.setApplicationMenu(menu);