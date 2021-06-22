type Q = {
  products: any;
  totalPrice: number;
  totalQuantities: number;
};

const initState: Q = {
  products: [],
  totalPrice: 0,
  totalQuantities: 0
};

export const CartReducer = (state = initState, action: any) => {
  var Tp: number;
  var Tq: number;
  var indexValue: number;
  var obj;
  var arraycopy: any;
  var check: boolean;
  switch (action.type) {
    case "ADD_TO_CART":
      let { selected, quant } = action.payload;
      console.log(selected);
      check = state.products.find((pr: { id: any; }) => pr.id === selected.id);
      if (check) {
        Tp =
          state.totalPrice -
          selected.price * selected.quantity +
          selected.price * quant;
        Tq = state.totalQuantities - selected.quantity + quant;
        indexValue = state.products.findIndex(
          (product: { id: any; }) => product.id === selected.id
        );
        arraycopy = [...state.products];
        arraycopy[indexValue] = {
          ...state.products[indexValue],
          quantity: quant
        };
        obj = {
          prod: arraycopy,
          Price: Tp,
          Quantities: Tq
        };
        localStorage.setItem("cart", JSON.stringify(obj));
        return {
          ...state,
          products: arraycopy,
          totalPrice: Tp,
          totalQuantities: Tq
        };
      } else {
        Tp = state.totalPrice + selected.price * quant;
        Tq = state.totalQuantities + quant;

        const sel = { ...selected, inCart: true, quantity: quant };
        const k = [...state.products, sel];
        obj = {
          prod: k,
          Price: Tp,
          Quantities: Tq
        };
        localStorage.setItem("cart", JSON.stringify(obj));
        return {
          ...state,
          products: [...state.products, sel],
          totalPrice: Tp,
          totalQuantities: Tq
        };
      }
    case "ADD_FROM_HOME":
      const { products, number } = action.payload;

      Tp = state.totalPrice + products.price * number;
      Tq = state.totalQuantities + 1;
      // selected.inCart = true;
      // selected.quantity = quant;

      const temp = { ...products, inCart: true };
      const temp1 = [...state.products, temp];
      obj = {
        prod: temp1,
        Price: Tp,
        Quantities: Tq
      };
      localStorage.setItem("cart", JSON.stringify(obj));
      return {
        ...state,
        products: [...state.products, temp],
        totalPrice: Tp,
        totalQuantities: Tq
      };

    case "INC":
      indexValue = state.products.findIndex(
        (product: { id: { selected?: any; quant?: any; products?: any; number?: any; }; }) => product.id === action.payload
      );

      arraycopy = [...state.products];
      arraycopy[indexValue] = {
        ...state.products[indexValue],
        quantity: state.products[indexValue].quantity + 1
      };
      obj = {
        prod: arraycopy,
        Price: state.totalPrice + arraycopy[indexValue].price,
        Quantities: state.totalQuantities + 1
      };
      localStorage.setItem("cart", JSON.stringify(obj));
      return {
        ...state,
        products: arraycopy,
        totalPrice: state.totalPrice + arraycopy[indexValue].price,
        totalQuantities: state.totalQuantities + 1
      };
    case "DEC":
      const findP = state.products.find(
        (product: { id: { selected?: any; quant?: any; products?: any; number?: any; }; }) => product.id === action.payload
      );

      if (findP.quantity > 1) {
        indexValue = state.products.findIndex(
          (product: { id: { selected?: any; quant?: any; products?: any; number?: any; }; }) => product.id === action.payload
        );

        arraycopy = [...state.products];
        arraycopy[indexValue] = {
          ...state.products[indexValue],
          quantity: state.products[indexValue].quantity - 1
        };
        obj = {
          prod: arraycopy,
          Price: state.totalPrice - arraycopy[indexValue].price,
          Quantities: state.totalQuantities - 1
        };
        localStorage.setItem("cart", JSON.stringify(obj));
        return {
          ...state,
          products: arraycopy,
          totalPrice: state.totalPrice - arraycopy[indexValue].price,
          totalQuantities: state.totalQuantities - 1
        };
      } else {
        return state;
      }
    case "REM":
      const fi = state.products.find(
        (product: { id: { selected?: any; quant?: any; products?: any; number?: any; }; }) => product.id === action.payload
      );
      obj = {
        prod: state.products.filter((product: { id: { selected?: any; quant?: any; products?: any; number?: any; }; }) => product.id != action.payload),
        Price: state.totalPrice - fi.quantity * fi.price,
        Quantities: state.totalQuantities - fi.quantity
      };
      localStorage.setItem("cart", JSON.stringify(obj));

      return {
        ...state,
        products: state.products.filter(
          (product: { id: { selected?: any; quant?: any; products?: any; number?: any; }; }) => product.id != action.payload
        ),
        totalQuantities: state.totalQuantities - fi.quantity,
        totalPrice: state.totalPrice - fi.quantity * fi.price
      };

    default:
      if (localStorage.getItem("cart") === null) {
        return state;
      } else {
        const { prod, Price, Quantities } = JSON.parse(localStorage.getItem("cart")|| '{}') ;
        if (Price > 0) {
          return {
            ...state,
            products: prod,
            totalQuantities: Quantities,
            totalPrice: Price
          };
        } else {
          return state;
        }
      }
  }
};
