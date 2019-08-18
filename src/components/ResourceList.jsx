import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchResources, fetchResourcesByPageNum } from "../actions";
import { capitalizeWord, getIdFromURL } from "../helpers";
import { Link } from "react-router-dom";
import history from "../history";
import resourceList from "../resources";
const ResourceList = props => {
  const renderPagination = pages => {
    const pagesCollection = [];
    for (let i = 1; i <= pages; i++) {
      pagesCollection.push(
        <Link
          to={`/pages/${props.match.params.resource}/${i}`}
          className="text-dark"
          key={i}
        >
          <button
            className={`btn btn-md ${
              i === parseInt(props.match.params.pageNum) ||
              (!props.match.params.pageNum && i === 1)
                ? "btn-primary"
                : "btn-secondary"
            } ml-1`}
          >
            {i}
          </button>
        </Link>
      );
    }
    return pagesCollection;
  };

  useEffect(() => {
    if (props.match.params.pageNum) {
      props.fetchResourcesByPageNum(
        props.match.params.resource,
        props.match.params.pageNum
      );
    } else {
      props.fetchResources(props.match.params.resource);
    }
  }, [props.match.params.resource, props.match.params.pageNum]);
  if (!props.resources || props.resources.length === 0) {
    return "Loading ....";
  }
  return (
    <React.Fragment>
      <h1 className="text-center">
        {capitalizeWord(props.match.params.resource)} List
      </h1>
      {props.resources.data.map(resource => (
        <div className="card col-md-6 mx-auto p-1" key={resource.name}>
          <Link
            to={`/${props.match.params.resource}/${getIdFromURL(resource.url)}`}
          >
            <h4 className="text-center">{resource.name}</h4>
          </Link>
        </div>
      ))}
      <div className="text-center mt-2">{renderPagination(props.pages)}</div>
    </React.Fragment>
  );
};
const mapStateToProps = (state, prevProps) => {
  if (!resourceList.includes(prevProps.match.params.resource)) {
    history.push("/error");
    return;
  }
  const pageNum = prevProps.match.params.pageNum
    ? prevProps.match.params.pageNum
    : 1;
  return {
    resources: state[prevProps.match.params.resource][pageNum],
    pages: state[prevProps.match.params.resource].pages
  };
};
export default connect(
  mapStateToProps,
  { fetchResources, fetchResourcesByPageNum }
)(ResourceList);
