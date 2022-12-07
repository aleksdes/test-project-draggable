import DefaultLayout from "./DefaultLayout";

const layoutsFiles = [DefaultLayout];

export default {
  install(app) {
    layoutsFiles.forEach((item) => {
      app.component(item.__name, item);
    });
  },
};
