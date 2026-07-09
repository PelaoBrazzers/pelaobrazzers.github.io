---
title: 'Meow'
subtitle: 'Empezando en HTB Labs'
description: 'Maquinas iniciales para aprender conceptos básicos'
pubDate: '2026-03-01'
heroImage: '../../../assets/blog/default-covers/matrix-01.webp'
aiModel: 'anglefeint-core'
aiMode: 'draft'
aiState: 'stable'
aiLatencyMs: 142
aiConfidence: 0.97
wordCount: 42
tokenCount: 96
---


---
## Preparaciones
Bienvenido a HTB!
Antes de empezar necesitamos un entorno con las herramientas necesarias para resolver la máquina como puede ser la Pwnbox o una maquina virtual que hayas preparado. Utilizando la Pwnbox no necesitas ninguna preparación previa. Para los que no usen una Pwnbox pueden utilizar un máquina Virtual con Parrot o Kali.

---
### Conectarse a la VPN de HTB
Si estas utilizando la Pwnbox no necesitas hacer este paso porque ya estas conectado a la VPN. 
Primero hay que descargar el archivo que nos permitirá acceder a la Red privada.
![[Pasted image 20260123095026.png]]
Una vez se despliegue el panel seleccionamos Starting Point
![[Pasted image 20260123095519.png]]
Nos dará más opciones de la cual seleccionaremos OpenVPN
![[Pasted image 20260123095928.png]]
Elige una región y servidor para después descargarlo con el botón "Download VPN"
![[Pasted image 20260123100230.png]]
Abrimos una consola
![[Pasted image 20260123100937.png]]
 Ahora hay que ir a la ruta que se encuentra el archivo, si lo descargaste desde tu navegador posiblemente este en la carpeta Downloads, en caso de tenerlo en otra ubicación ir a esa otra ruta
```bash
cd Downloads
```
Una vez en la carpeta que contiene el archivo usar el siguiente comando y dejar la consola abierta para mantener la conexión
```shell
sudo openvpn ./<archivo.ovpn>
```
ejemplo:
```shell
sudo openvpn ./starting_points_us-starting-point-1-dhcp.ovpn
```
Con esto ya estas preparado para iniciar la maquina

---
## Iniciar la máquina
Vamos a la pagina de la máquina y la iniciamos
![[Pasted image 20260123102527.png]]
Esperamos un poco a que se inicie la máquina y obtenemos la IP, tenla a mano porque la vas a necesitar para la resolución
![[Pasted image 20260123102754.png]]

---
## Resolución de preguntas y la máquina

Una máquina virtual emula un equipo físico, ejecutando su propio sistema operativo y aplicaciones con recursos virtualizados. Está aislado del sistema anfitrión, lo que permite a los usuarios realizar tareas seguras, como probar aplicaciones o utilizar distintos sistemas operativos. En inglés se le dice Virtual Machine y utilizan el acrónimo **VM (Virtual Machine)**

Para poder interactuar con el sistema operativo necesitamos abrir una consola que interactúe con el, también conocida como **terminal**

Para acceder a la red privada de HTB necesitamos conectarnos con **openvpn** para la conexión VPN

Pasemos a la resolución de la máquina
Comprobamos con un **ping** si tenemos una conexión con la máquina, esta es la ICMP echo request
```shell
ping -c 1 <ip objetivo>
```
![[Pasted image 20260123105038.png]]
El ttl nos da un poco de información sobre que tipo de sistema operativo usa, 64 es Linux y 128 Windows, por lo tanto esta máquina parece ser Linux.
Si todo funciona correctamente la cantidad de packet loss es 0, en caso de que no llegue ningún paquete comprueba que estés usando la IP correcta o posiblemente necesites revisar que esta mal en tu conexión VPN

Una vez que confirmamos que tenemos una conexión con la maquina empezamos con el mapeo de puertos. Estos puertos son servicios que están abiertos con el cual podemos interactuar de alguna forma. Es como tener miles de puertas delante tuya y solo poder acceder a las que están abiertas sin poder interactuar con las que están cerradas. 

Usamos el siguiente comando para mapear los puertos TCP (Hay otros tipos de puertos como los UDP, que no vamos a tocar por ahora)
```shell
nmap <ip objetivo>
```
![[Pasted image 20260123110515.png]]
El resultado es que el puerto 23 esta abierto.
Normalmente deberíamos de recolectar mas información de la maquina antes de actuar pero con la información actual es mas que suficiente
Para interactuar con el servicio telnet hay que usar el siguiente comando
```shell
telnet <ip objetivo>
```
![[Pasted image 20260123111512.png]]
Al conectarnos al servicio telnet nos pide que un nombre de usuario. Por lo general los usuarios administrator (windows) y root (linux) siempre existen en su respectivo sistema operativo. como sospechamos que esta máquina es linux usaremos el usuario **root**.
Esto nos da acceso a la maquina como el usuario **root, es el más privilegiado del sistema y tiene poder absoluto sobre el sistema**. 
Ahora solo falta obtener la bandera del usuario root
```shell
cd /root
ls
cat flag.txt
```
![[Pasted image 20260123112310.png]]
Felicidades haz completado **Meow**