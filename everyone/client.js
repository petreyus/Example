function cord(){
    navigator.geolocation.getCurrentPosition((position) => {
        let lat=position.coords.latitude;
        let long= position.coords.longitude;
        console.log("Your latitude is:" +lat + "\n" + "Your longtitude is:" +long);
    
        let data = {lat,long};
        console.log(data);
        
        fetch("/send", {
          method: "POST", 
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
     
        })
       
        

    });



}