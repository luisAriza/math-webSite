# Math WebSite

[Math WebSite](https://luisariza.github.io/math_webSite/) es una pagina de matematicas con soluciones de:

- <ins>Perimetros</ins> y áreas de diferentes figuras.
- <ins>Descuento</ins> de precios y productos.
- Calculo de <ins>media</ins>, <ins>promedio</ins> y <ins>moda</ins> a listas de datos.

Utilicé [**Pug**](https://pugjs.org/api/getting-started.html) y [**Sass**](https://sass-lang.com/) (_preprocesadores de HTML y CSS_) y apliqué **Responsive Design** para mas accesibilidad. 

Integré [**Webpack**](https://webpack.js.org/) para automatizar y optimizar el codigo.

## Runnning

Para iniciar el proyecto primero ejecuta:

```sh
npm install
```

Una vez instaladas las dependencias, inicia el proyecto:

```sh
npm start
```

Ahora ingresa en tu navegador http://localhost:9000/. Ya puedes hacer cambios al proyecto y verlos en tiempo real.

## Building

Si quieres enviar tu proyecto a producción ejecuta:

```sh
npm run build
```

Se creará automaticamaente una carpeta llamada "dist" donde estará el codigo **minificado** (_para que pese menos_).

## Deploy

Para subir el codigo a <ins>GitHub Pages</ins> solo ejecuta:

```sh
npm run deploy
```

Con esto, se creará una rama en tu repositorio (_gh-pages_) donde solo vivirá el codigo de la capreta "dist".

> Importante hacer **build** antes de desplegar, para tener el codigo optimizado.

