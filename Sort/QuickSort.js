function ArrayList() {
    var arr=[];
    this.insert=function (item) {
        arr.push(item);
    }
    this.toString=function () {
        arr.join('');
    }
    var swap=function (arr,index1,index2) {
        [arr[index1],arr[index2]]=[arr[index2],arr[index1]]
    }
    this.Quick=function () {
        var lenght=arr.length;
        QuickSort(arr,0,lenght-1);
    }
    var QuickSort=function (arr,left,right) {
        var index;
        if(arr.length>1){
            index=partition(arr,left,right);
            if(left<index-1){
                QuickSort(arr,left,index-1);
            }
            if(right>index){
                QuickSort(arr,index,right);
            }
        }
    }
    var partition=function (arr,left,right) {
        var pivot=arr[Math.floor((left+right)/2)],
            i=left,j=right;
        while (i<=j){
            while (arr[i]<pivot){
                i++;
            } while (arr[j]>pivot){
                j--;
            }
            if(i<=j){
                swap(arr,i,j);
            }
        }
        return i;
    }
}