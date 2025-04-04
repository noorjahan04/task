function fetchData(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(Math.random()>0.5){
          resolve("Fetched data successfully!");
        }else{
          reject("Error:Failed to fetch data")
        }
      },1000);
    });
  }
  async function fetchDataHandler(){
    try{
      let res=await fetchData();
      console.log(res)
    }catch (error){
      console.error("Error fetching data:",error)
    }
  }
  fetchDataHandler()