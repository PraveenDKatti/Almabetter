/* Video has N frames Choose an index i (frame) if value of the i'th frame is equal to either of its 
neighbors, remove the i'th frame. Find the minimum number of frames. */

/* Example 1:
Input:
frames = [2 1 2 2]

Output:
3 */


// Do not remove nor make any changes in  main() function
function main() {
    var frames = readLine().split(" ").map(x => parseInt(x));
    console.log(compressVideo(frames));
}
function compressVideo(frames) {
  // Your code goes here
  let i=0
  while(i<frames.length){
    if((i>0&&frames[i]==frames[i-1])||(i<frames.length-1&&frames[i]==frames[i+1])){
        frames.splice(i,1)
        i=Math.max(i-1,0)
    }
    else
        i++
  }
  return frames.length
}