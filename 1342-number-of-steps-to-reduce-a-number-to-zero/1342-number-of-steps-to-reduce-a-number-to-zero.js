/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let count = 0
    
    while(num!==0){
        if(num%2 === 0){
            num/=2
            count++
        }
        
        if(num%2 !== 0){
            num-=1;
            count++
        }
    }
    
    return count
};