/* Check whether two events, defined by their start and end times in 24-hour format, overlap in time.
The function should return true if there is any intersection between the two events, 
indicating a conflict, and false if they do not overlap. */

/* Example 2:
Input:
event1 = ["01:00","02:00"], event2 = ["01:20","03:00"]

Output:
true

Explanation:
The two events intersect starting from 01:20 to 02:00. */


var haveConflict = function(event1, event2) {
    // Your code goes here
    let [endH1,endM1] = event1[1].split(":")
    let [startH2,startM2] = event2[0].split(":")
    
    if(startH2<=endH1){
        if(endH1===startH2){
            return endM1 >= startM2
        }
        return true
    }
    return false
};
