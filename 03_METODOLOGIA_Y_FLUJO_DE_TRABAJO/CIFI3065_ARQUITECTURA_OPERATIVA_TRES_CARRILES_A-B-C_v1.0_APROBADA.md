# CIFI 3065 Virtual — Materia Mundi
# Arquitectura Operativa de Tres Carriles A ↔ B ↔ C

**Versión:** 1.0 APROBADA  
**Fecha:** 16 de septiembre de 2026  
**Estado:** APROBADA / CANÓNICA  
**Fuente de verdad:** GitHub `main`  
**Ratificada por decisión humana:** 16 de septiembre de 2026  
**Extiende sin sustituir:** `CIFI3065_F8_H6R3_ARQUITECTURA_MAESTRA_CARRIL_A-B_v1.0_APROBADA.md`

## 1. Propósito

Extender la arquitectura A↔B aprobada para permitir trabajo paralelo, trazable y cognitivamente sostenible sobre dos tipos de realización distintos:

- realización histórica/semanal H1–H10;
- realización longitudinal persistente U1, U2, U13, U14 y U15.

La extensión crea un **Carril C especializado en integración longitudinal**, sin transferirle autoridad curricular ni crear un tercer centro de gobierno.

Principio rector:

> **A gobierna; B realiza la trayectoria histórica; C realiza la infraestructura longitudinal; B y C se coordinan por contratos de interfaz y ambos retornan a A.**

## 2. Razón de la extensión

U1, U2, U13, U14 y U15 son sistemas funcionales persistentes que atraviesan H1–H10. PROEMA, REC, feedback, orientación, gramática epistemológica y recuperación de evidencias requieren continuidad antes de sus semanas de culminación. Concentrar simultáneamente la unidad histórica vigente y todos los longitudinales en un único taller aumentaría carga cognitiva y riesgo de mezclar decisiones locales con infraestructura transversal.

La solución es distribuir producción sin fragmentar autoridad.

## 3. Autoridad

GitHub `main` permanece como única fuente versionada de verdad.

### Carril A — Gobernanza y canon

Responde: **¿Qué debe conservar el curso y qué puede convertirse en canon?**

Mantiene arquitectura curricular, estado maestro, gates, alineación F1–F8, REC/evidencia/evaluación, PROEMA/DR/U15, criterios de carga, accesibilidad, autoría, IA y privacidad, semáforo, absorción/versionado de retornos B/C y frontera F8/F9.

### Carril B — Montaje histórico situado

Responde: **¿Cómo materializamos la unidad histórica vigente sin romper el sistema longitudinal?**

Ámbito dominante: `H1–H10 / FEHE / actividad central / foro / laboratorio-REC / cierre semanal`.

Puede producir, curar, montar y verificar realizaciones semanales, pero no redefinir funciones longitudinales.

### Carril C — Integración longitudinal situada

Responde: **¿Cómo hacemos persistentes, utilizables y recuperables las funciones longitudinales a través del semestre?**

Ámbito dominante:

- U1 — Portal de Orientación, Presencia y Experiencia Materia Mundi;
- U2 — Observatorio Epistemológico de la Materia;
- U13 — Laboratorio de Metodología PROEMA;
- U14 — Taller de Producción Intelectual PROEMA;
- U15 — Centro de Integración, Evidencias, Metacognición y Cierre;
- interfaces longitudinales con PROEMA, REC, DR, feedback y evidencias acumuladas.

Carril C no puede modificar silenciosamente evaluación, hitos PROEMA, criterios de autoría, REC, política IA, funciones U1/U2/U13/U14/U15 ni estructura H1–H10.

## 4. Topología de trabajo

```text
                         CARRIL A
                 gobernanza / canon / gates
                       /           \
                      /             \
             CARRIL B               CARRIL C
          montaje H1–H10       longitudinales persistentes
                 \                 /
                  \               /
                    Moodle integrado
```

**B y C no se gobiernan entre sí. A gobierna ambos.**

## 5. Contrato mínimo B↔C

Toda unidad histórica activa debe poder declarar, cuando proceda:

`evidencia producida → destino longitudinal → forma de recuperación → feedback persistente → siguiente uso esperado`.

Carril C debe declarar:

`entrada desde unidad histórica → operación longitudinal → persistencia/archivo → salida reutilizable → unidad/hito futuro`.

Ejemplo PROEMA:

`E1/feedback H1 → recuperación H4/E2 → organización H5/H6 → E3 H7 → E4 H10 → E5 U13 → presentación U14 → artículo U15`.

B no necesita esperar a que C esté completamente montado si la interfaz mínima está definida. C no inventa tareas nuevas para compensar interfaces incompletas cuando puede reutilizar evidencia existente.

## 6. Prioridad inicial de Carril C

### Onda 1 — PROEMA urgente

1. auditar E1, feedback y materiales PROEMA existentes;
2. recibir materiales de referencia de otros cursos como **candidatos**, no como canon;
3. aplicar simetría reversible por función;
4. construir mapa longitudinal PROEMA `E1→E5→U14→U15`;
5. diseñar U13 mínimo viable para recuperación de pregunta, fuentes, evidencia, feedback y brechas;
6. definir interfaz ligera U13↔U14↔U15;
7. montar sólo lo necesario para apoyar E2 sin crear tarea paralela.

### Onda 2 — U1 + U2 persistentes

U1: `dónde estoy → qué toca → cómo navego → dónde recupero ayuda/evidencia`.

U2: `problema → observación → dato → evidencia → hipótesis → modelo → explicación → teoría/ley → incertidumbre → límite`.

### Onda 3 — U14 + U15 progresivos

U14 comienza como preparación ligera de comunicación, trazabilidad y defensa.

U15 comienza como arquitectura de recuperación y memoria académica, no como reentrega masiva.

## 7. Integración de materiales PROEMA de referencia

Los materiales PROEMA externos o procedentes de otros cursos **se trabajan operativamente en Carril C**.

Flujo obligatorio:

`material de referencia → inventario C → función original → función equivalente en Materia Mundi → invariantes → adaptación candidata → riesgos → decisión reutilizar/adaptar/descartar → validación A → montaje C`.

Carril C puede analizar, descomponer, recombinar y adaptar materiales. No puede convertirlos por sí solo en canon.

La incorporación canónica ocurre únicamente cuando Carril A valida la adaptación y decide su absorción a `main`.

## 8. Regla de simetría reversible

No se copia automáticamente nombre de tarea, secuencia, rúbrica, ponderación, lenguaje, plataforma ni productos.

Se conserva sólo aquello cuya función sea compatible con Materia Mundi.

## 9. Unidad mínima C→A

`baseline A → Kit/Prompt C → Taller C → Documento de Integración Longitudinal + Bitácora Ligera → QA situado → retorno C→A → absorción/normalización → actualización del estado maestro`.

## 10. DME-C / Documento de Integración Longitudinal

Debe responder:

- qué función longitudinal se trabajó;
- qué evidencia histórica/semanal recibe;
- qué operación añade;
- dónde queda disponible en Moodle;
- qué debe recuperar el estudiante después;
- qué feedback persiste;
- qué duplicación se evitó;
- qué decisiones locales se tomaron;
- qué permanece pendiente;
- qué requiere retorno a A.

Estado mínimo:

`DISEÑADO → PRODUCIDO → MONTADO → VERIFICADO-SITUADO`.

## 11. Semáforo Carril C

### VERDE
Copy, organización visual/textual, enlaces persistentes, plantillas equivalentes, secuencia local reversible, ayudas/ejemplos, microajustes de navegación, recuperación de evidencia ya existente y variantes accesibles equivalentes.

### ÁMBAR
Cambio en relación entre hito PROEMA y unidad histórica, nueva plantilla transversal, modificación material del flujo E1–E5, nueva forma de archivo/portafolio que afecte U15, herramienta con impacto de privacidad/autoría/acceso o uso de material externo que requiera reinterpretación curricular.

### ROJO
Nueva familia evaluativa, cambio de puntaje/criterios, fragmentación PROEMA, reentrega masiva U15, cambio de función longitudinal, reducción de rigor, cambio sustantivo de autoría/IA, contradicción F1–F8 o contaminación F9.

## 12. Política de ZIP

El ZIP se usa cuando existe valor real de transferencia: archivos no suficientemente representados en `main`, evidencia situada portátil, múltiples artefactos externos que conviene congelar juntos o frontera compleja que necesita snapshot auditable.

No es requisito mecánico cuando `main` + Kit/Prompt constituyen baseline autosuficiente.

**ZIP por necesidad de portabilidad y auditoría, no por ritual documental.**

## 13. Conversaciones activas recomendadas

Máximo operativo recomendado: tres conversaciones activas.

1. Carril A / Gobernanza.
2. Carril B / Unidad histórica vigente.
3. Carril C / Longitudinales.

## 14. Gate inicial Carril C

**GO CON CONDICIONES / RATIFICADO.**

Antes de producción extensa:

1. recuperar baseline longitudinal canónica;
2. inventariar E1, feedback, guías y rúbricas PROEMA existentes;
3. recibir materiales del otro curso como evidencia candidata;
4. ejecutar matriz de simetría reversible;
5. producir Mapa Longitudinal PROEMA;
6. definir U13 mínimo viable para E2;
7. definir interfaz U13↔U14↔U15;
8. presentar el mapa para decisión humana antes de montar superficies finales.

## 15. Impacto sobre B-H5

H5 puede proceder en paralelo. B-H5 debe preservar su Kit/Prompt, declarar evidencia con posible destino PROEMA/U2/U15 y no crear nuevas superficies longitudinales por cuenta propia.

## 16. Estado

**Arquitectura Operativa A↔B↔C v1.0 = APROBADA / CANÓNICA.**
