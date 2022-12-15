import config from "../config";

const clientSidePagination = config.clientSidePagination;

export const _fakeResponse = (status, message, user) => {
  return { response: { status, message }, user };
};
export const realResponse = (status, message, user) => {
  return { response: { status, message }, user };
};

export const mockBackendSearchFilter = (data, filters) => {
  /*FILTER*/
  if (filters) {
    if (filters.search) {
      data = data.filter(function (a) {
        return JSON.stringify(a).toLowerCase().includes(filters.search.toLowerCase());
      });
    }
  }
  return data;
};

export const mockBackendOrder = (data, order) => {
  /*ORDER*/
  if (order && order.value) {
    data = data.sort(function (a, b) {
      var nameA = a[order.value],
        nameB = b[order.value];
      if (order.direction === "asc") {
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
      } else {
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
      }
      return 0;
    });
  }
  return data;
};

export const mockBackendPagination = (data, pageNumber, itemsPerPage) => {
  /*PAGINATION*/
  if (clientSidePagination) {
    data = data ? data : [];
  } else {
    let start = pageNumber * itemsPerPage - itemsPerPage;
    let end = pageNumber * itemsPerPage;
    data = data ? data.slice(start, end) : [];
  }
  return data;
};
