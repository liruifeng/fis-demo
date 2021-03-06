var mu = require('mu2');

exports.__express = function (path, options, callback) {

    var result = '';

    var stream = mu.compileAndRender(path, options)
    .on('data', function (data) {
        result += data.toString();
    })
    .on('end', function () {
        callback(null, result);
    });

}