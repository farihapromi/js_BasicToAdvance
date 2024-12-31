// Optional chaining is useful when you're working with objects that may have uncertain or optional properties, particularly in cases like API responses or dynamic data.
const user = {
  profile: {
    name: 'Alice',
    contact: {
      email: 'alice@example.com',
    },
  },
};

// Using optional chaining
const email = user.profile?.contact?.email;
console.log(email); // "alice@example.com"

// Accessing a non-existing property
const phone = user.profile?.contact?.phone;
console.log(phone); // undefined

try {
  const emailWithoutOC = user.profile.contact.email; // Error if contact doesn't exist
} catch (error) {
  console.error(error.message);
}
