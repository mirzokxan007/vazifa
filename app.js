let son = +prompt("Son kiriting ");

for ( i = 0; i <= son; i++) {
        if (i % 2 === 0) {
            console.log(` ${i} soni juft:`);
        }
        else {
            continue;
        }
    }

alert(
  `
Keyingi sahifaGA oting`
);

let a = +prompt("Biron son kiritin:");


let summa = 0;

for (let i = 1 ; i <= a; i++) {
    summa = summa + i;
}

console.log(summa);