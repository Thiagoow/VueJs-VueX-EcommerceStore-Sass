const firstNames = [
  'Armário',
  'Navio',
  'Mala',
  'Base',
  'Hidroavião',
  'Revista',
  'Carretel',
  'Minissaia',
  'Tamborim',
  'Andador',
  'Geladeira',
  'Estátua',
  'Rolo',
  'Crachá',
  'Peneira',
  'Bafômetro',
  'Desentupidor',
  'Guarda-chuva',
  'Espanador',
  'Escudo',
  'Raquete',
  'Vaso sanitário',
  'Lancheira',
  'Cofre',
  'Helióstato',
  'Medalha',
  'Foguete',
  'Lata',
  'Sintetizador',
  'Grampo',
  'Bucha',
  'Catraca',
  'Alfinete',
  'Caneca',
  'Fita',
  'Moeda',
  'Gel',
  'Maquete',
  'Interfone',
  'Gaveta',
  'Helicóptero',
  'Vela de cera',
  'Quimono',
  'Necessaire',
  'Machado',
  'Tecido',
  'Vareta de freio',
  'Obra de arte',
  'Canga'
];
const lastNames = [
  'prepotente',
  'valioso',
  'legítimo',
  'desleixado',
  'Natural',
  'inteligente',
  'disciplinado',
  'louvável',
  'amargurado',
  'honesto',
  'odioso',
  'vergonhoso',
  'horroroso',
  'magnífico',
  'gordo',
  'romântico',
  'sublime',
  'mesquinho',
  'injusto',
  'medroso',
  'otário',
  'quente',
  'intenso',
  'Sábio',
  'zeloso',
  'desapegado',
  'faceiro',
  'companheiro',
  'empenhado',
  'espantoso',
  'traidor',
  'perfeccionista',
  'Qualificado',
  'feio',
  'tolerante',
  'orgulhoso',
  'ignorante',
  'lutador',
  'desejado',
  'exigente',
  'nostálgico',
  'próspero',
  'compreensivo',
  'excelente',
  'estourado',
  'malvado',
  'windsurfista',
  'falso',
  'melhor',
  'terno'
];

function generateRandomData() {
  const randomI = Math.floor(Math.random() * firstNames.length);
  const rName = `${firstNames[randomI]} ${lastNames[randomI]}`;
  const nameNoSpaces = rName.replace(/\s/g, '');

  const rImg = `https://picsum.photos/seed/${nameNoSpaces}/536/354`;
  const rDesc = `${rName} random description. Lorem ipsum dolor.`;
  const rPrice = 10 + rName.length * ((rDesc.length - 5) / rName.length - 3);

  const randomProduct = {
    name: rName,
    imgUrl: rImg,
    price: rPrice,
    description: rDesc
  };

  return randomProduct;
}

const productsArray = new Array(6);
//☝🏽 I just want 6 items on this array

for (let i = 0; i < productsArray.length; i++) {
  const rProduct = generateRandomData();

  //Push a random object:
  productsArray[i] = {
    id: i + 1,
    name: rProduct.name,
    imgUrl: rProduct.imgUrl,
    price: rProduct.price,
    description: rProduct.description
  };
}

export default productsArray;
