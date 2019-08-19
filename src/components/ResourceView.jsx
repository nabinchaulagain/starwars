import React, { useEffect, useState } from "react";
import api from "../api";
import { isUrl, formatProperties } from "../helpers";
import history from "../history";
const ResourceView = props => {
  const getAndSetResource = async () => {
    try {
      const response = await api.get(
        `/${props.match.params.resource}/${props.match.params.id}`
      );
      setResource(response.data);
    } catch (error) {
      history.push("/error");
    }
  };
  const [resource, setResource] = useState();
  const renderResourceProperties = resource => {
    const resourceKeys = Object.keys(resource);
    const properties = [];
    resourceKeys.forEach(resourceKey => {
      if (typeof resource[resourceKey] == "string") {
        if (isUrl(resource[resourceKey])) {
          properties.push(
            <p key={resourceKey}>
              {formatProperties(resourceKey)} :
              <a
                href={resource[resourceKey]}
                target="_blank"
                rel=" noopener noreferrer"
              >
                {resource[resourceKey]}
              </a>
            </p>
          );
        } else {
          properties.push(
            <p key={resourceKey}>
              {formatProperties(resourceKey)} :{" "}
              {formatProperties(resource[resourceKey])}
            </p>
          );
        }
      }
    });
    return properties;
  };
  useEffect(() => {
    getAndSetResource();
  }, [props.match.params.Resource]);
  if (!resource) {
    return "Loading....";
  }
  return (
    <div className="jumbotron p-2 col-sm-6 mx-auto mt-3">
      <h2 className="text-center">{resource.name}</h2>
      <div className="col-sm-6 mx-auto">
        {renderResourceProperties(resource)}
      </div>
    </div>
  );
};
export default ResourceView;
