import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/api/v1";

const callApi = async (method, url, dataObj, params = {}) => {
  try {
    let data = await axios({
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: method,
      url: url,
      data: dataObj,
      params: params,
    });
    return data;
  } catch (e) {
    return e.response;
  }
};

export default {
  methods: {
    callApi,

    success(message) {
      this.$Notice.success({
        title: "Success",
        desc: message,
      });
    },

    error(message) {
      this.$Notice.error({
        title: "Error",
        desc: message,
      });
    },

    swr() {
      this.$Notice.error({
        title: "Error",
        desc: "Something went wrong! Please try agein.",
      });
    },
  },
};
