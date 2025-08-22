var fruits = ["Mango", "Banana", "Apple", "Orange", "Lichi"];
var part1 = fruits.slice(1, 3);
console.log(part1);

var part2 = fruits.slice(3);
console.log(part2);

var part3 = fruits.slice(-2);
console.log(part3);

console.log(fruits);


// 🔹  slice() কী?
//     👉 slice() হলো JavaScript Array এর একটা method।
//     এটা ব্যবহার করা হয় –
//         1.  কোনো Array থেকে কিছু অংশ (portion) কেটে নিয়ে নতুন Array বানানোর জন্য।
//         2.  মূল Array (original array) একদমই পরিবর্তন হয় না।

// 🔹  Syntax
//     array.slice(start, end)
//     1.  start → কোন index থেকে শুরু হবে (include হবে)।
//     2.  AbortControllerend → কোন index পর্যন্ত যাবে (কিন্তু end index বাদ যাবে)।
//     3.  যদি end না দাও, তাহলে slice() Array এর শেষ পর্যন্ত চলে যাবে।        

// 🔹  উদাহরণ
//     let fruits = ["Mango", "Banana", "Apple", "Orange", "Lichi"];    

// 1️⃣ শুরু থেকে কিছু অংশ নেওয়া
//     let part1 = fruits.slice(1, 3);
//     console.log(part1); // ["Banana", "Apple"]
//     👉 এখানে 1 index থেকে শুরু, কিন্তু 3 index বাদ গেছে।

// 2️⃣ শেষ পর্যন্ত কাটা
//     let part2 = fruits.slice(2);
//     console.log(part2); // ["Apple", "Orange", "Lichi"]
//     👉 এখানে 2 index থেকে শুরু করে Array এর শেষ পর্যন্ত গেছে।

// 3️⃣ নেগেটিভ index ব্যবহার
//     let part3 = fruits.slice(-3);
//     console.log(part3); // ["Apple", "Orange", "Lichi"]
//     👉 -3 মানে Array এর শেষ থেকে ৩ টা element নিল।

// 🔹  মূল Array পরিবর্তন হয় না
//     console.log(fruits); 
//     // ["Mango", "Banana", "Apple", "Orange", "Lichi"]
//     👉 slice() শুধু কপি করে নতুন Array বানায়, পুরোনোটা বদলায় না।

// 🔹  slice() বনাম splice() পার্থক্য
//     1.  slice() → কপি করে নতুন Array বানায়। মূল Array পরিবর্তন হয় না।
//     2.  splice() → Array থেকে মুছে ফেলে বা যোগ করে। মূল Array পরিবর্তিত হয়।
//     উদাহরণ:

//     let arr = [1, 2, 3, 4, 5];
//     let newArr = arr.slice(1, 4);
//     console.log(newArr); // [2, 3, 4]
//     console.log(arr);    // [1, 2, 3, 4, 5] → original same    

// 🔹  গল্প দিয়ে বুঝি
//     ভাবো তোমার একটা বই আছে 📖।
//     1.  পুরো বই হলো Array।
//     2.  তুমি চাইছো ৩য় থেকে ৫ম পৃষ্ঠার একটা ফটোকপি (copy) করতে।
//     3.  তুমি slice() ব্যবহার করলে সেই কপি পেয়ে গেলে, কিন্তু বইয়ের আসল পাতাগুলো অক্ষত রইল।    