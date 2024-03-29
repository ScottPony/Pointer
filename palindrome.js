function palindrome(str) {
  let left = 0;
  let right = str.length - 1;
  let result = true;

  while (left <= right) {
    if (str[left] !== str[right]) {
      result = false;
      break;
    } else {
      left++;
      right--;
    }
  }

  console.log(str + ":" + result);

  return result;
}

palindrome("tacocat");
palindrome("amanaplanacanalpanama");
palindrome("asdfasfeaw");
