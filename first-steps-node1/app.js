const anexo1 = require("./anexo_01");
const request = require("request");
const fs = require("fs");
const archiver = require('archiver');

function download(urlImage) {
    return new Promise((resolve, reject) => {
        request(urlImage, {encoding: 'binary'}, function (err, res, body) {
            if (err) {
                reject();
                return;
            }

            const fileName = urlImage.split("/").pop();

            if (!fs.existsSync("downloads")) {
                fs.mkdirSync("downloads");
            }

            fs.writeFile("downloads/" + fileName, body, 'binary', function (err) {
                if (err) {
                    console.log("err", err);
                    reject();
                    return;
                }

                console.log("download efetuado", urlImage);
                resolve();
            });

        });
    });
}

function execute() {
    const images = anexo1.images;

    const promises = images.map((urlImage) => {
        return download(urlImage);
    });

    return Promise.all(promises).then(() => {
        return new Promise((resolve, reject) => {
            const output = fs.createWriteStream('images.zip');

            const archive = archiver('zip', {
                zlib: {level: 9}
            });

            output.on('close', function() {
                resolve("images.zip");
            });

            archive.pipe(output);
            archive.directory('downloads/', false);
            archive.finalize();
        });
    });
}

module.exports = {
    execute: execute
};