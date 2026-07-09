---
title: 'JavaScript Deobfuscation'
subtitle: 'Welcome and tooling statement'
description: 'Bienvenida a Anglefeint: repositorio, stack AI y enfoque de ingenieria.'
pubDate: '2026-03-06'
heroImage: '../../../assets/blog/default-covers/cyber-04.webp'
---

Algunas notas del módulo JavaScript Deobfuscation. Está clasificado como defensivo pero tambien sirve como conocimiento ofensivo

Correr código de js en forma online
```python
https://jsconsole.com/
```
Nota: Ofuscar el código puede llegar a afectar bastante el rendimiento del código
###### Minificar Codigo en java script
Dejar el código de js como una sola linea
```python
https://javascript-minifier.com/
```
#### Ofuscadores
Algunos ofuscadores de js
```python
https://beautifytools.com/javascript-obfuscator.php
https://obfuscator.io
http://www.jsfuck.com/
https://utf-8.jp/public/jjencode.html
https://utf-8.jp/public/aaencode.html
```
#### Desminificar
Cuando el código está en una sola línea (minificado)
```python
https://prettier.io/playground/
https://beautifier.io/
```
#### Desofuscación
Una herramienta buena es
```python
https://matthewfl.com/unPacker.html
```
#### Decodificar
**Nota: herramientas como burpsuite contienen su propia sección para hacer esto rápido**
base64 contienen caracteres alfa numéricos, con el añadido de `+` y `/`. Puede contener varios  `=` al final del string lo cual es muy distintivo
codificar en base64
```bash
echo "https://www.hackthebox.eu/" | base64
```
Decodificar base64
```bash
echo "contenido en Base64" | base64 -d

echo "aHR0cHM6Ly93d3cuaGFja3RoZWJveC5ldS8K" | base64 -d
```
#### Hex
Solo usa 0-9 y a-f
Codificar en hex
```bash
echo "https://www.hackthebox.eu/" | xxd -p
```
Decodificar hex
```bash
echo '68747470733a2f2f7777772e6861636b746865626f782e65752f0a' | xxd -p -r
```
#### Rot13
Rot13 algo similar al código Cesar pero solo con 13 giros hacia delante. (Solo cambia letras)
Codificar en rot13
```bash
echo https://www.hackthebox.eu/ | tr 'A-Za-z' 'N-ZA-Mn-za-m'
```
Decodificar Rot13
```bash
echo uggcf://jjj.unpxgurobk.rh/ | tr 'A-Za-z' 'N-ZA-Mn-za-m'
```
