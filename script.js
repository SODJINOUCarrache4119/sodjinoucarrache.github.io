


function envoyer(){
 event.preventDefault();
    let nom = document.getElementById("nom").value;
    let email = document.getElementById("mail").value;
    let objet = document.getElementById("objet").value;
    let Message = document.getElementById("message").value;


    

    if(nom === "" || email === "" || objet === "" || Message === "" ){
        alert("Remplissez toutes les champs");
    }else{
        document.getElementById("success").textContent = "Bonjour " + "" +  nom  + "votre message a été avec succès";
        this.reset();
    }

}



document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".small_menu");
    const menu = document.querySelector(".menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", function () {
            menu.classList.toggle("small"); 
            menuToggle.classList.toggle("active"); 
        });
    }
});

    window.addEventListener("scroll", function () {
        let header = document.querySelector("header");
        header.classList.toggle("scrolled", window.scrollY > 50);
    });






    document.addEventListener("DOMContentLoaded", function () {
        const progresses = document.querySelectorAll(".progress");
        progresses.forEach(progress => {
            let percent = progress.getAttribute("data-percent");
            progress.style.width = percent + "%";
        });
    });


  

    AOS.init({
        duration: 1200, // Durée des animations
        once: true,     // Les animations s'activent une seule fois
    });
    
