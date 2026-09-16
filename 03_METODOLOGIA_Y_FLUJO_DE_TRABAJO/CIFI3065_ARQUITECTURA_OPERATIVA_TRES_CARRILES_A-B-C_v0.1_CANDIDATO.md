# CIFI 3065 Virtual — Materia Mundi
# Arquitectura Operativa de Tres Carriles A ↔ B ↔ C

**Versión:** 0.1 CANDIDATO  
**Fecha:** 16 de septiembre de 2026  
**Estado:** CANDIDATO PARA REVISIÓN HUMANA / NO CANÓNICO HASTA RATIFICACIÓN  
**Fuente de verdad:** GitHub `main`  
**Baseline de diseño:** `dae8114fc485d622956824f078964e438f25b08b`  
**Extiende sin sustituir:** `CIFI3065_F8_H6R3_ARQUITECTURA_MAESTRA_CARRIL_A-B_v1.0_APROBADA.md`

---

## 1. Propósito

Extender la arquitectura A↔B aprobada para permitir trabajo paralelo, trazable y cognitivamente sostenible sobre dos tipos de realización distintos:

- realización histórica/semanal H1–H10;
- realización longitudinal persistente U1, U2, U13, U14 y U15.

La extensión crea un **Carril C especializado en integración longitudinal**, sin transferirle autoridad curricular ni crear un tercer centro de gobierno.

Principio rector:

> **A gobierna; B realiza la trayectoria histórica; C realiza la infraestructura longitudinal; B y C se coordinan por contratos de interfaz y ambos retornan a A.**

---

## 2. Razón de la extensión

La arquitectura A↔B resolvió la separación entre gobernanza y producción situada. El avance real de H1–H4 revela ahora una segunda necesidad:

- U1, U2, U13, U14 y U15 no son unidades tardías independientes;
- son sistemas funcionales persistentes que atraviesan H1–H10;
- PROEMA, REC, feedback, orientación, gramática epistemológica y recuperación de evidencias requieren continuidad antes de sus semanas de culminación;
- concentrar simultáneamente H5 y todos los longitudinales en un solo Carril B aumentaría carga cognitiva y riesgo de mezclar decisiones locales con infraestructura transversal.

La solución propuesta es distribuir producción sin fragmentar autoridad.

---

## 3. Autoridad

GitHub `main` permanece como única fuente versionada de verdad.

### Carril A — Gobernanza y canon

Responde:

**¿Qué debe conservar el curso y qué puede convertirse en canon?**

Mantiene:

- arquitectura curricular;
- estado maestro;
- gates;
- alineación F1–F8;
- REC/evidencia/evaluación;
- PROEMA/DR/U15 como trayectorias;
- criterios de carga, accesibilidad, autoría, IA y privacidad;
- semáforo verde/ámbar/rojo;
- absorción y versionado de retornos B/C;
- frontera F8/F9.

### Carril B — Montaje histórico situado

Responde:

**¿Cómo materializamos la unidad histórica vigente sin romper el sistema longitudinal?**

Ámbito dominante:

`H1–H10 / FEHE / actividad central / foro / laboratorio-REC / cierre semanal`.

Puede producir, curar, montar y verificar realizaciones semanales, pero no redefinir funciones longitudinales.

### Carril C — Integración longitudinal situada

Responde:

**¿Cómo hacemos persistentes, utilizables y recuperables las funciones longitudinales a través del semestre?**

Ámbito dominante:

- U1 — Portal de Orientación, Presencia y Experiencia Materia Mundi;
- U2 — Observatorio Epistemológico de la Materia;
- U13 — Laboratorio de Metodología PROEMA;
- U14 — Taller de Producción Intelectual PROEMA;
- U15 — Centro de Integración, Evidencias, Metacognición y Cierre;
- interfaces longitudinales con PROEMA, REC, DR, feedback y evidencias acumuladas.

Carril C no puede modificar silenciosamente evaluación, hitos PROEMA, criterios de autoría, REC, política IA, funciones U1/U2/U13/U14/U15 ni estructura H1–H10.

---

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

Regla:

> **B y C no se gobiernan entre sí. A gobierna ambos.**

La coordinación B↔C ocurre mediante interfaces explícitas, no mediante transferencia de autoridad.

---

## 5. Contrato mínimo B↔C

Toda unidad histórica activa debe poder declarar, cuando proceda:

`evidencia producida → destino longitudinal → forma de recuperación → feedback persistente → siguiente uso esperado`.

Carril C debe declarar, para cada función longitudinal activa:

`entrada desde unidad histórica → operación longitudinal → persistencia/archivo → salida reutilizable → unidad/hito futuro`.

Ejemplo PROEMA:

`E1/feedback H1 → recuperación H4/E2 → organización H5/H6 → E3 H7 → E4 H10 → E5 U13 → presentación U14 → artículo U15`.

Carril B no necesita esperar a que C esté completamente montado si la interfaz mínima está definida.

Carril C no debe inventar nuevas tareas para compensar una interfaz incompleta; debe reutilizar evidencia existente siempre que sea pedagógicamente válido.

---

## 6. Prioridad inicial de Carril C

Carril C se activa en tres ondas.

### Onda 1 — PROEMA urgente

Objetivo: proteger Ensayo 2 y continuidad de investigación.

Orden:

1. auditar E1, feedback y materiales PROEMA existentes;
2. incorporar por simetría reversible materiales de otro curso sólo por función, no por copia literal;
3. construir mapa longitudinal PROEMA `E1→E5→U14→U15`;
4. diseñar U13 mínimo viable para recuperación de pregunta, fuentes, evidencia, feedback y brechas;
5. definir interfaz ligera con U14/U15;
6. montar sólo lo necesario para apoyar E2 sin crear tarea paralela.

### Onda 2 — U1 + U2 persistentes

Objetivo: reducir carga extrínseca y consolidar gramática epistemológica.

U1:

`dónde estoy → qué toca → cómo navego → dónde recupero ayuda/evidencia`.

U2:

`problema → observación → dato → evidencia → hipótesis → modelo → explicación → teoría/ley → incertidumbre → límite`.

Ambos deben funcionar como referencias reutilizables, no como nuevas pilas de tareas.

### Onda 3 — U14 + U15 progresivos

U14 comienza como preparación ligera de comunicación, trazabilidad y defensa.

U15 comienza como arquitectura de recuperación y memoria académica, no como reentrega masiva.

Su desarrollo completo se activa progresivamente a medida que exista suficiente evidencia real acumulada.

---

## 7. Regla de simetría reversible

Materiales externos, incluidos materiales docentes de otros cursos del profesor, pueden ingresar a Carril C como candidatos.

Procedimiento:

`objeto origen → función original → función equivalente en Materia Mundi → invariantes → adaptaciones necesarias → riesgos → decisión reutilizar/adaptar/descartar`.

No se copia automáticamente:

- nombre de tarea;
- secuencia;
- rúbrica;
- ponderación;
- lenguaje;
- plataforma;
- productos.

Se conserva sólo aquello cuya función sea compatible con el sistema Materia Mundi.

---

## 8. Unidad mínima C→A

El ciclo longitudinal usa la misma lógica de retorno autosostenido de A↔B:

`baseline A → Kit/Prompt C → Taller C → Documento de Integración Longitudinal + Bitácora Ligera → QA situado → retorno C→A → absorción/normalización → actualización del estado maestro`.

El retorno C debe permitir comprender qué se integró sin releer toda la conversación.

---

## 9. DME-C / Documento de Integración Longitudinal

Carril C utilizará un documento análogo al DME de B, orientado a persistencia e interfaces.

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

---

## 10. Semáforo de Carril C

### VERDE

- copy;
- organización visual/textual;
- enlaces persistentes;
- plantillas equivalentes;
- secuencia local reversible;
- ayudas y ejemplos;
- microajustes de navegación;
- recuperación de evidencia ya existente;
- variantes accesibles equivalentes.

### ÁMBAR

- cambio en relación entre un hito PROEMA y una unidad histórica;
- nueva plantilla que pueda convertirse en patrón transversal;
- modificación material del flujo E1–E5;
- nueva forma de archivo/portafolio que afecte U15;
- herramienta que altere privacidad, autoría, acceso o dependencia tecnológica;
- uso de material de otro curso que requiera reinterpretación curricular.

### ROJO

- nueva familia evaluativa;
- cambio de puntaje o criterios;
- fragmentación PROEMA;
- reentrega masiva en U15;
- cambio de función U1/U2/U13/U14/U15;
- reducción de rigor por accesibilidad;
- cambio sustantivo de autoría/IA;
- contradicción con F1–F8;
- contaminación de F9 con evidencia no estudiantil.

---

## 11. Política de ZIP y paquetes portátiles

El ZIP deja de ser requisito mecánico para cada tránsito.

Se utiliza cuando existe valor real de transferencia:

- archivos no suficientemente representados en `main`;
- evidencia situada portátil;
- múltiples artefactos que conviene congelar juntos;
- frontera compleja que necesita snapshot auditable;
- transferencia A→C con materiales externos o de otro curso.

No se exige ZIP cuando:

- `main` contiene baseline autosuficiente;
- Kit/Prompt referencian rutas canónicas suficientes;
- no existe evidencia binaria o situada adicional que transferir.

Regla:

> **ZIP por necesidad de portabilidad y auditoría, no por ritual documental.**

---

## 12. Conversaciones activas recomendadas

Máximo operativo recomendado: tres conversaciones activas.

1. **Carril A / Gobernanza** — esta conversación o su sucesora directa.
2. **Carril B / Unidad histórica vigente** — actualmente U07/H5.
3. **Carril C / Longitudinales** — U1/U2/U13/U14/U15 con prioridad inicial PROEMA/E2.

Evitar abrir conversaciones separadas para cada longitudinal salvo que un subproyecto crezca al punto de requerir independencia real.

---

## 13. Gate inicial propuesto para Carril C

**GO CON CONDICIONES / CANDIDATO A RATIFICACIÓN.**

Condiciones antes de producción extensa:

1. recuperar baseline longitudinal canónica;
2. inventariar E1, feedback, guías y rúbricas PROEMA existentes;
3. recibir materiales del otro curso como evidencia candidata;
4. ejecutar matriz de simetría reversible;
5. producir Mapa Longitudinal PROEMA;
6. definir U13 mínimo viable para E2;
7. definir interfaz U13↔U14↔U15;
8. presentar el mapa para decisión humana antes de montar superficies finales.

---

## 14. Impacto sobre Carril B U07/H5

H5 puede proceder en paralelo.

B-H5 debe:

- preservar su Kit/Prompt vigente;
- no esperar al montaje completo de C;
- declarar toda evidencia con posible destino PROEMA/U2/U15;
- evitar crear nuevas superficies longitudinales por cuenta propia;
- escalar a A cualquier dependencia longitudinal no cubierta por el contrato mínimo.

Carril C debe absorber sólo la interfaz necesaria, sin interferir con el calendario de H5.

---

## 15. Criterio de ratificación

Esta arquitectura puede elevarse a APROBADA cuando la revisión humana confirme:

- autoridad exclusiva de A;
- autonomía situada no gubernativa de B y C;
- alcance de C limitado a integración longitudinal;
- contrato B↔C suficiente;
- política de ZIP proporcional;
- prioridad PROEMA/E2 correcta;
- ausencia de nueva familia evaluativa o duplicación de carga.

Hasta entonces:

**v0.1 = CANDIDATO OPERATIVO PARA REVISIÓN HUMANA.**
