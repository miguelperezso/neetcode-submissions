class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const memory = new Map();
        for(let i = 0; i < nums.length; i++){
            if(i===0){memory.set(nums[i], i); continue;}
            let diff = target - nums[i];
            if(memory.get(diff) != undefined) return [memory.get(diff), i]
            memory.set(nums[i], i)
        }
    }
}
