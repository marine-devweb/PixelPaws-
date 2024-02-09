class Pet {
    // Le constructeur accepte un argument "id" et initialise la propriété "id" de l'objet avec la valeur fournie.
    constructor(id) {
        this.id = id;
        // Initialisation à 0
        this.fedLevel = 0;
        // Afficher les elements Html
        this.fedElement = document.getElementById(`score${id}`);
        this.messageElement = document.getElementById(`message${id}`);
        this.displayElement = document.getElementById(`pet${id}`);
    }
    // Appelle la méthode feed de l'animal de compagnie sélectionné
    feed(amount) {
        this.fedLevel += amount; //Augmente le niveau de nourriture en fonction de la quantité 
        if (this.fedLevel > 100) this.fedLevel = 100; // Si le niveau de nourriture dépasse 100, on le bloque à 100
        this.fedElement.innerText = this.fedLevel; // Met à jour l'affichage de la capacité
    }
}

let pet1 = new Pet(1); // Création d'une instance de la classe Pet pour l'ID 1
let pet2 = new Pet(2);// Création d'une instance de la classe Pet pour l'ID 2

function feedPet(amount) {
    // Appelle la méthode feed pour l'animal sélectionné
    if (selectedPet === 1) {
        pet1.feed(amount); 
    } else if (selectedPet === 2) {
        pet2.feed(amount); 
    }
}

let selectedPet = ""; // Variable pour stocker l'ID de l'animal de compagnie sélectionné
const pet1Element = document.getElementById("pet1"); // Élément HTML pour l'animal de compagnie 1
const pet2Element = document.getElementById("pet2"); // Élément HTML pour l'animal de compagnie 2

function selectPet(id) {
    selectedPet = id; // Stocke l'ID de l'animal de compagnie sélectionné
    
    // Ajoute la classe "selected" à l'animal
    if (id == 1) {
        pet1Element.classList.add("selected");
    } else {
        pet2Element.classList.add("selected");
    }
}