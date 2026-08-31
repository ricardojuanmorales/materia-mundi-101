# CIFI 3065 Virtual — Materia Mundi
# F8 Hito 6 — Auditoría Sistémica y Consolidación G4

**Versión:** 0.1 CANDIDATO  
**Fecha:** 31 de agosto de 2026  
**Estado:** CANDIDATO VISIBLE / AUDITORÍA H6 ABIERTA / PENDIENTE DE REVISIÓN HUMANA  
**H1–H5:** APROBADOS / CANÓNICOS  
**Fuente de verdad:** GitHub `main`

## 1. Mandato

H6 no añade una nueva capa de diseño. Consolida y audita la implementación F8 mediante:

`herencia canónica → objeto G4 → estado A/B/C → evidencia → prueba → no regresión → QM-B → defecto/condición → readiness F9`

Pregunta rectora:

> **¿Existe evidencia suficiente para afirmar que Materia Mundi v1.0-MVP está operacionalmente implementado y verificable, y no solo completamente especificado, sin contaminar F9 con defectos de implementación no resueltos?**

## 2. Regla de clasificación G4

- **G4-A — Montado/verificado:** objeto real existe en el entorno objetivo o evidencia operacional equivalente y ha pasado pruebas pertinentes.
- **G4-B — Slot completamente especificado:** función, REC/evidencia, criterio, ubicación, accesibilidad, dependencias, aceptación y sustitución están resueltos; falta montaje/producción final no estructural.
- **G4-C — Selección sustituible diferida:** tipo, función y criterio de selección están resueltos; recurso/medio final queda a decisión humana de montaje.

Regla: G4-B/C pueden ser diferimientos legítimos para componentes sustituibles. **Objetos críticos del MVP no pueden declararse implementados solo por estar especificados.**

## 3. Hallazgo de evidencia G4-A en repositorio

La inspección de `main` confirma abundante evidencia documental G4-B/C y trazabilidad H1–H5, pero no localizó evidencia canónica suficiente de montaje/verificación G4-A para el conjunto crítico del LMS.

Esto no demuestra que el curso no exista o no esté siendo usado; demuestra que **GitHub, fuente versionada de verdad para F8, todavía no contiene evidencia suficiente para reproducir el juicio de implementación completa**.

Estado: **CONDICIÓN DE CIERRE H6-01**.

## 4. Matriz consolidada VD8

| VD8 | Ámbito | Especificación | Evidencia G4-A canónica | Estado H6 inicial |
|---|---|---|---|---|
| 01 | orientación persistente | H2 | insuficiente en repo | V-C / requiere evidencia |
| 02 | navegación operativa | H2 | insuficiente | V-C |
| 03 | rúbricas visibles | H3 | insuficiente | V-C |
| 04 | gradebook 75/25 | H3 | insuficiente | V-C |
| 05 | foros por función | H4 | insuficiente | V-C |
| 06 | feedback recuperable | H3/H4 | insuficiente | V-C |
| 07 | PROEMA continuo | H3/H4 | insuficiente | V-C |
| 08 | REC progresivo | H3/H4 | insuficiente | V-C |
| 09 | U15 sin duplicación | H3 | insuficiente | V-C |
| 10 | variantes accesibles/equivalentes | H5 | insuficiente | V-C |
| 11 | jerarquía de recursos | H2/H5 | insuficiente | V-C |
| 12 | terminología estudiantil | H2 | insuficiente | V-C |
| 13 | recursos/licencias/enlaces/accesibilidad | H5 | parcial/especificada | V-C |
| 14 | tecnología/IA/privacidad | H5 | parcial/especificada | V-C |

`V-C` en esta tabla significa **arquitectura verificable con condición de evidencia operacional**, no PASS de comportamiento F9.

## 5. Auditoría de CP7/G7

No se detecta regresión documental explícita en CP7-01–CP7-09 ni G7-01–G7-10. Los patrones aprobados preservan H1/H10, foros analíticos, feedback utilizable, U15 sin reentrega, 75/25 gobernado, equivalencia, jerarquía y terminología.

Sin embargo, la no regresión final debe probarse en objetos G4-A críticos antes del Gate.

## 6. Auditoría Biaxial

### Eje vertical
`U1 → H1 → H5 → H10 → U15`

Resultado documental:
- U1: orientación y mapa definidos;
- H1: orquestación protegida;
- H5: patrón medio de continuidad y adaptabilidad disponible;
- H10: convergencia protegida;
- U15: cosecha sin reentrega protegida.

Resultado operacional: **pendiente de evidencia de recorrido G4-A extremo a extremo**.

### Eje horizontal
Claridad, REC, feedback, evidencia, interacción, variantes, continuidad, autoría, accesibilidad y tecnología poseen reglas transversales coherentes.

Resultado: **PASS DOCUMENTAL / PENDIENTE PRUEBA DE IMPLEMENTACIÓN**.

## 7. Estado de QM-B

El registro QM-B v0.2 aprobado preserva 44 posiciones y puertos de evidencia H2–H5. La búsqueda en el repositorio no localizó la fuente QM autorizada que permita asociar legítimamente los 44 SR y expectativas.

Por regla vinculante:
`FUENTE QM REQUERIDA / NO INFERIR`.

Consecuencia: **QM-B interno no puede declararse completado todavía**.

Condición de cierre H6-02:
- cargar/consultar fuente autorizada;
- mapear 44 SR;
- asociar evidencia real G4;
- cerrar NI/F/GOV pertinentes.

## 8. Backlog mínimo de cierre F8

### BCL-01 Evidencia G4-A crítica
Conservar evidencia suficiente de:
- shell/orientación U1;
- navegación H1–H10/U15;
- gradebook 75/25;
- una rúbrica visible;
- un foro funcional;
- recuperación de feedback;
- continuidad PROEMA;
- REC progresivo;
- U15;
- variante/equivalencia;
- jerarquía de recursos;
- tecnología/privacidad/contingencia.

No requiere producir todos los medios sustituibles.

### BCL-02 Recorrido biaxial
Ejecutar y registrar al menos un recorrido vertical y verificaciones horizontales representativas.

### BCL-03 QM-B
Cargar fuente autorizada y completar registro interno.

### BCL-04 Defectos
Corregir F-T; elevar F-P si aparece contradicción.

## 9. Preservación F9

VF9-01–VF9-14 permanecen reservadas. H6 no interpreta autenticidad, carga real, uso real de feedback, pertenencia o sostenibilidad como demostradas.

## 10. Dictamen candidato H6

**H6 v0.1 = PASS DE CONSOLIDACIÓN DOCUMENTAL + READINESS OPERACIONAL CON CONDICIONES DE EVIDENCIA / CIERRE F8 TODAVÍA NO DEMOSTRADO.**

No existe contradicción pedagógica estructural identificada. La brecha es de **evidencia de implementación y cierre QM-B**, no de diseño.

## 11. Recomendación de Gate

Con la evidencia actualmente canónica, la recomendación es:

**Gate F8→F9 = HOLD OPERACIONAL / NO RATIFICAR TODAVÍA**, hasta cerrar BCL-01–BCL-03.

Este HOLD no reabre F1–F7 ni invalida H1–H5. Protege la regla del Plan F8: F8 debe demostrar que fue construido correctamente.