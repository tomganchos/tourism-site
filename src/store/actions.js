import {setNewCanvasItem, removeCanvasItem} from "./mutations";

// Action to fetch resources and set in state through the mutation
export const fetchResources = ({ commit }) => {
  console.log(data);
  commit('setResources', data)
};

export const setResources = ({ commit }, array) => {
  console.log(array);
  commit('setResources', array);
};

export const setView = ({ commit}, boolean) => {
  commit('setView', boolean);
};

export const addNewItem = ({commit, state}, payload) => {
  console.log(payload);
  console.log(payload.parentId);
  if (payload.parentId) {

  }
  commit('setNewCanvasItem', payload);
};

export const updateItem = ({commit, state}, payload) => {
  console.log(payload);
  commit('updateCanvasItem', payload);
};

export const removeItem = ({commit, state}, payload) => {
  console.log(state);
  console.log(payload);
  commit('removeCanvasItem', payload);
}
