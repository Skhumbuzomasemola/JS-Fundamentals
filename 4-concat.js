const twoArg = process.argv[2];
if (twoArg === 'c cool') {
console.log('c is cool');
}
else if (twoArg === 'c') {
  console.log('c is undefined');
}
