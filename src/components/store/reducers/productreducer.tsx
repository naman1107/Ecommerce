const initState = {
  products: [
    {
      id: 1,
      title: "Samsung Galaxy M12",
      img: "https://m.media-amazon.com/images/I/71PVpFc7FwL._AC_UY218_.jpg",
      price: 13499,
      company: "Samsung",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      quantity: 1,
      total: 0
    },
    {
      id: 2,
      title: "Redmi 9A",
      img: "https://m.media-amazon.com/images/I/71sxlhYhKWL._AC_UY218_.jpg",
      price: 6799,
      company: "Xiaomi",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      quantity: 1,
      total: 0
    },
    {
      id: 3,
      title: "Oppo A31",
      img: "https://m.media-amazon.com/images/I/61IhTtJUXJL._AC_UY218_.jpg",
      price: 11990,
      company: "Oppo",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      quantity: 1,
      total: 0
    },
    {
      id: 4,
      title: "Redmi Note 9",
      img: "https://m.media-amazon.com/images/I/71X5I1cVfbL._AC_UY218_.jpg",
      price: 10999,
      company: "Xiaomi",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      quantity: 1,
      total: 0
    },
    {
      id: 5,
      title: "Samsung Galaxy S20 FE",
      img: "https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_UY218_.jpg",
      price: 33500,
      company: "Samsung",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      quantity: 1,
      total: 0
    },
    {
      id: 6,
      title: "Samsung Galaxy M42",
      img: "https://m.media-amazon.com/images/I/71bmFRQaYCL._AC_UY218_.jpg",
      price: 23999,
      company: "Samsung",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      quantity: 1,
      total: 0
    },
    {
      id: 7,
      title: "Redmi 9 Power",
      img: "https://m.media-amazon.com/images/I/71hEzQGO5qL._AC_UY218_.jpg",
      price: 12999,
      company: "Xiaomi",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      quantity: 1,
      total: 0
    },
    {
      id: 8,
      title: "Apple Iphone 12 mini",
      img: "https://m.media-amazon.com/images/I/71uuDYxn3XL._AC_UY218_.jpg",
      price: 62990,
      company: "Apple",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      quantity: 1,
      total: 0
    },
    {
      id: 9,
      title: "Apple Iphone 12",
      img: "https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UY218_.jpg",
      price: 99990,
      company: "Apple",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      quantity: 1,
      total: 0
    },
    {
      id: 10,
      title: "Apple Iphone 12 Pro",
      img: "https://m.media-amazon.com/images/I/71DVgBTdyLL._AC_UY218_.jpg",
      price: 149990,
      company: "Apple",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      quantity: 1,
      total: 0
    },
    {
      id: 11,
      title: "Oppo A74",
      img: "https://m.media-amazon.com/images/I/71geVdy6-OS._AC_UY218_.jpg",
      price: 17990,
      company: "Oppo",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      quantity: 1,
      total: 0
    },
    {
      id: 12,
      title: "Google Pixel 3a",
      img: "https://m.media-amazon.com/images/I/41IRrxp+xuL._AC_UY218_.jpg",
      price: 34990,
      company: "Google",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      quantity: 1,
      total: 0
    },
    {
      id: 13,
      title: "Apple Iphone 12 Pro Max",
      img: "https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_UY218_.jpg",
      price: 149990,
      company: "Apple",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      quantity: 1,
      total: 0
    },
    {
      id: 14,
      title: "Google pixel 5",
      img:
        "https://images-na.ssl-images-amazon.com/images/I/7199N-Uz2AL._SL1500_.jpg",
      price: 69000,
      company: "Google",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      quantity: 1,
      total: 0
    },
    {
      id: 15,
      title: "Google Pixel 4a",
      img: "https://m.media-amazon.com/images/I/7199N-Uz2AL._AC_UY218_.jpg",
      price: 31999,
      company: "Google",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      quantity: 1,
      total: 0
    },
    {
      id: 16,
      title: "Oppo Reno5 Pro",
      img: "https://m.media-amazon.com/images/I/81bz0g2odDL._AC_UY218_.jpg",
      price: 35990,
      company: "Oppo",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      quantity: 1,
      total: 0
    }
  ]
};
export const ProductReducer = (state = initState, action : any) => {
  var obj;
  switch (action.type) {
    case "UPDATE_PRODUCER": {
      const { selected, quant } = action.payload;

      const num: number = state.products.findIndex(
        (product) => product.id === selected.id
      );
      console.log(num);
      const newArray: any = [...state.products];
      newArray[num] = { ...state.products[num], inCart: true, quantity: quant };
      obj = {
        prod: newArray
      };
      localStorage.setItem("prod", JSON.stringify(obj));
      return {
        ...state,
        products: newArray
      };
    }
    case "UPDATE_INC": {
      const num1: number = state.products.findIndex(
        (product) => product.id === action.payload
      );

      const newArray1: any = [...state.products];
      newArray1[num1] = {
        ...state.products[num1],
        quantity: state.products[num1].quantity + 1
      };
      obj = {
        prod: newArray1
      };
      localStorage.setItem("prod", JSON.stringify(obj));
      return {
        ...state,
        prod: newArray1
      };
    }
    case "UPDATE_HOME":
      const num5: number = state.products.findIndex(
        (product) => product.id === action.payload
      );

      const newArray5: any = [...state.products];
      newArray5[num5] = {
        ...state.products[num5],
        inCart: true
      };
      obj = {
        prod: newArray5
      };
      localStorage.setItem("prod", JSON.stringify(obj));
      return {
        ...state,
        products: newArray5
      };

    case "UPDATE_DEC": {
      const num2: number = state.products.findIndex(
        (product) => product.id === action.payload
      );

      const newArray2: any = [...state.products];
      newArray2[num2] = {
        ...state.products[num2],
        quantity: state.products[num2].quantity - 1
      };
      obj = {
        prod: newArray2
      };
      localStorage.setItem("prod", JSON.stringify(obj));
      return {
        ...state,
        products: newArray2
      };
    }
    case "UPDATE_REMOVE": {
      const num3: number = state.products.findIndex(
        (product) => product.id === action.payload
      );

      const newArray3: any = [...state.products];
      newArray3[num3] = { ...state.products[num3], inCart: false, quantity: 1 };
      obj = {
        prod: newArray3
      };
      localStorage.setItem("prod", JSON.stringify(obj));
      return {
        ...state,
        products: newArray3
      };
    }
    default:
      if (localStorage.getItem("prod") === null) {
        return state;
      } else {
        const { prod } = JSON.parse(localStorage.getItem("prod")|| '{}');
        return {
          ...state,
          products: prod
        };
      }
  }
};
