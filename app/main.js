const { app, BrowserWindow } = require('electron')
  function createWindow () {   
// 创建浏览器窗口
const win = new BrowserWindow({
 width: 800,
 height: 600,
resizable: true, //禁止改变主窗口尺寸
// frame:false, //去掉边框和工具栏  去掉之后就不能拖拽窗口,需要自己写
maximizable: true, //可以最大化
 webPreferences: {
   nodeIntegration: true
 }
})
// 这里是配置的入口文件，如果需要改变入口文件改这里就可以 为相对路径
win.loadFile('index.html')
 
// 打开开发者工具
// win.webContents.openDevTools()
 
 }
 
 
 // Electron会在初始化完成并且准备好创建浏览器窗口时调用这个方法
 // 部分 API 在 ready 事件触发后才能使用。
 app.whenReady().then(createWindow)
 
 //当所有窗口都被关闭后退出
 app.on('window-all-closed', () => {
 // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
 // 否则绝大部分应用及其菜单栏会保持激活。
 if (process.platform !== 'darwin') {
     app.quit()
 }
 })
 
 app.on('activate', () => {
 // 在macOS上，当单击dock图标并且没有其他窗口打开时，
 // 通常在应用程序中重新创建一个窗口。
 if (BrowserWindow.getAllWindows().length === 0) {
     createWindow()
 }
 })
 
 
