# CIFI 3065 Virtual — Materia Mundi
# Guión Maestro de Montaje G4 — Orquestador Federado

**Versión:** 1.2 CANDIDATO  
**Fecha:** 31 de agosto de 2026  
**Estado:** CANDIDATO H6-R2 / ORQUESTADOR FEDERADO  
**Sucede como candidato operativo a:** v1.1 reconstruido  
**Fuente de verdad:** GitHub `main`

## 1. Función

El Guión Maestro deja de intentar contener el microdiseño/montaje completo de U1–U15. Su función es orquestar un sistema documental federado compuesto por:

`reglas globales + arquitectura LMS + trayectorias longitudinales + mapa de expedientes unitarios + registros transversales + estados G4 + QA + readiness H6`.

Principio:

> **El Guión dice cómo se relaciona y navega el sistema; cada Expediente Unitario dice cómo se monta una unidad.**

## 2. Arquitectura documental

### Nivel 1 — Maestro
- Plan F8;
- H1–H5;
- Guión Maestro v1.2;
- Documento Maestro F8;
- H6/Gate.

### Nivel 2 — Unidades
Directorio:
`08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/CIFI3065/F8/UNIDADES/`

Convención:
`CIFI3065_F8_G4_Uxx[-Hn]_EXPEDIENTE_MONTAJE_INTEGRACION_vX.X_[ESTADO].md`

### Nivel 3 — Registros transversales
- recursos/fuentes/licencias;
- rúbricas;
- gradebook;
- accesibilidad/equivalencia;
- tecnología/IA/privacidad;
- QM-B;
- matriz G4-A/B/C;
- evidencia H6.

## 3. Superficies LMS globales

S1 Entrada/Inicio.  
S2 Mapa del curso.  
S3 Unidad/OVAt actual.  
S4 Trayectorias longitudinales.  
S5 Ayuda/soporte.

Cada expediente declara cómo ocupa estas superficies.

## 4. Invariantes de montaje

- REC antes que medio;
- PROEMA único;
- U2/U13/U14/U15 no crean corrientes paralelas;
- feedback con destino;
- foros por función;
- 75/25 gobernado;
- U15 sin reentrega;
- variantes equivalentes;
- Núcleo/Profundización/Exploración distinguibles;
- terminología controlada;
- tecnología mínima suficiente;
- IA no-oráculo y autoría humana;
- privacidad por minimización;
- G4-B/C ≠ G4-A;
- F8 verifica, F9 observa comportamiento.

## 5. Arquitectura evaluativa global

Clase = 75:
- 10 foros × 3.5 = 35;
- PROEMA E1–E5 × 2 = 10;
- presentación grupal = 15;
- artículo individual = 10;
- DR Clase/Investigación = 5.

Laboratorio = 25:
- 10 REC/Labs × 2 = 20;
- DR Lab/Investigación = 5.

Los expedientes referencian esta arquitectura y especifican la configuración local.

## 6. Trayectorias longitudinales

### Histórica
`U3/H1 → U4/H2 → U5/H3 → U6/H4 → U7/H5 → U8/H6 → U9/H7 → U10/H8 → U11/H9 → U12/H10`.

### REC
`observar → registrar/transformar → medir → cuantificar → representar → modelar → sistema → inferir/instrumentar → consecuencias`.

### PROEMA
`U1/U2 huella → E1 H1 → E2 H4 → E3 H7 → E4 H10 → E5 U13 → presentación U14 → artículo U15`.

### U15
Recupera evidencias y feedback sin reentrega masiva.

## 7. Índice de Expedientes Unitarios

| Unidad | Función | Expediente | Estado |
|---|---|---|---|
| U1 | orientación/presencia | pendiente de producción | NI |
| U2 | observatorio epistemológico | pendiente | NI |
| U3/H1 | apertura histórica + E1 + REC1 | `UNIDADES/CIFI3065_F8_G4_U03-H1_EXPEDIENTE_MONTAJE_INTEGRACION_v0.1_CANDIDATO.md` | CANDIDATO PROTOTIPO |
| U4/H2 | transformación/prácticas | pendiente | NI |
| U5/H3 | medición/instrumento | pendiente | NI |
| U6/H4 | controversia + E2 | pendiente | NI |
| U7/H5 | datos→modelo | pendiente | NI |
| U8/H6 | representación/periodicidad | pendiente | NI |
| U9/H7 | modelos moleculares + E3 | pendiente | NI |
| U10/H8 | sistemas/energía | pendiente | NI |
| U11/H9 | inferencia/instrumentación | pendiente | NI |
| U12/H10 | consecuencias + E4 | pendiente | NI |
| U13 | método + E5 | pendiente | NI |
| U14 | presentación/defensa | pendiente | NI |
| U15 | artículo/cosecha/metacognición | pendiente | NI |

NI aquí significa expediente federado no producido, no ausencia de microdiseño previo.

## 8. Especificación del expediente

Patrón rector:
`CIFI3065_F8_ESPECIFICACION_MAESTRA_EXPEDIENTE_UNITARIO_G4_v0.1_CANDIDATO.md`.

El patrón se valida primero con U3/H1 antes de propagación.

## 9. Estados G4 globales

- G4-A montado/verificado;
- G4-B slot completamente especificado;
- G4-C selección sustituible diferida.

Cada expediente mantiene inventario unitario `Uxx-G4-nn`. H6 consolidará una matriz global sin borrar el detalle local.

## 10. QA federado

### Unitario
Cada expediente aplica PH2–PH5/P8, CP7/G7, VD8 y QM-B pertinentes.

### Horizontal
H6 compara unidades para:
- claridad;
- REC;
- feedback;
- evaluación;
- interacción;
- recursos;
- accesibilidad;
- autoría;
- tecnología.

### Vertical
H6 recorre al menos:
`U1 → H1 → H5 → H10 → U15`.

## 11. Regla de propagación

No crear U1–U15 automáticamente hasta validar U3/H1.

`prototipo → revisión humana → ajustes al patrón → aprobación → propagación controlada`.

## 12. Relación con v1.1

v1.1 se conserva como candidato genealógico que recuperó U1–U15 y reveló la necesidad de federación.

v1.2 no lo “resume”; reorganiza la función documental para evitar pérdida de complejidad.

## 13. Estado H6

H6 permanece abierto. La auditoría y Gate previos no se ratifican hasta que:
1. el patrón federado sea aprobado;
2. los expedientes necesarios estén producidos;
3. G4-A crítico sea evidenciado;
4. QM-B sea completado legítimamente;
5. la Auditoría Biaxial sea reejecutada sobre el sistema correcto.

## 14. Dictamen candidato

**GUIÓN MAESTRO G4 v1.2 = ORQUESTADOR FEDERADO CANDIDATO / U3-H1 PROTOTIPO ACTIVO / PENDIENTE DE REVISIÓN HUMANA ANTES DE PROPAGACIÓN U1–U15.**