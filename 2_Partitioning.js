function isPalindrome(s, start, end) {
    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

function solve(s, start, end) {
    if (isPalindrome(s, start, end)) {
        return 0;
    }

    let minCuts = Infinity;

    for (let i = start; i < end; i++) {

        if (isPalindrome(s, start, i)) {
            let res = 1 + solve(s, i + 1, end);
            minCuts = Math.min(minCuts, res);
        }
    }

    return minCuts;
}


const s = "aab";
console.log("Minimum cuts:", solve(s, 0, s.length - 1));