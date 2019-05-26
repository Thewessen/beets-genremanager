# Zondag 26 mei 2019

## Inleiding

Eerste meet up over het project Beets genre tagger met web frontend.
Dit project wordt een samenwerking tussen Bart en Samuel voor het maken van een
webbased audiotagger (alleen genres op dit moment) werkend met het programma
Beets.

## Project

__Aanwezig:__
Bart en Samuel

__Gedaan:__
- MVP besproken. Wat moet de het programma minstens draaien? En wat zijn hierin
  mogelijke uitbreidingen?
  - Twee componenten:
  1. Links: uitgelijnd alle genres op een rij.
  2. Rechts: list-view van alle album respectievelijk aan het geselecteerde
     genre.
- Mogelijkheid voor het (de)selecteren van genres als een album geselecteerd
  is.
- Bij wijzigingen aan de huidige selectie albums, niet mogelijk om een andere
  selectie album te maken, maar eerst saven!
- Filter boven de lijst met genres, voor snel zoeken.
- 'Add' onderaan de lijst voor het toevoegen van een niet bestaand genre.
  (alleen beschikbaar als een album geselecteerd is)
- List-view, nog geen title-view.
- Direct aanpassen van de database (SQLLite) zonder gebruik van Beets.
  (Beets API heeft geen POST-method, dus wegschrijven van tags niet mogelijk)
- Saven, maar niet autosaven.
- 'Keybindings' (voorzichtig mee zijn). Zoals 'save', 'select-all' etc.
- Reeds geselecteerde genres altijd bovenaan in de lijst.
- Genres 'lichten op' bij het selecteren van een album (een album kan meerder
  genres hebben).

__Openstaande vragen:__
- Moet database naar frontend 'gepushed' worden bij wijzigingen? M.a.w. is de
  frontend altijd up-to-date aan de backend/database?

## Instrumenten:

__Frontend__
- React framework
- Webpack package manager
- Bootstrap css framework

__Backend__
- SQLLite (beets db)
  - Geen ORM
- Python server
- Flask server framework
