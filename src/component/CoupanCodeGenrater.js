export function generateCode() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const lettersAndNumbers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  // First character must be a letter
  let code = letters.charAt(Math.floor(Math.random() * letters.length));

  // Remaining 4 characters can be letters or digits
  for (let i = 0; i < 4; i++) {
    code += lettersAndNumbers.charAt(Math.floor(Math.random() * lettersAndNumbers.length));
  }

  return code;
}