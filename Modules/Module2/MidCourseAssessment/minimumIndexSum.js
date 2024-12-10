/* Find common dish names in two lists with the smallest index sum, and return all such dishes 
in any order if multiple have the same minimum sum. */

/* Example 1:
Input:
list1 = ["Shogun","Tapioca Express","Burger King","KFC"], 
list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]

Output:
["Shogun"]

Explanation:
The only common string is "Shogun". */


var findRestaurant = function(list1, list2) {
    // Your code goes here
    let map = new Map()
    let dishes = []
    let min = Infinity
    list2.forEach((v,i)=>map.set(v,i))
  
    for(let i=0;i<list1.length; i++){
      let dish = list1[i]
      if(map.has(dish)){
          let sum = map.get(dish)+i
          if(sum < min){
              min = sum
              dishes = [dish]
          }else if(sum === min){
              dishes.push(dish)
          }
      }
    }
    return dishes
  };