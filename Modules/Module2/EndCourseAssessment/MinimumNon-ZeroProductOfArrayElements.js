/* To determine the minimum non-zero product of an array formed by integers from 1 to 𝑝, p while 
considering the potential swaps of bits in binary representations. The goal is to compute the product 
of the elements in the modified array and return it modulo 10^9 + 7. 
This involves analyzing the effects of bit manipulation on the product and efficiently 
calculating the result. */

/* Example 3:
Input:
3

Output:
1512

Explanation:
nums = [001, 010, 011, 100, 101, 110, 111]

In the first operation we can swap the leftmost bit of the second and fifth elements.
The resulting array is [001, 110, 011, 100, 001, 110, 111].
In the second operation we can swap the middle bit of the third and fourth elements.
The resulting array is [001, 110, 001, 110, 001, 110, 111]. 
The array product is 1 * 6 * 1 * 6 * 1 * 6 * 7 = 1512, which is the minimum possible product. */

var minNonZeroProduct = function (p) {
    // Your code goes here
    // Convert p to BigInt to handle large numbers
    let power = BigInt(p);

    // Calculate the largest number in the array (2^p - 1)
    let maxElement = (2n ** power) - 1n;

    // Define the modulo value for the result
    const MODULO = BigInt(1000000007);

    function modularExponentiation(exponent, base) {
        if (exponent === 0n) return 1n; // Base case: anything raised to 0 is 1
        if (exponent === 1n) return base % MODULO; // Base case: return base % MODULO

        if (exponent % 2n !== 0n) {
            // If the exponent is odd, reduce it by 1 and divide by 2
            const halfPower = modularExponentiation((exponent - 1n) / 2n, base);
            return (base * ((halfPower * halfPower) % MODULO)) % MODULO;
        } else {
            // If the exponent is even, just divide by 2
            const halfPower = modularExponentiation(exponent / 2n, base);
            return (halfPower * halfPower) % MODULO;
        }
    }
    // Calculate (maxElement - 1) / 2 for the repeated terms in the product
    let halfMaxElementCount = (maxElement - 1n) / 2n;

    // Calculate the minimum non-zero product using modular arithmetic
    let result = modularExponentiation(halfMaxElementCount, maxElement - 1n);
    result = (result * maxElement) % MODULO;

    return result;
};