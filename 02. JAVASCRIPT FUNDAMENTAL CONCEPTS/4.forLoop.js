// 🔹 সহজ লেভেল
// 1. ১ থেকে ১০ পর্যন্ত সংখ্যা প্রিন্ট করো।
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }

// 2. ১ থেকে ১০ পর্যন্ত সব জোড় সংখ্যা প্রিন্ট করো।
    for (let i = 2; i <= 10; i += 2) {
        console.log(i);
    }

// 3. ১ থেকে ১০ পর্যন্ত সব বেজোড় সংখ্যা প্রিন্ট করো।
    for (let i = 1; i <= 10; i += 2) {
        console.log(i);
    }

// 4. ১০ থেকে ১ পর্যন্ত সংখ্যা উল্টো প্রিন্ট করো।
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }

// 5. একটা টেক্সট ৫ বার প্রিন্ট করো।
    for (let i = 1; i <= 5; i++) {
        console.log("I love JavaScript");
    }

// 🔹 মাঝারি লেভেল
// 6. ১ থেকে ৫ পর্যন্ত যোগফল বের করো।
    let sum = 0;
    for (let i = 1; i <= 5; i++) {
        sum += i;
    }
    console.log("Sum:", sum); // 15

// 7. ১ থেকে ৫ পর্যন্ত গুণফল বের করো।
    let product = 1;
    for (let i = 1; i <= 5; i++) {
        product *= i;
    }
    console.log("Product:", product); // 120

// 8. ১ থেকে ২০ এর মধ্যে যেসব সংখ্যা ৩ দিয়ে বিভাজ্য।
    for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
        }
    }
// 9. Array এর সব element প্রিন্ট করো।
    let fruits = ["Mango", "Banana", "Apple"];
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }

// 10. একটা নাম উল্টো করে প্রিন্ট করো।
    let name = "Rahim";
    let reversed = "";
    for (let i = name.length - 1; i >= 0; i--) {
        reversed += name[i];
    }
    console.log(reversed); // "mihaR"    

// 🔹 একটু কঠিন লেভেল
// 11. ১ থেকে ১০ পর্যন্ত সংখ্যার বর্গ (square)।
    for (let i = 1; i <= 10; i++) {
        console.log(i * i);
    }

// 12. ১ থেকে ১০০ পর্যন্ত যোগফল।
    let total = 0;
    for (let i = 1; i <= 100; i++) {
        total += i;
    }
    console.log("Total:", total); // 5050

// 13. Array এর সব সংখ্যার যোগফল।
    let numbers = [10, 20, 30, 40, 50];
    let sumArr = 0;
    for (let i = 0; i < numbers.length; i++) {
        sumArr += numbers[i];
    }
    console.log("Array Sum:", sumArr); // 150

// 14. Array থেকে সবচেয়ে বড় সংখ্যা বের করো।
    let nums = [12, 56, 89, 34];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    console.log("Largest:", max); // 89

// 15. গুণের নামতা (৫ এর নামতা)।
    let n = 5;
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }    
/*
🔹  For Loop কী?
    👉 for loop হলো এমন একটা লুপ যা নির্দিষ্ট সংখ্যক বার চলার জন্য ব্যবহার করা হয়।
    যখন তুমি আগে থেকেই জানো লুপ কয়বার চলবে, তখন for loop ব্যবহার করাই সহজ।

🔹  For Loop এর গঠন (Syntax)
    for (শুরুর মান; শর্ত; পরিবর্তন) {
    // বারবার চলতে থাকা কোড
    }
    1.  শুরুর মান (initialization): লুপ কোথা থেকে শুরু হবে।
    2.  শর্ত (condition): যতক্ষণ true থাকবে ততক্ষণ লুপ চলবে।
    3.  পরিবর্তন (increment/decrement): প্রতিবার লুপ শেষে মান বাড়বে বা কমবে।

🔹  উদাহরণ ১ – 1 থেকে 5 পর্যন্ত সংখ্যা প্রিন্ট করা
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }    

🔹  উদাহরণ ২ – উল্টো দিক থেকে সংখ্যা (5 → 1)
    for (let i = 5; i >= 1; i--) {
        console.log(i);
    }

🔹  উদাহরণ ৩ – জোড় সংখ্যা (Even Numbers)
    for (let i = 2; i <= 10; i += 2) {
        console.log(i);
    }

🔹  উদাহরণ ৪ – যোগফল বের করা
    let sum = 0;
    for (let i = 1; i <= 5; i++) {
        sum = sum + i;
    }

🔹  ছোট গল্প দিয়ে বোঝা
    ভাবো তুমি একটা সিঁড়ি বেয়ে উঠছো 🪜।
    1.  প্রথম ধাপ থেকে শুরু করলে → initialization
    2.  শর্ত হলো: যতক্ষণ সিঁড়ি আছে → condition
    3.  প্রতিবার এক ধাপ উপরে উঠছো → increment
    4.  একেবারে শেষ ধাপে পৌঁছালে লুপ বন্ধ হবে।
    5.  এটাই হলো for loop এর কাজ করার নিয়ম।

🔹  সংক্ষেপে
    1.  While loop = শর্ত সত্যি থাকলে চলে (কতবার চলবে আগে জানা না থাকলেও চলে)।
    2.  For loop = নির্দিষ্ট সংখ্যক বার চলার জন্য সবচেয়ে ভালো।
    3.  For loop এর ৩ অংশ আছে: শুরু, শর্ত, পরিবর্তন।  */