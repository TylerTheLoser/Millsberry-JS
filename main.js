const electron = require('electron');
const { app, BrowserWindow } = require('electron')
const path = require('path')
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')

const exp = express();

//db config
const db = require('./config/keys').MongoURI;

//connect to mongo
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("connected to Millsberry database."))
  .catch(err => console.log(err));

exp.use(expressLayouts);
exp.set('view engine', 'ejs');

//body parser
exp.use(express.urlencoded({ extended: false }));

exp.use('/', require('./routes/index'));
exp.use('/', require('./routes/users'));

const PORT = process.env.PORT || 5000;

exp.listen(PORT, console.log(`Server started on port ${PORT}`));

let pluginName
switch(process.platform){
  case 'win32':
    pluginName = 'pepflashplayer.dll'
    break
  case 'darwin':
    pluginName = 'PepperFlashPlayer.plugin'
    break
  case 'linux':
    pluginName = 'libpepflashplayer.so'
    break
}
app.commandLine.appendSwitch('ppapi-flash-path', path.join(__dirname, pluginName))

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 840,
    height: 800,
    icon: 'favicon.ico',
    webPreferences: {
      nodeIntegration: true,
      plugins: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})