export const capitalizeWord = word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
export const getIdFromURL = url => {
  const vals = url.split("/");
  return vals[vals.length - 2];
};
export const isUrl = string => {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(string);
};
export const formatProperties = string => {
  let stringFragments = string.split("_");
  if (stringFragments.length === 1) {
    stringFragments = string.split(", ");
  }
  const newStringFragments = [];
  stringFragments.forEach(fragment => {
    newStringFragments.push(capitalizeWord(fragment));
  });
  if (string.indexOf(",") > 0) {
    return newStringFragments.join(" & ");
  }
  return newStringFragments.join(" ");
};
export const findResourceInPathName = (resourceList, pathName) => {
  const resourceFragments = pathName.split("/");
  if (resourceFragments[1] !== "pages") {
    return null;
  }
  let resourceInPathName;
  resourceList.forEach(resource => {
    if (pathName.includes(resource)) {
      resourceInPathName = resource;
    }
  });
  return resourceInPathName;
};
