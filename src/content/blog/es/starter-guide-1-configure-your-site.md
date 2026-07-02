---
title: 'Laboratorios para aprender a usar una consola de Linux'
subtitle: 'Como poner en practica el conocimiento basico en BASH'
description: 'Las primeras opciones reales para usuarios son la identidad del sitio, social links, el toggle de About y el reemplazo del contenido inicial.'
pubDate: '2026-03-07'
heroImage: '../../../assets/blog/default-covers/cyber-02.webp'
---

Los laboratorios Bandit en `OverTheWire` son una forma de aprender bien a detalle el funcionamiento de una consola. Por ejemplo como ver un archivo que tiene espacios en el nombre. Aunque el contenido de algunos niveles enseñan cosas de pentesting vale la pena ver los primeros niveles para poner en practica.

Antes de pasar a los laboratorios veamos algunos comandos basicos que se necesitan conocer

- `ls` ver contenido de una carpeta
- `cat` ver contenido de un archivo
- `ssh` comando para establecer la conexion ssh
- `find` se utiliza para ver contenido de una carpeta y/o subcarpetas, se puede filtrar los archivos

Para empezar los laboratorios de la categoria bandit tenemos que ir al nivel 0
https://overthewire.org/wargames/bandit/bandit0.html

#### Nivel 0
Este nivel es una introducción a como establecer una conexión ssh con el objetivo dandonos el host, puerto, puerto usuario y contraseña. El puerto no es el que está por defecto por lo cual hay que "agregarle una flag al comando del ssh para especificar el puerto en el cual se debe resolver". El nombre de "usuario bandit0" con la "contraseña bandit0"
```bash
ssh bandit0
```


`site.description` es la descripción por defecto del sitio; la home cae a ese valor cuando el locale actual no define `messages.siteDescription`.

Puedes crear un post nuevo con:

```bash
npm run new-post -- your-first-post
```

- [Starter Guide 2](/es/blog/starter-guide-2-languages-and-routing/)
- [Starter Guide 3](/es/blog/starter-guide-3-comments-about-and-theme-toggles/)
