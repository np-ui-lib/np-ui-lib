const fs = require('fs');
const path = require('path');
var sass = require('node-sass');

const copyAssetsSync = function (src, dest) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    if (exists && isDirectory) {
        fs.readdirSync(src).forEach(function (childItemName) {
            copyAssetsSync(path.join(src, childItemName), dest);
        });
    } else {
        var ext = path.extname(src);
        if (ext === ".scss") {
            fs.linkSync(src, path.join(dest, path.basename(src)));
        }
    }
};

const start = function (src, dest) {
    if (fs.existsSync(dest)) {
        fs.rmdirSync(dest, { recursive: true });
    }
    fs.mkdirSync(dest);
    copyAssetsSync(src, dest);
}

start('projects/np-ui-lib/', './dist/np-ui-lib/styles/');
