let billesPierre = 10;
let billesJeanne = 15;
let billesPaul = 5;

// partie 1 et 2
billesPierre += 4;
billesJeanne -= 2;
billesPaul -= 2;
// partie 3 et 5
billesJeanne += 4;
billesPierre -= 2;
billesPaul -= 2;
// partie 4
billesPaul += 2;
billesPierre--;
billesJeanne--;

// l'échange avec Pierre
const billesRestantesPierre = billesPierre % 4;
const boulardsPierre = (billesPierre - billesRestantesPierre) / 4;

console.log(billesRestantesPierre);
console.log(boulardsPierre);

// l'échange avec Jeanne
const billesRestantesjeanne = billesJeanne % 2;
const boulardsjeanne = (billesJeanne - billesRestantesjeanne) / 2;

console.log(billesRestantesjeanne);
console.log(boulardsjeanne);

// l'échange avec Paul
const billesRestantesPaul = billesPaul % 3;
const boulardsPaul = (billesPaul - billesRestantesPaul) / 3;

console.log(billesRestantesPaul);
console.log(boulardsPaul);
