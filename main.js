const { app, BrowserWindow } = require('electron');
const path = require('path');
const express = require('express');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'renderer.js')
        }
    });

    mainWindow.loadURL('http://localhost:3000');
}

// Set up Express server
const server = express();
server.use(express.static(__dirname));

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

app.on('ready', createWindow);
