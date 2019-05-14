# LoginApp

Este es un proyecto en blanco de Angular 7 y Express. En express ya se inicializó un servidor conectado a mongoDB. 

Para correr angular ejecutar: ng serve -o
Para correr el servidor ejecutar: npm run dev


#Instrucciones de Ejercicio con el stack MEAN

Crear un login desde cero con las siguientes tecnologías:
1. Backend: Node.js/Espress
2. Base de datos: MongoDB
3. Autentificación: Passport.js (http://www.passportjs.org/)

A partir de este proyecto en blanco de angular y Express, crear una app en Express, y con la ayuda de Passport.js, implementar un sistema básico de autentificación utilizando mongoDB para guardar los usuarios. En angular se deberán de crear los servicios y componentes necesarios para conectar el back-end y probar que el login funcione. 

##Notas:
1. La idea del ejercicio es ver como se estructura de cero un proyecto full-stack, ademas del método de implementación. 
2. Las contraseñas deben de estar encriptadas y no deben de ser visibles en la base de datos. Revisar: https://jwt.io/
3. El proyecto de angular ya esta integrado con sass, no es necesario que el front-end esté muy elaborado, pero no utilizar plantillas ni frameworks (no usar bootstrap) para el front. Implementar las vistas con sass desde cero. 

##Ayuda
El sistema debe de ser básico, los únicos componentes que se requieren son: 
La pantalla principal, esta sería la pantalla de login.
La pantalla de registro, tiene que haber una liga en el login a esta pantalla.
La pantalla de perfil, esta pantalla solo se muestra si se inicio sesión, en esta pantalla se mostrara el nombre de usuario que inicio sesion y un boton para hacer logout.





