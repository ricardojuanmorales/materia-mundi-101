# H6 — Plan operativo de validación para uso estudiantil

Estado: **PILOTO EN AULA AUTORIZADO**

Regla de control: **no expandir el motor** salvo que el piloto revele un bloqueo real.

## Gate 1 — QA histórico

### Objetivo
Confirmar que el corpus no introduce errores, anacronismos ni pistas que regalen la solución.

### Evidencia mínima
- 41 tarjetas revisadas;
- masa histórica confirmada;
- pista inicial revisada;
- segunda pista revisada;
- código de procedencia revisado;
- contraste ≈68 / ≈72 revisado;
- casos Te/I y zona de transición revisados.

### PASS
No quedan errores históricos o químicos conocidos que puedan inducir una inferencia equivocada.

### FAIL
Cualquier tarjeta contiene un dato dudoso no rotulado, una fórmula problemática o una pista que revela prematuramente el patrón.

---

## Gate 2 — Prueba humana de carga cognitiva

### Objetivo
Confirmar que la secuencia puede completarse sin sobrecarga ni instrucciones adicionales constantes.

### Muestra mínima
- 1 corrida docente completa;
- 2–3 usuarios representativos.

### Observar sólo
1. entrada y comprensión de la tarea;
2. 24 + 7 tarjetas;
3. utilidad de grupos y serie;
4. descubrimiento del hueco;
5. duración y fatiga.

### PASS
La mayoría completa el flujo con orientación mínima y sin confundir controles con objetivos cognitivos.

### FAIL
La interfaz requiere explicación reiterada, la serie se interpreta como requisito mecánico o el volumen de tarjetas bloquea la exploración.

---

## Gate 3 — Accesibilidad funcional · VALIDACIÓN DURANTE PILOTO

### Objetivo
Confirmar que ninguna acción esencial depende de ratón, precisión motora o visión de color.

### Pruebas mínimas
- recorrido completo con teclado;
- foco visible;
- orden lógico;
- lector de pantalla;
- zoom;
- tableta/móvil;
- importación/exportación de sesión;
- undo;
- descarga de evidencia.

### PASS
Todas las funciones esenciales son alcanzables, comprensibles y operables.

### FAIL
Cualquier etapa crítica depende de drag-and-drop, posición visual exclusiva o interacción inaccesible.

---

## Gate 4 — Flujo Moodle → app → evidencia → Moodle · VALIDACIÓN DURANTE PILOTO

### Objetivo
Confirmar el circuito real que usará el estudiante.

### Verificar
- enlace estable desde Moodle;
- instrucciones breves de entrada;
- advertencia de exportar sesión al cambiar de equipo;
- recuperación/importación;
- producción del resumen;
- instrucción exacta de qué copiar/subir;
- REC6 formal en Moodle;
- ruta de contingencia si la app no carga.

### PASS
Un usuario puede entrar desde Moodle, completar la experiencia, producir evidencia y regresar a Moodle sin instrucciones externas.

### FAIL
Existe una ambigüedad sobre dónde continuar, qué entregar o cómo recuperar el trabajo.

---

## Gate 5 — GO PILOTO

**GO PILOTO AUTORIZADO EN MODO EXPEDITO.**

Gate 1 y Gate 2 están en PASS. Gates 3 y 4 se trasladan a validación situada durante el piloto, con corrección inmediata sólo si aparece un bloqueo de accesibilidad, continuidad o entrega.

### Antes de abrir a estudiantes
- etiquetar release `v1.0-pilot`;
- congelar contenido y flujo;
- retirar cambios no esenciales;
- conservar únicamente correcciones bloqueantes durante el piloto;
- mantener copia de rollback;
- registrar fecha y cohorte del piloto.

## No bloquea el piloto
- backend;
- cuentas;
- LTI/xAPI/SCORM;
- analítica institucional;
- drag-and-drop avanzado;
- IA generativa;
- auto-calificación;
- personalización compleja.

## Principio de mínima carga cognitiva

**Una función visible sólo se justifica si reduce ambigüedad, sustituye pasos, mejora accesibilidad o protege la continuidad del trabajo.**
