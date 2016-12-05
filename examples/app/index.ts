/** 
 * 引入相關的函式庫
 * */
import { app } from 'electron';
console.log(app.getAppPath());
app.on('ready', () => {
    let names: Electron.AppPathName[] = [
        "home", //User's home directory.
        "appData", //Per-user application data directory, which by default points to:
        "userData", //The directory for storing your app's configuration files, which by default it is the appData directory appended with your app's name.
        "temp",
        "exe",
        "module",
        "desktop",
        "documents",
        "downloads",
        "music",
        "pictures",
        "videos"
    ];
    names.forEach((name) => {
        console.log(`${name} = ${app.getPath(name)}`);
    });
    console.log(`getVersion = ${app.getVersion()}`)
    app.exit(0);
});