# Opdracht: Array methods - deel 1

We gaan starten met Array Methods zelf maken! Je hebt in de video kennisgemaakt met een aantal array methods. Er zijn er echter zoveel, dat het onzinnig is om ze allemaal één voor één te behandelen en te leren. Het is veel leuker om ze meteen toe te passen! Zodat je ziet voor welk probleem je welke array method zou kunnen gebruiken.

Wanneer je eenmaal weet hoe ze werken, kun je een array method, met behulp van de documentatie, meteen toepassen. Ook als je de method nog nooit eerder gezien hebt.

## Documentation on Array Methods

Op de mozilla website (onderstaande link) vind je alle mogelijke array.methods die er zijn en staat tevens omschreven of de method the orginele array muteert, of een nieuwe array muteert.

### [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

De naam van een array method is vaak heel beschrijvend. We raden altijd de documentatie van Mozilla aan. Kom je er met deze documentatie niet uit? Google is je vriend. Heel vaak kun je goede voorbeelden vinden van implementatie van een array method. Vergeet niet om altijd het woord `javascript` ook in Google te typen.

Een aantal voorbeelden: Let Me Google That For You\:

1. [https://lmgtfy.com/?q=Remove+first+element+of+an+array+javascript](https://lmgtfy.com/?q=Remove+first+element+of+an+array+javascript)
2. [https://lmgtfy.com/?q=combine+two+arrays+javascript](https://lmgtfy.com/?q=combine+two+arrays+javascript)

Maak 1 file waarin je de volgende opdrachten maakt. Het snelste is om deze file elke keer op je computer te runnen met `node mijnfilename.js`

Je hebt voor elke opdracht de testdata nodig. Klap deze dus altijd open. Bekijk op het laatst pas het antwoord, als je het eerst zelf hebt geprobeerd. Bij elke nieuwe opdracht nemen we je iets minder mee aan de hand in de TestData.

- **A** Schrijf een JavaScript functie om het woord "cool" aan een array met `strings` toe te voegen. Gebruik de `.push` method.

  - Test Data (nu nog uitgebreid, later beknopter)

    ```javascript
    const addTheWordCool = function (array) {
      // add your code
    };
    console.log('Add cool:', addTheWordCool(['nice', 'awesome', 'tof']));
    // resultaat: ["nice", "awesome", "tof", "cool"]
    ```

- **B** Schrijf een JavaScript functie die het aantal elementen in een array retourneert.

  - Test Data

    ```javascript
    console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));
    // 3
    ```

- **C** Schrijf een JavaScript functie om het éérste element uit een array te retourneren. PS: Bij welk cijfer begint een array ook alweer met tellen?

  - Test Data

    ```javascript
    console.log(selectBelgiumFromBenelux(['Belgie', 'Nederland', 'Luxemburg']));
    // resultaat: "Belgie"
    ```

- **D** Schrijf een JavaScript functie om het laatste element uit een array te retourneren.

  - Test Data

    ```javascript
    console.log(lastElementInArray(['Haas', 'Cavia', 'Kip', 'Schildpad']));
    // resultaat: "Schildpad"
    ```

- **E** Schrijf een JavaScript functie om het eerste element uit een array te halen en het restant te retourneren . Gebruik `.slice` én de alternatieve optie `.splice`. Wat is het verschil tussen deze functies? Hint: `mutability`.

  - Test Data

    ```javascript
    const presidents = ["Trump", "Obama", "Bush", "Clinton"]

    const impeachTrumpSlice = function(array) {
    (...)
    }
    const impeachTrumpSplice = function(array) {
          (...)
    }

    console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
    console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]
    ```

- **F** Write a simple JavaScript program to `join` all elements of the following array into a string (with spaces). ps: deze opdracht hebben we in het Engels gelaten omdat er een dikke tip in zit over welke array method je gaat gebruiken.

  - Test Data

    ```javascript
    console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']));
    //resultaat: "Winc Academy is leuk ;-}"
    ```

- **G** Schrijf een functie die 2 arrays `['array 1'] ['array2']` combineert tot 1 array `['array1', 'array2']`

  - Test Data

    ```javascript
    combineArrays([1, 2, 3], [4, 5, 6]);
    // resultaat: [1,2,3,4,5,6]
    ```
