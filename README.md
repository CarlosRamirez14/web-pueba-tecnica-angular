# Superficcion

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Superficcion

>Este proyecto fue construido en el framework de JavaScript llamado Angular. 
Angular es un framework para crear aplicaciones de una sola página (SPA) lo que significa que al hacer click en algún botón la página no se recarga.

En este proyecto vemos de todo:
* Cómo crear un proyecto en Angular.
* Cómo utilizar los comandos de Angular.
* Cómo agregar Bootstrap 5 en nuestro proyecto.
* Componentes.
* Rutas.
* Ejecutar el proyecto en el navegador.

## Cómo crear un proyecto en Angular?
Para crear un nuevo proyecto Angular con Angular CLI, solo ejecuta:
>ng new superficcion

Luego, abra los archivos en tu editor de texto. Yo uso Visual Studio Code, pero puedes escoger cualquier editor.

Todo nuestro trabajo estará en la carpeta **app**. Contiene cinco archivos:
* app.component.css
* app.component.html
* app.component.spec.ts
* app.component.ts
* app.module.ts

## Cómo agregar Bootstrap 5 en nuestro proyecto?

Para crear una interfaz agradable para nuestra aplicación, usaremos el framework Bootstrap 5.

Instalamos Bootstrap 5 de manera global en nuestro proyecto con Angular por medio de **npm**  de la siguiente manera:

>npm install bootstrap@5.3.0

Este comando lo colocamos en la raíz de nuestro proyecto y damos click y esperamos unos momentos a que la instalación se complete.

Luego, vemos en la carpeta **node_modules** la carpeta de **bootstrap** que fue agregada después de que instalamos Bootstrap 5 en nuestro proyecto.

Abrimos el archivo **angular.json** para agregar Bootstrap 5 a nuestro proyecto de la siguiente manera:

>"styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
],
"scripts": [
             "node_modules/bootstrap/dist/js/bootstrap.min.js"
]

Ejecutamos la aplicación en la terminal:

> ng serve

## Componentes

En este proyecto utilizamos componentes para el diseño y desarrollo de nuestra aplicación.

Para crear un componente en Angular utilizamos el comando:

> ng g c navmenu

Los componentes que utilizamos en este proyecto son los siguientes:
* catalogo-cards
* detalle-producto
* navmenu
* productos

Cada uno de estos componentes tienen funciones definidas, o sea, contiene el código para el diseño y desarrollo de la aplicación.

## Rutas

En el archivo **app-routing.module.ts** vamos a definir nuestras rutas para luego mapearlas a traves de eventos en los componentes creados.

* const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'navmenu', component: NavmenuComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'catalogo', component: CatalogoCardsComponent },
  { path: 'detalle', component: DetalleProductoComponent }
  ];
  
Estas son las rutas definidas en nuestro proyecto, luego vamos a ver cómo insertarlas a traves de eventos en algún componente con extensión **.html**

Usaremos el archivo **catalogo-cards.component.html**  y en el primer **button** del archivo agregamos un evento de tipo **click** con una función llamada **navegar()** 

<button type="button" (click)="navegar()" class="btn btn-primary">Leer más...</button>

Luego, abrimos el archivo **catalogo-cards.component.ts** y escribimos el código correspondiente para la función navegar:

* 1. Dentro de la clase CatalogoCardsComponent agregamos dentro de los paréntesis del método **constructor**: 
	*** private router: Router**

Debajo del método **constructor** llamamos la función **navegar() ** y escribimos el siguiente código:

> this.router.navigate(['/detalle'])

Con este código estamos agregando la ruta **detalle**, o sea, enlazando esta ruta al evento click creado en el archivo **.html**
