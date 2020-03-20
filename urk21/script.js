let drug = '12 34 56 78';
let rett = drug.replace(/(\d)(\d)/g, '$2$1');
console.log(drug);
console.log(rett);