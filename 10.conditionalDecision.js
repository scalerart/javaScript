var age = 17;
if(age >=18){
    console.log("You are Adult")
} else {
    console.log("You are a minor.");
}

var marks = 70;
if(marks >= 80) {
    console.log("Grate: A+")
} else if(marks >= 70) {
    console.log("Grate: A")
} else {
    console.log("Grate: B")
}


// JavaScript এর Conditional Decision মানে হলো — কোনো শর্ত (condition) ঠিক থাকলে একরকম কাজ করবে, আর ভুল হলে অন্যরকম কাজ করবে।
// এটা প্রোগ্রামিং এর সবচেয়ে গুরুত্বপূর্ণ অংশগুলোর মধ্যে একটি।

// 🎯 JavaScript Conditional Decision (if-else, comparison)
// 1.  Comparison Operators (তুলনা করার চিহ্ন)
//     JavaScript এ শর্ত যাচাই করার সময় এই comparison operators ব্যবহার হয়:
// |Operator| কাজ কী করে                           | উদাহরণ    | ফলাফল  |
// | ------ | -------------------------------------- | --------- | ------- |
// | ==     | সমান কিনা (value check)                | 5 == "5"  | true  |
// | ===    | একেবারে সমান কিনা (value + type check) | 5 === "5" | false |
// | !=     | সমান না হলে                            | 5 != 3    | true  |
// | !==    | একেবারে সমান না হলে (value + type)     | 5 !== "5" | true  |
// | >      | বড় হলে                                 | 7 > 5     | true  |
// | <      | ছোট হলে                                | 3 < 5     | true  |
// | >=     | বড় বা সমান হলে                         | 5 >= 5    | true  |
// | <=     | ছোট বা সমান হলে                        | 4 <= 5    | true  |

// 2.  if Statement (শুধু শর্ত সত্য হলে কাজ করবে)
//     let age = 18;
//     if (age >= 18) {
//         console.log("You are an adult.");
//     }
//     👉 এখানে যদি age >= 18 হয়, তাহলে বার্তা দেখাবে।

// 3.  if-else Statement (দুটি সম্ভাবনা থাকলে)
//     let age = 16;
//     if (age >= 18) {
//         console.log("You are an adult.");
//     } else {
//         console.log("You are a minor.");
//     }
//     👉 যদি শর্ত মিথ্যা হয়, তাহলে else অংশ চলবে।    

// 4.  if-else if-else Statement (একাধিক শর্ত যাচাই)
//     let marks = 75;
//     if (marks >= 80) {
//         console.log("Grade: A+");
//     } else if (marks >= 60) {
//         console.log("Grade: B");
//     } else if (marks >= 40) {
//         console.log("Grade: C");
//     } else {
//         console.log("Fail");
//     }
//     👉 এখানে একাধিক শর্ত একে একে যাচাই হবে।

// 5.  Nested if (if এর ভেতরে if)
//     let age = 20;
//     let hasID = true;

//     if (age >= 18) {
//         if (hasID) {
//             console.log("You can enter.");
//         } else {
//             console.log("ID required!");
//         }
//     } else {
//         console.log("You are too young!");
//     }
//     👉 এক শর্তের ভেতরে আরেক শর্ত দেওয়া যায়।    

// ✅ এখন তুমি শিখলে:
//     1.  Comparison operators
//     2.  if, if-else, else-if ladder
//     3.  Nested if    