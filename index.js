const {app, BrowserWindow}=require('electron');
app.on('ready',()=>{
    
    let win = new BrowserWindow({width: 1200, height: 640,frame:false,
        webPreferences:{
        nodeIntegration: true,
        contextIsolation: false
    
    }});
    
    win.loadFile('index.html');
    win.show();
    win.on('closed',()=>{win=null;
    app.quit;});
});