---
title: 'Camino de Penetration Tester en HTB'
subtitle: 'Giscus, About, pagination y efectos del post'
description: 'Las opciones avanzadas que hoy sí están activas son Giscus comments, About content, Red Queen effect, home counts y pagination.'
pubDate: '2026-03-07'
heroImage: '../../../assets/blog/default-covers/matrix-02.webp'
---

Comentarios sobre el camino "Penetration Tester" en Hack The Box academy.
Empecemos con lo mas importante este camino no está diseñado para ser amigable con principiantes, contiene conceptos para principiantes como mapear una red e interactuar con servicios comunes pero todo el contenido del camino es demasiada información para principiantes no familiarizados. Esto puede resultar en una experiencia mucho más dura para los principiantes. 

Está enfocado en penetración de redes internas en entornos empresariales con mucho contenido y laboratorios de hacking para que puedas aprender a hacer los ataques. Como mapear redes, encontrar servicios, explotar vulnerabilidades, escalar privilegios en windows y linux, comprender de contraseñas en-conjunto con hashes, crackear hashes y utilizar algunos, bases de apartado de web para penetración e incluso una guía de como hacer reportes. Hay montón de cosas para aprender y aplicar.

Algo de agradecer es que siempre puedes acceder al material y los laboratorios e incluso puede llegar a ser actualizado.
Muchos comentan que no otorga suficiente contenido de ataques webs pero para eso hay otro camino el cual es "Web penetration tester", el de pentester ya es muy largo y tiene bastante información.

Otro punto a recalcar es que toda la academia esta en inglés, si bien ahora tiene una funcionalidad para traducir con IA, viene bien tomar como objetivo mejorar la lectura en inglés, ya que casi toda la documentación que vayan a encontrar de vulnerabilidades y demás casi siempre va a estar en inglés.

Algunos comandos de los módulos pueden estar desactualizados. El detalle más simple y notable es que "Crackmapexec" fue remplazado por "Netexec" y los comandos de impacket se usan en Kali con `impacket-<herramienta>`. 

#### Penetration Testing Process

Este es un modulo teórico en el cual te explica bastantes cosas del pentesting el proceso y etapas del mismo. Que se debe hacer y que no se debe hacer. Te orienta un poco con cuidados que debes tener. Explica un poco de como hay que tratar con el cliente y alguna cosa extra. Al ser muy teórico no hay nada muy remarcable para comentar

#### Getting Started

Otro modulo introductorio con algunas explicaciones de ciberseguridad y como iniciar. Conceptos básicos de que es una consola, tu entorno de pentesting, conectarse a una VPN, etc. Es un modulo muy completo en lo que viene siendo introductorio. Este modulo puede ser difícil para personas que recien estén comenzando porque contiene un montón de información nueva. Como detalle extra también contiene la solución de la maquina Nibbles perteneciente a HTB labs. 

- Sistema operativo de pentesting, VPN, Consolas, IP, Puertos, ssh
- Nmap, ftp, smb, snmp, Gobuster, certificados webs, robots.txt
- Ver código web, exploits, metasploit, eternal blue, web shell
- Privilegios de usuario, ssh keys, transferencia de archivos


#### Network Enumeration

Este modulo te enseña a usar en profundidad nmap, una herramienta para detectar otros dispositivos en tu red, ver que puertos tienen abiertos, que servicio está ejecutándose en ese puerto abierto, etc. Tiene algunas técnicas para evitar ser baneado por firewalls y algún detalle más. Este módulo enseña una forma activa a hacer un reconocimiento de la red interna.

- [Notas de Network Enumeration ](/es/blog/networkenum/)

#### Footprinting

Trata sobre recolección de información. Para poder explotar algo necesitamos información y hay varias formas de obtener información incluso sin necesidad de interactuar directamente con el objetivo. Como algo especial hay algunas técnicas de OSINT y practicas que puedes aplicar para obtener información.

- [Notas de Footprinting ](/es/blog/footprinting/)

#### Information Gathering - Web Edition 

Modulo que profundiza más la obtención de información referente a paginas webs. Más información del DNS, interacciones con el mismo, interacciones con paginas, etc. 

#### Vulnerability Assessment

Enseña a como usar herramientas que automatizan la forma de encontrar y confirmar vulnerabilidades con Nessus y OpenVAS. Estas herramientas tienen sus ventajas y desventajas como que pueden dar falsos positivos pero es una opción mas económica que tener un pentester, ademas que se pueden usar plugins y retocar configuraciones para personalizar su funcionalidad. Lo mas importante de este módulo como pentester es como determinar el puntaje de las vulnerabilidades

#### File Tranfers

Bueno no hay mucho que comentar de este. Son distintas técnicas para pasar archivos de una maquina a otra, tanto transferencias a Linux como Windows. Contiene técnicas poco conocidas. 

#### Shells & Payloads

Este modulo te enseña a como obtener ejecución de comandos con archivos maliciosos, también está lo que llaman obtener una shell lo cual consiste en que obtienen una consola que pueda ejecutar comandos en el objetivo, enseña el motivo de porqué se usan reverse shells. Como detalle extra enseña a utilizar MSFvenom pero al día de hoy es bastante probable que un antivirus detecte como amenaza algo creado con eso. 


#### Using the Metasploit Framework

Como lo indica el nombre del módulo enseña a usar Metasploit e información adicional del mismo. Solo hay que recordar que no es ninguna solución mágica solo otra herramienta más. Hay metodologías que prohíben el uso del mismo como es la del OSCP porque se necesita saber a detalle lo que hace el exploit.

#### Password Attacks

Es uno de los módulos más pesados en contenido y resolución de ejercicios. Tiene contenido teórico de contraseñas y creo que hace poco añadieron lo que es rainbow tables junto al concepto de salt. Contiene información sobre hashes y diccionarios hasta como crear uno o utilizarlo de una manera distinta. Hay fuerza bruta lo cual hace que sea más lenta la resolución de ejercicios. Enseña a usar herramientas para crackear contraseñas como john the ripper y hashcat. Contiene información importante de contraseñas en sistemas Linux y Windows como la extracción de los hashes de las mismas. Hay algún ataque de directorio activo con hashes como puede ser un pass the ticket y el ataque mas importante a windows que es pass the hash (este ultimo en teoria ya lo arregló este año microsoft). Se le añadió contenido de tráfico en red que algunos protocolos no encriptan su contenido y si es capturado puede ser visto, algo como una contraseña en texto claro.

#### Attacking common Services

En este módulo aprendes más información, interacciones y ataques a servicios comunes. No hay mucho de que hablar de esto algunos protocolos, algunos ya han sido tocados en otros módulos como el DNS y FTP. Posiblemente lo más novedoso sea extraer información de bases SQL en mysql o mssql. 

#### Pivoting, Tunneling, and Port Forwarding

Modulo muy importante ya que te enseña a como adentrarte más en una red (en caso que hayan varias redes). Enseña a buscar manualmente los objetivos y hacer un "túnel" de diversas formas para poder interactuar con dispositivos que están fuera de tu alcance.

#### Active Directory Enumeration & Attacks

Posiblemente es el modulo más complejo a nivel teórico y técnico en todo el camino además de ser muy largo. Este modulo contiene un montón de información ataques y técnicas sobre directorio activo. Contiene como efectuar ataques desde Linux usando impacket o Netexec. Con Windows usando mimikatz o rubeus. También tenemos el apartados de permisos, confianza y entre usuarios o arboles del dominio que bloodhound facilita un poco. Para explotar ese tipo de cosas hay varias opciones y una recurrente desde windows es Powerview. El objetivo en este tipo de entornos por lo general comprometer el "Domain controller" o usuarios con privilegios elevados para tener control absoluto del directorio activo. Es un modulo muy completo sobre directorio activo, en caso que no sepas nada de directorio hay un módulo que enseña que es Directorio activo más a detalle como el sistema de tickets, mientras que este cubre más bien ataques.

#### Using Web Proxies

En algún momento habrás escuchado la palabra proxy, en este modulo se enseña el concepto del mismo y enseña a utilizar las herramientas OWASP ZAP y Brupsuite que son utilizados para ataques webs. En ataque webs se utiliza principalmente para tener un control de las peticiones web las cuales puedes llegar a modificar, lo cual puede ser muy útil.

#### Attacking Web Applications With Ffuf

Continuando con el contenido web esta el fuzzing con esta herramienta. Es una forma de aplicar fuerza bruta usando diccionarios con el find de obtener más páginas, directorios, dominios o parámetros ocultos dentro de la página. Hay que tener cuidado al usar herramientas de fuzzing porque puedes terminar baneado por alguna protección contra el fuzzing.


#### Login Brute Forcing

Otra forma de "atacar" contraseñas que es probando una por una para iniciar sesión. No todos los protocolos tienen una protección contra la fuerza bruta lo cual puede ser abusable si la contraseña es débil. Un ejemplo simple de protocolo protegido es kerberos (directorio activo), a donde te equivoques varias veces de contraseña se bloquea el usuario. A diferencia de crackear un hash en local esto lleva más tiempo y se detecta fácilmente. Enseña a usar herramientas como Hydra y Medusa ademas de enseñar a hacer diccionarios personalizados.

#### SQL Injection Fundamentals
Pendiente por comentar 

#### Cross-Site Scriptying (XSS)
Pendiente por comentar 

#### File inclusion
Pendiente por comentar 

#### File Upload Attacks
Pendiente por comentar 

#### Command Injections
Pendiente por comentar 

#### Web attacks
Pendiente por comentar 

#### Linux Privilege Escalation
Pendiente por comentar 

#### Windows Privilege Escalation
Pendiente por comentar 

#### Documentation & reporting
Pendiente por comentar 

#### Attacking Enterprise Networks
Pendiente por comentar 
