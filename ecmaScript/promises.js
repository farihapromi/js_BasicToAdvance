//? A promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation. It allows you to handle asynchronous operations more easily and cleanly by providing a way to write asynchronous code that looks synchronous.

//? Pending: Initial state, neither fulfilled nor rejected.
//* Fulfilled(Resolved): The operation completed successfully.
//! Rejected: The operation failed or encountered an error.
const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hey this is promise syntax');
  }, 2000);
});
pr.then((res) => {
  console.log(res);
})
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('Finally promieses made');
  });
// const studentName = "Vinod";

// const enrollStudent = (studentName) => {
//   return new Promise((resolve, reject) => {
//     // Simulating asynchronous enrollment process
//     setTimeout(() => {
//       const isSuccessful = Math.random() > 0.4;

//       if (isSuccessful) {
//         resolve(`Enrollment successful for ${studentName}`);
//       } else {
//         reject(`Enrollment failed for ${studentName}. Please try again.`);
//       }
//     }, 2000);
//   });
// };

// enrollStudent(studentName)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Enrollment process completed.");
//   });

const promise1 = new Promise((resolve, reject) =>
  setTimeout(() => resolve('First'), 2000)
);

// const promise2 = new Promise((resolve) =>
//   setTimeout(() => resolve("Second"), 5000)
// );

const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => reject('Failed'), 100)
);

const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve('Third'), 1000)
);

// Promise.all([promise1, promise3, promise2])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Promise.allSettled([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

Promise.race([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error);
  });
