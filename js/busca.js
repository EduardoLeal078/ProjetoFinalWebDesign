function Busca() {
    let input = document.getElementById('Busca').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('item');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="block";                 
        }
    }
    
}