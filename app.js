// 1, moveZeroes
var moveZeroes = function (nums) {
  let currentIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let t = nums[i];
      nums[i] = nums[currentIndex];
      nums[currentIndex] = t;

      currentIndex++;
    }
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));

// 2, findTheDifference
var findTheDifference = function (s, t) {
  const charCount = {};

  for (let i = 0; i < t.length; i++) {
    charCount[t[i]] = (charCount[t[i]] || 0) + 1;
  }

  for (let j = 0; j < s.length; j++) {
    charCount[s[j]] = charCount[s[j]] - 1;
    if (charCount[s[j]] === 0) delete charCount[s[j]];
  }

  for (let char in charCount) {
    return char;
  }

  return "";
};

console.log(findTheDifference("abc", "abcc"));

//  557. Reverse Words in a String III
var reverseWords = function (s) {
  if (!s || s.length === 0) return "";
  let strArr = s.split(" ");
  const len = strArr.length;

  for (let i = 0; i < len; i++) {
    strArr[i] = reverseString(strArr[i]);
  }

  return strArr.join(" ");
};

function reverseString(str) {
  if (!str || str.length === 0) return "";
  let newStr = "";
  const len = str.length;

  for (let i = 0; i < len; i++) {
    newStr = str[i] + newStr;
  }

  return newStr;
}

console.log(reverseWords("Let's take LeetCode contest"));

// 1295. Find Numbers with Even Number of Digits
var findNumbers = function (nums) {
  if (!Array.isArray(nums) || nums.length === 0) return 0;
  let count = 0;
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    let numLength = 0;
    let remaning = nums[i];

    while (remaning > 0) {
      remaning = Math.floor(remaning / 10);
      numLength++;
    }

    if (isEven(numLength)) count++;
  }

  return count;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));

var kidsWithCandies = function (candies, extraCandies) {
  const len = candies.length;
  const max = findMax(candies);
  const result = [];

  for (let i = 0; i < len; i++) {
    candies[i] += extraCandies;
    candies[i] >= max ? (result[i] = true) : (result[i] = false);
  }

  return result;
};

kidsWithCandies([4, 2, 1, 1, 2], 1);

// 1470. Shuffle the Array
var shuffle = function (nums, n) {
  let j = n;
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[j]);
    j++;
  }
  return result;
};
shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4);

// 1480. Running Sum of 1d Array
var runningSum = function (nums) {
  if (!Array.isArray(nums) || nums.length === 0) return [];

  const len = nums.length;
  const result = [];
  let sum = 0;

  for (let i = 0; i < len; i++) {
    sum += nums[i];

    result[i] = sum;
  }

  return result;
};
runningSum([1, 2, 3, 4]);

// 1512. Number of Good Pairs
var numIdenticalPairs = function (nums) {
  if (!Array.isArray(nums) || nums.length === 0) return 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) count++;
    }
  }

  return count;
};
numIdenticalPairs([1, 1, 1, 1]);

// 1636. Sort Array by Increasing Frequency
var frequencySort = function (nums) {
  if (!Array.isArray(nums) || nums.length === 0) return [];
  const freq = {};
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    freq[nums[i]] = (freq[nums[i]] || 0) + 1;
  }

  nums.sort((a, b) => (freq[a] === freq[b] ? b - a : freq[a] - freq[b]));

  return nums;
};

console.log(frequencySort([1, 1, 1, 2, 2, 2, 3]));

//412. Fizz Buzz
var fizzBuzz = function (n) {
  if (!n || typeof n !== "number") return [];
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result;
};

console.log(fizzBuzz(15));

// 349. Intersection of Two Arrays
//s1
function arrayIntersection(arr1, arr2) {
  const intersection = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
      intersection.push(arr1[i]);
    }
  }

  return intersection;
}

//s2
var intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const intersection = [];

  for (let num of nums2) {
    if (set1.has(num)) {
      intersection.push(num);
    }
  }

  return [...new Set(intersection)];
};

console.log(intersection([1, 2, 3, 4, 5], [3, 4, 4, 6, 7]));

// Display Likes
var displayLikes = function (names) {
  if (names.length === 0) return "no one likes this";

  if (names.length === 1) return `${names[0]} likes this`;
  if (names.length === 2) return `${names[0]} and ${names[1]} likes this`;
  if (names.length === 3)
    return `${names[0]}, ${names[1]} and ${names[2]} likes this`;

  return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
};

// Find Missing Letter
var findMissingLetter = function (arr) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const startIndex = alphabet.indexOf(arr[0]);

  console.log(startIndex);

  for (let i = 0; i < arr.length; i++) {
    console.log(alphabet[startIndex + i]);
    console.log(arr[i]);
    if (arr[i] !== alphabet[startIndex + i]) {
      return alphabet[startIndex + i];
    }
  }

  return "";
};

// s2 ASCII
function findMissingLetter(arr) {
  let start = arr[0].charCodeAt(0);
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i].charCodeAt(0);
    if (current - start > 1) {
      return String.fromCharCode(start + 1);
    }
    start = current;
  }
  return "";
}

//  Find First Non-Repeating Character
function findFirstNonRepeatingCharacter(str) {
  if (!str || typeof str !== "string") return "";

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j] && i !== j) break;

      if (j === str.length - 1) return str[i];
    }
  }

  return null;
}

// Dice Game Simulation
function diceGameSimulation(numSimulations) {
  let simulationResult = [];

  for (let i = 0; i < numSimulations; i++) {
    let dice1 = rollingDice();
    let dice2 = rollingDice();
    let sum = dice1 + dice2;
    let result = "";

    switch (sum) {
      case (7, 11):
        result = "win";
        break;
      case (2, 3, 12):
        result = "lose";
        break;
      default:
        result = "roll again";
    }

    simulationResult.push({
      dice1,
      dice2,
      sum,
      result,
    });
  }

  return simulationResult;
}

console.log(diceGameSimulation(3));

function rollingDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Format Phone Number
//v1
function formatPhoneNumber(nums) {
  if (!Array.isArray(nums) || nums.length === 0) return "";
  nums.splice(0, 0, "(");
  nums.splice(4, 0, ")");
  nums.splice(5, 0, " ");
  nums.splice(9, 0, "-");
  let result = nums.join("");

  return result;
}

console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]));

//v2
function formatPhoneNumberV2(nums) {
  // slice không  làm thay đổi mảng ban đâù
  const areaCode = nums.slice(0, 3).join("");
  const prefixNumber = nums.slice(3, 6).join("");
  const postfixNumber = nums.slice(6).join("");
  return `(${areaCode}) ${prefixNumber}-${postfixNumber}`;
}

//v3
function formatPhoneNumberV3(numbers) {
  const formatted = numbers.join("");
  return `(${formatted.substring(0, 3)}) ${formatted.substring(
    3,
    6
  )}-${formatted.substring(6)}`;
}

//v4
function formatPhoneNumberV4(numbers) {
  return `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6).join("")}`;
}

console.log(formatPhoneNumberV4([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]));

// Two Sum
var twoSum = function (nums, target) {
  let mySet = [];

  for (let i = 0; i < nums.length; i++) {
    if (mySet.includes(nums[i])) {
      let index1 = nums.indexOf(target - nums[i]);
      // [3, 3], target = 6 => [0, 1] not [0, 0]
      let index2 = nums.indexOf(nums[i], index1 + 1);
      return [index1, index2];
    }

    mySet.push(target - nums[i]);
  }

  return [];
};

// Validate Email
function validateEmail(email) {
  // không tồn tại @ -> false
  // kiểm tra trước ký tự @ nếu bến trái không có ký tự -> false, bên phải < 3 -> false
  // kiểm tra domain(gmail.com) bên trái gmail bên phải com -> length < 2 -> false, bên phải(com) < 2 -> false
  if (email.indexOf("@") === -1) return false;

  const [localPart, domain] = email.split("@");
  if (localPart.length === 0 || domain.length < 3) {
    return false;
  }

  const domainExtension = domain.split(".");
  if (
    domainExtension.length < 2 ||
    domainExtension[domainExtension.length - 1].length < 2
  ) {
    return false;
  }

  // nếu pass hết return true
  return true;
}
console.log(validateEmail("sonpm79382@gmail.com"));

// Sum of Squares of Even Number
function sumOfEvenSquares(nums) {
  let evenSquares = nums
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((acc, num) => acc + num, 0);

  return evenSquares;
}

// Challenge: Calculate Total Sales
console.log(sumOfEvenSquares([-1, 0, 1, 2, 3, 4]));

function validateEmail(email) {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
}

const products = [
  { name: "Chocolate", price: 2.5, quantity: 5 },
  { name: "Chips", price: 1.2, quantity: 10 },
  { name: "Soda", price: 1.0, quantity: 8 },
  { name: "Candy", price: 0.5, quantity: 15 },
];

// Calculate Total Sales
function calculateTotalSalesWithTax(products, tax) {
  const totalSales = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const taxAmount = (totalSales * tax) / 100;
  const totalSalesWithTax = totalSales + taxAmount;

  // format result
  const result = Number.isInteger(totalSalesWithTax)
    ? totalSalesWithTax
    : +totalSalesWithTax.toFixed(2);

  return result;
}

// Highest Scoring Word
function highestScoringWord(str) {
  const words = str.split(" ");

  let scores = words.map((word) => {
    let sumOfWords = 0;

    for (let i = 0; i < word.length; i++) {
      sumOfWords += word[i].charCodeAt(0) - 97;
    }

    return sumOfWords;
  });

  let maxIndex = scores.indexOf(findMax(scores));

  return words[maxIndex];
}

// Highest Scoring Word V2
function highestScoringWord(str) {
  // tách các từ vào 1 mảng
  let words = str.split(" ");

  // tính ra tổng của các ký tự
  let scores = words.map((word) => {
    // tách các từ thành mảng dạng ['t', 'a', 'k', 'e']
    // sự dụng reduce và tính tổng của các chữ cái bằng: letter.charCodeAt(0) - 97, 0)(ra số tương ứng với chữ cái đó)
    // trả về tổng cho hàm map
    return Array.from(word).reduce(
      (sum, letter) => sum + letter.charCodeAt(0) - 97,
      0
    );
  });

  // tìm index của tổng lớn nhất và trả về từ dựa trên index đó
  const highestScore = Math.max(...scores);
  const highestIndex = scores.indexOf(highestScore);

  return words[highestIndex];
}

// Valid Anagrams
function validAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  const countChar = {};

  for (let i = 0; i < str1.length; i++) {
    countChar[str1[i]] = (countChar[str1[i]] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    countChar[str2[i]] = (countChar[str2[i]] || 0) - 1;

    if (countChar[str2[i]] === 0) delete countChar[str2[i]];
  }

  console.log(countChar);

  return !Object.keys(countChar).length;
}

// Valid Anagrams v2
function validAnagrams(str1, str2) {
  const freqCount1 = str1.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  const freqCount2 = str2.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  freqCount1;
  freqCount2;

  console.log(Object.keys(freqCount1));
  return Object.keys(freqCount1).every(
    (char) => freqCount1[char] === freqCount2[char]
  );
}

// Hashtag Generator
function generateHashtag(str) {
  // str.length === 0 -> false
  if (str.length === 0) return false;
  let hashtagArr = str.trim().split(" ");

  let result = hashtagArr.map((word) => {
    let upperCaseLetter = Array.from(word)[0].toUpperCase();

    upperCaseLetter;

    return word.replace(word[0], upperCaseLetter);
  });

  result.splice(0, 0, "#");
  let hashtag = result.join("");

  return hashtag.length < 140 ? hashtag : false;
}

console.log(generateHashtag("hello world"));

console.log(validAnagrams("apple", "banal"));
console.log(highestScoringWord("take me to semynak"));
console.log(calculateTotalSalesWithTax(products, 5.3));
console.log("a".charCodeAt(0) - 97);
console.log(twoSum([2, 2, 7, 7], 9));
console.log(findFirstNonRepeatingCharacter("aabccdeff"));
console.log(findMissingLetter(["t", "u", "v", "w", "x", "z"]));
console.log(displayLikes(["Alex", "Jacob", "Mark", "Max", "Jill"]));
/*===================utilities function=================*/

//check even
function isEven(num) {
  if (typeof num !== "number" || !num) return false;
  if (num % 2 === 0) return true;
  return false;
}

// find max
function findMax(nums) {
  if (!Array.isArray(nums) || nums.length === 0) return -1;
  const len = nums.length;
  let max = nums[0];

  for (let i = 0; i < len; i++) {
    if (nums[i] > max) max = nums[i];
  }

  return max;
}

/*=====================*/
// Practice, Practice
// Focus on your hands
// Monkey cage
/*=====================*/
