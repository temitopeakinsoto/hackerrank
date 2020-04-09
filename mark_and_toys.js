function maximumToys(prices, k) {
    let num_toys = 0;
    let total_toys_bought = 0;
    prices.sort(function(a, b) {return a - b;})
    
    for(let i=0; i < prices.length; i++){
        total_toys_bought += prices[i];
        if(total_toys_bought <= k){
            num_toys += 1
        }else{
            return num_toys
        }
    }   

}