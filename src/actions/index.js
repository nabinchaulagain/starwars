import api from "../api";
import history from "../history";
export const fetchResources = resourceType => {
  return async dispatch => {
    try {
      const response = await api.get(`/${resourceType}`);
      const pages = Math.ceil(response.data.count / 10);
      dispatch({
        type: "FETCH_RESOURCES",
        payload: {
          data: response.data.results,
          resourceType,
          pages: pages
        }
      });
    } catch (error) {
      history.push("/error");
    }
  };
};
export const fetchResourcesByPageNum = (resourceType, pageNum) => {
  return async dispatch => {
    try {
      const response = await api.get(`/${resourceType}/?page=${pageNum}`);
      const pages = Math.ceil(response.data.count / 10);
      dispatch({
        type: "FETCH_RESOURCES_BY_PAGE_NUM",
        payload: {
          data: response.data.results,
          resourceType,
          pageNum,
          pages: pages
        }
      });
    } catch (error) {
      history.push("/error");
    }
  };
};
export const fetchResource = (resourceType, id) => {
  return async dispatch => {
    const response = await api.get(`/${resourceType}/${id}`);
    dispatch({
      type: "FETCH_RESOURCE",
      payload: { data: response, resourceType }
    });
  };
};
