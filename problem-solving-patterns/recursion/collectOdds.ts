const collectOddValues = (nums: number[]): number[] => {
    const odds: number[] = [];
    function inner(input: number[]) {
        if (input.length === 0) return;
        if (input[0] % 2 !== 0) {
            odds.push(input[0])
        }
        inner(input.slice(1));
    }
    inner(nums);
    return odds;
}

// pure recursion
const collectOddValuesPure = (nums: number[]): number[] => {
    let odds: number[] = [];
    if (nums.length === 0) return odds;
    if (nums[0] % 2 !== 0) odds.push(nums[0]);
    odds = odds.concat(collectOddValuesPure(nums.slice(1)));
    return odds
}