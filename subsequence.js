// Pointer version
function isSubsequence(target, source) {
  let pointerTarget = 0;
  let pointerSource = 0;

  while (pointerSource < source.length) {
    // 空字串為任何字串的subsequence
    if (pointerTarget.length === 0) {
      console.log(true);
      return true;
    }

    if (pointerTarget >= target.length) {
      console.log(true);
      return true;
    }

    if (target[pointerTarget] !== source[pointerSource]) {
      pointerSource++;
    } else {
      pointerTarget++;
      pointerSource++;
    }
  }

  // while 都跑完了都沒有return true時
  console.log(false);
  return false;
}

isSubsequence("hello", "hello Dear");
isSubsequence("book", "brooklyn");
isSubsequence("abc", "bac");
