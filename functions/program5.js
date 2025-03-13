function secondLargest(arr){
    if(arr.length<2){
      console.log(null)
      return;
     }
    let first=null;
    let second=null;
    for(let i=0;i<arr.length;i++){
      if(first==null || arr[i]>first){
        second=first;
        first=arr[i];
        }else if((second==null ||arr[i]>second)&& arr[i]<first){
        second=arr[i];
         }
     }
    if  (second==null){
      console.log(null)
     }else{
      console.log(second);
     }
  }
  secondLargest([10, 20, 30, 40, 50])
  secondLargest( [5, 5, 5, 5])
  secondLargest([100, 90, 80, 70, 60, 50])
  