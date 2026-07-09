---
title: 'Mapeo de redes internas'
subtitle: 'Notas de mapeos de redes'
description: 'Notas del modulo Network Enumeration en HTB'
pubDate: '2026-03-07'
heroImage: '../../../assets/blog/default-covers/hacker-01.webp'
---


Nota: ejecutar como sudo afecta al comando
#### Escanear en el Rango de la Red
buscar dispositivos en una red. Este método solo funciona si el firewall del host nos los permite
```shell
sudo nmap 10.129.2.0/24 -sn -oA tnet | grep for | cut -d" " -f5
```
#### Flags de puertos
`-p` para designar los puertos a escanear. Separarlos con `,` y sin espacios
`-p-` todo el rango de puertos
`-n` deshabilita la resolución DNS
`-Pn` deshabilita la petición ICMP
`-sC` ejecuta scripts básicos de reconocimiento
`-sV`  para obtener más información valiosa
#### Exportar Resultados
`-o <archivo>` es para designar como se guardan los datos del escaneo
`-oN` se guarda en formato Nmap
`-oG` en formato grepeable, se puede combinar con extractPorts de s4vitar
`-oX` formato XML
`-oA` crea un archivo en cada formato
#### Mostar resultados como HTML
Para esto hay que tener previamente el resultado del scan en xml con la flag -oX
```python
xsltproc target.xml -o target.html
```
#### Escanear IPs usando un archivo
`-iL`  Escanear varios hosts usando una lista en este caso es `hosts.lst`
```shell
sudo nmap -sn -oA tnet -iL hosts.lst | grep for | cut -d" " -f5
```
`-sn` deshabilita el escaneo de puertos
#### Escanear Multiples IPs
Escanear varias IPs en un comando
```shell
sudo nmap -sn -oA tnet 10.129.2.18 10.129.2.19 10.129.2.20| grep for | cut -d" " -f5
```
Usando un rango de IPs determinado como puede ser de 10.129.2.18 a 10.129.2.20
```shell
sudo nmap -sn -oA tnet 10.129.2.18-20| grep for | cut -d" " -f5
```
#### Escaneo Agresivo
Con la opción (`-A`).  Utiliza opciones múltiples  `-sV` `-O` `--traceroute`  y `-sC`. Es una buena opción para comprobar los servicios
#### Velocidad y Personalización de tiempos, paquetes etc
La flag `-T` es para designar la velocidad del escaneo
- `-T 0` / `-T paranoid`
- `-T 1` / `-T sneaky`
- `-T 2` / `-T polite`
- `-T 3` / `-T normal`
- `-T 4` / `-T aggressive`
- `-T 5` / `-T insane`
**Para personalizar aun más el escaneo:**
Con que frecuencia (`--min-parallelism <numero>`), 
En cuanto es el timeout  (`--max-rtt-timeout <tiempo>`) 
Cuantos paquetes enviados de forma simultánea (`--min-rate <number>`), 
Numero de reintentos (`--max-retries <number>`)
#### Escaneo Señuelo
```shell
sudo nmap 10.129.2.28 -p 80 -sS -Pn -n --disable-arp-ping --packet-trace -D RND:5
```
`-D RND:5`  Genera cinco direcciones IP aleatorias que indiquen la IP de origen desde la que proviene la conexión.

#### Scan by Using Different Source IP
```shell
sudo nmap 10.129.2.28 -n -Pn -p 445 -O -S 10.129.2.200 -e tun0
```
`-S`  Escanear el objetivo usando una IP de origen distinta
`10.129.2.200` Especifica la IP de origen
`-e tun0` Envía la las peticiones a través de la interfaz especificada
#### Especificar el puerto de origen
```shell
sudo nmap 10.129.2.28 -p50000 -sS -Pn -n --disable-arp-ping --packet-trace --source-port 53
```
`--source-port 53` Hace el escaneo desde el puerto especificado. 

