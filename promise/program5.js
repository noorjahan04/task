function time(duration,onComplete){
    setTimeout(()=>{
      onComplete(`Timer of ${duration} ms finished`);
    },duration);
  }
  time(3000,message=>
    console.log(message))