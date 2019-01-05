const electron = require('electron')
const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let win

function createWindow() {
    let displays = electron.screen.getAllDisplays()
    let externalDisplay = displays.find((display) => {
        return display.bounds.x !== 0 || display.bounds.y !==0
    })

    if (externalDisplay) {
        win = new BrowserWindow({
            width: 1500,
            height: 800,
            x: externalDisplay.bounds.x+200, 
            y: externalDisplay.bounds.y+100})
    }
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))
}

app.on('ready', createWindow)