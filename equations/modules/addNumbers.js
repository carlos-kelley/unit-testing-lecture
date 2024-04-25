// Giving num2 a default value so it can handle being passed one argument
export function addNumbers(num1, num2 = 0) {
  // Making sure it does not accept more than two arguments
  if (arguments.length > 2) {
    // We can test that an error was returned
    throw new Error(
      "This function accepts only two arguments"
    );
  } else return num1 + num2;
}
