jake-console-output
===================

Code to reproduce issue with jake not preserving output in mocha tests.

Setup
-----

Run `npm install`.

Then install jake globally:

`npm install -g jake`

Then run jake:
`jake`

That should produce output similar to:

    Printing with color and non-ascii symbol
    - foo
    - bar

    ... etc.


If you run `jake test`, you should see output that has duplicated lines and with no color.

Running `jake test-run` runs the mocha tests in the same process and does not exhibit the same problem.
