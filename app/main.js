// Math package
const math = require('mathjs')
// Basic electron stuff
const electron = require('electron')                // Used to grab window properties
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
            width: 1550,
            height: 850,
            x: externalDisplay.bounds.x+200, 
            y: externalDisplay.bounds.y+100,
            frame: false})
    } else {
        win = new BrowserWindow({
            width: 1050,
            height: 1150,
            x: 1100,
            y: 0,
            frame: false})
    }
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))
}
    
app.on('ready', createWindow)