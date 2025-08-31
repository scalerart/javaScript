var friendsAge = [20, 18, 19, 18, 25, 24, 21]
var position = friendsAge.indexOf(25);
console.log(position);
console.log(friendsAge[6]);
console.log(friendsAge.length);
friendsAge.push(25);
console.log(friendsAge);
friendsAge.pop();
console.log(friendsAge);
friendsAge.shift();
console.log(friendsAge);
friendsAge.unshift(16);
console.log(friendsAge);
/*
🔹  JavaScript Array কী?
    👉 Array হলো একটা বাক্স (Collection/Container) যেখানে একসাথে অনেকগুলো ডাটা (value) রাখা যায়।
        1.  সাধারণ ভ্যারিয়েবল (variable) এ আমরা একবারে একটা মাত্র ডাটা রাখতে পারি।
        2.  কিন্তু Array দিয়ে আমরা একসাথে অনেকগুলো ডাটা একটা নাম (variable) দিয়েই রাখতে পারি।
       
🔹  কেন Array ব্যবহার করা হয়?
    ভাবো, তুমি তোমার ৫ জন বন্ধুর নাম রাখতে চাও।
    Array ছাড়া লিখতে হলে –
        let friend1 = "Rahim";
        let friend2 = "Karim";
        let friend3 = "Hasan";
        let friend4 = "Nayeem";
        let friend5 = "Sumon";
    অনেক ঝামেলা, তাই না?
    এখন Array দিয়ে সহজভাবে লিখলে –
        let friends = ["Rahim", "Karim", "Hasan", "Nayeem", "Sumon"];
        👉 এক লাইনে সব নাম সুন্দর করে রাখা গেল।

🔹  Array কিভাবে কাজ করে?
    Array ডাটা গুলোকে Index Number দিয়ে রাখে।
    Index সবসময় শুরু হয় 0 থেকে। যেমন:
    friends[0] = "Rahim"
    friends[1] = "Karim"
    friends[2] = "Hasan"
    উদাহরণ:
    let friends = ["Rahim", "Karim", "Hasan", "Nayeem", "Sumon"];
    console.log(friends[0]); // আউটপুট: Rahim
    console.log(friends[2]); // আউটপুট: Hasan
    console.log(friends[4]); // আউটপুট: Sumon

🔹  Array এ কি কি রাখা যায়?
    Array তে শুধু string না, যেকোনো ডাটা টাইপ রাখা যায়:
    let info = ["Rahim", 25, true, { city: "Dhaka" }, [1, 2, 3]];
    console.log(info);    

🔹  কিছু দরকারি Array Method
    Array নিয়ে কাজ করার জন্য JavaScript এ অনেক method আছে। কয়েকটা দরকারি জেনে রাখো:

    1.  push() → Array এর শেষে নতুন ডাটা যোগ করে
        let fruits = ["Mango", "Banana"];
        fruits.push("Apple");
        console.log(fruits); // ["Mango", "Banana", "Apple"]
    
    2.  pop() → Array এর শেষের ডাটা মুছে ফেলে
        fruits.pop();
        console.log(fruits); // ["Mango", "Banana"]

    3.  shift() → প্রথম ডাটা মুছে ফেলে
        fruits.shift();
        console.log(fruits); // ["Banana"]

    4.  unshift() → প্রথমে নতুন ডাটা যোগ করে
        fruits.unshift("Orange");
        console.log(fruits); // ["Orange", "Banana"]

    5.  length → Array এর মোট কয়টা element আছে
        console.log(fruits.length); // 2

🔹  ছোট গল্প দিয়ে বুঝি
    1.  ভাবো তোমার একটা বাস আছে 🚍।
    2.  প্রতিটি সিট হলো Index Number।
    3.  প্রতিটি যাত্রী হলো Array element।
    4.  নতুন যাত্রী উঠলে তুমি push() করবে।
    5.  যাত্রী নামলে তুমি pop() বা shift() করবে।
    6.  আর মোট যাত্রী গুনতে চাইলে length ব্যবহার করবে। */