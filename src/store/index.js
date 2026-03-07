import { createStore } from "vuex";

export default createStore({
  state: {
    carrito: [],
  },

  mutations: {
    AGREGAR_AL_CARRITO(state, producto) {
      const existingItem = state.carrito.find((p) => p.sku === producto.sku);

      if (existingItem) {
        existingItem.cantidad++;
      } else {
        state.carrito.push({
          ...producto,
          cantidad: 1,
        });
      }
    },
    
    ELIMINAR_PRODUCTO(state, sku) {
      state.carrito = state.carrito.filter((p) => p.sku !== sku);
    },

    DISMINUIR_CANTIDAD(state, sku) {
      const existingItem = state.carrito.find((p) => p.sku === sku);
      if (existingItem) {
        if (existingItem.cantidad === 1) {
          state.carrito = state.carrito.filter((p) => p.sku !== sku);
        } else {
          existingItem.cantidad--;
        }
      }
    },

    AUMENTAR_CANTIDAD(state, sku) {
      const existingItem = state.carrito.find((p) => p.sku === sku);
      if (existingItem) {
        existingItem.cantidad++;
      }
    },
  },

  getters: {
    cantidadCarrito(state) {
      return state.carrito.reduce((acc, item) => acc + item.cantidad, 0);
    },

    totalCarrito(state) {
      return state.carrito.reduce(  
        (acc, item) => acc + item.precio * item.cantidad,
        0,
      );
    },
  },
});
