# Protocolo General de Sesión Concertada y Verificable v1.0

## 1. Propósito

Este protocolo ofrece una estructura reutilizable para coordinar proyectos donde colaboran una persona responsable, una inteligencia artificial, herramientas automáticas y un sistema documental.

Puede aplicarse a:

- software;
- investigación;
- diseño;
- educación;
- publicaciones;
- archivos digitales;
- proyectos institucionales;
- producción creativa;
- análisis de datos;
- operaciones con efectos públicos.

No depende de AI StoryLab 1. Su diseño proviene de aprendizajes generalizables sobre autoridad, evidencia, reanudación, seguridad y memoria.

## 2. Tesis central

```text
la persona define sentido y autoriza
→ la IA estructura y reduce complejidad
→ la máquina ejecuta y verifica
→ la documentación conserva y transfiere
```

Ningún componente debe asumir las funciones de los demás.

## 3. Principios

1. **Agencia humana:** toda decisión sensible permanece en manos de una persona identificable.
2. **Estado antes de acción:** no se escribe sin conocer el estado exacto.
3. **Una autorización, una unidad de escritura:** cada permiso debe tener alcance visible.
4. **Evidencia antes de afirmación:** no se declara éxito sin prueba atribuible.
5. **Reanudación por capas:** no se repite lo que ya ocurrió.
6. **Mínima ceremonia útil:** cada paso debe proteger algo concreto.
7. **Seguridad por defecto:** lo no autorizado permanece bloqueado.
8. **Privacidad por defecto:** lo no necesario no se recolecta.
9. **Rollback proporcional:** toda acción pública o riesgosa contempla recuperación.
10. **Memoria institucional:** la sesión debe poder continuar sin depender de recuerdos privados.
11. **Disciplina de claims:** hechos, inferencias, propuestas y decisiones se distinguen.
12. **Reflexión productiva:** los errores se convierten en controles.

## 4. Roles

### Persona responsable

- fija propósito;
- define valores;
- autoriza;
- revisa;
- acepta riesgos;
- decide cierres;
- conserva responsabilidad.

### Inteligencia artificial

- recupera contexto;
- estructura opciones;
- diseña planes y operadores;
- redacta;
- interpreta evidencia;
- detecta contradicciones;
- propone controles;
- comunica límites.

### Máquina o herramientas

- ejecutan;
- comparan;
- calculan;
- verifican;
- registran;
- publican solo lo autorizado.

### Sistema documental

- conserva estado;
- registra decisiones;
- vincula evidencia;
- mantiene deuda;
- transfiere continuidad;
- preserva retrospectiva.

## 5. Paquete mínimo de inicio

Toda sesión significativa debe comenzar con:

```text
project:
objective:
current_state:
source_of_truth:
active_branch_or_workspace:
authorized_scope:
forbidden_scope:
known_risks:
required_evidence:
human_decisions_pending:
expected_stop:
```

## 6. Fases de sesión

### Fase A. Orientación

Preguntas:

- ¿Qué se intenta lograr?
- ¿Por qué importa?
- ¿Qué ya se decidió?
- ¿Qué sigue abierto?
- ¿Qué no debe ocurrir?
- ¿Cuál es la fuente de verdad?
- ¿Qué nivel de riesgo tiene la acción?

Salida: una formulación breve del objetivo y sus límites.

### Fase B. Snapshot de solo lectura

Se inspecciona:

- estado local;
- estado remoto;
- archivos o datos;
- versiones;
- permisos;
- dependencias;
- procesos activos;
- evidencia previa;
- diferencias;
- deuda y riesgos.

Salida: snapshot atribuible y fechado.

### Fase C. Diseño del movimiento mínimo

Se define:

```text
action:
target:
preconditions:
single_write:
verification:
rollback:
forbidden_actions:
stop_condition:
```

### Fase D. Autorización humana

La persona debe comprender:

- qué se escribirá;
- dónde;
- con qué identidad;
- qué efectos tiene;
- qué no se hará;
- qué pasará si falla.

Para acciones sensibles, la autorización se registra inmediatamente antes de la escritura.

### Fase E. Ejecución

La máquina realiza solo la unidad autorizada.

### Fase F. Verificación

Se comprueba el resultado desde una fuente independiente del comando de escritura.

Ejemplos:

- volver a leer el archivo;
- consultar el remoto;
- descargar el asset;
- recalcular el hash;
- ejecutar tests;
- abrir la URL pública;
- inspeccionar logs;
- comparar el objeto resultante.

### Fase G. Pausa

La sesión se detiene cuando:

- la acción está verificada;
- aparece una decisión humana nueva;
- el estado es ambiguo;
- la escritura puede haber ocurrido;
- el riesgo cambió;
- se requiere rollback.

### Fase H. Memoria y transferencia

Se registra:

- resultado;
- evidencia;
- límites;
- fallos;
- recuperaciones;
- deuda;
- próximo paso;
- acciones todavía bloqueadas.

## 7. Niveles de riesgo

| Nivel | Ejemplo | Control mínimo |
|---|---|---|
| R0 | lectura o análisis | snapshot |
| R1 | archivo local reversible | copia o diff |
| R2 | cambio versionado en rama | tests y revisión |
| R3 | merge, publicación o identidad | autorización separada y verificación |
| R4 | deployment o configuración pública | rollback y smoke test |
| R5 | datos sensibles, personas o decisiones de alto impacto | protocolo especializado, consentimiento y revisión adicional |

## 8. Contrato de operador o procedimiento automatizado

Debe:

- declarar versión;
- validar sintaxis;
- comprobar herramientas;
- fijar target exacto;
- inspeccionar estado;
- manejar estados parciales;
- evitar sobreescritura accidental;
- producir salida compacta;
- clasificar fallos;
- detenerse en decisiones humanas;
- registrar si ocurrió una escritura;
- indicar cómo reanudar.

No debe:

- usar credenciales no autorizadas;
- ampliar alcance;
- ocultar errores;
- repetir escrituras;
- asumir compatibilidad;
- mezclar acciones públicas distintas;
- declarar PASS sin verificación.

## 9. Recuperación por capas

Antes de repetir un procedimiento se responde:

```text
¿ocurrió la escritura?
¿el remoto cambió?
¿el objeto existe?
¿está verificado?
¿solo falta el informe?
¿el rollback es necesario?
```

Matriz:

| Estado | Continuación |
|---|---|
| no hubo escritura | corregir preflight y reintentar |
| escritura incierta | inspección de solo lectura |
| escritura ocurrió, no verificada | verificar, no repetir |
| escritura verificada, falta informe | generar evidencia |
| resultado público falló | rollback o contención |
| estado contradictorio | revisión humana |

## 10. Evidencia

Una evidencia útil incluye:

```text
claim:
object:
location:
version_or_hash:
method:
timestamp:
result:
limitations:
```

La evidencia debe ser suficiente para que otra persona reproduzca o cuestione la afirmación.

## 11. Disciplina de lenguaje

Usar:

- “verificado en”;
- “observado en”;
- “no demostrado”;
- “limitado a”;
- “pendiente de decisión”;
- “revisión interna”;
- “recomendación”.

Evitar:

- “garantizado”;
- “universal”;
- “seguro” sin alcance;
- “independiente” sin independencia real;
- “completo” sin criterio de completitud;
- “aprobado” sin autoridad identificada.

## 12. Plantilla de apertura

```text
SESION:
PROYECTO:
OBJETIVO:
FUENTE_DE_VERDAD:
ESTADO_INICIAL:
ALCANCE_AUTORIZADO:
CAMBIOS_PROHIBIDOS:
RIESGO:
EVIDENCIA_ESPERADA:
PAUSA_EN:
```

## 13. Plantilla de cierre

```text
RESULTADO:
ESTADO_FINAL:
ESCRITURAS_REALIZADAS:
EVIDENCIA:
FALLOS:
RECUPERACIONES:
DEUDA:
RIESGOS:
DECISIONES_HUMANAS:
PROXIMO_PASO:
ACCIONES_BLOQUEADAS:
```

## 14. Retrospectiva breve

Después de una sesión significativa:

1. ¿Qué funcionó?
2. ¿Qué error era prevenible?
3. ¿Qué supusimos incorrectamente?
4. ¿Qué control nuevo reduce recurrencia?
5. ¿Qué control fue innecesario?
6. ¿Qué aprendió la persona?
7. ¿Qué aprendió el equipo?
8. ¿Qué debe sobrevivir documentalmente?

## 15. Patrones prohibidos

- ejecutar primero y entender después;
- repetir preguntas respondidas;
- usar una autorización para varias escrituras no visibles;
- reintentar ciegamente;
- confundir resultado de herramienta con decisión humana;
- declarar éxito por ausencia de error;
- crear documentación ornamental;
- ocultar deuda;
- convertir deuda en alcance automático;
- añadir pasos para simular rigor;
- terminar sin continuidad.

## 16. Síntesis

```text
comprender
→ delimitar
→ leer
→ autorizar
→ ejecutar una vez
→ verificar
→ pausar
→ aprender
→ transferir
```

Un buen protocolo no reemplaza el juicio. Lo ayuda a llegar vivo, informado y responsable al momento de decidir.
