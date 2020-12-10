import Axios from "axios";
// import AsyncStorage from "@react-native-community/async-storage";
// import { NavigationService } from "..";
// import { showToast } from "../utills";

// UAT base URL
var baseUrl ="https://jsonplaceholder.typicode.com/";

// Axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (response) => {
//     console.log("RESSPONSEEE:", response, typeof response);
//     if (!response.response) return showToast("Network Error");
//     if (response.response.status == 401) {
//       try {
//         AsyncStorage.removeItem("user").then(() => {
//           // Store.dispatch(AuthActions.emptyState());
//           //NavigationService.reset_0('IntroScreen');
//         });
//         AsyncStorage.removeItem("userRole").then(() => {
//           // Store.dispatch(AuthActions.emptyState());
//           //NavigationService.reset_0('IntroScreen');
//         });
//       } catch (err) {}
//     }

//     return response.response;
//   }
// );

export default class ApiCaller {
  static Get = (url = "", headers = {}, isThirdPartyApi = false) => {
    console.log("get from api caller", baseUrl, url);

    return Axios.get(`${baseUrl}${url}`, {
      headers: { "Content-Type": "application/json", ...headers },
    })
      .then((res) => res)
      .catch((err) => err.response);
  };

  static Post = async (endPoint = "", body = {}, headers = {}) => {
    console.log("from api caller", endPoint, "body", body);
    return Axios.post(`${baseUrl}${endPoint}`, body, {
      headers: { ...headers },
    })
      .then((res) => res)
      .catch((err) => err);
  };

  static Put = (url = "", body = {}, headers = {}) => {
    console.log("from put call", baseUrl, url, body, headers);
    return Axios.put(`${baseUrl}${url}`, body, {
      headers: { "Content-Type": "application/json", ...headers },
    })
      .then((res) => res)
      .catch((err) => err.response);
  };

  static Patch = (url = "", body = {}, headers = {}) => {
    return Axios.patch(`${baseUrl}${url}`, body, {
      headers: { "Content-Type": "application/json", ...headers },
    })
      .then((res) => res)
      .catch((err) => err.response);
  };

  static Delete = (url = "", body = {}, headers = {}) => {
    return Axios.delete(`${baseUrl}${url}`, {
      headers: { ...headers },
      data: body,
    })
      .then((res) => res)
      .catch((err) => err.response);
  };
}
