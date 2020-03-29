/*
* 定义子问题，
* 实现要反复执行来解决子问题部分，
* 识别并求解出边界条件
* 1、背包问题
* 2、最长公共子序列
* 3、矩阵链相乘
* 4、硬币找零
* 5、图的全源头最短路径
*
* */
/*function MinCoinChange(coins) {
    var coins=coins;
    var cache={};
    this.makeChange=function (amount) {
        var me=this;
        if(!amount){
            return[];
        }
        if(cache[amount]){
            return cache[amount];
        }
        var min=[],newMin,newAmount;
        for(var i=0;i<coins.length;i++){
            var coin=coins[i];
            newAmount=amount-coin;
            if(newAmount>=0){
                newMin=me.makeChange(newAmount);
            }
            if(
                newAmount>=0&&(newMin.length<min.length-1||!min.length)
                &&(newMin.length||!newAmount)
            ){
                min=[coin].concat(newMin);
                console.log('new Min'+min+'for'+amount);
            }
        }
        return (cache[amount]=min)
    }
}*/

