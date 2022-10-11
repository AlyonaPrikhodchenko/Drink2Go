const ZOOM_DEFAULT = 25;
const picturesMap = document.querySelector('.map__picture');
picturesMap.classList.add('.map__picture__hidden');

const map = L.map('map-canvas');

const coordsDefault = {
  lat: '59.968322',
  lng: '30.317359',
};

const mainPinIcon = L.icon({
  iconUrl: './img/icon/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const mainPinMarker = L.marker(
  coordsDefault,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

mainPinMarker.addTo(map);

const createMap = () => {
  map
    .setView(
      coordsDefault,
      ZOOM_DEFAULT
    );
};

export { createMap };
