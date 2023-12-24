import { NuxtAxiosInstance } from "@nuxtjs/axios";

export default ({ $axios }: { $axios: NuxtAxiosInstance }) => {
  // request log
  $axios.onRequest((config) => {
    console.log(config);
  });

  // response log
  $axios.onResponse((response) => {
    console.log(response);
  });

  // error log
  $axios.onError((error) => {
    console.error(error.response);
  });
};
