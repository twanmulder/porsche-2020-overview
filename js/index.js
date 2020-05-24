window.onload = () => {
  logAllModels();
  createModelNavigation();
};

const models = [
  {
    name: "911 Carrera",
    image: "",
    price: "€ 143.200,00",
    accentColor: "https://files.porsche.com/filestore/image/multimedia/none/992-c2-modelimage-sideshot/model/5df3abc0-999a-11e9-80c4-005056bbdc38;sO;twebp/porsche-model.webp",
  },
  {
    name: "911 Carrera Cabriolet",
    image: "",
    price: "€ 159.000,00",
    accentColor: "",
  },
  {
    name: "911 Carrera 4",
    image: "",
    price: "€ 151.600,00",
    accentColor: "",
  },
  {
    name: "911 Carrera 4 Cabriolet",
    image: "",
    price: "€ 167.800,00",
    accentColor: "",
  },
  {
    name: "911 Carrera S",
    image: "",
    price: "€ 157.300,00",
    accentColor: "",
  },
  {
    name: "911 Carrera S Cabriolet",
    image: "",
    price: "€ 173.500,00",
    accentColor: "",
  },
  {
    name: "911 Carrera 4S",
    image: "",
    price: "€ 166.100,00",
    accentColor: "",
  },
  {
    name: "911 Carrera 4S Cabriolet",
    image: "",
    price: "€ 182.300,00",
    accentColor: "",
  },
  {
    name: "911 Targa 4",
    image: "",
    price: "€ 168.200,00",
    accentColor: "",
  },
  {
    name: "911 Targa 4S",
    image: "",
    price: "€ 186.000,00",
    accentColor: "",
  },
  {
    name: "911 Turbo S",
    image: "https://files.porsche.com/filestore/image/multimedia/none/911-tus-modelimage-sideshot/model/930894f1-6214-11ea-80c8-005056bbdc38;sO;twebp/porsche-model.webp",
    price: "€ 272.500,00",
    accentColor: "",
  },
  {
    name: "911 Turbo S Cabriolet",
    image: "",
    price: "€ 287.900,00",
    accentColor: "",
  },
];

const logAllModels = () => {
  models.forEach((model) => console.log(model));
};

const createModelNavigation = () => {
  // Create list
  const modelList = document.createElement("ul");
  models.forEach((model, index) => {
    if (index === 2) {
      return (modelList.innerHTML += `<li class="active"><span>${model.name}</span></li>`);
    }

    modelList.innerHTML += `<li><span>${model.name}</span></li>`;
  });

  // Add it to DOM
  const modelNavigationElement = document.querySelector(".js.model-navigation");
  modelNavigationElement.append(modelList);
};
