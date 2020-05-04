const { spawn } = require("child_process");
const path = require("path");

module.exports = function (done) {
    const cmd = spawn('yarn', [
        'compile'
    ], { stdio: 'inherit' })

    cmd.on('close', () => done());
}
