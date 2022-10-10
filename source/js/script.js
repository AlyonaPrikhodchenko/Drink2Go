import { mediaQuery, openNavigation } from "./burger.js";
import { createMap } from "./map.js";
import { openSwiper } from "./swiper.js";

openNavigation(mediaQuery);
mediaQuery.addEventListener('change', openNavigation);
openSwiper();
createMap();
