console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  const name = data.toString();
  console.log(`Your name is: ${name}`);
});
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
