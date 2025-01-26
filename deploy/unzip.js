const fs = require('fs');
const JSZip = require('jszip');
const path = require('path');


function unzipToFolder(zipFilePath) {

    const outputFolder = path.join(__dirname, path.basename(zipFilePath, '.zip'));

    // 读取ZIP文件
    fs.readFile(zipFilePath, function(err, data) {
        if (err) {
            throw err;
        }

        JSZip.loadAsync(data).then(function(zip) {
            Object.keys(zip.files).forEach(function(filename) {
                zip.files[filename].async('nodebuffer').then(function(content) {
                    const destPath = path.join(outputFolder, filename);
                    const destDir = path.dirname(destPath);

                    fs.mkdirSync(destDir, { recursive: true });

                    fs.writeFile(destPath, content, function(err) {
                        if (err) {
                            throw err;
                        }
                        console.log(`Extracted: ${destPath}`);
                    });
                });
            });
        });
    });
}

unzipToFolder('Leetcode-Mastery-Scheduler.zip');