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
      }
  };
  