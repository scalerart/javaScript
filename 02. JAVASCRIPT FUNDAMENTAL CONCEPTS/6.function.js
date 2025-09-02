/*
🔹  Function কী?
    JavaScript এ Function হলো একটি ব্লক কোড, যা কোনো নির্দিষ্ট কাজ করার জন্য লেখা হয়।
        1.  একবার ফাংশন বানালে সেটা বারবার ব্যবহার করা যায়।
        2.  এতে কোড ছোট ও পরিষ্কার হয়।
    👉  সহজভাবে বললে, Function হলো কাজ করার জন্য তৈরি করা একটি মেশিন।

🔹  Function কিভাবে ডিফাইন করতে হয়?
    JavaScript এ Function লেখার জন্য function কীওয়ার্ড ব্যবহার হয়।
✅ Basic Function Syntax:
    function functionName() {
        // এখানে কোড লেখা হবে
    }

🔹  Function কিভাবে কল (Call) করতে হয়?
    1.  শুধু function এর নাম এবং বন্ধনী () লিখে কল করা হয়।
    2.  কল করলে ভেতরের কোড চালু হবে।
উদাহরণ:
    function sayHello() {
        console.log("Hello JavaScript!");
    }
    // Function call
    sayHello();

🔹  Function এর Parameters এবং Arguments
    1.  Parameter হলো ফাংশনের ভেতরে নেয়া ইনপুট ভ্যারিয়েবল।
    2.  Argument হলো ফাংশন কল করার সময় দেয়া মান।
উদাহরণ:
    function greet(name) {   // name হলো parameter
        console.log("Hello " + name);
    }
    greet("Kadir");   // এখানে "Kadir" হলো argument
    greet("Rahim");

🔹  Function এর Return Statement
    Function কোনো ভ্যালু বের করে দিতে চাইলে return ব্যবহার করা হয়।
উদাহরণ:
    function add(a, b) {
        return a + b;
    }
    let result = add(10, 20);
    console.log(result);

🔹  Function এর ধরণ
    1.  Normal Function → function name() {}
    2.  Function Expression → ভ্যারিয়েবলে ফাংশন রাখা যায়।
        const sayHi = function() {
            console.log("Hi!");
        };
        sayHi();
    3.  Arrow Function (ES6) → ছোট করে লেখার জন্য।
        const multiply = (x, y) => x * y;
        console.log(multiply(5, 6));

🎯  সারসংক্ষেপ
    1.  Function হলো পুনরাবৃত্ত কাজের জন্য লেখা কোড ব্লক।
    2.  function name(){} দিয়ে বানানো হয়।
    3.  কল করতে হয় name() দিয়ে।
    4.  Input নিতে পারে (parameter) এবং Output দিতে পারে (return)।
    5.  Normal, Expression, আর Arrow function ব্যবহার করা যায়।
*/    