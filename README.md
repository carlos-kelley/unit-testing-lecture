#### What is Test Driven Development? (TDD)

- Think about what code should do first, then write tests to confirm those expectations, THEN write the code

  - Can help with structure, documentation, commenting, debugging, etc.

  Testing pyramid: https://semaphoreci.com/blog/testing-pyramid

- Unit tests should be isolated from **dependencies** (including other unit tests)
  - Modularity - store instead of prop chains, components, mocks
  - Proactive, not reactive, functional style programming

#### The TDD Process

1. Think about what unit should do
   - What is it?
   - What should it do?
   - What do we expect to happen?
2. Write tests
3. Run the test and see it fail. If it doesn't, it might not be testing the right thing - RED
4. Write the minimum amount of code required to make the test pass
5. Run the tests to see if it passes - GREEN
6. Refactor (You can do whatever you want to the code when the tests are green, just _don't add or change behavior)_ - BLUE
7. Repeat. Think of edge cases (leave the "happy path")

#### Why else is this important?

- Working on teams (CI/CD/DevOps)
  - Continuous Integration/Continuous Deployment
  - Even before testing, try to work with pure functions, reduce side-effects, if possible
- Working on something years later
- Reduce mental load
- Confidence in refactoring
- Structure applications more rigorously

#### What is BDD?

- Bad tests rely too much on how the function is implemented.
  - If you update the function, you must also update the test.
- Test behavior, not implementation
- (Counter example) Assumption:
  1.  Counter starts at 0
  2.  Ticking increments by 1

#### Next Steps

- Setting it up with React
- Mocks/Spies
- Learn Go With Tests
- TDD By Example - Kent Beck
- Functional Programming/Haskell
