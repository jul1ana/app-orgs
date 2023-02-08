import logo from "../../assets/logo.png";
import broccoli from "../../assets/vegetables/Broccoli.png";
import cucumber from "../../assets/vegetables/Cucumber.png";
import potato from "../../assets/vegetables/Potato.png";
import pumpkin from "../../assets/vegetables/Pumpkin.png";
import tomato from "../../assets/vegetables/Tomato.png";

const basket = {
  top: {
    title: "Shopping basket details"
  },

  details: {
    name: "Basket of Vegetables",
    logoFarm: logo,
    nameFarm: "Jenny Jack Farm",
    description: "A basket with carefully selected products from the farm straight to your kitchen",
    price: "U$ 30,00",
    button: "Buy"
  },

  items: {
    title: "Items from the basket",
    list: [
      {
        name: "Broccoli",
        image: broccoli
      },
      {
        name: "Cucumber",
        image: cucumber
      },
      {
        name: "Potato",
        image: potato
      },
      {
        name: "Pumpkin",
        image: pumpkin
      },
      {
        name: "Tomato",
        image: tomato
      }
    ]
  }
}

export default basket;