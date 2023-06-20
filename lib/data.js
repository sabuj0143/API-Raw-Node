const fs = require('fs');
const path = require('path');

const lib = {};

lib.basedir = path.join(__dirname, '../.data/');

lib.create = function (dir, file, data, callback) {
    fs.open(lib.basedir + dir + '/' + file + '.json', 'wx', function (err, fileDescription) {
        if (!err && fileDescription) {
            const stringData = JSON.stringify(data);
            fs.writeFile(fileDescription, stringData, function (err) {
                if (!err) {
                    fs.close(fileDescription, function (err) {
                        if (!err) {
                            callback(false);
                        } else {
                            callback('error closing the new file');
                        }
                    });
                } else {
                    callback('error writing to new file');
                }
            });
        } else {
            callback('Could not create a new file, if may already exist');
        }
    });
}

module.exports = lib;