const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

function zipFoldersAndFiles(folders, files, targetZip) {
  const output = fs.createWriteStream(targetZip);
  const archive = archiver('zip');

  output.on('close', () => {
    console.log('zip success');
  });

  archive.on('error', (err) => {
    throw err;
  });

  archive.pipe(output);

  const addToArchive = (itemPath, itemName) => {
    const stats = fs.statSync(itemPath);
    if (stats.isDirectory()) {
      archive.directory(itemPath, itemName);
    } else {
      archive.file(itemPath, { name: itemName });
    }
  };

  const addFoldersToArchive = (foldersArray) => {
    foldersArray.forEach((folder) => {
      addToArchive(folder, path.basename(folder));
    });
  };

  const addFilesToArchive = (filesArray) => {
    filesArray.forEach((file) => {
      addToArchive(file, path.basename(file));
    });
  };

  if (folders && folders.length > 0) {
    addFoldersToArchive(folders);
  }

  if (files && files.length > 0) {
    addFilesToArchive(files);
  }

  archive.finalize();
}

const foldersToZip = ['dist', 'assets', 'lib'];
const filesToZip = [
    'popup.html',
    'LICENSE',
    'manifest.json',
    'PRIVACY POLICY.md',
    'README.md'
];

zipFoldersAndFiles(foldersToZip, filesToZip, 'Leetcode-Mastery-Scheduler.zip');
