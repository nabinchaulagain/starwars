const defaultState = {
  people: {},
  planets: {},
  species: {},
  vehicles: {},
  starships: {}
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_RESOURCES":
      return {
        ...state,
        [action.payload.resourceType]: {
          1: {
            data: action.payload.data
          },
          pages: action.payload.pages
        }
      };
    case "FETCH_RESOURCES_BY_PAGE_NUM":
      const pageNum = action.payload.pageNum;
      return {
        ...state,
        [action.payload.resourceType]: {
          ...state[action.payload.resourceType],
          [pageNum]: {
            data: action.payload.data
          },
          pages: action.payload.pages
        }
      };
    // case "FETCH_RESOURCE":
    //   const newState= state;
    //   const resources = newState[action.payload.resourceType];
    //   const resource = resources.find(
    //     resource => resource.name === action.payload.data.name
    //   );
    //   if (resource) {
    //     return { ...state };
    //   }
    //   newState[action.payload.resourceType].push(action.payload.data);
    //   return newState;
    default:
      return state;
  }
};
export default reducer;
