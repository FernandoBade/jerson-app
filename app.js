const { app, BrowserWindow, globalShortcut } = require('electron'); // Trocar para require
const path = require('path'); // Trocar para require
require('electron-reload')(__dirname, {
    electron: require(path.join(__dirname, 'node_modules', 'electron'))
});

function criarJanelaPrincipal() {
    const janela = new BrowserWindow({
        width: 600,
        height: 400,
        frame: true,
        transparent: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    janela.loadFile(path.join(__dirname, 'src', 'html', 'index.html'));

    janela.webContents.openDevTools();

    janela.setAlwaysOnTop(true);
}

app.whenReady().then(() => {
    criarJanelaPrincipal();

    globalShortcut.register('CommandOrControl+Alt+J', () => {
        criarJanelaPrincipal();
    });

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            criarJanelaPrincipal();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});