# CIFI 3065 Virtual — Materia Mundi
# Informe Ejecutivo — Trabajo con GitHub durante la Sesión F3

**Versión:** 1.0  
**Fecha:** 23 de agosto de 2026

## 1. Resumen ejecutivo

Durante esta sesión se utilizó GitHub directamente como **fuente versionada de verdad y superficie operacional**, sin depender de una terminal local para ejecutar la mayor parte del trabajo documental.

La ausencia de terminal no significó ausencia de Git. Las operaciones se realizaron mediante una conexión autorizada con GitHub capaz de leer repositorio, archivos, commits y SHAs, y de crear, actualizar o eliminar archivos mediante la API de contenidos de GitHub.

El patrón operacional fue:

`leer estado remoto → obtener archivo/SHA → deliberar → escribir → recibir commit → releer/verificar`

Esto permitió trabajar con control de versiones real mientras la conversación funcionaba como espacio de deliberación y aprobación humana.

## 2. Qué hicimos con GitHub

### Lectura y recuperación de estado

Se utilizaron lecturas directas para:

- verificar `main` como rama de trabajo;
- recuperar Estado Maestro, README, F1/F2/F3 y documentos rectores;
- inspeccionar commits recientes;
- recuperar SHAs de archivos antes de actualizarlos o eliminarlos;
- verificar el contenido después de escrituras críticas.

### Creación de archivos

Se crearon directamente en `main`, entre otros:

- apertura y plan F3;
- F3-A;
- F3-B v1.0 y posteriormente v1.1;
- F3-C;
- Gate F3→F4 ratificado;
- README F4;
- Estado Maestro v3.0;
- Bitácora Maestra v3.0;
- registros nuevos de Herencias y Brechas;
- Protocolo de Sesión v1.1;
- cierre oficial e informe GitHub;
- artefactos de continuidad F4.

Cada creación generó un commit real en GitHub.

### Actualización de archivos

Se actualizaron productos existentes cuando una decisión humana cambió su estado, por ejemplo:

- F3-A fue marcada APROBADA;
- F3-B v1.1 fue marcada APROBADA.

La actualización requirió el SHA vigente del blob, equivalente al control optimista que evita sobrescribir cambios desconocidos.

### Eliminación controlada

F3-B v1.0 fue superada por v1.1. Se decidió mantener una sola candidata activa.

El primer intento de borrado devolvió conflicto porque el SHA disponible ya no era vigente. En lugar de repetir ciegamente:

1. se releyó el archivo;
2. se obtuvo el SHA actual;
3. se ejecutó un único borrado con estado fresco;
4. Git conservó la versión anterior en la historia de commits.

Este incidente mostró de forma práctica una propiedad importante de Git/GitHub: **el árbol activo puede simplificarse sin perder genealogía**.

## 3. Commits principales producidos en F3

Entre los commits de esta sesión se encuentran:

- `040c29a...` — archivar README pre-F3;
- `bd843ea...` — registrar apertura/plan F3;
- `660d57e...` — activar README F3;
- `e3cc610...` — marcar F3 abierta en Estado Maestro;
- `fb5a30b...` — construir arquitectura longitudinal F3-A;
- `a89ce88...` — aprobar F3-A;
- `18b2f70...` — primera candidata F3-B;
- `9705db4...` — reconstruir F3-B v1.1;
- `4254287...` — retirar candidata F3-B v1.0 superada;
- `35a393f...` — aprobar F3-B v1.1;
- `3f84f35...` — crear F3-C y Gate candidato;
- commits posteriores — ratificación F3→F4, apertura F4 y consolidación documental.

La lista exacta y HEAD final deben consultarse en GitHub porque el cierre agrega commits adicionales.

## 4. ¿Qué reemplazó la terminal?

No se reemplazó Git. Se reemplazó **la interfaz de línea de comandos** por llamadas estructuradas a GitHub.

En terminal, operaciones comparables habrían sido conceptualmente:

- `git log` → búsqueda de commits;
- `cat`/`git show` → lectura de archivos versionados;
- edición + `git add` + `git commit` + `git push` → creación/actualización mediante API;
- `git rm` + commit/push → borrado por API con SHA;
- `git rev-parse`/comparaciones → referencias y SHAs devueltos por GitHub.

La diferencia importante es que trabajamos **contra el remoto GitHub directamente**, no mediante un clon local interactivo.

## 5. Ventajas observadas

1. **Menor fricción operacional:** la deliberación y la escritura permanecieron en la misma sesión.
2. **Menor riesgo de comandos accidentales:** cada operación tenía campos explícitos de repositorio, ruta, SHA y mensaje.
3. **Versionado inmediato:** cada escritura produjo commit en la fuente de verdad.
4. **Aprobación humana integrada:** las decisiones se tomaron antes de los cambios de estado.
5. **Recuperación sencilla:** SHAs y commits permitieron detectar estados obsoletos.
6. **Continuidad:** otra sesión puede reconstruir estado desde GitHub sin depender de esta conversación.

## 6. Límites importantes

Trabajar sin terminal también tiene límites:

- no se observa automáticamente un working tree local porque no estamos operando un clon local;
- algunas operaciones complejas de Git pueden ser más cómodas en terminal;
- no debe afirmarse que “el repositorio local está limpio” si sólo se verificó el remoto;
- escrituras múltiples generan commits separados cuando la interfaz no ofrece transacciones multiarchivo;
- una actualización requiere contenido completo del archivo y SHA vigente.

Por eso el lenguaje de verificación debe ser preciso: **“verificado en `main`”** en vez de asumir estados locales no observados.

## 7. Modelo de gobernanza aplicado

La sesión ejemplificó:

`Humano: decide y aprueba`  
`IA: estructura, redacta, compara y detecta contradicciones`  
`GitHub/API: ejecuta y versiona`  
`Documentación: conserva y transfiere`

El resultado no es “IA trabajando sola en GitHub”. Es una cadena de autoridad y evidencia donde cada componente tiene función distinta.

## 8. Conclusión

Sí, fue posible desarrollar y cerrar F3 con trabajo Git real sin pedirte abrir una terminal. GitHub actuó como repositorio, registro de versiones y superficie de ejecución; la conversación actuó como interfaz humana de deliberación y autorización.

La lección generalizable es:

> **La terminal es una herramienta excelente, pero la propiedad metodológica importante no es usar comandos. Es preservar estado, autorización, versionado, verificación y capacidad de recuperación.**
