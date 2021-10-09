function toggleDarkMode(){
    const checkbox = document.getElementById('toggle');
    const html = document.querySelector('html');
    if(checkbox.checked){
        html.classList.add("dark")
    }
    else{
         html.classList.remove("dark");
    }
}