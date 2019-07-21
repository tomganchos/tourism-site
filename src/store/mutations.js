export const setResources = (state, resources) => {
  console.log(resources);
  state.resources = resources || []
};

export const setNewCanvasItem = (state, payload) => {
  console.log(payload);
  let parentId = null;
  if (payload.parentId) {
    parentId = payload.parentId;
    delete payload.parentId;
  }
  if (!payload.idComponent) {
    payload.idComponent = lib.guid();
  }

  if (parentId) {
    findAndPush(parentId, state.resources, payload);
  } else {
    state.resources.push(payload);
  }

  // editComponentButton.editComponent(payload.idComponent);
  lib.getComponentById(state.resources, payload.idComponent);
  console.log(payload.idComponent);
  console.log(state.resources);
};

export const removeCanvasItem = (state, payload) => {
  findAndRemove(payload, state.resources);
};

export const updateCanvasItem = (state, payload) => {
  findAndUpdate(payload, state.resources);
};


export const setView = (state, view) => {
  state.specialView = view;
};

const findAndUpdate = (payload, array) => {
  array.forEach(item => {
    if (item.idComponent === payload.idComponent) {
      console.log(payload);
      console.log(item);
      item.propsComponent = payload.propsComponent;
      console.log(item);
    }
    if (item.children) {
      findAndUpdate(payload, item.children);
    }
  })
};

const findAndPush = (parentId, array, payload) => {
  array.forEach(item => {
    if (item.idComponent === parentId) {
      if (!item.children)
        item.children = [];
      item.children.push(payload);
    }
    if (item.children) {
      findAndPush (parentId, item.children, payload);
    }
  })
};

const findAndRemove = (id, array) => {
  array.forEach((item, index) => {
    console.log(id);
    console.log(array);
    console.log(index);
    if (item.idComponent === id) {
      console.log(item);
      array.splice(index, 1);
    }
    if (item.children) {
      findAndRemove (id, item.children);
    }
  })
};
