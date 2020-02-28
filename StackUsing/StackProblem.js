//从十进制到二进制
function Stack() {
    let items=[];
    this.push=function (element) {
        items.push(element);
    };
    this.pop=function () {
        return items.pop();
    };
    //查看栈顶元素，最后一个元素
    this.peek=function () {
        return items[items.length-1];
    };
    this.isEmpty=function () {
        return items.length==0;
    }
    this.clear=function () {
        items=[];
    }
    this.print=function () {
        console.log(items.toString());
    }
}
//十进制转二进制
function divideBy2(decNumber) {
    var remStack=new Stack(),rem,binaryString='';
    while (decNumber>0){
        rem=Math.floor(decNumber%2);
        remStack.push(rem);
        decNumber=Math.floor(decNumber/2);
    }
    while (!remStack.isEmpty()){
        binaryString+=remStack.pop().toString();
    }
    return binaryString;
}
console.log(divideBy2(10));
//十进制转任何进制
function baseConvertar(decNumber,base) {
    var Sta=new Stack(),rem,baseString='',digits='0123456789ABCDEF'
    while (decNumber>0){
        rem=Math.floor(decNumber%base);
        Sta.push(rem);
        decNumber=Math.floor(decNumber/base);
    }
    while (!Sta.isEmpty()){
        baseString+=digits[Sta.pop()];
    }
    return baseString;
}
console.log(baseConvertar(100345,16));