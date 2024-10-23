---
title: "Test Post please ignore"
author: "Moritz Stötter"
date: 2023-10-06
image: "../assets/cover.jpg" # https://docs.astro.build/en/guides/images/#images-in-content-collections
imageAlt: "Computer with visible code editor"
tags: ["programming", "dev-ops"]
---

A bit of test text

![A picture](../assets/cover.jpg)

Here comes a `C++` code block

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

Here comes a `Python` code block

```python
num = int(input("Enter a number: "))
if (num % 2) == 0:
   print("{0} is Even".format(num))
else:
   print("{0} is Odd".format(num))
```

Or even a `JSON` code block

```json
{
  "key": "value"
}
```

We can also [link](https://www.google.com), that works too.
