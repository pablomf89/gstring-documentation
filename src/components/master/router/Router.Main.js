import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AppContext } from "components/master/context/App.Context";
import { urlMatch } from "utilities/url";
import Server404 from "components/content/pages/serverError/Server404";
import { NavContext } from "../context/navigation/Navigation";
import GlobalElementsPage from "components/content/pages/globalElementsPage/globalElementsPage";
import FormsPage from "components/content/pages/forms/formsPage";
import FormWizardPage from "components/content/pages/formWizardPage/formWizardPage";
import MessagesPage from "components/content/pages/messagesPage/messagesPage";
import ModalsPage from "components/content/pages/modalsPage/modalsPage";
import ButtonsPage from "components/content/pages/buttonsPage/buttonsPage";
import WysiwygPage from "components/content/pages/wysiwygPage/wysiwygPage";
import Home from "components/content/pages/home/home";
import PageTypeNotImplemented from "components/content/pages/serverError/PageTypeNotImplemented";
import CalendarPage from "components/content/pages/calendarPage/calendarPage";
import AccordionsPage from "components/content/pages/accordiosPage/accordiosPage";
import NotificationsPage from "components/content/pages/notificationsPage/notificationsPage";
import DatePickerPage from "components/content/pages/datePickerPage/datePickerPage";
import ResultsPage from "components/content/pages/resultsPage/resultsPage";
import TabsPage from "components/content/pages/tabsPage/tabsPage";
import SliderPage from "components/content/pages/sliderPage/sliderPage";

function getNavItemComponentByType(navItem, user, pages) {
  switch (navItem.type) {
    case "global-elements":
      return GlobalElementsPage;
    case "forms":
      return FormsPage;
    case "form-wizard":
      return FormWizardPage;
    case "messages":
      return MessagesPage;
    case "modals":
      return ModalsPage;
    case "buttons":
      return ButtonsPage;
    case "wysiwyg":
      return WysiwygPage;
    case "home":
      return Home;
    case "calendar":
      return CalendarPage;
    case "accordions":
      return AccordionsPage;
    case "notifications":
      return NotificationsPage;
    case "date-picker":
      return DatePickerPage;
    case "results":
      return ResultsPage;
    case "tabs":
      return TabsPage;
    case "slider":
      return SliderPage;
    default:
      return PageTypeNotImplemented;
  }
}

const Routes = (props) => {
  const context = useContext(AppContext);
  const navContext = useContext(NavContext);

  if (context) {
    const appContext = context;
    const navigation = navContext;
    const navIsLoaded = navigation && navigation.pages && navigation.pages.length;

    if (navIsLoaded) {
      if (!navigation.currentPage) {
        return routeNotFound(null);
      } else {
        const isAuth = appContext && appContext.user ? true : false; //check if the user is logged in

        const currentURL = new URL(window.location.href);

        const userJustLoggedIn = isAuth && urlMatch("/auth", currentURL.pathname);
        if (userJustLoggedIn) {
          return redirectFromLogin();
        } else {
          const currentPageIsNotAllowed = navigation.currentPage.isPrivate && !isAuth;
          if (currentPageIsNotAllowed) {
            return redirectToLogin(navigation.currentPage);
          } else {
            const routes = navigation.pages.map((navItem) => {
              const pageIsNotAllowed = navItem.isPrivate && !isAuth;

              let userHasPermission = true;
              const isCurrentPage = navigation.currentPage && navItem.url === navigation.currentPage.url; //check if the current iteraction refers to the current requested page
              if (!pageIsNotAllowed && userHasPermission) {
                return normalRoute(navItem, null, navigation.pages);
              } else if (!pageIsNotAllowed && !userHasPermission && isCurrentPage) {
                return routeNotFound(navItem);
              }
              return null;
            });
            return routes;
          }
        }
      }
    } else {
      return null;
    }
  }
  //wait until the context is ready
  return "Loading...";
};

const normalRoute = (navItem, user, pages) => {
  return <Route exact path={navItem.url} key={navItem.id} component={getNavItemComponentByType(navItem, user, pages)} />;
};

const routeNotFound = (navItem) => {
  return <Route exact component={Server404} key={navItem ? navItem.type : null} />;
};

const redirectToLogin = (navItem) => {
  let url = navItem.url;
  //amend to redirect properly to pages with paramenters
  if (url.indexOf(":") !== -1) {
    url = url.split(":")[0] + window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
  }
  const currentURL = new URL(window.location.href);
  if (currentURL.pathname !== "/auth") {
    return <Redirect to={"/auth?ref=" + url + window.location.search} />;
  } else {
    return <Route exact path={navItem.url} key={navItem.id} component={getNavItemComponentByType(navItem)} />;
  }
};

const redirectFromLogin = () => {
  const url = new URL(window.location.href);
  const params = url.searchParams;
  const ref = params.get("ref");
  let redirectURL = ref ? ref : "/";
  if (ref) {
    redirectURL = url.search.replace("?ref=", "");
  }
  return <Redirect to={redirectURL} />;
};

export default Routes;
