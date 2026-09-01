# CIFI 3065 Virtual — Materia Mundi
# Aprendizajes Metodológicos para Protocolo de Virtualización y Protocolo de Sesión

**Versión:** 0.1 CANDIDATO  
**Fecha:** 1 de septiembre de 2026  
**Origen:** F8 H6-R3  
**Estado:** BITÁCORA METODOLÓGICA VIVA / NO INTEGRADA AÚN A PROTOCOLOS CANÓNICOS

## 1. Propósito

Registrar aprendizajes transferibles del proceso F8 H6-R3 para revisar, al final del cierre de F8, el Protocolo de Virtualización y el Protocolo General de Sesión Concertada y Verificable sin depender de memoria conversacional.

## 2. Aprendizaje A — Separar especificación de realización

En proyectos complejos, el producto estructural de una fase no debe absorber necesariamente todos los detalles situados de implementación.

Distinción emergente:
- **producto estructural/gobernado:** define sentido, invariantes, criterios, dependencias, límites y condiciones de éxito;
- **producto situado/realizado:** concreta materiales, copy, medios, recursos, configuración y decisiones locales dentro de esos límites.

Principio:

> **La especificación debe proteger el sentido y hacer posible la acción; no sustituir la acción futura.**

## 3. Aprendizaje B — Carriles coordinados

Puede ser ventajoso separar:
- **Carril A:** gobernanza, arquitectura, trazabilidad, fuente de verdad y aprobación;
- **Carril B:** creación práctica e iterativa mediada por prompt de activación.

Para evitar fragmentación, el Carril B debe:
1. nacer de un paquete de activación gobernado;
2. mantener bitácora ligera de decisiones significativas;
3. producir un documento explícito de retorno;
4. devolver excepciones y F-P al Carril A;
5. integrar productos al repositorio mediante protocolo definido.

## 4. Aprendizaje C — Producto humano antes que tabla técnica

Cuando un artefacto estructural será usado por una persona durante implementación real, conviene comenzar con una capa de sentido:
- por qué existe;
- qué transformación busca;
- qué relaciones protege;
- qué no debe perderse.

La especificación técnica sigue después.

Esto reduce carga cognitiva y ayuda a que el fundamento filosófico sobreviva al detalle operativo.

## 5. Aprendizaje D — Gobernanza por excepción

La revisión humana no necesita actuar como mini-Gate para cada microdecisión.

Semáforo transferible:
- **VERDE:** reversible, inequívoco, dentro de invariantes;
- **ÁMBAR:** bifurcación material que requiere consulta;
- **ROJO:** contradicción/regresión/F-P que detiene la línea afectada.

Principio:

> **Automatizar lo determinado; elevar la bifurcación real.**

## 6. Aprendizaje E — Bitácoras con dos niveles

Conviene mantener simultáneamente:
1. **bitácora de proyecto:** decisiones, estados, riesgos y genealogía del curso;
2. **bitácora metodológica:** aprendizajes transferibles sobre cómo dirigir el proceso.

Esto evita mezclar estado del curso con evolución del método y facilita actualizar protocolos al final de una fase.

## 7. Aprendizaje F — Rebaselining sin destrucción genealógica

Cuando una fase descubre que definió incorrectamente la unidad documental o el alcance operativo, no siempre corresponde reabrir fases previas.

Puede utilizarse:
`preservar productos válidos → documentar hallazgo → abrir revisión/rebaselining → redefinir producto → reutilizar componentes → reauditar`.

Las iteraciones fallidas o incompletas se preservan como evidencia metodológica, no se borran.

## 8. Aprendizaje G — Sesiones por hitos y bloques

Para disminuir carga cognitiva en sesiones largas:
- un hito activo a la vez;
- producto tangible candidato por hito;
- copia visible/revisable antes de aprobación;
- decisión humana explícita antes del siguiente hito;
- tareas técnicas/repetitivas agrupadas en bloques;
- bitácora actualizada durante el proceso, no reconstruida al final.

## 9. Hipótesis para revisión de protocolos al cierre F8

Evaluar incorporar explícitamente:
- arquitectura Carril A/B;
- paquete de activación de talleres situados;
- formato de retorno documental;
- semáforo de gobernanza por excepción;
- capa de sentido antes de especificación;
- doble bitácora proyecto/metodología;
- rebaselining como mecanismo formal;
- cierre por producto autosostenido que habilita implementación progresiva.

## 10. Aprendizaje H — Rebaselining mediante adenda, no reescritura destructiva

H6-R3.1 mostró una forma concreta de corregir alcance sin borrar autoridad previa:

`plan aprobado → hallazgo metodológico → adenda candidata → revisión humana → eventual ratificación → reauditoría`.

La adenda puede distinguir explícitamente:
- qué permanece protegido;
- qué interpretación operacional cambia;
- cuál es el nuevo producto tangible;
- cómo cambia la Definition of Done;
- cómo cambia el significado del Gate;
- qué candidatos previos quedan como genealogía o insumo.

Principio transferible:

> **Cuando el fundamento sigue siendo válido pero la interpretación operacional del producto cambia, una adenda de rebaselining puede ser más íntegra que reescribir retrospectivamente el plan original.**

Este patrón debe evaluarse para incorporación futura al Protocolo General de Sesión y al Protocolo de Virtualización.

## 11. Estado

**REGISTRO ABIERTO.** Se actualizará por hitos durante H6-R3. Su integración al Protocolo de Virtualización y al Protocolo de Sesión queda reservada para el cierre de F8 y decisión humana posterior.
