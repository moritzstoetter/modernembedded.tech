---
title: "Einführung in Python"
author: "Moritz Stötter"
date: 2023-10-06
image: "../assets/cover.jpg" # https://docs.astro.build/en/guides/images/#images-in-content-collections
imageAlt: "Computer mit offenem Code-Editor"
tags: ["programming", "dev-ops"]
---

Python ist eine der beliebtesten Programmiersprachen der Welt und wird in vielen Bereichen eingesetzt, von Webentwicklung bis hin zu Datenwissenschaft. In diesem Blogpost werden wir einige grundlegende und fortgeschrittene Konzepte von Python durchgehen.

## Einleitung

Python ist bekannt für seine einfache Syntax und seine Vielseitigkeit. Es ist eine großartige Sprache für Anfänger, aber auch für erfahrene Entwickler, die komplexe Anwendungen erstellen möchten.

## Ein bisschen Testtext

![A picture](../assets/cover.jpg)

## Einfache Ein- und Ausgabe in Python

Ein grundlegendes Beispiel für die Ein- und Ausgabe in Python ist das Überprüfen, ob eine Zahl gerade oder ungerade ist. Hier ist ein einfaches Python-Skript, das dies tut:

```python
num = int(input("Enter a number: "))
if (num % 2) == 0:
   print("{0} is Even".format(num))
else:
   print("{0} is Odd".format(num))
```

## Vergleich mit C++

Zum Vergleich, hier ist ein ähnliches Programm in C++:

```c++
#include <iostream>
using namespace std;

int main() {
    int number;

    cout << "Enter an integer: ";
    cin >> number;

    cout << "You entered " << number;
    return 0;
}
```

Wie man sieht, ist die Python-Version viel kürzer und einfacher zu lesen.

## JSON in Python

Python hat auch großartige Unterstützung für das Arbeiten mit JSON-Daten. Hier ist ein Beispiel für ein JSON-Objekt:

```json
{
  "key": "value"
}
```

Und so kann man in Python mit JSON arbeiten:

```python
import json

# JSON-Daten als String
json_data = '{"key": "value"}'

# JSON-Daten in ein Python-Dictionary umwandeln
data = json.loads(json_data)

print(data["key"])  # Ausgabe: value
```

## Weiterführende Ressourcen

Python hat eine riesige Community und viele Ressourcen, die Ihnen helfen können, Ihre Fähigkeiten zu verbessern. Hier sind einige nützliche Links:

- [Offizielle Python-Dokumentation](https://docs.python.org/3/)
- [Python-Tutorials auf W3Schools](https://www.w3schools.com/python/)
- [Python-Pakete auf PyPI](https://pypi.org/)

Wir können auch [verlinken](https://www.google.com), geht auch.

Python ist eine mächtige Sprache, die sowohl für Anfänger als auch für erfahrene Entwickler geeignet ist. Mit ihrer einfachen Syntax und ihrer Vielseitigkeit ist sie eine ausgezeichnete Wahl für eine Vielzahl von Projekten.
