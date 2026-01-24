const args = process.argv;

//? process.argv[0] = node path
//? process.argv[1] = file path
//? process.argv[2] = first argument

const name = args[2] || "Guest";
const time = new Date().getHours();
let greeting;

if (time < 12) {
  greeting = "Good morning";
} else if (time < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

console.log(`${greeting}, ${name}!`);