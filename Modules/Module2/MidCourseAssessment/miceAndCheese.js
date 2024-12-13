/* Maximize the total points earned by distributing n types of cheese between two mice, 
where the first mouse must eat exactly k types, based on their respective reward points. */

/* Example 1:
Input:
reward1 = [1,1,3,4], reward2 = [4,4,1,1], k = 2

Output:
15

Explanation:
In this example, the first mouse eats the 2nd (0-indexed) and the 3rd types of cheese, 
and the second mouse eats the 0th and the 1st types of cheese. The total points are 4 + 4 + 3 + 4 = 15. 
It can be proven that 15 is the maximum total points that the mice can achieve. */


var miceAndCheese = function(reward1, reward2, k) {
    // Your code goes here
    let maxPoints = 0
    let rewards = []
    for(let i=0; i<reward1.length; i++){
        rewards.push([reward1[i],i])
    }
    rewards.sort((a,b)=>b[0]-a[0]).slice(0,k)
    for(let i=0;i<reward1.length; i++){
        if(i<k) maxPoints +=reward1[rewards[i][1]]
        else maxPoints +=reward2[rewards[i][1]]
    }
    return maxPoints
};