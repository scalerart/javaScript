function leapYear (year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
console.log(leapYear (1700))

/*
🔹  Leap Year হওয়ার নিয়ম ব্যাখ্যা
1️⃣  বছরটি ৪ দিয়ে বিভাজ্য হতে হবে
    👉 যেসব বছর ৪ দিয়ে ভাগ করলে ভাগশেষ থাকে না, সেগুলোকে Leap Year হওয়ার প্রার্থী ধরা হয়।
উদাহরণ:
2024 ÷ 4 = 506 → ✅ Leap Year হতে পারে
2023 ÷ 4 = 505.75 → ❌ Leap Year হতে পারবে না

2️⃣  কিন্তু যদি বছরটি ১০০ দিয়ে বিভাজ্য হয়, তাহলে Leap Year হবে না
    👉 মানে প্রতি 100 বছরে একবার সেই বছরকে Leap Year থেকে বাদ দেওয়া হয়।
    কারণ, পৃথিবীর সূর্যকে ঘুরতে আসল সময় ঠিক 365.2422 দিন — তাই সামঞ্জস্য রাখতে কিছু বছর বাদ দিতে হয়।
উদাহরণ:
1900 ÷ 100 = 19 → ❌ Leap Year নয়
2100 ÷ 100 = 21 → ❌ Leap Year নয়

3️⃣  তবে যদি বছরটি ৪০০ দিয়ে বিভাজ্য হয়, তাহলে আবার Leap Year হবে
    👉 প্রতি 400 বছরে একবার সেই নিয়ম বাদ দিয়ে আবার Leap Year ধরা হয়।
    এটা করা হয় যেন ক্যালেন্ডার ও বাস্তব সময় একসাথে মিলে যায়।
উদাহরণ:
2000 ÷ 400 = 5 → ✅ Leap Year
2400 ÷ 400 = 6 → ✅ Leap Year

🎯  সারসংক্ষেপ
    1.  ৪ দিয়ে বিভাজ্য → হতে পারে Leap Year।
    2.  কিন্তু ১০০ দিয়ে বিভাজ্য হলে → Leap Year হবে না।
    3.  তবে ৪০০ দিয়ে বিভাজ্য হলে → আবার Leap Year হবে।

🔹  Leap Year হওয়ার নিয়ম
    একটি বছর Leap Year হবে যদি:
        1.  বছরটি ৪ দিয়ে বিভাজ্য হয় (year % 4 === 0)
        2.  কিন্তু যদি ১০০ দিয়ে বিভাজ্য হয় তাহলে Leap Year হবে না (year % 100 !== 0)
        3.  তবে যদি ৪০০ দিয়ে বিভাজ্য হয় তাহলে আবার Leap Year হবে (year % 400 === 0)

✅ JavaScript Code
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;  // Leap Year
    } else {
        return false; // Not Leap Year
    }
}
// Function call
console.log(isLeapYear(2024)); // true (Leap Year)
console.log(isLeapYear(2023)); // false
console.log(isLeapYear(2000)); // true (Leap Year)
console.log(isLeapYear(1900)); // false

✅ Short Version (Arrow Function)
const isLeapYear = year => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

console.log(isLeapYear(2024)); // true
console.log(isLeapYear(2100)); // false
*/