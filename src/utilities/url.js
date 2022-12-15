import { matchPath } from "react-router-dom";
import _ from "lodash";
// export const objectToQueryString = (values, customHistory) => {
//   let values2 = convertObjectToSearchQuery(values);
//   if (customHistory) {
//     customHistory.push({
//       pathname: window.location.pathname.replace(process.env.PUBLIC_URL, ""),
//       hash: window.location.hash,
//       search: new URLSearchParams(values2).toString(),
//     });
//   }
// };
export const objectToQueryString = (values, customHistory) => {
  let urlValues = { ...values };
  delete urlValues.page;
  let values2 = convertObjectToSearchQuery(urlValues);

  if (customHistory) {
    customHistory.push({
      pathname: window.location.pathname.replace(process.env.PUBLIC_URL, ""),
      hash: window.location.hash,
      search: new URLSearchParams(values2).toString(),
    });
  }
};

export const convertObjectToSearchQuery = (values, arraysWithComma = true) => {
  if (!arraysWithComma) {
    //here repeats the value in the query string for each value of an array
    const searchParams = new URLSearchParams();
    let values2 = { ...values };
    Object.keys(values2).forEach(function (key) {
      let fieldValue = values[key];

      if (typeof fieldValue === "object") {
        fieldValue = "";
        if (values2[key]) {
          Object.keys(values2[key]).forEach(function (index) {
            searchParams.append(key, values2[key][index]);
          });
        }
      } else {
        searchParams.append(key, fieldValue);
      }
    });
    return searchParams.toString();
  } else {
    //we need to pass the history from react-router, using the other won't be up to date
    let values2 = { ...values };
    Object.keys(values2).forEach(function (key) {
      let fieldValue = values[key];
      if (typeof fieldValue === "object") {
        fieldValue = "";
        if (values2[key]) {
          Object.keys(values2[key]).forEach(function (key2) {
            if (values2[key]) {
              if (values2[key][key2] || values2[key][key2] === 0) {
                if (typeof values2[key][key2] === "object") {
                  serializeSubObject(values2[key], key, values2);
                } else {
                  fieldValue = fieldValue === "" ? values2[key][key2] : fieldValue + "," + values2[key][key2];
                }
              }
            }
          });
        }
      }
      values2[key] = fieldValue;
    });

    return new URLSearchParams(values2).toString();
  }
};

export const serializeSubObject = (object, objectName, parentObject) => {
  //for each key in the object
  Object.keys(object).forEach(function (arrayItemKey) {
    let arrayItem = object[arrayItemKey];
    if (arrayItem) {
      //todo convert
      Object.keys(arrayItem).forEach(function (arrayPropertyName) {
        let objectKey = objectName + "[" + arrayItemKey + "]." + arrayPropertyName;
        let fieldValue = "";
        if (typeof arrayItem[arrayPropertyName] === "object") {
          serializeSubObject(fieldValue, objectKey, parentObject);
        } else {
          fieldValue = fieldValue === "" ? arrayItem[arrayPropertyName] : fieldValue + "," + arrayItem[arrayPropertyName];
          parentObject[objectKey] = fieldValue;
        }
      });
    }
  });
  //remove old object
  parentObject = _.omit(parentObject, [objectName]);
};

export const queryStringToObject = (queryString) => {
  const searchParams = new URLSearchParams(queryString);
  let result = {};
  for (let entry of searchParams.entries()) {
    // each 'entry' is a [key, value] tupple
    let [key, value] = entry;
    //if value contains a comma means it's multiple (like multiple checkboxes)
    if (value.indexOf(",") !== -1) {
      result[key] = {};
      if (value) {
        value = value.split(",");
        result[key] = [];
        for (let i = 0; i < value.length; i++) {
          result[key].push(value[i]);
        }
      }
    } else {
      result[key] = value;
    }
  }
  result.page = 1;

  return result;
};

export const urlMatch = (elementURL, currentBrowserURL) => {
  return matchPath(currentBrowserURL, {
    path: elementURL,
    exact: true,
  });
};

export const urlMatchIncludingChildren = (elementURL, currentBrowserURL) => {
  let doesMatch = matchPath(currentBrowserURL, {
    path: elementURL,
    exact: false,
  });
  return doesMatch;
};

export const getCurrentPage = (pages) => {
  let currentPage = null;
  if (pages && pages.length) {
    pages.forEach((element) => {
      let match;

      match = urlMatch(element.url, window.location.pathname.replace(process.env.PUBLIC_URL, ""));
      if (match != null) {
        currentPage = element;
      }
    });

    currentPage = currentPage !== null ? currentPage : null;
    return currentPage;
  }
};
