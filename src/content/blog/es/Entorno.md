---
title: 'Entorno de Ciberseguridad'
subtitle: 'Maquinas virtuales'
description: 'Experiencias con Maquinas virtuales.'
pubDate: '2026-03-06'
heroImage: '../../../assets/blog/default-covers/cyber-02.webp'
---

Mi experiencia con entornos para practicar ciberseguridad.
Generalmente para empezar en ciberseguridad necesitamos un entorno de pruebas donde poder aplicar lo aprendido. Para determinar cual y como será el mismo requiere un montón de conocimientos de sistemas operativos. A eso hay que sumarle virtualización porque por lo general se usan maquinas virtuales. Si nos enfocamos en el apartado ofensivo el sistema a dominar es Linux.

#### Pwnbox de HTB (Escritorio remoto)
Si no tienes un entorno preparado es un entorno muy util y practico porque es iniciarlo y está listo para usarse. El problema es que no es muy comodo. Es muy util si solo estas viendo de que trata el pentesting. 

#### Maquina Virtual
La opción más simple si tienes una PC con un I5, equivalente o superior (con 8gb de ram o más en Windows) es tener una maquina virtual. Solo es descargar la maquina virtual y tener instalado el programa que la va correr. En el caso de usar Windows lo más comun es usar VirtualBox y VMware. Para determinar cual usar después de informarme un poco opté por VMware porque parecía tener mejor rendimiento que VirtualBox, esto no es algo que haya vericado y a más recursos tenga tu PC menos deberia importarte. Para obtener el instalador de VMware la cosa no es simple, hay que entrar a la pagina de broadcom registrarse, rellenar un monton de datos y aprender como usar esa pagina porque no es muy amigable con el usuario a diferencia de VirtualBox que no necesitas nada para descargarlo.

##### Mis problemas iniciales con VMware
Con VMware instalado decidi usar Kali linux porque en ese momento no habia una VM ya lista para usar por parte de Parrot y posiblemente fue la mejor desición que tomé. El proceso fué descargar e iniciar la maquina virtual y funcionaba perfectamente sin tener que pasar por un proceso de instalación ni nada, listo para usar.

Al intentar actualiar Kali mi Antivirus empezó a cortarle las conexiones por lo que tube que aprender como solucionar eso. La forma más simple sería desactivar el antivirtus pero eso no es lo más conveniente. Rebuscando un poco como funcionaba las conexiones en VMware encontré que tenia que cambiar el tipo de conexión. Pasé la conexión de NAT a bridge, eso cambia el funcionamiento de las conexiones porque ahora la VM tiene su propia conexion a la red, eso terminó arreglando el conflicto con mi antivirus. La solución me causó varios problemas con la conexión a la red. Como estaba utilizando Wifi no tenia conexión la maquina virtual porque VMware estaba usando la red incorrecta, posiblemente elegía ethernet. Esto se soluciona rapido configurando la sección de "Virtual Network Editor..." agregando o quitando redes. Una vez arreglado esos pequeños detalles como barrera incial, utilizar maquinas virtuales fue muy simple.

##### Dual boot
Personas que no tengan muchos recursos pero tengan un disco con bastantes gigabytes disponibles pueden optar por utilizar un Dual boot, con una partició de 60GB no debería haber mucho probelma y con 80gb vas sobrado. Hay algunas herramientas pesadas para la maquina virtual como bloodhound por lo que decidí probar un dual boot y se nota una barbaridad en el rendimiento usar el sistema de forma nativa. Hacer un dual boot es más simple de lo esperado en mi caso solo fue hacer una partición y un pendrive booteado con rufus.
Este video en inglés muestra como hacer el dual boot con Kali desde windows https://www.youtube.com/watch?v=2vTVA-Nq0bw
Hay que tener cuidado al utilizar el sitema de esta forma porque ya no está aislado como una maquina virtual.


##### Personalización de entorno
Bueno aquí viene donde brilla la maquina virtual. Puedes hacer lo que quieras con el entorno sin miedo a romper nada porque si rompes algo puedes usar una copia de seguridad o snapshots. Linux es un sistema de codigo abierto sin ninguna restricción sobre el usuario lo cual a dado lugar a dejar que los usuarios personalizen como quieran su entorno. Como en el apartado ofensivo lo que mas se utiliza son consolas y no es algo que haya surgido ayer intente replicar el entorno bspwn de s4vitar. 

Una vez replicado el entorno hay algo que va a ocurrir en algun momento, se va a romper algo de ese entorno al actualizar. Esto es por como funcionan el sistema operativo de Kali o Parrot. Algunos packages quedan obsoletos y son removidos por lo que algunos packages que estabas utilizando en tu entorno pueden ser removidos en una actualización completa del sistema o por una actualizacion porque algo fue modificado (esto es menos probable). Lo más facil es reinstalar el entorno y volver a personalizar sino sabes que es lo que dejó de funcionar. 

##### VM Kali Linux problema con el mouse
En una actualización de la VM el mouse dejo de funcionarme se solucionó desde VMware antes de iniciar la maquina. Antes de iniciar la maquina hay que apretar "Upgrade this virtual machine" y configurar la version de la maquina virtual.

##### Curiosidad de VMware
En Windows 11, no se si incluye al 10. Despues de la version 16.algo dejó de funcionar correctamente el audio Maquinas con OS viejos como WindowsXP. Esto se puede solucionar  agregando una key en regedit
```python
En la ruta
[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\kernel]
Hacer una key llamada
GlobalTimerResolutionRequests

darle el valor
dword:00000001
```