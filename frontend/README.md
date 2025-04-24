# Borászat webshop - Frontend

A kliens oldal React keretrendzserrel épült, illetve az npm csomagok közül az alábbiakat használtam a megvalósításhoz:
- Material UI 
- Axios a http kérések egyszerűsítéséhez
- React Router dom a navigáció megvalósításához
- Swiper a főoldalon lévő képek váltakozásához
- AOS az oldalon lévő szövegek beúsztatásához


## A projekt célja

Alapvetően egy webshop működését modelleztem le. Regisztrációhoz és bejelentkezéshez formot használtam. Nagyon alap validálást tettem a formba, üres stringet nem enge át, és egy komponenst is használtam a kettőre. A bejelentkezést követően token segítségével kommuninál a kliens a szerverrel. A tokent localstorageben mentettem és csak contextben helyeztem el, ahol szükségem volt rá ott a useAuth() hook segítségével használom.


## A projekt indítása

A frontend elindításához a frontend mappában szükséges kiadni az alábbi parancsot:

### `npm start`

Fejlesztői módban indítja el az applikációt.\
Nyissa meg a  [http://localhost:3000](http://localhost:3000), hogy böngészőből is meg tudja nézni az alkalmazást.
