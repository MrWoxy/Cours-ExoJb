function square(nb) {
    console.log(`Mon nombre: ${nb}`);
    nb = 12;
    console.log(`Mon nombre de la fonction, qui est donc différent du programme: ${nb}`);
    return nb*nb;
}

const nb = Number(prompt("Entrez un nombre"));
console.log(square(nb));
console.log(`Mon nb du programme principal: ${nb}`);