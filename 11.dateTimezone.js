var now = new Date();
console.log(now);

// JavaScript-এ Date এবং Timezone
// 1.  JavaScript Date অবজেক্ট
//     JavaScript-এ তারিখ এবং সময় হ্যান্ডেল করার জন্য Date() অবজেক্ট ব্যবহার করা হয়।
//     let now = new Date();
//     console.log(now);
//     👉 এটি আপনার কম্পিউটারের লোকাল টাইমজোন অনুযায়ী সময় দেখাবে।

// 2.  Date তৈরি করার বিভিন্ন উপায়
//     // বর্তমান তারিখ ও সময়
//     let d1 = new Date();  
//     // নির্দিষ্ট সময় (Year, Month, Day, Hour, Minute, Second, Millisecond)
//     let d2 = new Date(2025, 0, 21, 15, 30, 0);  // 21 Jan 2025, 15:30:00  
//     // নির্দিষ্ট string থেকে
//     let d3 = new Date("2025-08-21T12:00:00Z");  // UTC time

// 3.  Date Methods (লোকাল টাইম অনুযায়ী)
//     let now = new Date();
//     console.log(now.getFullYear());   // বছর
//     console.log(now.getMonth());      // মাস (0 = জানুয়ারি)
//     console.log(now.getDate());       // দিন
//     console.log(now.getDay());        // সপ্তাহের দিন (0=রবিবার)
//     console.log(now.getHours());      // ঘণ্টা
//     console.log(now.getMinutes());    // মিনিট
//     console.log(now.getSeconds());    // সেকেন্ড
//     👉 এগুলো সবসময় আপনার কম্পিউটারের লোকাল টাইমজোন অনুসারে রিটার্ন করে।

// 4.  UTC (Universal Time Coordinated) Methods
//     UTC হচ্ছে বিশ্বমান সময়।
//     লোকাল টাইমের বদলে UTC চাইলে ব্যবহার করতে হবে:
//     let now = new Date();
//     console.log(now.getUTCFullYear());
//     console.log(now.getUTCMonth());
//     console.log(now.getUTCDate());
//     console.log(now.getUTCHours());

// 5.  টাইমজোন চেক করা
//     let now = new Date();
//     console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
//     // যেমন: "Asia/Dhaka"
//     👉 এটি আপনার ডিভাইস কোন টাইমজোন ব্যবহার করছে সেটা বলে দেবে।    

// 6.  টাইমজোন অনুযায়ী সময় ফরম্যাট করা
//     Intl.DateTimeFormat ব্যবহার করে সহজে টাইমজোন সেট করা যায়।
//     let now = new Date();
//     // Dhaka time
//     let dhaka = new Intl.DateTimeFormat("en-US", {
//         timeZone: "Asia/Dhaka",
//         dateStyle: "full",
//         timeStyle: "long"
//     }).format(now);
//     console.log("Dhaka:", dhaka);

//     // New York time
//     let newYork = new Intl.DateTimeFormat("en-US", {
//       timeZone: "America/New_York",
//       dateStyle: "full",
//       timeStyle: "long"
//     }).format(now);
//     console.log("New York:", newYork);    

// 7.  তারিখকে মিলিসেকেন্ডে কনভার্ট করা
//     JavaScript-এ সময় সবসময় Unix Timestamp (১ জানুয়ারি ১৯৭০ থেকে মিলিসেকেন্ড) হিসেবে হিসাব রাখা হয়।
//     let now = new Date();
//     console.log(now.getTime());   // মিলিসেকেন্ড
//     // আবার মিলিসেকেন্ড থেকে তারিখ
//     let d = new Date(1724232000000);
//     console.log(d);    

// 8.  তারিখ তুলনা করা
//     let d1 = new Date("2025-08-21");
//     let d2 = new Date("2025-08-22");
//     console.log(d1 < d2);   // true    

// 9.  ISO Format (Standard Format)
//     let now = new Date();
//     console.log(now.toISOString());  
//     // যেমন: "2025-08-21T09:00:00.000Z"    

// ✅ সারসংক্ষেপ:
//     1.  Date() অবজেক্ট → তারিখ ও সময় তৈরি ও ম্যানেজ করতে ব্যবহৃত হয়।
//     2.  লোকাল টাইম মেথড → getFullYear(), getMonth() ইত্যাদি।
//     3.  UTC মেথড → getUTCFullYear(), getUTCHours() ইত্যাদি।
//     4.  টাইমজোন হ্যান্ডেল করতে → Intl.DateTimeFormat() ব্যবহার করা হয়।
//     5.  ISO ফরম্যাট ও Unix Timestamp খুব দরকারি ডেটা এক্সচেঞ্জের সময়।    