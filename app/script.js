const switcher = document.getElementById("btn-click");

switcher.onclick = async function() {
console.log("Button Clicked");





    //alert("Hello! I am an alert box!");
    const ins = document.getElementById("text").value;
    //console.log(ins);
    const url = "http://23.99.194.19:5000/get-text?ins=" + ins; 
    console.log(url);
//     // fetch data as text from url and display in alert
    fetch(url)
    .then(response => response.text())
    .then((response) => {
        alert(ins + response);
        console.log(ins + response);
    })
    .catch(err => console.log(err))
}











    // async function fetchText() {
    //     // alert("Generating response...")
    //     // alert("Inside func")
    //     // let response = await fetch('http://gpt3app.eastus.cloudapp.azure.com:5000/get-text?ins=hoo');
    //     // let data = await response.json();
    //     let response = await fetch(url)
    //     // alert("Response recevived")
    //     let data = await response.json()
    //     // alert(data.text)
    //     //temp.innerHTML = data.text;
    //     // alert(data.quote);
    // }
    // fetchText();
    // const url = 'http://23.99.194.19:5000/get-text?ins=' + ins; 

    // async function fetchText(){
    //     let response = await fetch(url);
    //     let data = await response.json();
    //     alert(data.text);
    // }
    // fetchText();
    //ins.innerHTML = "Hello World!";
//     alert(url.text)
    
// }

// console.log(ins);