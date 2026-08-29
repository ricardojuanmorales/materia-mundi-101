# CIFI 3065 Virtual — Materia Mundi
# F8 Hito 1 — Sistema Maestro de Producción, Trazabilidad y Verificación G4

**Versión:** 0.2 CANDIDATO  
**Fecha:** 29 de agosto de 2026  
**Estado:** CANDIDATO VISIBLE / NO CANÓNICO / APTO PARA RATIFICACIÓN HUMANA  
**Fase:** F8 — Producción operacional G4 y verificación de implementación  
**Plan rector:** `CIFI3065_F8_PLAN_ESTRATEGICO_v1.0_APROBADO.md`  
**Fuente de verdad:** GitHub `main`

## 0. Evolución v0.1 → v0.2

La versión 0.2 preserva la arquitectura del v0.1 y formaliza cuatro ajustes derivados de revisión humana:

1. la trazabilidad extrema se conserva, pero se aplica con proporcionalidad al riesgo para evitar burocracia improductiva;
2. se ratifica la utilidad de los 14 objetos sentinela iniciales como red de detección temprana;
3. se ratifica la distinción operacional **F-T / F-P** para separar corrección técnica reversible de contradicción pedagógica;
4. se extrae el detalle QM-B de los 44 Specific Review Standards a un producto especializado separado:
   `15_EVALUACION_CALIDAD_Y_AUDITORIA/CIFI3065/CIFI3065_F8_H1_REGISTRO_QM-B_IMPLEMENTACION_v0.1_CANDIDATO.md`.

El documento maestro H1 conserva la arquitectura, reglas y relaciones QM-B; el registro especializado conserva el detalle por SR.

## 1. Mandato

H1 establece el sistema operativo mediante el cual F8 producirá, rastreará, verificará y demostrará G4.

No construye todavía el curso en escala. Define previamente:

`qué debe existir → por qué → dónde → cómo se construye → cómo se prueba → qué evidencia deja → qué condición protege → quién puede cambiarlo → qué ocurre si falla`

Principio rector:

> **No replicar un patrón G4 antes de saber cómo demostrar que es correcto.**

## 2. Herencia metodológica F7→F8

F8 hereda:

- arquitectura Q1–Q4;
- cadena maestra de alineación;
- evidencia E0–E4;
- doble pase QM-A/F7 y QM-B/F8;
- CC7-01–CC7-11;
- CP7-01–CP7-09;
- G7-01–G7-10;
- VD8-01–VD8-14;
- VF9-01–VF9-14;
- Auditoría Biaxial Materia Mundi;
- regla contra deuda pedagógica oculta.

Transformación operacional:

`criterio → evidencia canónica → hallazgo → estado → corrección`

pasa en F8 a:

`requisito aprobado → objeto G4 → implementación → evidencia operacional → prueba → resultado → corrección → reverificación → destino`

## 3. Definición de implementación correcta

> **Una implementación G4 es correcta cuando el objeto existe, funciona, es localizable, conserva la función pedagógica aprobada, satisface sus condiciones de no regresión, deja evidencia reproducible y no consume preguntas empíricas reservadas para F9.**

Existencia ≠ funcionamiento.

Funcionamiento ≠ fidelidad pedagógica.

## 4. Corpus operativo F8

### A — Autoridad y arquitectura
Prontuario, PSEC, RIA/REC, arquitectura conceptual F1, evaluación/progreso F2.

### B — Longitudinalidad
U1–U15, H1–H10, PROEMA, U1↔U15, integración F3/F5, Laboratorio Expandido/REC.

### C — Microdiseño
Protocolo OVAt Materia Mundi y Documento Maestro de Microdiseño U1–U15 aprobados.

### D — Coherencia F5
Productos H1–H5, Documento Maestro y Auditoría F5.

### E — Inclusión y responsabilidad F6
Marco de Inclusión y Responsabilidad, DUA–Accesibilidad–Equivalencia, gobernanza IA/datos/sesgos/proveniencia, SAMR/licenciamiento, Documento Maestro y Auditoría F6.

### F — Calidad F7
Plan F7, H1–H5, Documento Maestro, Auditoría Sistémica y Gate F7→F8.

### G — Control F8
Estado Maestro vigente, Manifest vigente, Mapa de Ruta F0–F10 y Plan Estratégico F8 v1.0 APROBADO.

## 5. Evidencia

Se preservan:

- **E0:** autoridad;
- **E1:** canónica;
- **E2:** canónica compuesta;
- **E3:** genealógica;
- **E4:** diferida.

Se añaden tipos operacionales:

- **EO1 Presencia**;
- **EO2 Configuración**;
- **EO3 Función**;
- **EO4 Recorrido**;
- **EO5 Equivalencia/no regresión**;
- **EO6 Técnica especializada**.

Regla de proporcionalidad:

> **La evidencia requerida aumenta con la fuerza de la afirmación y con el riesgo del objeto.**

Un objeto Tipo C/D reversible puede requerir evidencia mínima suficiente. Un objeto conectado a CP7/G7, evaluación, equivalencia, privacidad o trayectoria longitudinal requiere evidencia reforzada.

## 6. Estados operacionales

- **NI** — No implementado.
- **IP** — Implementación parcial.
- **IV** — Implementado, pendiente de verificación.
- **V** — Verificado.
- **V-C** — Verificado con condición.
- **F-T** — Fallo técnico corregible en F8.
- **F-P** — Posible contradicción pedagógica/regresión; requiere gobernanza humana.
- **NA** — No aplicable justificado.

### Regla F-T

Puede corregirse dentro de F8 cuando la arquitectura aprobada ya determina claramente qué debe ocurrir y la solución no modifica una decisión sustantiva.

### Regla F-P

Debe detener la línea afectada y regresar a humano cuando la solución potencial altere o reinterprete arquitectura aprobada.

## 7. Backlog B8 convertido en familias de objetos

### B8-01 LMS/navegación
Shell; entrada; orientación persistente; estructura U1–U15; rutas H1–H10; H10; menús; retorno/continuidad.

### B8-02 Evaluación/rúbricas/gradebook
Actividades; rúbricas; criterios; categorías; columnas; cálculo y representación 75/25; recuperación de evidencia.

### B8-03 Foros/interacción/presencia
Foros; instrucciones; respuesta sustantiva; presencia docente; interacción estudiantil; función longitudinal.

### B8-04 Feedback/recuperación
Canales; comentarios; rúbricas recuperables; reutilización; vínculos entre feedback y trabajo posterior.

### B8-05 Continuidad longitudinal
PROEMA único; activaciones U13/U14; REC progresivo; U1↔U15; recuperación U15; H1–H10; lentes integrados.

### B8-06 Accesibilidad/variantes
Variantes; alt text; documentos; subtítulos/transcripciones; teclado cuando aplique; formatos alternativos; equivalencia.

### B8-07 Jerarquía/copy
Núcleo/Profundización/Exploración; instrucciones; glosario; backstage; orientación; patrones de recursos.

### B8-08 Recursos/medios/licencias/enlaces
Lecturas; archivos; imágenes; videos; fuentes; simuladores; enlaces; licencias; procedencia; vendor statements cuando apliquen.

### B8-09 Tecnología/IA/privacidad/contingencias
Herramientas; integraciones; IA; privacidad; minimización; contingencias; proveedor; atribución/proveniencia.

## 8. Matriz de verificaciones VD8

| VD | Objeto de verificación | Evidencia dominante | Prueba primaria |
|---|---|---|---|
| VD8-01 | orientación persistente | EO1+EO4 | entrada/reentrada |
| VD8-02 | navegación operativa | EO4 | recorrido biaxial |
| VD8-03 | rúbricas visibles | EO1+EO3 | vista estudiantil |
| VD8-04 | gradebook 75/25 | EO2+EO3+EO6 | cálculo + semántica |
| VD8-05 | foros por función | EO1+EO3 | prueba semántica |
| VD8-06 | feedback recuperable | EO3+EO4 | ciclo de recuperación |
| VD8-07 | PROEMA continuo | EO4+EO5 | recorrido longitudinal |
| VD8-08 | REC progresivo | EO4+EO5 | trazado H1–H10 |
| VD8-09 | U15 sin duplicación | EO3+EO5 | procedencia de evidencia |
| VD8-10 | variantes equivalentes | EO5+EO6 | accesibilidad+equivalencia |
| VD8-11 | jerarquía de recursos | EO1+EO4 | inspección transversal |
| VD8-12 | terminología estudiantil | EO1+EO5 | auditoría de copy |
| VD8-13 | recursos/licencias/enlaces/accesibilidad | EO3+EO6 | QA técnico |
| VD8-14 | tecnología/privacidad F6 | EO2+EO5+EO6 | auditoría sociotécnica |

## 9. Tests de no regresión CP7

- **TNR-01 / CP7-01:** H1 se reconoce como secuencia orquestada y no pila fragmentada.
- **TNR-02 / CP7-02:** H10 distingue entrega, lentes, criterios, apoyos y evidencia reutilizada.
- **TNR-03 / CP7-03:** foros conservan función analítica y no cuota vacía.
- **TNR-04 / CP7-04:** feedback tiene destino posterior recuperable.
- **TNR-05 / CP7-05:** U15 reutiliza evidencia y limita producción nueva.
- **TNR-06 / CP7-06:** 75/25 no se presenta como cambio curricular institucional.
- **TNR-07 / CP7-07:** variante preserva `REC + criterio + función + dignidad académica`.
- **TNR-08 / CP7-08:** Núcleo/Profundización/Exploración son inequívocos.
- **TNR-09 / CP7-09:** términos backstage se ocultan, traducen o explican según necesidad.

## 10. Reglas G7 como stop rules

Cualquier implementación que:

- reinterprete 75/25;
- fragmente PROEMA;
- permita que tecnología redefina REC;
- convierta U2/U13/U14 en tareas paralelas;
- reconstruya U15 innecesariamente;
- reduzca equivalencia;
- vacíe de función la interacción;
- colapse la jerarquía de recursos;
- contradiga herencias F1–F7;

se clasifica **F-P** y requiere decisión humana antes de propagarse.

## 11. Biblioteca inicial de pruebas P8

- **P8-01 Presencia:** ¿existe el objeto esperado?
- **P8-02 Configuración:** ¿está configurado según especificación?
- **P8-03 Función:** ¿realiza la operación prevista?
- **P8-04 Recorrido:** ¿puede encontrarse y utilizarse dentro de la trayectoria?
- **P8-05 Semántica:** ¿el copy comunica correctamente propósito, función y expectativa?
- **P8-06 Matemática:** ¿cálculos/categorías/ponderaciones son correctos?
- **P8-07 Alineación:** ¿el objeto remonta a REC/criterio/función?
- **P8-08 No regresión:** ¿preserva CP7/G7/herencias?
- **P8-09 Equivalencia:** ¿la variante conserva rigor y función?
- **P8-10 Accesibilidad técnica:** ¿el artefacto cumple pruebas técnicas aplicables?
- **P8-11 Longitudinal:** ¿preserva continuidad y reutilización?
- **P8-12 Sociotécnica:** ¿herramienta/IA/privacidad/licencia/contingencia cumplen F6?

## 12. Objetos sentinela iniciales

Se adoptan catorce objetos sentinela para detectar fallas de patrón antes de propagación:

1. entrada/orientación U1;
2. orquestación H1;
3. foro histórico;
4. representación 75/25;
5. recuperación de feedback;
6. trayectoria PROEMA;
7. progresión REC;
8. señalización H10;
9. recuperación U15;
10. variante accesible/equivalente;
11. jerarquía Núcleo/Profundización/Exploración;
12. terminología/copy estudiantil;
13. recurso/medio/licencia/enlace;
14. herramienta/IA/privacidad/contingencia.

No equivalen a la totalidad del curso. Funcionan como **red de detección temprana**.

## 13. Unidad mínima de producción verificable

Todo patrón nuevo sigue:

`especificar → construir muestra → verificar → corregir → aprobar patrón → propagar`

No se exige aprobación humana para cada réplica técnica conforme a patrón aprobado.

Sí se exige cuando aparece F-P o una decisión sustantiva nueva.

## 14. Trazabilidad proporcional

Para evitar burocracia improductiva se establecen tres niveles:

### T8-L1 — Operacional reversible
Registro mínimo: objeto, fuente/patrón, estado y prueba.

### T8-L2 — Pedagógico significativo
Añade VD8, evidencia EO, criterio y resultado.

### T8-L3 — Crítico/no regresión
Añade CP7/G7, evidencia reforzada, prueba de no regresión, responsable de decisión y reverificación.

Objetos sentinela comienzan en L2 o L3.

## 15. Gobernanza H/M/IA

### Humano
Decide arquitectura, excepciones, F-P, evaluación, 75/25, equivalencia, cambios sustantivos y Gates.

### IA
Puede comparar, producir candidatos, detectar inconsistencias, revisar copy, simular recorridos, preparar evidencia, clasificar provisionalmente y proponer correcciones reversibles.

### Máquina
Puede comprobar presencia, campos, enlaces, archivos, cálculos, estados, referencias y correspondencias automatizables.

Principio:

> **Mayor velocidad operacional no reduce el umbral de autoridad humana.**

## 16. Protocolo F-P

1. detener la línea afectada;
2. clasificar la tensión;
3. documentar `objeto → fuente → limitación → impacto → alternativas → herencia`;
4. escalar si altera decisión sustantiva;
5. registrar decisión humana;
6. reanudar y reverificar.

Otros trabajos independientes pueden continuar.

## 17. Firewall F8/F9

F8 prueba que una affordance existe y funciona.

F9 prueba qué ocurre con personas reales.

VF9-01–VF9-14 permanecen reservadas. Ningún resultado F8 puede declarar, por sí solo, carga adecuada, autenticidad real de interacción, uso efectivo de feedback, percepción de presencia docente, facilidad real de navegación o sostenibilidad docente.

## 18. Auditoría Biaxial F8

### Eje horizontal
Consistencia de patrones a través de U1–U15.

### Eje vertical
Recorridos completos por nodos sentinela:

`U1 → H1 → H5 → H10 → U15`

Recorridos especializados adicionales: PROEMA, REC, feedback, evaluación, variante y recurso.

## 19. QM-B como producto especializado separado

QM-B permanece integrado conceptualmente en H1, pero su detalle operacional se mantiene en:

`15_EVALUACION_CALIDAD_Y_AUDITORIA/CIFI3065/CIFI3065_F8_H1_REGISTRO_QM-B_IMPLEMENTACION_v0.1_CANDIDATO.md`

El registro especializado contiene:

- 44 posiciones SR;
- estados QM-B;
- relación SR→objeto G4→EO→P8→VD8→CP7/G7;
- hallazgo/corrección/reverificación.

Regla crítica:

> **No se inventará ni reconstruirá desde memoria el contenido individual de los SR Standards.**

La carga detallada debe realizarse desde la fuente QM autorizada usada en F7.

Esto evita convertir H1 en una tabla monolítica y preserva la regla de producto vivo por función.

## 20. Plantilla mínima de objeto G4

- **ID:**
- **Nombre:**
- **Familia B8:**
- **Fuente canónica:**
- **Función pedagógica:**
- **Localización:**
- **Nivel T8:**
- **VD8:**
- **CP7/G7:**
- **Estado:**
- **Evidencia EO:**
- **Prueba P8:**
- **Resultado:**
- **Acción:**
- **Reverificación:**
- **Destino:**

## 21. Definition of Done H1

H1 queda listo para aprobación cuando:

1. B8-01–B8-09 están operacionalizados;
2. VD8-01–VD8-14 tienen criterios observables;
3. CP7-01–CP7-09 poseen tests de no regresión;
4. G7-01–G7-10 funcionan como stop rules;
5. existe inventario de familias G4;
6. existe jerarquía de evidencia E/EO;
7. existe biblioteca P8;
8. existe trazabilidad proporcional T8-L1/L2/L3;
9. existen 14 objetos sentinela;
10. existe gobernanza H/M/IA;
11. existe protocolo F-P;
12. existe firewall F8/F9;
13. existe Auditoría Biaxial operacional;
14. existe registro QM-B especializado separado;
15. el contenido individual de los 44 SR queda protegido contra inferencia sin fuente;
16. existe plantilla normalizada de objeto G4;
17. el documento puede operar como manual autosostenido de F8.

## 22. Dictamen candidato

**F8 Hito 1 v0.2 = CANDIDATO FORTALECIDO / APTO PARA RATIFICACIÓN HUMANA.**

La arquitectura no inicia producción G4 masiva. Establece las condiciones para que H2–H5 puedan producir objetos verificables sin perder trazabilidad ni gobernanza.

**Siguiente decisión requerida:** aprobación humana de H1 o solicitud de ajustes.
