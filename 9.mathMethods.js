console.log(Math.abs(-10));
console.log(Math.round(10.22));
console.log(Math.round(9.5));
console.log(Math.floor(10.5));
console.log(Math.ceil(9.85));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10 + 1))

// JavaScript Math Methods
// 1.  Math.abs(x) → Absolute (ধনাত্মক মান বের করা)
//     console.log(Math.abs(10));   // 10
//     console.log(Math.abs(-10));  // 10
//     👉 কোনো সংখ্যার নেগেটিভ চিহ্ন বাদ দিয়ে ধনাত্মক মান দেয়।

// 2.  Math.round(x) → Round (সর্বাধিক কাছের পূর্ণসংখ্যা)
//     console.log(Math.round(4.4)); // 4
//     console.log(Math.round(4.5)); // 5
//     console.log(Math.round(4.6)); // 5
//     👉 দশমিক সংখ্যা .5 বা তার বেশি হলে উপরের দিকে, আর .5 এর কম হলে নিচের দিকে রাউন্ড হয়।    

// 3.  Math.floor(x) → Floor (নিচের পূর্ণসংখ্যা)
//     console.log(Math.floor(4.9)); // 4
//     console.log(Math.floor(4.1)); // 4
//     console.log(Math.floor(-4.9)); // -5
//     👉 সবসময় নিচের পূর্ণসংখ্যায় নামিয়ে আনে।

// 4.  Math.ceil(x) → Ceil (উপরের পূর্ণসংখ্যা)
//     console.log(Math.ceil(4.1)); // 5
//     console.log(Math.ceil(4.9)); // 5
//     console.log(Math.ceil(-4.1)); // -4
//     👉 সবসময় উপরের পূর্ণসংখ্যায় তুলে দেয়।    

// 5.  Math.random() → Random (০ থেকে ১ এর মধ্যে একটি Random সংখ্যা)
//     console.log(Math.random()); // উদাহরণ: 0.123456
//     👉 প্রতিবার রান করলে ০ থেকে ১ এর মধ্যে ভিন্ন ভিন্ন সংখ্যা দিবে।
//     👉 যদি 1 থেকে 10 এর মধ্যে সংখ্যা চাই:
//     console.log(Math.floor(Math.random() * 10) + 1); 
//     // উদাহরণ: 1 - 10 এর মধ্যে যেকোনো সংখ্যা    

// 📋 সারসংক্ষেপ টেবিল
// | Method          | কাজ কী করে	               | উদাহরণ	           | ফলাফল
// | Math.abs(x)     | সংখ্যার Absolute মান দেয়       | Math.abs(-8)	  | 8
// | Math.round(x)	 | কাছের পূর্ণসংখ্যায় রাউন্ড করে     | Math.round(4.6)	 | 5
// | Math.floor(x)	 | সবসময় নিচে নামায়	            | Math.floor(4.9)   | 4
// | Math.ceil(x)	 | সবসময় উপরে তোলে	          | Math.ceil(4.1)	  | 5
// | Math.random()	 | 0 থেকে 1 এর মধ্যে র‍্যান্ডম সংখ্যা  | Math.random()	   | 0.123...