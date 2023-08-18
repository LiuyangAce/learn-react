const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
var os=require('os');

var homedir=os.homedir();
const desktopPath = path.join(homedir, 'Desktop')
console.log(desktopPath);

const targetPath = path.join(desktopPath,'mt_x')

// 判断存放资源的目录是否存在
// 不存在就创建
if (!fs.existsSync(targetPath)) {
    // 创建目录
    fs.mkdirSync(targetPath);
    console.log('目录已创建');
} else {
    console.log('目录已存在');
}


// 拉取代码到指定文件夹

const repoUrl = 'https://gitlab.hzleaper.com:81/liu.yang/test_webhook';
const targetFolder = path.join(targetPath, 'test_webhook');

try {
    // 拉取代码到目标文件夹
    execSync(`git clone ${repoUrl} ${targetFolder}`, { stdio: 'inherit' });
    console.log('代码拉取成功！');
} catch (error) {
    console.error('代码拉取失败:', error.message);
}