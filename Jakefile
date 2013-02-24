var print_opts = {printStdout: true, printStderr: true};

desc('Run all tasks');
task('default', ['console-log', 'test', 'test-run'], {async: true}, complete);

desc('console.log with color and symbol');
task('console-log', {async: true}, function(args) {
    var command = "./console_example.js";
    jake.exec(command, complete, print_opts);
});

desc('mocha unit test example');
task('test', {async: true}, function(args) {
    var command = "./node_modules/.bin/mocha test/foo.unit.js";
    jake.exec(command, complete, print_opts);
});


var Mocha = require('mocha');
var mocha = new Mocha({reporter: 'spec', ui: 'bdd'});

function run_tests(cb) {
    mocha.addFile('./test/foo.unit.js');
    mocha.run(function(failures) {
        cb(failures);
    });
}

desc('mocha test example run in same process');
task('test-run', {async: true}, function(args) {
    run_tests(function(err) {
        if (err) {
            fail(err);
        } else {
            complete();
        }
    });
});
