import DurnibarFavicon from "./extensions/favicon.ico";
const config = {
  head: {
    favicon: DurnibarFavicon,
  },
  translations: {
      en: {
        'app.components.LeftMenu.navbrand.title': 'Durnibar Digital Library',
        'app.components.LeftMenu.navbrand.workplace': 'Admin Panel',
      }
    },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
