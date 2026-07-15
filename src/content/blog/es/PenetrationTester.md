---
title: 'Camino de Penetration Tester en HTB'
subtitle: 'Giscus, About, pagination y efectos del post'
description: 'Las opciones avanzadas que hoy sí están activas son Giscus comments, About content, Red Queen effect, home counts y pagination.'
pubDate: '2026-03-07'
heroImage: '../../../assets/blog/default-covers/matrix-02.webp'
---

Comentarios sobre el camino "Penetration Tester" en Hack The Box academy.
Emepezemos con lo mas importante este camino no son para principiantes contiene conceptos para principiantes como mapear una red e interactuar con servicios comunes pero es demaciada información para uno. Esto no significa que alguien nuevo no pueda mirarlo sino que va a ser una experiencia más dura para los mismos. Esta enfocado en penetración de redes internas en entronos empresariales con mucho contenido y laboratorios de hacking para que puedas aprender a hacer los ataques. Algunos pequeños detalles de los modulos pueden estar desactualizados. El detalle más simple y notable es que "Crackmapexec" fue remplazado por "Netexec", la apariencia de bloodhound no es ni cerca de como se ve actualemnte, etc. Algo de agradecer es que siempre puedes acceder al material y los laboratorios e incluso puede llegar a ser actualizado.
Muchos comentan que no otorga suficiente contenido de ataques webs pero para eso hay otro camino el cual es "Web penetration tester", el de pentester ya es muy largo y tiene bastante información.
Otro punto a recalcar es que toda la academia esta en inglés, si bien ahora tiene una funcionalidad para traducir con IA, viene bien tomar como objetivo mejorar su lectura de inglés, ya que casi toda la documentación que vayan a encontrar de vulnerabilidades y demas casi siempre va a estar en inglés.

#### Penetration Testing Process

Este modulo teorico en el cual te explica bastantes cosas del pentesting el proceso y etapas del mismo. Que se debe hacer y que no se debe hacer. Te orienta un poco con cuidados que debes tener. Explica un poco de como hay que tratar con el cliente y alguna cosa. Al ser muy teorico no hay nada muy remarcable para comentar

#### Getting Started

Otro modulo introductorio con algunas explicaciones de ciberseguridad y como iniciar. Conceptos básicos de que es una consola, tu entorno de pentesting, conectarse a una VPN, etc. Es un modulo muy completo en lo que viene siendo introductorio. Este modulo puede ser dificil para personas que recien estén comenzando porque contiene un monton de información nueva. Como detalle extra también contiene la solución de la maquina Nibbles perteneciente a HTB labs. 

#### Network Enumeration

Este modulo te enseña a usar en profundidad nmap, una herramienta para detectar otros dispositivos en tu red, ver que puertos tienen abiertos, que servicio está ejecutandose en ese puerto abierto, etc. Tiene algunas tecnicas para evitar ser baneado por firewalls y algun detalle más. Este módulo enseña una forma activa a hacer un reconocimiento de la red interna.
- [Notas de Network Enumeration ](/es/blog/NetworkEnum/)

#### Footprinting

Trata sobre recolección de información. Para poder explotar algo necesitamos información y hay varias formas de obtener información incluso sin necesidad de interactuar directamente con el objetivo. Como algo especial hay algunas técnicas de OSINT y practicas que puedes aplicar para obtener información.

#### Information Gathering - Web Edition 

Modulo que profundiza más la obtención de información referente a paginas webs. Más información del DNS, interacciones con el mismo, interacciones con paginas, etc. 

#### Vulnerability Assessment

Enseña a como usar herramientas que automatizan la forma de encontrar y confirmar vuelnerabilidades como Nessus y OpenVAS. Estas herramientas tienen sus ventajas y desventajas como que pueden dar falsos positivos pero es una opción mas económica que tener un pentester, ademas que se pueden usar plugins y retocar configuraciones para personalizar su funcionalidad. Lo mas importante de este módulo es como determinar el puntaje de las vulnerabilidades

#### File Tranfers

Bueno no hay mucho que comentar de este. Son distintas técnicas para pasar archivos de una maquina a otra, tanto transferencias a Linux como Windows. Contiene técnicas poco conocidas. 

#### Shells & Payloads

Este modulo te enseña a como obtener ejeución de comandos con archivos maliciosos, tambien está lo que llaman obtener una shell lo cual consiste en que obtienen una consola que pueda ejecutar comandos en el objetivo, también enseña el motivo de porqué se usan reverse shells. Como detalle extra enseña a utilizar MSFvenom pero al dia de hoy es bastante probable que un antivirus detecte como amenaza algo creado con eso. 


#### Using the Metasploit Framework

Como lo indica el módulo enseña a usar Metasploit e información adicional del mismo. Solo hay que recordar que no es ninguna solución magica solo otra herramienta más. Hay metodologías que prohiben el uso del mismo como es la del OSCP.

#### Password Attacks

Es uno de los módulos más pesados en contenido y resolución de ejercicios. Tiene contenido teorico de contraseñas y creo que hace poco añadieron lo que es rainbow tables junto al concepto de salt. Hay fuerza bruta lo cual hace que sea más lento. Enseña a usar herramientas para crackear contraseñas como john the ripper y hashcat. Contiene información importante de contraseñas en sistemas Linux y Windows como la extracción de los hashes de las mismas. Hay algun ataque de directorio activo con hashes como puede ser un pass the ticket y el ataque mas importante a windows que es pass the hash (este ultimo en teoria ya lo arregló este año microsoft). Se le añadió contenido de tráfico en red que algunos protocolos no encriptan su contenido y si es capturado puede ser visto, algo como una contraseña en texto claro.