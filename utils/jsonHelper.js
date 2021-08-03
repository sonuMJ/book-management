const jsonfile = require('jsonfile')

const file = "./assets/sample.json"

exports.readJson = () => {
    return new Promise((resolve, reject) => {
        jsonfile.readFile(file)
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                console.log(err);
                reject(err)
            })
    })
}
