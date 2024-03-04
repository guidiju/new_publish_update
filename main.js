const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('index.html'); // Carrega um arquivo HTML (você pode criar um index.html na mesma pasta)
    win.webContents.on('did-finish-load', () => {
        const version = app.getVersion(); // Obtém a versão do Electron
        win.webContents.executeJavaScript(`document.getElementById('version').innerText = 'Versão do Electron: ${version}'`);
    });
}

app.whenReady().then(createWindow);
