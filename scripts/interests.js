const addBtn = document.getElementById("addBtn")
const clearBtn = document.getElementById("clearBtn")

//Adicionar interesses e hobbies
function addInterest () {
    
    const interestI = document.getElementById("interestI")
    const interestValue = interestI.value.trim();
    if(interestValue)              {
        
        const listLS = JSON.parse(localStorage.getItem('meus-interesses')) || [];
    
  
        listLS.push(interestValue);
        localStorage.setItem('meus-interesses', JSON.stringify(listLS));
    
       interestI.value = "";
        addInterestsList();

    } else{
    alert("Escreva um interesse ou hobby antes de enviar!");
    }
}
function addInterestsList() {
    const iList = document.querySelector("#list");
    iList.innerHTML = "";

    const listLS = JSON.parse(localStorage.getItem('meus-interesses')) || [];

     listLS.forEach(interest => {
        const item = document.createElement('li');
       item.textContent = interest; 
        iList.appendChild(item);
            
    });
}

    function clearInterestsList() {
        localStorage.removeItem('meus-interesses');
        addInterestsList();
    }
    
    
addBtn.addEventListener('click', addInterest);

clearBtn.addEventListener('click', clearInterestsList);

setInterval(addInterestsList, 1000)

