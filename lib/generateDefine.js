const { spawn } = require("child_process");
const path = require("path");


const tscCliPath = path.join(process.cwd(), 'node_modules/typescript/bin/tsc');

module.exports = function (done) {

    const cmd = spawn('node', [
        tscCliPath,
        '-p',
        'tsconfig.json'
    ], { stdio: 'inherit' })

    cmd.on('close', () => done());
}
