const switcher = document.getElementById("btn-click");

switcher.onclick = function() {
    alert("Hello! I am an alert box!!");
    const ins = document.getElementById("text").value;

    // const url = 'http://23.99.194.19:5000/get-text?ins=' + ins; 

    // async function fetchText(){
    //     let response = await fetch(url);
    //     let data = await response.json();
    //     alert(data.text);
    // }
    // fetchText();
    ins.innerHTML = "Hello World!";
}

// console.log(ins);