# Protocolo General de Sesión Concertada y Verificable v1.1

**Fecha:** 23 de agosto de 2026  
**Sucesor de:** v1.0  
**Motivo:** incorporar aprendizajes verificables de la sesión F3 de CIFI 3065 Materia Mundi.

## 1. Propósito

Coordinar proyectos donde colaboran una persona responsable, una inteligencia artificial, herramientas automáticas y un sistema documental, preservando agencia humana, trazabilidad, mínima ceremonia útil y continuidad entre sesiones.

## 2. Tesis central

```text
la persona define sentido y autoriza
→ la IA estructura, compara y reduce complejidad
→ la máquina ejecuta y verifica
→ la documentación conserva, explica y transfiere
```

## 3. Principios

1. **Agencia humana:** Gates, cambios sustantivos y decisiones sensibles permanecen humanas.
2. **Estado antes de acción:** ninguna escritura sin snapshot suficiente.
3. **Una autorización, una unidad coherente de ejecución:** una autorización puede contener varias escrituras sólo si forman un único cambio semántico visible y previamente delimitado.
4. **Evidencia antes de afirmación:** PASS, aprobación, cierre y apertura requieren evidencia atribuible.
5. **Reanudación por capas:** no repetir trabajo ya verificado.
6. **Mínima ceremonia útil:** cada paso protege algo real.
7. **Seguridad por defecto:** lo no autorizado permanece bloqueado.
8. **Privacidad por defecto:** recoger sólo lo necesario.
9. **Rollback proporcional:** prever recuperación según riesgo.
10. **Memoria institucional:** el proyecto debe reanudarse desde fuentes persistentes.
11. **Disciplina de claims:** distinguir hecho, inferencia, propuesta, recomendación y decisión humana.
12. **Reflexión productiva:** una pausa estratégica es obligatoria cuando una candidata revela un modelo conceptual posiblemente incorrecto.
13. **Una verdad activa por función:** nuevas versiones nominales sólo para cambios semánticos; Git conserva genealogía.
14. **Verificación fresca antes de recuperación:** ante SHA/estado obsoleto, releer antes de repetir.
15. **No confundir interfaz con capacidad:** una operación Git puede ser válida aunque no use terminal; lo relevante es fuente, autorización, escritura y verificación.

## 4. Roles

### Persona responsable

- fija propósito y valores;
- autoriza alcance;
- revisa candidatos;
- acepta o rechaza Gates;
- decide cierres/aperturas;
- conserva responsabilidad.

### Inteligencia artificial

- recupera contexto;
- compara fuentes;
- estructura opciones;
- diseña planes;
- redacta candidatos;
- interpreta evidencia;
- detecta contradicciones;
- propone controles;
- comunica límites;
- transforma pausas reflexivas en decisiones trazables.

### Máquina/herramientas

- leen;
- crean/actualizan/eliminan objetos autorizados;
- comparan;
- calculan;
- verifican;
- registran commits/estados;
- no amplían alcance por sí mismas.

### Sistema documental

- conserva estado;
- registra decisiones;
- mantiene herencias/brechas;
- vincula evidencia;
- preserva retrospectiva;
- construye kits de continuidad.

## 5. Paquete mínimo de inicio

```text
project:
objective:
current_phase:
current_state:
source_of_truth:
active_branch_or_workspace:
minimum_continuity_commit:
authorized_scope:
forbidden_scope:
known_inheritances:
known_gaps:
known_risks:
required_evidence:
human_decisions_pending:
expected_stop:
```

## 6. Fases de sesión

### A. Orientación

Resolver propósito, estado, decisiones previas, asuntos abiertos, prohibiciones, fuente de verdad y riesgo.

### B. Snapshot de sólo lectura

Inspeccionar versión/commit, rama, archivos canónicos, Gates, herencias, brechas, permisos y evidencia previa.

### C. Deliberación y prueba del modelo mental

Antes de escribir un diseño complejo, preguntar:

- ¿estamos modelando correctamente el sistema o sólo distribuyendo tareas?
- ¿existen elementos longitudinales que una tabla secuencial oculta?
- ¿una carga parece viable sólo porque está fragmentada?
- ¿la propuesta crea una corriente paralela?
- ¿qué decisión necesita reflexión humana antes de congelarse?

Si aparece una contradicción conceptual, **pausar escritura y deliberar**.

### D. Diseño de la unidad coherente de ejecución

```text
semantic_change:
reads_required:
writes_allowed:
writes_forbidden:
verification_for_each_write:
rollback_or_recovery:
stop_condition:
```

Una unidad puede incluir varias escrituras relacionadas, por ejemplo cierre de fase + actualización de Estado + Bitácora + Gate + README, si todas expresan el mismo cambio autorizado.

### E. Autorización humana

La persona comprende alcance, efectos, límites y punto de parada. Las decisiones críticas se registran literalmente o de forma inequívoca.

### F. Ejecución

Realizar sólo la unidad autorizada. Mantener orden cuando las escrituras dependen de SHAs o estados previos.

### G. Verificación independiente de la escritura

Verificar mediante una lectura o consulta posterior. Ejemplos:

- releer archivo desde remoto;
- inspeccionar commit;
- comparar refs;
- consultar estado público;
- recalcular hash;
- ejecutar tests.

### H. Recuperación ante fallo

Antes de reintentar:

```text
¿ocurrió la escritura?
¿cambió el objeto?
¿el SHA/versión que usamos sigue vigente?
¿el resultado ya existe?
¿sólo falta verificar?
¿el error requiere nuevo permiso?
```

**Caso aprendido F3:** un borrado fue rechazado por SHA obsoleto. Respuesta correcta: releer blob actual → usar SHA fresco → borrar una sola vez. Respuesta incorrecta: reintentar ciegamente.

### I. Pausa de decisión

Detener cuando:

- aparece una decisión humana nueva;
- el modelo conceptual cambia;
- una candidata necesita evaluación;
- una escritura puede haber ocurrido parcialmente;
- el riesgo aumenta;
- el Gate requiere ratificación.

### J. Cierre robusto

Un cierre mayor de fase actualiza, según corresponda:

1. producto aprobado/Gate;
2. Estado Maestro;
3. Bitácora Maestra;
4. Registro de Herencias;
5. Registro de Brechas/Riesgos;
6. README/entrada de nueva fase;
7. CHANGELOG;
8. informe ejecutivo si aporta comprensión;
9. kit de continuidad;
10. commit mínimo de continuidad.

No todos los cierres menores necesitan las diez piezas.

### K. Kit de continuidad

Debe permitir reanudar sin memoria conversacional y contener como mínimo:

- prompt/primer de activación;
- Estado Maestro vigente;
- Gate de entrada;
- Bitácora vigente;
- Herencias;
- Brechas;
- README de fase;
- productos inmediatamente anteriores necesarios;
- protocolo de sesión vigente;
- manifest con commit mínimo y hashes cuando sea práctico.

## 7. Niveles de riesgo

| Nivel | Ejemplo | Control mínimo |
|---|---|---|
| R0 | lectura/análisis | snapshot |
| R1 | archivo reversible | diff/copia |
| R2 | cambio versionado | lectura previa + verificación posterior |
| R3 | Gate, publicación, merge | autorización humana explícita + verificación |
| R4 | despliegue/configuración pública | rollback + smoke test |
| R5 | datos sensibles/alto impacto | protocolo especializado + revisión adicional |

## 8. Operaciones Git sin terminal

La terminal es una interfaz posible, no un requisito metodológico.

Una sesión puede operar GitHub mediante una conexión autorizada si conserva los mismos controles:

```text
leer rama/archivo/commit
→ obtener SHA cuando aplique
→ escribir con alcance exacto
→ recibir commit resultante
→ releer desde GitHub
→ registrar evidencia
```

Operaciones válidas incluyen búsqueda de archivos/commits, lectura, creación, actualización, borrado con SHA, comparación y verificación de HEAD.

No afirmar “Git está limpio” si la interfaz usada no expone working tree local; afirmar exactamente lo observado, por ejemplo “archivo presente en `main`” o “commit creado y releído desde GitHub”.

## 9. Documentación y versiones

- un producto vivo por función;
- versión nueva cuando cambia el estado semántico;
- evitar `v1.0`, `v1.1`, `v1.2` por edición cosmética;
- candidatos pueden retirarse del árbol activo una vez superados, con Git como genealogía;
- una aprobación humana debe reflejarse en Gate/Estado aunque el archivo candidato original se conserve como evidencia del objeto evaluado.

## 10. Evidencia mínima

```text
claim:
object:
repository_or_location:
branch_or_workspace:
version_or_commit:
method:
result:
limitations:
```

## 11. Disciplina de lenguaje

Preferir:

- “verificado en `main`”;
- “commit resultante”;
- “aprobado por decisión humana”;
- “recomendación técnica”;
- “pendiente de validación empírica”;
- “candidato”;
- “ratificado”.

Evitar:

- “completo” sin criterio;
- “aprobado” sin autoridad;
- “seguro” sin alcance;
- “Git verificado” si sólo se comprobó un archivo;
- “sin cambios” sin haber inspeccionado el estado relevante.

## 12. Plantilla de apertura

```text
SESION:
PROYECTO:
FASE:
OBJETIVO:
FUENTE_DE_VERDAD:
RAMA/WORKSPACE:
COMMIT_MINIMO:
ESTADO_INICIAL:
HERENCIAS:
BRECHAS:
ALCANCE_AUTORIZADO:
CAMBIOS_PROHIBIDOS:
EVIDENCIA_ESPERADA:
PAUSA_EN:
```

## 13. Plantilla de cierre

```text
RESULTADO:
GATE/DECISION_HUMANA:
ESTADO_FINAL:
ESCRITURAS_REALIZADAS:
COMMITS_CLAVE:
VERIFICACIONES:
FALLOS:
RECUPERACIONES:
HERENCIAS_TRANSFERIDAS:
BRECHAS_TRANSFERIDAS:
RIESGOS:
PROXIMO_PASO:
ACCIONES_BLOQUEADAS:
KIT_CONTINUIDAD:
```

## 14. Retrospectiva

1. ¿Qué funcionó?
2. ¿Qué cambió nuestro modelo mental?
3. ¿Qué candidata fue mejorada o descartada y por qué?
4. ¿Qué fallo operativo ocurrió?
5. ¿Se reintentó con estado fresco?
6. ¿Qué control nuevo evita repetición?
7. ¿Qué documentación es realmente necesaria para reanudar?
8. ¿Qué puede eliminarse para reducir ceremonia?

## 15. Patrones prohibidos

- ejecutar primero y entender después;
- repetir preguntas respondidas;
- reintentar con SHA/estado obsoleto;
- usar una autorización para cambios semánticamente no relacionados;
- mantener dos productos activos para la misma función sin declarar sucesión;
- convertir pausa reflexiva en documentación ornamental;
- confundir herramienta con autoridad;
- confundir automatización con juicio;
- declarar Gate por recomendación técnica sin decisión humana;
- cerrar sesión sin continuidad.

## 16. Síntesis

```text
comprender
→ recuperar estado
→ probar el modelo mental
→ deliberar si hace falta
→ delimitar unidad coherente
→ autorizar
→ ejecutar
→ verificar
→ recuperar con estado fresco si falla
→ registrar
→ cerrar/transferir
```

Un protocolo maduro no busca aumentar pasos. Busca que cada paso reduzca una incertidumbre real y que la próxima sesión pueda comenzar desde evidencia, no desde memoria frágil.
