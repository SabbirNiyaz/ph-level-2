// spread and rest operator

const friends = ["Alice", "Bob", "Charlie"];

const schoolFriends = ["David", "Eve"];

const collegeFriends = ["Frank", "Grace"];

const universityFriends = ["Heidi", "Ivan"];

friends.push(...schoolFriends);
console.log(friends);

// Using spread operator to combine arrays
const allFriends = [
  ...friends,
  ...schoolFriends,
  ...collegeFriends,
  ...universityFriends
];
console.log(allFriends);

// Using Spread operator in objects
const user = {
    firstName: "Sabbir",
    phoneNumber: "017xxxxxxxx",
}

const otherInfo = {
    age: 24,
    address: "Dhaka, Bangladesh"
}
// Using spread operator to combine objects
const completeInfo = {
    ...user,
    ...otherInfo
}
console.log(completeInfo);


// Rest operator
const inviteFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => {
        console.log(`Please come to my party, ${friend}`);
    }); 
}
inviteFriends("Sabbir", "Alice", "Bob", "Charlie", "David");