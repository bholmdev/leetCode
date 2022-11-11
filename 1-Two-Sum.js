let nums = [11, 7, 11, 15]
let target = 22

function twoNums(nums, target) {
    for (x = 0; x < nums.length; x++) {
        for (y = 0; y < nums.length; y++) {
            if (y === x) {
                continue
                }
            if ((nums[x] + nums[y]) === target) {
                return [x, y]
                }
        }
    }
}

console.log(twoNums(nums, target));