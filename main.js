const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    show: false,
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true
    }
  });

  win.loadURL("http://3.27.235.107:8129");

    win.once("ready-to-show", () => {
    win.maximize();             // ⭐ cửa sổ full màn hình desktop
    win.show();
  });
}

app.whenReady().then(createWindow);
