# Borászat webshop

## A projekt célja

Alapvetően egy webshop működését modelleztem le. Regisztrációhoz és bejelentkezéshez formot használtam. Nagyon alap validálást tettem a formba, üres stringet nem enged át. A bejelentkezést követően token segítségével kommuninál a kliens a szerverrel. A tokent localstorageben mentettem és contextben helyeztem el, ahol szükségem volt rá ott a useAuth() hook segítségével használom. A webshop termékeket (borokat) szerverről kérem le, ha a felhasználó nincs bejelentkezve, akkor a borokat meg tudja nézni, de vásárolni nem tud. Vásárláshoz előszr regisztrálni kell, majd bejelentkezni, utána a Boraink oldalon a kosárba lehet tenni a termékeket, végül a kosárban a megrendelés gombra nyomás után kerül be a megrendelések közé. A megrendelések a profil oldalon jelennek meg. 


## A projekt indítása

- A frontend elindításához a frontend mappában szükséges kiadni az alábbi parancsot:

### `npm start`

Fejlesztői módban indítja el az applikációt.\
Nyissa meg a  [http://localhost:3000](http://localhost:3000), hogy böngészőből is meg tudja nézni az alkalmazást.

Fontos: Backend nélkül csak korlátozott funkcionalitásfunciók érhetők el.


- A backend elindításához a backend mappában szükséges kiadni az alábbi parancsot:

### `npm start`

A szerver a következő címen indul: http://localhost::8080 .

## Frontend - Vásárlási folyamat

1. Regisztráció (Főoldal)
2. Bejelentkezés (Főoldal)
3. Termékek kosárba helyezése ("Boraink" oldal)
4. Kosár megtekintése (Kosár oldal)
5. Megrendelés leadása (Kosár oldal)
6. Megrendelések megtekintése (Profil oldal)


## Frontend

A kliens oldal React keretrendzserrel épült, amely lehetővé teszi a komponensalapú, gyors és rugalmas felhasználói felület fejlesztését. Az alábbi npm csomagokat használtam a megvalósítás során:
- Material UI - a felület stílusos és reszponzív megjelenéséhez, modern UI elemek használata
- Axios - a HTTP kérések egyszerű és hatékony kezeléséhez
- React Router dom - az oldalon belüli navigáció megvalósításához, több aloldal kezelésére SPA (Single Page Application) formájában
- Swiper - a főoldalon található képcsere kialakításához
- AOS -  a tartalmak animált megjelenítéséhez
- jwt-decode - a JWT token dekódolásához


## Backend
A szerver oldal Nodejs platformra épült, az npm csomagok közül pedig az alábbiakat használtam a megvalósításhoz:
- express - a szerveroldali útvonalak és API végpontok kezeléséhez.
- jsonwebtoken - a felhasználók azonosításához
- nodemon - a fejlesztési folyamat során a szerver automatikus újraindításához a fájlok módosításakor
- sqlite3 - az adatok tárolásához
- bcrypt -  a jelszavak biztonságos hash-eléséhez és ellenőrzéséhez
- cors - a kliens és a szerver közötti kommunikáció engedélyezéséhez különböző domainek között


## Adatbázis
Az SQLite adatbázis a backend/_db mappában található. A feladat alapján létrehozott 5 tábla:
1. IMAGES - a főoldalon megjelenő képeket tárolom benne
2. USERS - a regisztrált felhasználókat tárolom benne
3. WINES - a termékeket tárolom benne, amit a webshopban meg lehet venni
4. CART - a felhasználó által a kosárba tett termékeket tárolom benne, user_id alapján szűröm a felhasználónak a saját kosarának a tartalmát
5. PURCHASES - a leadott rendeléseket tárolom benne, user_id alapján szűröm az adatot

### Frontend struktúra
A src mappában helyezkednek el a frontend kódfájlok, az alábbi elrendezésben
- API
  Ide kerülnek a szerverrel való kommunikációért felelős fájlok.

- components
  Újrafelhasználható/kisebb komponensek mappája.

- pages
  Az egyes oldalak különálló komponensei.

- provider
  Context állapotkezelők
  AuthProvider: Felhasználói bejelentkezési állapotát kezelő provider. Bejelntkezés, kijelentkezés, illetve a token kezelése.
  WebshopProvider: Termékek, kosár- és rendeléseket kezelő provider.
- App.js
  Az App.js fájl az alkalmazás fő elrendezését (layoutját) valamint az oldalirányítást (routingot) valósítja meg a react-router-dom segítségével.
- index.js
  Az alkalmazás belépési pontja, itt történik az App kirenderelése a DOM-ba

### Backend struktúra
- index.js  
  Ide érkeznek be az API hívások, minden requestnél lefut egy logger middleware, amely logolja az eseményeket (Dátum és idő, HTTP metódus és URL). 
  Az autentikációt igénylő végpontok előtt authorization middleware ellenőrzi a felhasználó tokenjét. 
  A hívások ezután a megfelelő controller réteghez kerülnek továbbításra.

- middlewares
  logger.js – Naplózza az összes bejövő kérést.
  authorization.js – Ellenőrzi a kérésekben kapott jwt-t.

- controllers
 A controllerek kezelik a bejövő API-hívásokat, és a válaszokat adják vissza a kliensnek.

- services
 A servicek végzik az üzleti logikát és az adatbázis-műveleteket.   

- utils
 Csatlakozás az adatbázishoz a projekt indításakor, és segédfüggvények az SQLite adatbázis kezeléséhez.
