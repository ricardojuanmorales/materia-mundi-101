# CIFI 3065 Virtual — Materia Mundi
# F8 Hito 3 — Sistema Operacional de Evaluación, Rúbricas, Gradebook, Feedback y Recuperación

**Versión:** 0.1 CANDIDATO  
**Fecha:** 30 de agosto de 2026  
**Estado:** CANDIDATO VISIBLE / H3 EXPEDITO / PENDIENTE DE REVISIÓN HUMANA  
**H1:** APROBADO / CANÓNICO  
**H2:** APROBADO / CANÓNICO  
**Guión Maestro base:** v0.1 APROBADO / BASE VIVA  
**Fuente de verdad:** GitHub `main`

## 1. Mandato

H3 materializa en G4 la arquitectura evaluativa aprobada sin rediseñarla. Debe permitir montar y verificar:

`actividad → evidencia → criterio visible → rúbrica/criterio → puntuación → feedback → recuperación → revisión/transferencia`

Pregunta rectora:

> **¿Puede el LMS representar fielmente la arquitectura evaluativa Materia Mundi, hacer visibles los criterios, calcular correctamente el piloto 75/25, conservar PROEMA/REC como trayectorias y hacer el feedback recuperable sin convertir la evaluación en una suma fragmentada de tareas?**

## 2. Autoridad evaluativa heredada

Se preserva la evaluación institucional:
- exámenes 45%;
- pruebas/trabajos 25%;
- foros 5%;
- laboratorio 25%.

Para el piloto Materia Mundi se preserva la equivalencia operacional aprobada de 100 puntos:

### Clase 75
- 10 foros históricos × 3.5 = 35;
- 5 ensayos PROEMA × 2 = 10;
- presentación grupal PROEMA = 15;
- artículo individual PROEMA = 10;
- 5 componentes DR Clase/Investigación × 1 = 5.

### Laboratorio 25
- 10 laboratorios/informes × 2 = 20;
- 5 componentes DR Laboratorio/Investigación × 1 = 5.

**Total = 100.**

Regla de gobernanza:

> **75/25 es equivalencia operacional provisional del piloto, no modificación del prontuario.**

Cualquier interfaz o copy que lo presente como cambio institucional se clasifica F-P.

## 3. Arquitectura del gradebook

### 3.1 Principio

El gradebook debe hacer simultáneamente tres cosas:
1. calcular 100 puntos correctamente;
2. mantener visible la lógica 75 Clase / 25 Laboratorio;
3. no crear una falsa equivalencia semántica entre las técnicas internas Materia Mundi y las categorías institucionales.

### 3.2 Configuración recomendada

Preferencia G4, sujeta a affordances del LMS:

- **Categoría Clase — 75 puntos**
  - Foros históricos: 35
  - PROEMA ensayos: 10
  - PROEMA presentación grupal: 15
  - PROEMA artículo individual: 10
  - DR Clase/Investigación: 5

- **Categoría Laboratorio — 25 puntos**
  - REC/Laboratorios: 20
  - DR Laboratorio/Investigación: 5

Si el LMS exige porcentajes, la configuración debe reproducir exactamente 75/25 y dejar trazabilidad del cálculo.

### 3.3 Vista estudiantil

Debe comunicar con lenguaje claro:
- qué vale cada evidencia;
- a qué trayectoria pertenece;
- qué criterio se utiliza;
- cómo se relaciona con el progreso;
- dónde encontrar feedback.

Evitar mostrar taxonomías internas de diseño que no aporten navegación.

## 4. Tipos de objetos evaluativos G4

### EV-01 Foro histórico
- frecuencia: H1–H10;
- valor: 3.5 cada uno;
- total: 35;
- función dominante: análisis histórico-epistemológico y argumentación;
- criterio debe distinguir publicación de razonamiento;
- interacción final se completa en H4.

### EV-02 PROEMA ensayo evolutivo E1–E5
- 5 × 2 = 10;
- no son cinco investigaciones distintas;
- cada estado debe permitir recuperar feedback y reutilizar evidencia en el siguiente.

### EV-03 Presentación grupal PROEMA
- 15 puntos;
- síntesis e integración grupal;
- debe preservar contribución/autoria individual donde corresponda;
- configuración detallada de interacción pertenece también a H4.

### EV-04 Artículo individual PROEMA
- 10 puntos;
- evidencia de síntesis, argumento, método y autoría;
- prepara integración U15 sin convertirse en duplicación.

### EV-05 DR Clase/Investigación
- 5 checkpoints × 1 = 5;
- lee cambio, decisión y transferencia;
- no debe duplicar narrativamente PROEMA.

### EV-06 REC/Laboratorio
- 10 × 2 = 20;
- progresión: observar → registrar → transformar → medir → cuantificar → clasificar/representar → modelar → inferir → instrumentar → evaluar consecuencias;
- REC precede al medio.

### EV-07 DR Laboratorio/Investigación
- 5 × 1 = 5;
- metacognición de proceso experimental/investigativo;
- no crea una segunda trayectoria independiente.

### EV-08 U15 recuperación
- preferentemente sin nueva puntuación sustantiva;
- organiza, recupera, integra y metacogniza evidencia existente;
- cualquier nueva producción debe estar delimitada y justificada.

## 5. Contrato G4 evaluativo

Todo objeto evaluado debe añadir al Contrato Mínimo G4:

`valor → categoría 75/25 → evidencia entregada → criterio visible → instrumento/rúbrica → momento de feedback → mecanismo de recuperación → destino del feedback → regla de revisión → vista estudiante → vista docente → prueba matemática cuando aplique`

Un slot evaluativo G4-B no está suficientemente especificado si falta criterio o destino de feedback.

## 6. Rúbricas y criterios

### 6.1 Regla de visibilidad

El estudiante debe poder acceder a criterios antes de entregar.

### 6.2 Regla de proporcionalidad

No toda evidencia necesita una rúbrica extensa. El instrumento debe ser proporcional al valor y complejidad:
- criterio breve/checklist cuando basta;
- rúbrica analítica cuando la complejidad lo justifica;
- criterios longitudinales recurrentes cuando interesa hacer visible crecimiento.

### 6.3 Núcleo común de criterio

Según familia, las rúbricas pueden operacionalizar combinaciones de:
- evidencia;
- razonamiento/argumento;
- conexión histórica/epistemológica;
- método;
- interpretación;
- límite/incertidumbre;
- revisión;
- autoría;
- comunicación;
- responsabilidad/uso crítico cuando corresponda.

H3 no inventa nuevos resultados curriculares: deriva criterios de RIA/REC y función aprobada.

## 7. Feedback operacional

Se preserva el modelo:
`cohorte → grupo → individuo`

No es jerarquía de calidad, sino proporcionalidad de presencia y sostenibilidad.

Todo feedback funcional debe tener al menos uno de estos destinos:
- revisión de la misma evidencia cuando proceda;
- siguiente estado PROEMA;
- siguiente REC;
- checkpoint DR;
- transferencia a artículo/presentación;
- recuperación U15.

Regla:

> **Comentario sin destino explícito puede ser informativo, pero no demuestra por sí solo feedback longitudinal utilizable.**

## 8. Recuperación de feedback

El LMS debe permitir localizar feedback después del momento de calificación.

Puertos G4 recomendados:
- enlace/contexto hacia feedback previo desde PROEMA siguiente;
- recordatorio de recuperación REC;
- referencia a evidencia anterior en DR;
- instrucciones U15 para cosechar comentarios, rúbricas y versiones previas.

H3 define la función; el medio concreto depende del LMS.

## 9. Revisión y reentrega

No se establece una política universal de reentrega automática.

Distinguir:
- **revisión formativa:** incorporar feedback en evidencia posterior;
- **revisión del mismo objeto:** solo cuando esté autorizada por la arquitectura/política aplicable;
- **reutilización:** recuperar evidencia/feedback sin volver a entregar lo mismo;
- **U15:** cosecha e integración, no reentrega masiva.

Cualquier cambio de política de evaluación requiere gobernanza humana.

## 10. Adaptabilidad y evaluación

Las rutas Apoyo/Base/Profundización no modifican automáticamente:
- REC;
- función;
- criterio esencial;
- puntuación.

Pueden variar:
- andamiaje;
- ejemplos;
- contexto;
- fuente anotada/no anotada;
- autonomía;
- recursos adicionales;
- sofisticación opcional.

Profundización no genera crédito adicional por defecto.

## 11. Objetos sentinela H3

| ID | Objeto | Estado inicial | Riesgo | Verificación |
|---|---|---|---|---|
| H3-O01 | gradebook 75/25 | G4-B | A | VD8-04 / P8-06 |
| H3-O02 | foro histórico evaluado | G4-B | A/B | VD8-03/05 |
| H3-O03 | rúbrica/criterios foro | G4-B | B | VD8-03 |
| H3-O04 | PROEMA E1–E5 | G4-B | A | VD8-06/07 |
| H3-O05 | feedback recuperable PROEMA | G4-B | A | VD8-06 |
| H3-O06 | REC/laboratorio | G4-B | A | VD8-08 |
| H3-O07 | DR checkpoints | G4-B | B | VD8-06/08 |
| H3-O08 | presentación grupal | G4-B | B | VD8-03 |
| H3-O09 | artículo individual | G4-B | A/B | VD8-03/09 |
| H3-O10 | U15 recuperación | G4-B | A | VD8-09 / CP7-05 |

## 12. Pruebas PH3

- **PH3-01 Matemática 100:** suma total = 100.
- **PH3-02 Clase/Lab:** 75 + 25 exactos.
- **PH3-03 Semántica 75/25:** copy no declara cambio curricular.
- **PH3-04 Criterios visibles:** acceso antes de entrega.
- **PH3-05 Foro:** valor 3.5 × 10 y criterio analítico.
- **PH3-06 PROEMA:** E1–E5 se leen como evolución de una investigación.
- **PH3-07 Recuperación:** feedback de un estado puede localizarse desde el siguiente.
- **PH3-08 REC:** progresión no se convierte en diez formatos desconectados.
- **PH3-09 Adaptabilidad:** apoyos no cambian puntuación/criterio esencial.
- **PH3-10 U15:** no exige reentrega masiva.
- **PH3-11 Vista estudiante:** valor, criterio y feedback localizables.
- **PH3-12 Vista docente:** configuración permite evaluar y recuperar evidencia sin trabajo innecesariamente duplicado.

## 13. Stop rules

### F-P obligatorio si:
- cambia 75/25 o su autoridad;
- crea nueva puntuación no aprobada;
- fragmenta PROEMA;
- convierte U15 en reentrega masiva;
- cambia criterio esencial entre rutas adaptativas;
- introduce política nueva de reentrega/revisión;
- tecnología redefine REC o evidencia curricular.

### F-T probable si:
- cálculo/columna/categoría está mal configurado pero solución es inequívoca;
- rúbrica no está visible por permiso/configuración;
- enlace a feedback está roto;
- nombre de actividad contradice patrón ya aprobado sin cambio pedagógico.

## 14. Integración al Guión Maestro

H3 debe producir `CIFI3065_F8_GUION_MAESTRO_MONTAJE_G4_v0.2_CANDIDATO.md` añadiendo a cada unidad:
- objetos evaluados;
- valor;
- categoría;
- criterio/rúbrica;
- feedback;
- recuperación;
- estado G4;
- pruebas.

## 15. Frontera H3/H4–H5

H3 especifica evaluación, pero H4 completa interacción/presencia y H5 completa accesibilidad técnica, variantes y QM-B.

Un foro puede estar evaluativamente especificado en H3 y requerir todavía en H4 la forma exacta de interacción.

## 16. Frontera F8/F9

H3 puede verificar configuración y recuperabilidad.

No puede demostrar todavía:
- si estudiantes usan realmente el feedback;
- si perciben justicia/claridad;
- si el tiempo de corrección es sostenible;
- si la carga evaluativa se experimenta como adecuada.

Esas señales permanecen F9.

## 17. Definition of Done H3

H3 queda listo para aprobación cuando:
1. gradebook 100/75/25 está especificado;
2. toda familia evaluativa tiene objeto G4;
3. criterios/rúbricas tienen regla de visibilidad;
4. feedback tiene destinos operacionales;
5. recuperación está diseñada;
6. PROEMA conserva longitudinalidad;
7. REC conserva progresión;
8. U15 queda protegido;
9. adaptabilidad no altera criterio/puntuación esencial;
10. existen 10 objetos sentinela;
11. existen PH3-01–PH3-12;
12. stop rules F-T/F-P están explícitas;
13. Guión Maestro v0.2 está enriquecido;
14. F8/F9 permanece protegido;
15. el producto puede guiar montaje real del gradebook y objetos evaluativos sin nueva decisión pedagógica implícita.

## 18. Dictamen candidato

**F8 Hito 3 v0.1 = CANDIDATO OPERACIONAL DE EVALUACIÓN / H3 EXPEDITO / PENDIENTE DE REVISIÓN HUMANA.**

La siguiente revisión humana debe concentrarse en tres asuntos: suficiencia de la configuración 75/25, nivel de detalle de rúbricas reutilizables y cuánto feedback explícito debe quedar prescrito antes de montaje unitario.