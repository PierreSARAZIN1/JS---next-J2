


var btn = document.getElementById("myBtn").addEventListener("click", result);
    

function result(){
    const email = document.getElementById("exampleInputEmail").value;
    const firstName = document.getElementById("exampleInputFirstname").value;
    const lastName = document.getElementById("exampleInputLastname").value;
    const firstNumber = parseInt(document.getElementById("lotoNumbers1").value);
    const secondNumber = parseInt(document.getElementById("lotoNumbers2").value);
    const thirdNumber = parseInt(document.getElementById("lotoNumbers3").value);
    const fourthNumber = parseInt(document.getElementById("lotoNumbers4").value);
    const fifthNumber = parseInt(document.getElementById("lotoNumbers5").value);
    const sixthNumber = parseInt(document.getElementById("lotoNumbers6").value);
    const arrayNumber = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber]
    // const arrayNumber = [
    //     {cUn: firstNumber}, 
    //     {cDeux: secondNumber}, 
    //     {cTrois: thirdNumber}, 
    //     {cQuatre: fourthNumber}, 
    //     {cCind: fifthNumber},
    //     {cSix: sixthNumber}];

    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    console.log(arrayNumber)

    var error = 0;

    if (email === "") {
        document.getElementById("errorEmail").innerHTML = " Rentre ton Email ❌";
        error ++;
    }
    // else{
    //     if (re.test(email.value)){
    //         document.getElementById("errorEmail").innerHTML = "";
    //     }else{
    //         document.getElementById("errorEmail").innerHTML = " Veuillez fournir un email valide ❌";
    //         error ++ ;
    //     }; 
    // };
    if (firstName === "") {
        document.getElementById("errorFirstName").innerHTML = " Veuillez fournir un prénom ❌";
        error ++ ;
    };

    if (lastName === "") {
        document.getElementById("errorLastName").innerHTML = " Veuillez fournir un nom ❌";
        error ++ ;
    };
  
    let uniqueNumber = [...new Set(arrayNumber)];
    if (uniqueNumber.length < arrayNumber.length ){
        document.getElementById("errorNumber").innerHTML = "Ne répétez pas deux fois le même numéros ❌";
        error ++ ;
    }
    
    if (arrayNumber.length !== 6){
        document.getElementById("errorNumber").innerHTML = "Vous n'avez pas rempli tous vos numéros ❌";
        error ++ ;
    }

    if (error === 0 ){
        tirageOne = Math.floor(Math.random() * 15)+ 1;
        tirageTwo = Math.floor(Math.random() * 15)+ 1;
        tirageThree = Math.floor(Math.random() * 15)+ 1;
        tirageFour = Math.floor(Math.random() * 15)+ 1;
        tirageFive = Math.floor(Math.random() * 15)+ 1;
        tirageSix = Math.floor(Math.random() * 15)+ 1;
        arrayTirage = [tirageOne, tirageTwo, tirageThree, tirageFour, tirageFive, tirageSix]
        console.log(arrayTirage)
    }

    x = 0
    arrayNumber.forEach(number => {
        if ((arrayTirage.includes(number)) === true){
                x ++;
        }     
    })   
        
    if (x === 6){
        document.getElementById("errorNumber").innerHTML = "GG";
    }
  
}
