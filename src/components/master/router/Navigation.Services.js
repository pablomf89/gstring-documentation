// 0: "_id"
// 1: "_t"
// 2: "P"
// 3: "PP"
// 4: "N"
// 5: "T"
// 6: "ST"
// 7: "o"
// 8: "v"
// 9: "dteVrs"
// 10: "status"
// 11: "d_type"
// 12: "d_subtype"
// 13: "inherit"
// 14: "icon"
// 15: "defaultOpen"
// 16: "key"
// 17: "required"
// 18: "multiple"
// 19: "descendants"
// 20: "typeSubtype"
// 21: "linksRoot_linksRoot"
// 22: "linkType"
// 23: "allowedTypes"
// 24: "linksRoot"
// 25: "value"
// 26: "file"
// 27: "prop_file_file"
// 28: "prop_N"
// 29: "prop_T"
// 30: "prop_ST"
// 31: "prop_PP"
// 32: "file_url"
// 33: "file_weight"
// 34: "file_extension"
// 35: "file_height"
// 36: "file_width"
// 37: "metadescription"
// 38: "metakeywords"
// 39: "browserTitle"
// 40: "showInMainNav"
// 41: "content1"
// 42: "promos"
// 43: "defaultValue"
// 44: "validationClass"
// 45: "nicename"
// 46: "showInSitemap"
// 47: "showInBreadcrumb"
// 48: "showInSecondaryNav"
// 49: "image"
// 50: "email"
// 51: "password"

import { pages } from "./PagesList";
//import { pagesCollection, firebaseLooper } from "api/firebase";

/*Returns the list of pages*/
export const fetchPages = async () => {
  //process urls
  var data = pages.map((a) => ({
    ...a,
    url: getPageRelativeURL(a, pages),
  }));
  return data;
};

/*Returns the list of elements displayed in the main nav*/
export const getMainNavItems = async (_pages) => {
  const pagesToFIlter =   await fetchPages();
  var data = pagesToFIlter.filter((a) => a.parentId === null && a.showInNav);
  return data;
};
/*Returns the list of elements displayed in the main nav*/
export const getMainNavChildrenItems = async (navItem) => {
  const pagesToFIlter =   await fetchPages();
  var data = pagesToFIlter.filter((a) => a.parentId === navItem?.id && a.showInNav);
  return data;
};

export const getSecondaryNavItems = (pages) => {
  var data = pages.filter((a) => a.showInSecondaryNav);
  return data;
};

/*Generates the URL of the page for navigation propouses*/
export const getPageRelativeURL = (navItem, allPages) => {
  var url = "";
  var parentPage = getParentPage(navItem, allPages);
  if (parentPage != null) {
    url = getPageRelativeURL(parentPage, allPages);
  }
  let nicename = navItem.nicename !== null ? url + "/" + navItem.nicename : url + "/";
  nicename = nicename.replace("//", "/");
  return nicename;
};

/*retrieves the inmediate parent page*/
export const getParentPage = (navItem, allPages) => {
  if (navItem && navItem.parentId !== null) {
    var parentCandidates = allPages.filter((a) => a.id === navItem.parentId);
    if (parentCandidates && parentCandidates.length) {
      return parentCandidates[0];
    }
  }
  return null;
};


export const navIsActive = (node, currentnavNode, currentNodeAncestors) => {
  if (node && currentnavNode) {
    if (currentnavNode.id === node.id) {
      return true;
    }
    if (currentNodeAncestors && currentNodeAncestors.length) {
      const foundMatchingAncestor = currentNodeAncestors.find((a) => a.id === node.id);
      if (foundMatchingAncestor) {
        return true;
      }
    }
  }
  return false;
};
