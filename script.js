// 1) დაითვალეთ დადებითი რიცხვები / შეკრიბეთ უარყოფითი რიცხვები:
// გაქვთ მასივი: const nums = [1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15], უნდა დააბრუნოს: [10, -65]

// const nums = [1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15];
// const positive = nums.filter(num => num > 0);
// const negative = nums.filter(num => num < 0);
// let negativeSum = 0;
// const answer = [];
// for (let i = 0; i < negative.length; i++) {
//     negativeSum = negativeSum + negative[i] ;
//     }
// answer.push(positive.length,negativeSum);
// console.log(answer);








// 2) აიღეთ რიცხვების მასივი, გაამრავლეთ ყველა ელემენტი 2 ზე, და შემდეგ გაფილტეთ ეს მასივი იმ რიცვებზე რომლებიც იყოფა 3ზე.


// const nums = [1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i < nums.length; i++) {
//     nums[i] = nums[i] * 2;
// }
// const devidedbythree = nums.filter(num => num % 3 === 0)
// console.log(devidedbythree);









// 3) შექმენით ფუნცქცია რომელიც დააბრუნებს ბოლო ორი ყველაზე პარატა რიცხვის ჯამს: e.g:[19, 5, 42, 2, 77] => 7


// const nums = [19,5,42,2,77];
// function getLastTwoNumber() {
//     nums.sort((b ,a) => a - b);
//     console.log((nums.length - 1) + (nums.length - 2));
// }
// getLastTwoNumber();







// 4)შექმენით ფუნცქია სადაც შეადარებთ ამ ორ მასივს ერთმანეთს და დააბრუნეთ ახალ მასივს ყველაზე დიდი რიცხვებით: 
// let arr1 = [13, 64, 15, 17, 88];
// let arr2 = [23, 14, 53, 17, 80];
// getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]

// let arr1 = [13, 64, 15, 17, 88];
// let arr2 = [23, 14, 53, 17, 80];
// let answer = [];
// for (let index = 0; index < arr1.length; index++) {
//     answer.push(Math.max(arr1[index] , arr2[index]));
// }
// console.log(answer);





// 5) const characters = [
//   {
//     name: "Luke Skywalker",
//     height: "172",
//     mass: "77",
//     eye_color: "blue",
//     gender: "male",
//   },
//   {
//     name: "Darth Vader",
//     height: "202",
//     mass: "136",
//     eye_color: "yellow",
//     gender: "male",
//   },
//   {
//     name: "Leia Organa",
//     height: "150",
//     mass: "49",
//     eye_color: "brown",
//     gender: "female",
//   },
//   {
//     name: "Anakin Skywalker",
//     height: "188",
//     mass: "84",
//     eye_color: "blue",
//     gender: "male",
//   },
// ];
// მოცემულ მასივზე გააკეთეთ შემდეგი ტასკები: 
// * Get an array of all names
// *  Get an array of all first names
// * დააჯგუფეთ თვალის ფერის მიხედვით, გამოიყენეთ რედიუსი და უნდა მიიღოთ შემდეგი შედეგი: 
// {blue: 2, brown: 1, yellow: 1}
// როგორც ხედავთ ლექციაზე რაც ვქენით ოდნავ განსხვავებულია, აქ გვაინტერებსე დავითვალოთ რამდენი განსხვავებული თვალის ფერი აქვთ.


//    const characters = [
//   {
//     name: "Luke Skywalker",
//     height: "172",
//     mass: "77",
//     eye_color: "blue",
//     gender: "male",
//   },
//   {
//     name: "Darth Vader",
//     height: "202",
//     mass: "136",
//     eye_color: "yellow",
//     gender: "male",
//   },
//   {
//     name: "Leia Organa",
//     height: "150",
//     mass: "49",
//     eye_color: "brown",
//     gender: "female",
//   },
//   {
//     name: "Anakin Skywalker",
//     height: "188",
//     mass: "84",
//     eye_color: "blue",
//     gender: "male",
//   },
// ];
// let names = [];
// let firstNames = [];
// let eyeColors = [];

// for (let i = 0; i < characters.length; i++) {
//     names.push(characters[i].name)
// }
// console.log(names);
// for (let k = 0; k < names.length; k++) {
//     firstNames.push(names[k].split(" ")[0]);
// }
// console.log(firstNames);
// for (let q = 0; q < characters.length; q++) {
//     eyeColors.push(characters[q].eye_color)
// }
// console.log(eyeColors);
// let eyeColorCounts = eyeColors.reduce((cnt, color) => {
//     cnt[color] = (cnt[color] || 0) + 1;
//     return cnt;
// }, {});
// console.log(eyeColorCounts);






// 6) // * გაფილტრეთ მარტო ისეთი ფილმები რომელთა რეიტინგიც არის 8ზე მეტი
// * ამოიღეთ მხოლოდ სახელები
// * დაალაგეთ ეს სახელები ანბანის მიხედვით

//  const movies = [
//   { title: "Inception", year: 2010, rating: 8.8 },
//   { title: "Interstellar", year: 2014, rating: 8.6 },
//   { title: "Tenet", year: 2020, rating: 7.5 },
//   { title: "Dunkirk", year: 2017, rating: 7.9 },
// ];


// let moreThanEight = movies.filter(movie => movie.rating > 8);
// console.log(moreThanEight);
// let getOnlyTitles = movies.map(movie => movie.title)
// console.log(getOnlyTitles);
// let sortTitlesByAlphabet = getOnlyTitles.sort();
// console.log(sortTitlesByAlphabet);








// 7) const students = [
//   { name: "Lia", scores: [90, 85, 100] },
//   { name: "Tom", scores: [70, 60, 75] },
//   { name: "Mia", scores: [88, 92, 95] },
// ];
// * გამოიყენეთ map და reduce მეთოდები და დაუმატეთ თითეულ ობიექტს average ფილდი შემდეგ გაფილტრეთ და დააბრუნეთ მხოლოდ 85ზე მეტი ვისაც აქვს საშუალო ქულა ეგ სტუდენდები.

// const students = [
//       { name: "Lia", scores: [90, 85, 100] },
//       { name: "Tom", scores: [70, 60, 75] },
//       { name: "Mia", scores: [88, 92, 95] },
//     ];
// let addNewField = students.map(function(student) {
//     let sum = student.scores.reduce((a, b) => a + b, 0);
//     let calculateAverage = (sum / student.scores.length);
//     return { ...student, Average: calculateAverage }; 
//     });
// console.log(addNewField); 
// let onlyTopPerfomers = addNewField.filter(student => student.Average > 85);
// console.log(onlyTopPerfomers);







      



// 8) const employees = {
//   alice: { department: "HR", active: true },
//   bob: { department: "Engineering", active: false },
//   charlie: { department: "Engineering", active: true },
// };
// * გადაუარეთ თითოეულ ობიექტს Object.entries მეთოდით, დაითვალეთ რამდენი აქტიური იუზერია თითოეულ დეპარტამენტში და დააბრუნეთ შემდეგი ობიექტი: 
// { HR: 1, Engineering: 1 }
// const employees = {
//       alice: { department: "HR", active: true },
//       bob: { department: "Engineering", active: false },
//       charlie: { department: "Engineering", active: true },
//     };
//     //ver davwere
// let res = Object.entries(employees);
// console.log(res);
// let actives = res.map(([key, employee]) => employee.active);
// console.log(actives);
// let departments = res.map(([key, employee]) => employee.department);
// console.log(departments);
// let activeDepartmentsCount = res.reduce((cnt, [key, employee]) => {
//     if (employee.active) {
//         cnt[employee.department] = (cnt[employee.department] || 0) + 1;
//     }
//     return cnt;
//     }, {});
      
// console.log(activeDepartmentsCount); 

//დავწერე მოგვიანებით
