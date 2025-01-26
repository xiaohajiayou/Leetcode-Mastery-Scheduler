const fs = require('fs');

function deleteFolder(folderPath) {
  fs.rm(folderPath, { recursive: true, force: true }, (err) => {
    if (err) {
      console.error(`Error deleting folder: ${err}`);
      return;
    }
    console.log('Folder deleted successfully');
  });
}

deleteFolder('Leetcode-Mastery-Scheduler');