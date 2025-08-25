var price = 30;
console.log(price);
/*
🔹  JavaScript Variables কী?
    Variable মানে হলো কোনো মান (ডাটা) জমা রাখার “ঝুলি/কন্টেইনার”।
    যেমন: তুমি যদি “নাম”, “বয়স”, “ফলাফলের যোগফল” এগুলো কোথাও রাখতে চাও, তবে সেটি Variable এ রাখবে।

🔹  JavaScript এ Variable কয় ধরনের?
    JavaScript এ Variable ডিক্লেয়ার করার জন্য ৩টি কীওয়ার্ড ব্যবহার করা হয়:
    1.  var (variable)
    2.  let
    3.  const (constant)

১.  var
    👉 পুরোনো জাভাস্ক্রিপ্টে ব্যবহৃত হতো।
    👉 function scope ভিত্তিক, মানে ফাংশনের ভেতরে ডিফাইন করলে শুধু ফাংশনের ভেতরেই কাজ করবে।
    👉 কিন্তু ব্লকের ( { } ) ভেতরে থাকলেও বাইরে থেকে এক্সেস করা যায় → এজন্য এখন কম ব্যবহার হয়। */
    var price = 12;
    console.log(price);
/*
২.  let
    👉 ES6 (2015) থেকে এসেছে।
    👉 block scope ভিত্তিক → শুধু { } এর ভেতরেই কাজ করবে।
    👉 মান (value) পরে পরিবর্তন করা যাবে। */
    let age = 12;
    console.log(age);
    age = 24;
    console.log(age)
/*
৩.  const
    👉 constant → মান (value) একবার দিলে পরে আর পরিবর্তন করা যায় না।
    👉 এটিও block scope ভিত্তিক। */
     const country = "Bangladesh";
     console.log(country); //Bangladesh
//     country = "India"; ❌ (এটা করলে Error আসবে)    
/*
🔑  Scope এর পার্থক্য (var vs let vs const)
    {
        var a = 10;    block এর বাইরে থেকেও পাওয়া যাবে
        let b = 20;    শুধু এই block এর ভেতরে পাওয়া যাবে
        const c = 30;  শুধু এই block এর ভেতরে পাওয়া যাবে
    }
        console.log(a);  ✅ কাজ করবে
        console.log(b);  ❌ Error
        console.log(c);  ❌ Error

🎯  Variable এর নিয়ম
    1.  নামের মধ্যে স্পেস দেওয়া যাবে না → firstName ঠিক, কিন্তু first name ভুল।
    2.  নামের শুরুতে সংখ্যা দেওয়া যাবে না → name1 ঠিক, কিন্তু 1name ভুল।
    3.  Special Symbol ব্যবহার করা যাবে না (শুধু _ এবং $ ছাড়া)।
    4.  নাম অর্থবহ হওয়া ভালো → যেমন age, userName, totalMarks ইত্যাদি।        

🖼️ গল্প দিয়ে বোঝা
    ভাবো তুমি একটা স্কুলের শিক্ষক।
    *   var = পুরোনো রেজিস্টার → যেখানে লেখা জিনিস সবাই দেখতে পায়, ঠিকমতো সীমা মানে না।
    *   let = ক্লাসের নোটবুক → শুধু ওই ক্লাসের ভেতরে সীমাবদ্ধ।
    *   const = সার্টিফিকেট → একবার লেখা হলে আর পরিবর্তন করা যায় না।

✅ সংক্ষেপে
    *   var → পুরোনো, function scoped, বেশি সমস্যা হয়।
    *   let → আধুনিক, block scoped, পরিবর্তন করা যায়।
    *   const → block scoped, কিন্তু একবার মান দিলে আর পরিবর্তন হয় না।    
*/ 
