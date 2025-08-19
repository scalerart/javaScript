var bananaPrice = 12;
console.log(typeof bananaPrice);

var name = "ABDUL KADIR";
console.log(typeof name);

var isStudent = true;
console.log(typeof isStudent)

// JavaScript Variable এ রাখা যায় এমন ডেটার ধরন (Data Types)
//     JavaScript-এ ২ ভাগের Data Type আছে:
// ১.  Primitive Data Types (সাধারণ/একক মান)
//     এগুলো immutable (পরিবর্তনযোগ্য নয়) এবং একবার মান সেট করলে আসল ভ্যালু সরাসরি থাকে।
//     1.  String → টেক্সট
//         let name = "ABDUL KADIR";

//     2.  Number → সংখ্যা (integer, float সব একই type)
//         let age = 25;
//         let price = 99.99;

//     3.  Boolean → true বা false
//         let isStudent = true;
    
//     4.  Undefined → মান দেওয়া হয়নি
//         let x;
//         console.log(x);

//     5.  Null → খালি মান (ইচ্ছাকৃতভাবে কিছু নাই)
//         let y = null;

//     6.  Symbol → ইউনিক আইডেন্টিফায়ার তৈরি করতে ব্যবহৃত
//         let id = Symbol("userId");

//     7.  BigInt → খুব বড় সংখ্যা রাখার জন্য (যা Number এ রাখা যায় না)
//         let big = 123456789012345678901234567890n;

// ২.  Non-Primitive (Reference) Data Types
//     এগুলো object এর রেফারেন্স ধরে রাখে।
//     1.  Object → key-value আকারে ডেটা রাখে
//         let user = { name: "Abdul", age: 25 };

//     2.  Array → একাধিক ডেটা লিস্ট আকারে রাখে
//         let numbers = [10, 20, 30];

//     3.  Function → ভ্যারিয়েবলে ফাংশনও রাখা যায়
//         let greet = function() {
//             return "Hello!";
//         }

// 📌 সারসংক্ষেপ:
//     JavaScript Variable (var, let, const) →
//     👉 রাখতে পারে ২ ধরনের Data Type:
//     1.  Primitive Types → String, Number, Boolean, Undefined, Null, Symbol, BigInt
//     2.  Non-Primitive Types → Object, Array, Function, Date ইত্যাদি        