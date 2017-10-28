# Plazom

Plaztom es un idioma inventado para el [curso](https://platzi.com/js) de [Platzi](https://platzi.com)

## Descripción del idioma
 - Si la palabra es un palindromo se lee igual atras adelante, ninguna cuenta y se devuelve intercalando mayusculas y minisculas

 - Si la palabra termina en ar se quitan

 - Si la palabra incia con "z" se le agrega "pe" al final

 - Si la palabra tiene 10 o más se parte a la mitad con guío en medio

 ## Instalación
```
 npm install platzom

 ```

 ## USO
``` 
 import Platzom from 'platzom'

Platzom('programar')  // es program
Platzom('zorro')  // es zorrope
Platzom('zarpar') // es zarppe
Platzom('abecedario') // abece-dario
Platzom('sometemos') // SoMeTeMoS

 ```

 ## Créditos 
 - [Sergio Calderon] (https://ditsgt.com)

 ## Licencia

[MIT] (https://opensource.org/licenses/MIT)


