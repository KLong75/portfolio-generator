const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        // if there is an error, reject the Promise and send error to the Promise's `.catch()` method
        if (err) {
            reject(err);
            // return out of the function
            return;
        }
        // if everything went well, resolve the Promise and send data to `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', fileContent, err => {
          // if there is an error, reject the Promise and send error to the Promise's `.catch()` method
          if (err) {
              reject(err);
              // return out of the function
              return;
          }
          // if everything went well, resolve the Promise and send data to `.then()` method
          resolve({
            ok: true,
            message: 'Stylesheet created!'
          });
        });
      });
};

module.exports = { writeFile, copyFile};