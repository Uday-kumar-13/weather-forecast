 async function weatherdata(){

            cityname=document.getElementById("city").value;
            APIkey=`5fc84481d6f2b6865126e89d7219c125`;
            targeturl=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}`;

            try{
                const response=await fetch(targeturl);
                const data=await response.json();
                let check=data.weather[0].main;
                
                function display(){
                    /*document.getElementsByClassName("title").innerHTML="Weather Forecast";*/
                    document.getElementById("text").style.animation="data 3s 1";
                    document.getElementById("text").style.backgroundColor="rgb(163, 162, 162)";
                    document.getElementById("text").style.boxShadow="5px 5px rgb(98, 97, 97)";
                    document.getElementById("first").innerHTML=`Location: ${data.name}`;
                    document.getElementById("type").innerHTML=`Sky: ${check}`;
                    document.getElementById("second").innerHTML=`Temperature: ${(data.main.temp-273.15).toFixed(2)}°C`;
                    document.getElementById("third").innerHTML=`Feels like: ${(data.main.feels_like-273.15).toFixed(2)}°C`;
                    document.getElementById("fourth").innerHTML=`Humidty: ${data.main.humidity}%`;
                    document.getElementById("fifth").innerHTML=`Pressure: ${data.main.pressure} mb`;
                    document.getElementById("sixth").innerHTML=`Maximum Temperature: ${(data.main.temp_max-273.15).toFixed(2)}°C`;
                    document.getElementById("seventh").innerHTML=`Minimum Temperature: ${(data.main.temp_min-273.15).toFixed(2)}°C`;
                }

                

                switch(check){

                    case "Clouds":
                        document.getElementById("sunimage").src="";
                        document.getElementById("rain").src="";

                        document.body.style.backgroundImage='url("R (1).jpeg")';
                        document.getElementById("sunimage").src="pngwing.com (2).png";
                        document.getElementById("image").src="pngwing.com (2).png";
                        document.getElementById("image2").src="pngwing.com (2).png";
                        document.getElementById("image").style.animation='clouds 15s infinite';
                        document.getElementById("image2").style.animation='cloud2 20s infinite';
                        document.getElementById("sunimage").style.animation="cloud3 25s infinite";
                        display();
                        break;

                    case "Clear":
                        document.getElementById("sunimage").src="";
                        document.getElementById("image").src="";
                        document.getElementById("image2").src="";
                        document.getElementById("rain").src="";


                        document.body.style.backgroundImage='url("https://wallpaperaccess.com/full/175932.jpg")';
                        document.getElementById("sunimage").src="sun2.png";
                        document.getElementById("sunimage").style.width="150px";
                        document.getElementById("sunimage").style.animation="sun 25s 1";
                        display();
                        break;

                    case "Rain":
                        document.getElementById("sunimage").src="";
                        document.getElementById("image").src="";
                        document.getElementById("image2").src="";

                        document.body.style.backgroundImage='url("rbloIJQ.jpg")';
                        document.getElementById("rain").style.width="100%";
                        document.getElementById("rain").src="rain drops.png";
                        document.getElementById("rain").style.animation="rain 20s infinite";
                        document.getElementById("rain").style.opacity="0.5";
                        display();
                        break;
                    case "Sunny":
                        document.getElementById("image").src="";
                        document.getElementById("image2").src="";
                        document.getElementById("rain").src="";

                        document.body.style.backgroundImage='url("OIP.webp")';
                        display();

                    default:
                        
                        document.getElementById("type").innerHTML="City Not Found! ";
                        break;
                };

                console.log(data);
                console.log(check);
            }catch(error){
                /*const details=["first","second","third","fourth","fifth","sixth","seventh"];
                document.getElementById(details.map(res=>{return res})).innerHTML="";*/
                document.getElementById("type").style.color="white";
                document.getElementById("type").style.fontSize="30px";
                document.getElementById("type").style.backgroundColor="rgb(163, 162, 162)";
                document.getElementById("type").innerHTML="City Not Found!";
                console.error(error);
            }
        }