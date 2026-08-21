# Do Grzybów 🍄

Blog o grzybobraniu — osobisty dziennik grzybiarza z poradami, opisami gatunków, sprawdzonymi miejscówkami i przepisami.

## Podgląd

Statyczna strona (HTML/CSS/JS, bez frameworka i bez procesu budowania). Otwórz `index.html` w przeglądarce albo wystaw folder przez dowolny serwer statyczny, np.:

```bash
npx serve .
```

## Struktura

```
index.html          strona główna z listą wpisów i paskiem bocznym
o-mnie.html          strona "O mnie"
kontakt.html         formularz kontaktowy
posts/               pojedyncze wpisy blogowe
css/style.css        style całej witryny
js/main.js           menu mobilne, wyszukiwarka po stronie klienta, newsletter (front-end)
images/              ilustracje SVG
```

## Publikacja (GitHub Pages)

W ustawieniach repozytorium: **Settings → Pages → Source: Deploy from a branch → main / (root)**.

## Rozwój

Nowy wpis: skopiuj dowolny plik z `posts/`, podmień treść, dodaj kartę na `index.html` oraz link w widgecie „Ostatnie wpisy” na pozostałych podstronach.
