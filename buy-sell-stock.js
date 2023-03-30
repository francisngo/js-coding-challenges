/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/

// Note: Initially, I wanted to get min and max but if max is before min, we cannot sell before we buy so finding min/max and subtracing max - min will not work. 

let maxProfit = function(prices) {
    let buy = 0;
    let sell = 1;
    let maxTotal = 0;
    while (sell < prices.length) {
        if (prices[buy] < prices[sell]) { 
            let profit = prices[sell] - prices[buy];
            maxTotal = Math.max(maxTotal, profit);
        } else { 
            buy = sell;
        }
        sell++;
    }
    return maxTotal;
}

/*
Explanation:
[7,1,5,3,6,4]

sell = 1
while - is 1 less than 6? yes
is buy (7) less than sell (1)? No, move buy pointer to sell position
move sell to next (increment)

sell = 2
while - is 2 less than 6? yes
is buy (1) less than sell (5)? Yes, assign profit = 5 - 1 = 4
maxTotal = Math.max(0, 4) // 4
move sell to next (increment)

sell = 3
while - is 3 less than 6? yes
is buy (1) less than sell (3)? Yes, assign profit = 3 - 1 = 2
maxTotal = Math.max(4, 2) // 4
move sell to next (increment)

sell = 4
while - is 4 less than 6? yes
is buy (1) less than sell (6)? Yes, assign profit = 6 - 1 = 5
maxTotal = Math.max(4, 5) // 5
move sell to next (increment)

sell = 5
while = is 5 less than 6? yes
is buy (1) less than sell (4)? Yes, assign profit = 4 - 1 = 3
maxTotal = Math.max(5, 3) // 5
move sell to next (increment); 

sell = 6
while = is 6 less than 6? no
exist while and return maxTotal // 5
*/