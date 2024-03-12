import Axios from "./axios.config";

import { termApi, aboutApi, faqApi, policyApi } from "./endPoints";

export const getTerms = async () => {
  try {
    const response: any = await Axios.get(termApi);

    return response.data;
  } catch (e) {
    console.log("error", e);
  }
};

export const getAboutUs = async () => {
  try {
    const response: any = await Axios.get(aboutApi);

    return response.data;
  } catch (e) {
    console.log("error", e);
  }
};

export const getFAQ = async (param:object) => {
  try {
    const response: any = await Axios.get(faqApi,{params:param});

    return response.data;
  } catch (e) {
    console.log("error", e);
  }
};

export const getPolicy = async () => {
  try {
    const response: any = await Axios.get(policyApi);

    return response.data;
  } catch (e) {
    console.log("error", e);
  }
};
