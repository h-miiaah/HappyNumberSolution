/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    var map = {};
    var temp = 0;

    if (n < 1) return false;

    while (n !== 1 && !map[n]) {
        map[n] = true;
        temp = 0;

        while (n > 0) {
            temp += Math.pow(n % 10, 2);
            n = Math.floor(n / 10);
          }

          n = temp;
      }
      return n === 1;
  };
  

  /*

  - Start with a number n.
  - Then with a map that keeps track of the numbers we’ve seen before.
  - Then with a temporary variable that keeps track of the sum of the squares of the digits of n.
  

  */