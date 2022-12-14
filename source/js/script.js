import { mediaQuery, openNavigation } from "./burger.js";
import { createMap } from "./map.js";
import { Select } from "./select.js";
import { openSwiper } from "./swiper.js";

openNavigation(mediaQuery);
mediaQuery.addEventListener('change', openNavigation);
openSwiper();
createMap();

new Select('#select', {
  placeholder: 'Выбрать сортировку',
  selectedId: '1',
  data: [
    {
      id: '1',
      text: "по умолчанию"
    },
    {
      id: '2',
      text: "сначала дорогие"
    },
    {
      id: '3',
      text: "сначала дешёвые"
    },
    {
      id: '4',
      text: "высокий рейтинг"
    }
  ]
})



