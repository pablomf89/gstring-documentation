export const mockAPICall = async (filters: any) => {
  //in this function you'd usually call the backend to retrieve some data and pass the filters and the shortby
  const _mock_data = [
    { title: "result 1", categoryId: "Ipsum", createdByUser: "Pablo Martín", createdOn: "01/01/2022" },
    { title: "result 2", categoryId: "Ipsum", createdByUser: "John Snow", createdOn: "02/01/2022" },
    { title: "result 3", categoryId: "Ipsum", createdByUser: "Frodo", createdOn: "03/01/2022" },
    { title: "result 4", categoryId: "Lorem", createdByUser: "El Risitas", createdOn: "04/01/2022" },
    { title: "result 5", categoryId: "Dolor", createdByUser: "La Veneno", createdOn: "05/01/2022" },
  ];
  //here we're just mocking a simple category filter

  //this would be the response from the backend

  _mock_data.sort((a: any, b: any) => {
    let nameA: any = a[filters.sortBy],
      nameB: any = b[filters.sortBy];
    const valueA = nameA && typeof nameA === "object" ? nameA.label : nameA;
    const valueB = nameB && typeof nameB === "object" ? nameB.label : nameB;
    if (filters.sortDirection === "asc") {
      if (valueA < valueB) return -1;
      if (valueA > valueB) return 1;
    } else {
      if (valueA > valueB) return -1;
      if (valueA < valueB) return 1;
    }
    return 0;
  });

  let dataBeforePaginaton = _mock_data.filter((item) => !filters.categoryId || item.categoryId === filters.categoryId);
  const start = filters ? filters.page * filters.perPage - filters.perPage : 0;
  const end = filters ? filters.page * filters.perPage : 0;
  const dataAfterPagination = dataBeforePaginaton ? dataBeforePaginaton.slice(start, end) : dataBeforePaginaton;

  return {
    count: dataBeforePaginaton.length,
    data: dataAfterPagination,
  };
};
