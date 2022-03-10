function showData() { 
    let name = document.getElementById("tname").value ; 
    let email = document.getElementById("temail").value ; 
    let number = document.getElementById("tnumber").value ; 
    let subject = document.getElementById("tsubject").value ; 
    let message = document.getElementById("tmessage").value ; 

    
    
    if(name === "" || email === "" || number === "" || subject === "" || message === "") { 
        alert("masih ada yg kosong ni ") ; 
    }
    else { 
        let emailReceiver = "apriadi1163@gmail.com" ; 

        let a = document.createElement("a") ; 
        a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name is ${name}` ; 
        a.click() ; 
        console.log("success");
    }

}