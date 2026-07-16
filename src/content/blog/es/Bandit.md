---
title: 'Laboratorios para aprender a usar una consola de Linux'
subtitle: 'Como poner en practica el conocimiento basico en BASH'
description: 'Conocimientos basicos de Bash.'
pubDate: '2026-03-07'
heroImage: '../../../assets/blog/default-covers/cyber-02.webp'
---

Los laboratorios Bandit en `OverTheWire` son una forma de aprender bien a detalle como usar una consola. Por ejemplo como ver un archivo que tiene espacios en el nombre. Aunque el contenido de algunos niveles enseñan cosas de pentesting vale la pena ver los primeros niveles para poner en practica conocimientos sobre consolas.

Antes de pasar a los laboratorios veamos algunos comandos básicos que se necesitan conocer

- `ls` ver contenido de una carpeta
- `cd` se utiliza para moverse entre directorios/capetas
- `cat` ver contenido de un archivo
- `ssh` es para establecer la conexion ssh
- `find` se utiliza para ver contenido de una carpeta y/o subcarpetas, se puede filtrar los archivos

Para empezar los laboratorios de la categoría bandit tenemos que ir al nivel 0
https://overthewire.org/wargames/bandit/bandit0.html

#### Nivel 0
Este nivel es una introducción a como establecer una conexión ssh con el objetivo, dándonos el host, puerto usuario y contraseña. El puerto no es el que está por defecto, por lo cual hay que "agregarle una flag al comando del ssh para especificar el puerto en el cual se debe resolver". 
Usuario: "bandit0"
Contraseña: "bandit0"
Puerto: "2220"
Host: "bandit.labs.overthewire.org"

Para acceder al laboratorio hay que usar el siguiente comando e introducir la contraseña
```bash
ssh bandit0@bandit.labs.overthewire.org -p 2220
```
Una vez que hayas logrado una conexión exitosa como bandit0 hay que revisar el contenido de la carpeta con el comando ls
```bash
bandit0@bandit:~$ ls
readme
```
Nos devuelve que hay un archivo "readme". 
Con cat vamos a ver el contenido del archivo el cual nos dará la contraseña para bandit1
```bash
bandit0@bandit:~$ cat readme
```

#### Nivel 1

Usando la contraseña del nivel anterior iniciamos como bandit1
```bash
ssh bandit1@bandit.labs.overthewire.org -p 2220
```
Veamos el contenido de la carpeta de usuario
```bash
ls -la
```
Hay un archivo que tiene de nombre "-" que para los que sepan un poco de consolas saben que por lo general el carácter "-" por lo general se utiliza para determinar una flag por lo que métodos convencionales para ver el archivo no deberían funcionar. En teste caso podemos usar la ruta del archivo para poder leerlo, un pequeño detalle a tomar en cuenta con las rutas "./", es una forma de decir que es tu ruta actual, a diferencia de lo que es la ruta absoluta "/", porque estas diciendo que empiece por la raíz del sistema.

Una forma ver el contenido de '-' es usar la ruta de '-'
```bash
cat './-'
```

#### Nivel 2

Usando la contraseña del nivel anterior iniciamos como bandit2
```bash
ssh bandit2@bandit.labs.overthewire.org -p 2220
```
Al ver los archivos disponibles este contiene espacios en el nombre
```
ls
--spaces in this filename--
```
Al usar una consola interactiva en linux una de las opciones que pueden estar disponibles es la función de auto-completar. Esta misma auto-completa el nombre del archivo presionando la tecla "Tab"

Escribiendo lo siguiente en consola y luego presionando `tab` debería completarse el nombre del archivo
```bash
cat ./-
```
Una vez se auto-completa el nombre dando un enter debería salir la contraseña de bandit3
