const { spawn } = require("child_process");
const path = require("path");


const webpackCliPath = path.join(process.cwd(), 'node_modules/webpack-cli/bin/cli.js');

module.exports = function (done) {

    const cmd = spawn('node', [
        webpackCliPath,
        '--progress',
        '--config',
        path.join(process.cwd(), 'webpack/prod.config.js'),
    ], { stdio: 'inherit' })

    cmd.on('close', () => done());
}
