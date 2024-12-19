// https://leetcode.com/problems/two-sum
// My code
function twoSum(nums: number[], target: number): number[] {
    let result = [] as number[];
    for(let i = 0; i < nums.length; i++){
        if(result.length > 0){
            break;
        }
        for(let j = 0; j < nums.length; j++){
            if(i === j){
                continue;
            }
            if(nums[i] + nums[j] == target){
                result.push(...[i,j]);
                break;
            }
        }
    }

    return result;
};

// Best code
function _twoSum(nums: number[], target: number): number[] {
    let indices: { [key: string]: number } = {}
    let response: number[] = []

    for (let [index, num] of nums.entries()) {
        const difference = target - num

        if (indices[difference] !== undefined) {
            response = [index, indices[difference]!]
        } else {
            indices[num] = index
        }
    }

    return response
};

console.log(_twoSum([2,7,11,15], 9));