# CIFI 3065 Virtual — Materia Mundi
# F8 Hito 1 — Sistema Maestro de Producción, Trazabilidad y Verificación G4

**Versión:** 1.0 APROBADO  
**Fecha de aprobación humana:** 30 de agosto de 2026  
**Estado:** APROBADO / CANÓNICO  
**Fase:** F8 — Producción operacional G4 y verificación de implementación  
**Plan rector:** `CIFI3065_F8_PLAN_ESTRATEGICO_v1.0_APROBADO.md`  
**Fuente de verdad:** GitHub `main`

## 0. Dictamen de aprobación

El candidato `CIFI3065_F8_H1_SISTEMA_MAESTRO_PRODUCCION_TRAZABILIDAD_VERIFICACION_G4_v0.2_CANDIDATO.md` fue aprobado por decisión humana el 30 de agosto de 2026.

Se ratifican como parte del Hito 1:
- trazabilidad proporcional T8-L1/L2/L3;
- 14 objetos sentinela como red de detección temprana;
- distinción F-T / F-P;
- jerarquía de evidencia E0–E4 + EO1–EO6;
- biblioteca P8;
- tests de no regresión CP7;
- stop rules G7;
- gobernanza H/M/IA;
- protocolo F-P;
- firewall F8/F9;
- Auditoría Biaxial operacional;
- registro QM-B especializado separado.

## 1. Mandato

H1 establece el sistema operativo mediante el cual F8 producirá, rastreará, verificará y demostrará G4.

Principio rector:

> **No replicar un patrón G4 antes de saber cómo demostrar que es correcto.**

Cadena operacional:

`requisito aprobado → objeto G4 → implementación → evidencia operacional → prueba → resultado → corrección → reverificación → destino`

## 2. Implementación correcta

> **Una implementación G4 es correcta cuando el objeto existe, funciona, es localizable, conserva la función pedagógica aprobada, satisface sus condiciones de no regresión, deja evidencia reproducible y no consume preguntas empíricas reservadas para F9.**

Existencia ≠ funcionamiento. Funcionamiento ≠ fidelidad pedagógica.

## 3. Evidencia

Se preservan E0–E4 y se adoptan:
- EO1 Presencia;
- EO2 Configuración;
- EO3 Función;
- EO4 Recorrido;
- EO5 Equivalencia/no regresión;
- EO6 Técnica especializada.

La evidencia aumenta con la fuerza de la afirmación y el riesgo del objeto.

## 4. Estados operacionales

NI; IP; IV; V; V-C; F-T; F-P; NA.

F-T puede corregirse técnicamente cuando la arquitectura ya determina la solución.
F-P detiene la línea afectada y requiere gobernanza humana cuando la solución alteraría una decisión sustantiva.

## 5. Backlog operacional

B8-01 LMS/navegación; B8-02 evaluación/rúbricas/gradebook; B8-03 foros/interacción/presencia; B8-04 feedback/recuperación; B8-05 continuidad longitudinal; B8-06 accesibilidad/variantes; B8-07 jerarquía/copy; B8-08 recursos/medios/licencias/enlaces; B8-09 tecnología/IA/privacidad/contingencias.

## 6. Verificaciones activas

VD8-01–VD8-14 quedan operacionalizadas mediante criterios observables, evidencia EO y pruebas P8.

## 7. Tests de no regresión

TNR-01–TNR-09 implementan CP7-01–CP7-09.

G7-01–G7-10 operan como stop rules. Toda contradicción sustantiva se clasifica F-P.

## 8. Biblioteca P8

P8-01 Presencia; P8-02 Configuración; P8-03 Función; P8-04 Recorrido; P8-05 Semántica; P8-06 Matemática; P8-07 Alineación; P8-08 No regresión; P8-09 Equivalencia; P8-10 Accesibilidad técnica; P8-11 Longitudinal; P8-12 Sociotécnica.

## 9. Objetos sentinela

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

## 10. Unidad mínima de producción verificable

`especificar → construir muestra → verificar → corregir → aprobar patrón → propagar`

## 11. Trazabilidad proporcional

- T8-L1 Operacional reversible.
- T8-L2 Pedagógico significativo.
- T8-L3 Crítico/no regresión.

## 12. Gobernanza H/M/IA

Humano decide arquitectura, excepciones, F-P, evaluación, 75/25, equivalencia, cambios sustantivos y Gates.
IA analiza, compara, produce candidatos, simula recorridos y propone correcciones reversibles.
Máquina verifica estados y correspondencias automatizables.

## 13. Firewall F8/F9

F8 verifica implementación. F9 valida comportamiento real. VF9-01–VF9-14 permanecen preservadas.

## 14. Auditoría Biaxial F8

Eje horizontal: consistencia de patrones U1–U15.
Eje vertical: `U1 → H1 → H5 → H10 → U15`, con recorridos adicionales PROEMA, REC, feedback, evaluación, variantes y recursos.

## 15. QM-B

El detalle operacional se mantiene en:
`15_EVALUACION_CALIDAD_Y_AUDITORIA/CIFI3065/CIFI3065_F8_H1_REGISTRO_QM-B_IMPLEMENTACION_v0.1_CANDIDATO.md`.

El contenido individual de los 44 SR Standards no se reconstruye desde memoria; se carga únicamente desde la fuente QM autorizada usada en F7.

## 16. Definition of Done

Los 17 requisitos del DoD H1 quedan satisfechos por decisión humana.

## 17. Dictamen humano

**F8 Hito 1 = APROBADO / CANÓNICO.**

**Resultado:** PASS ESTRUCTURAL OPERACIONAL.

**Efecto:** Hito 2 queda AUTORIZADO para desarrollo como CANDIDATO visible bajo la secuencia `análisis/reflexión → candidato visible → revisión humana → ajustes → aprobación → canonicalización`.
