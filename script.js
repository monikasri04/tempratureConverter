function convertTemp(){

    let temp = parseFloat(document.getElementById("temp").value);

    let from = document.getElementById("fromUnit").value;
    let to = document.getElementById("toUnit").value;

    let result = document.getElementById("result");

    if(isNaN(temp)){
        result.innerHTML = "Enter Value";
        return;
    }

    let converted;

    if(from === to){
        converted = temp;
    }

    else if(from === "c" && to === "f"){
        converted = (temp * 9/5) + 32;
    }

    else if(from === "c" && to === "k"){
        converted = temp + 273.15;
    }

    else if(from === "f" && to === "c"){
        converted = (temp - 32) * 5/9;
    }

    else if(from === "f" && to === "k"){
        converted = ((temp - 32) * 5/9) + 273.15;
    }

    else if(from === "k" && to === "c"){
        converted = temp - 273.15;
    }

    else if(from === "k" && to === "f"){
        converted = ((temp - 273.15) * 9/5) + 32;
    }

    let symbol = "";

    if(to === "c") symbol = "°C";
    if(to === "f") symbol = "°F";
    if(to === "k") symbol = "K";

    result.innerHTML = converted.toFixed(2) + symbol;
}