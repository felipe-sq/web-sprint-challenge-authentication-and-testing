# Authentication and Testing Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Authentication and Testing**. During this sprint, you studied **authentication, JSON web tokens, unit testing, and backend testing**. In your challenge this week, you will demonstrate your mastery of these skills by creating **a dad jokes app**.

This is an individual assessment. All work must be your own. All projects will be submitted to Codegrade for automated review. You will also be given feedback by code reviewers on Monday following the challenge submission. For more information on the review process [click here.](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge.

## Project Setup

- [x] Run `npm install` to install your dependencies.
- [x] Run tests locally executing `npm test`.

For a step-by-step on setting up Codegrade see [this guide.](https://www.notion.so/lambdaschool/Submitting-an-assignment-via-Code-Grade-A-Step-by-Step-Walkthrough-07bd65f5f8364e709ecb5064735ce374)

## Project Instructions

Dad jokes are all the rage these days! In this challenge, you will build a real wise-guy application.

Users must be able to call the `[POST] /api/auth/register` endpoint to create a new account, and the `[POST] /api/auth/login` endpoint to get a token.

We also need to make sure nobody without the token can call `[GET] /api/jokes` and gain access to our dad jokes.

We will hash the user's password using `bcryptjs`, and use JSON Web Tokens and the `jsonwebtoken` library.

### MVP

Your finished project must include all of the following requirements (further instructions are found inside each file):

- [x] An authentication workflow with functionality for account creation and login, implemented inside `api/auth/auth-router.js`.
- [x] Middleware used to restrict access to resources from non-authenticated requests, implemented inside `api/middleware/restricted.js`.
- [x] A minimum of 2 tests per API endpoint, written inside `api/server.test.js`.

**IMPORTANT Notes:**

- Do not exceed 2^8 rounds of hashing with `bcryptjs`.
- If you use environment variables make sure to provide fallbacks in the code (e.g. `process.env.SECRET || "shh"`).
- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install extra libraries. Do not update existing packages.
- The database already has the `users` table, but if you run into issues, the migration is available.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and assess your work and perform basic professional polishing.

## Submission format

- [x] Submit via Codegrade by pushing commits to your `<firstName-lastName>` branch on Github.
- [x] Check Codegrade before the deadline to compare its results against your local tests.
- [x] Check Codegrade on the days following the Sprint Challenge for reviewer feedback.
- [x] New commits will be evaluated by Codegrade if pushed _before_ the sprint challenge deadline.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics.

1. Differences between using _sessions_ or _JSON Web Tokens_ for authentication.
   `While both are used for authentication, sessions are more secure and are more efficient. Sessions are used for storing data on the server, while JSON Web Tokens are used for storing data on the client side; sessions are only implemented as needed by the server.`

2. What does `bcryptjs` do to help us store passwords in a secure manner?
   `bcryptjs uses a hashing algorithm to hash passwords. It is a one-way hashing algorithm, meaning that it cannot be reversed, thus it is more difficult for unauthorized users to try to reverse/decrypt passwords.`

3. How are unit tests different from integration and end-to-end testing?
   `Unit tests are used to test individual functions and classes. Integration tests are used to test the entire application. End-to-end tests are used to test the entire application from the client side to the server side.`

4. How does _Test Driven Development_ change the way we write applications and tests?
   `Test Driven Development is a software development process that uses tests to drive development. It is a process that involves writing tests before writing code. Writing test-driven code may take a little more time at the beginning, but it will ensure that code is written well for other users or coders who may work on the code at a future date. `
