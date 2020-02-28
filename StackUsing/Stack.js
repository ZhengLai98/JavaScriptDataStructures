/*function Stack() {
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
let sta=new Stack();
sta.push("ds");
sta.push("fighting");
sta.push("11");
sta.print();
sta.pop();
sta.print();*/
//es6和stack类
let _items=Symbol();
/*
class Stack {
    constructor(){
        this[_items]=[];
    }
    push(element){
        this.items.push(element);
    }
}
*/
//第三种方案用ES6的Weakmap实现
let Stack=(function () {
    const items=new WeakMap();
    class Stack {
        constructor(){
            items.set(this,[]);
        }
        push(element){
            let s=items.get(this);
            s.push(element);
        }
        pop(){
            let s=items.get(this);
            let r=s.pop();
            return r;
        }
    }
})();