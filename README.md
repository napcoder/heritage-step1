# 1st hiring step

The language choosen to solve the 2 exercises is Javascript on Node.js (v16.16.0) platform.
Yarn is the choosen package manager (it should work using npm too, but it is not tested).

Exercise 1 is in **exercise1.js** file.

Exercise 2 is split in 2 files:
- **exercise2.js** is the simplest one, solving the cases when you can cross the starting point any time
- **exercise2-adv.js** is the advance case, crossing the starting point is forbidden

Both of them do not check input format, because exercise 2 requirements states that input will be a safe (not empty) array of valid directions.

All files are meant to be used as imported functions, no cli interface is provided.

Unit tests are made using Jest, you can run the command `yarn test` to view the test result + test coverage.

Code is commented using JSDoc.

Code linting made using Standard.


