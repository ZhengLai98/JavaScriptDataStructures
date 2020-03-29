function ArrayList() {
    var arr=[];
    this.insert=function (item) {
        arr.push(item);
    }
    this.toString=function () {
        return arr.join();
    };
    var swap=function (arr,index1,index2) {
        [arr[index1],arr[index2]]=[arr[index2],arr[index1]];
    }
    this.BubbleSort=function () {
        var lenght=arr.length;
        for(var i=0;i<lenght;i++){
            for(var j=0;j<lenght-1-i;j++){
                if(arr[j]>arr[j+1]){
                    swap(arr,j,j+1);
                }
            }
        }
    };
    this.SelectSort=function () {
        var length=arr.length,indexMin;
        for(var i=0;i<length-1;i++){
            indexMin=i;
            for(var j=i;j<length;j++){
                if(arr[indexMin]>arr[j]){
                    indexMin=j;
                }
            }
            if(i!==indexMin){
                swap(arr,indexMin,i);
            }
        }
    };
    this.InsertSort=function () {
        var lenght=arr.length,j,temp;
        for(var i=1;i<lenght;i++){
            j=i;
            temp=arr[i];
            while (j>0&&arr[j-1]>temp){
                arr[j]=arr[j-1];
                j--;
            }
            a[j]=temp;
        }
    };
    this.MergeSort=function () {
        arr=mergeSortRec(arr);
    };
    var mergeSortRec=function (arr) {
        var length=arr.length;
        if(length==1){
            return arr;
        }
        var mid=Math.floor(length/2),
        left=arr.slice(0,mid),
        right=arr.slice(mid,length);
        return merge(mergeSortRec(left),mergeSortRec(right));
    };
    var merge=function (left,right) {
        var result=[],
        il=0,ir=0;
        while(il<left.length&&ir<left.length){
            if(left[il]<right[ir]){
                result.push(left[il++]);
            }else {
                result.push(right[ir++]);
            }
        }
        while (il<left.length){
            result.push(left[il++]);
        }
        while (ir<right.length){
            result.push(right[ir++]);
        }
        return result;
    };
    this.QuickSort=function () {
        var length=arr.length;
        Quick(arr,0,length-1);
    }
    var Quick=function (arr,left,right) {
        var index;
        if(arr.length>1){
            index=partition(arr,left,right);
            if(left<index-1){
                Quick(arr,left,index-1);
            }
            if(right>index){
                Quick(arr,index,right);
            }
        }
    };
    var partition=function (arr,left,right) {
        var pivot=arr[Math.floor((right+left)/2)],
            i=left,j=right;
        while (i<=j){
            while (arr[i]<pivot){
                i++;
            }
            while (arr[j]>pivot){
                j--;
            }
            if(i<=j){
                swap(arr,i,j);
                i++;
                j--;
            }
        }
        return i;
    };
/*    var buildHeap=function (arr) {
        var heapSize=arr.length;
        for()
    }*/
    }
    //测试
    function createSortArray(size) {
        var array=new ArrayList();
        for(var i=size;i>0;i--){
            array.insert(i);
        }
        return array;
    }
    var arraytest=new createSortArray(6);
    console.log(arraytest.toString());
    arraytest.QuickSort();
    console.log(arraytest.toString());