 let city="";
    function weather(){
        city=document.getElementById("city").value;
    let xhttp=new XMLHttpRequest();
        label = [];
        data1 = [];
    xhttp.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            let data=JSON.parse(xhttp.responseText);
            div2.innerHTML="Country:"+`${data.city.country}`+"<br>";
           temp_min.innerHTML="Min Temp:"+`${data.list[0].main.temp_max}`+"'<sup> o</sup> C"+"<br>";
           temp_max.innerHTML="Max Temp:"+`${data.list[0].main.temp_min}`+"'<sup> o</sup> C"+"<br>";
           error.innerHTML="";
           for(i=0;i<40;i+=8)
           {
               var date = data.list[i].dt_txt.split(" ");
               label.push(date[0]);
               data1.push(data.list[i].main.temp);
           }
           const ctx = document.getElementById('myChart');
           new Chart(ctx,{
            type: 'bar',
            data: {
                labels: label,
                datasets: [{
                    label: 'Temperature',
                    data: data1,
                    borderWidth:2,
                    backgroundColor: [
                        'red','red','red','red','red'
                    ],
                    borderColor: [
                        'black','black','black','black','black'
                    ],
                }]
            },
        })
    }
    else if(this.status==404){
          error.innerHTML="<h2>Sorry!! city not found</h2>";
          

    }
}
    xhttp.open("GET",`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e15c55a23793c294908375f6b427d0f0&units=metric`,false);
    xhttp.send();
}
