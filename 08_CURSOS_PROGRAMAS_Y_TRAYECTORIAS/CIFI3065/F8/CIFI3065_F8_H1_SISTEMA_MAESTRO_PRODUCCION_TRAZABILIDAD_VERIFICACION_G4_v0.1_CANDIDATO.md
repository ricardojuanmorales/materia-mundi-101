# CIFI 3065 Virtual — Materia Mundi
# F8 Hito 1 — Sistema Maestro de Producción, Trazabilidad y Verificación G4

**Versión:** 0.1 CANDIDATO  
**Fecha:** 29 de agosto de 2026  
**Estado:** CANDIDATO VISIBLE / NO CANÓNICO / PENDIENTE DE REVISIÓN HUMANA  
**Fase:** F8 — Producción operacional G4 y verificación de implementación  
**Plan rector:** `CIFI3065_F8_PLAN_ESTRATEGICO_v1.0_APROBADO.md`  
**Fuente de verdad para decisiones aprobadas:** GitHub `main`

## 1. Mandato

Hito 1 establece el sistema operativo con el cual F8 producirá, rastreará, verificará y demostrará G4.

No pretende construir todavía el curso en escala. Pretende asegurar que ningún patrón se propague antes de saber:

`qué debe existir → por qué → dónde → cómo se construye → cómo se prueba → qué evidencia deja → qué condición protege → quién puede decidir cambios → qué ocurre si falla`

Principio rector:

> **No replicar un patrón G4 antes de saber cómo demostrar que es correcto.**

## 2. Herencia metodológica directa F7→F8

F8 hereda de F7:

- arquitectura Q1–Q4;
- cadena maestra de alineación;
- jerarquía de evidencia E0–E4;
- doble pase QM-A/F7 y QM-B/F8;
- 11 casos críticos CC7-01–CC7-11;
- CP7-01–CP7-09;
- G7-01–G7-10;
- VD8-01–VD8-14;
- VF9-01–VF9-14;
- Auditoría Biaxial Materia Mundi;
- regla contra deuda pedagógica oculta.

F8 transforma el patrón F7:

`criterio → evidencia canónica → hallazgo → estado → severidad → corrección → nueva evidencia`

en:

`requisito aprobado → objeto G4 → implementación → evidencia operacional → prueba → resultado → corrección → reverificación → destino`

## 3. Definición operacional de implementación correcta

> **Una implementación G4 es correcta cuando el objeto implementado existe, funciona, es localizable, conserva la función pedagógica aprobada, satisface sus condiciones de no regresión, produce evidencia reproducible y no consume prematuramente preguntas empíricas reservadas para F9.**

La existencia de un objeto no demuestra por sí sola corrección.

## 4. Corpus operativo F8

### Capa A — Autoridad y arquitectura

- prontuario oficial y fuentes institucionales;
- PSEC;
- RIA/REC;
- arquitectura conceptual F1;
- evaluación/progreso F2.

### Capa B — Arquitectura longitudinal

- U1–U15;
- H1–H10;
- PROEMA;
- integración longitudinal F3/F5;
- U1↔U15;
- Laboratorio Expandido / REC.

### Capa C — Microdiseño

- Protocolo OVAt Materia Mundi aprobado;
- Documento Maestro de Microdiseño U1–U15 aprobado.

### Capa D — Coherencia F5

- productos H1–H5 F5;
- Documento Maestro F5;
- Auditoría F5.

### Capa E — Inclusión y responsabilidad F6

- Marco Maestro de Inclusión y Responsabilidad;
- Matriz DUA–Accesibilidad–Equivalencia;
- Gobernanza IA/Datos/Sesgos/Proveniencia;
- Pertinencia Tecnológica/SAMR/Licenciamiento;
- Documento Maestro F6;
- Auditoría F6.

### Capa F — Calidad F7

- Plan Estratégico F7;
- H1 Marco Maestro de Calidad/QM/Corpus;
- H2 Matriz Maestra de Alineación y Evaluación;
- H3 Auditoría de Experiencia/Claridad/Navegación/Interacción/Feedback;
- H4 Registro de Casos Críticos y CP7;
- H5 Auditoría Final;
- Documento Maestro F7;
- Auditoría Sistémica F7;
- Gate F7→F8.

### Capa G — Control vigente F8

- `00_CONTROL_MAESTRO/ESTADO_MAESTRO_CIFI3065_v11.0.md`;
- `00_CONTROL_MAESTRO/MANIFEST_CANONICO_CIFI3065_v9.0.md`;
- `00_CONTROL_MAESTRO/CIFI3065_MAPA_RUTA_MAESTRO_F0-F10_v1.0.md`;
- `08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/CIFI3065/F8/CIFI3065_F8_PLAN_ESTRATEGICO_v1.0_APROBADO.md`.

## 5. Jerarquía de evidencia F8

Se preserva E0–E4 y se añade una clasificación operacional complementaria.

### Autoridad

- **E0 — Autoridad:** prontuario, política o decisión institucional.
- **E1 — Canónica:** documento aprobado/oficial.
- **E2 — Canónica compuesta:** acto de aprobación + contenido sustantivo ratificado.
- **E3 — Genealógica:** antecedente/candidato sin autoridad independiente.
- **E4 — Diferida:** evidencia que solo puede existir en implementación o uso real.

### Evidencia operacional F8

- **EO1 — Presencia:** demuestra que el objeto existe.
- **EO2 — Configuración:** demuestra cómo está configurado.
- **EO3 — Función:** demuestra que realiza la operación esperada.
- **EO4 — Recorrido:** demuestra que puede localizarse y utilizarse dentro de una trayectoria.
- **EO5 — Equivalencia/no regresión:** demuestra conservación de función, criterio, REC y dignidad.
- **EO6 — Técnica especializada:** accesibilidad, enlace, medio, licencia, vendor statement, privacidad, interoperabilidad o cálculo.

Una afirmación fuerte no puede descansar únicamente en EO1 cuando exige EO3–EO6.

## 6. Estados operacionales

- **NI** — No implementado.
- **IP** — Implementación parcial.
- **IV** — Implementado, pendiente de verificación.
- **V** — Verificado.
- **V-C** — Verificado con condición.
- **F-T** — Fallo técnico corregible dentro de F8.
- **F-P** — Posible contradicción pedagógica/regresión; requiere gobernanza humana.
- **NA** — No aplicable con justificación.

## 7. Inventario maestro inicial de familias de objetos G4

### B8-01 — LMS y navegación

Objetos iniciales:
- shell del curso;
- página/espacio de entrada;
- orientación persistente;
- estructura U1–U15;
- rutas H1–H10;
- señalización H10;
- navegación adelante/atrás;
- índices/menús;
- convenciones visuales y textuales;
- mecanismos de retorno/continuidad.

VD principales: VD8-01, VD8-02, VD8-11, VD8-12.

### B8-02 — Evaluación, rúbricas y gradebook

Objetos iniciales:
- actividades evaluadas;
- rúbricas;
- criterios visibles;
- categorías/columnas de calificación;
- cálculo 75/25;
- representación estudiantil de calificaciones;
- instrucciones evaluativas;
- mecanismos de recuperación de evidencia.

VD principales: VD8-03, VD8-04, VD8-06, VD8-08, VD8-09.

### B8-03 — Foros, interacción y presencia

Objetos iniciales:
- foros históricos;
- instrucciones de participación;
- criterios de respuesta sustantiva;
- presencia docente planificada;
- mecanismos de interacción entre estudiantes;
- señalización de función longitudinal.

VD principales: VD8-05, VD8-07, VD8-08.

### B8-04 — Feedback y recuperación

Objetos iniciales:
- canales de feedback;
- comentarios/rúbricas recuperables;
- instrucciones de reutilización;
- vínculos entre feedback y revisiones posteriores;
- recuperación de evidencia previa.

VD principales: VD8-06, VD8-08, VD8-09.

### B8-05 — Continuidad longitudinal

Objetos iniciales:
- PROEMA como trayectoria única;
- puntos de activación U13/U14;
- REC progresivo;
- vínculos U1↔U15;
- recuperación U15;
- continuidad entre H1–H10;
- lentes U2/U13/U14 integrados.

VD principales: VD8-07, VD8-08, VD8-09.

### B8-06 — Accesibilidad y variantes

Objetos iniciales:
- variantes accesibles;
- textos alternativos;
- documentos accesibles;
- subtítulos/transcripciones;
- navegación por teclado cuando aplique;
- formatos alternativos;
- documentación de equivalencia.

VD principal: VD8-10, con VD8-13.

### B8-07 — Jerarquía de recursos y copy estudiantil

Objetos iniciales:
- etiquetas Núcleo/Profundización/Exploración;
- instrucciones estudiantiles;
- glosario/lenguaje necesario;
- control de términos backstage;
- copy de orientación;
- patrones de presentación de recursos.

VD principales: VD8-11, VD8-12.

### B8-08 — Recursos, medios, licencias y enlaces

Objetos iniciales:
- lecturas;
- archivos;
- imágenes;
- videos;
- fuentes externas;
- visualizadores/simuladores;
- enlaces;
- licencias;
- procedencia;
- declaraciones de accesibilidad de proveedores cuando correspondan.

VD principal: VD8-13.

### B8-09 — Tecnología, IA, privacidad y contingencias

Objetos iniciales:
- herramientas tecnológicas;
- integraciones;
- usos autorizados de IA;
- avisos/criterios de privacidad;
- minimización de datos;
- alternativas/contingencias;
- documentación de proveedor;
- mecanismos de atribución/proveniencia cuando proceda.

VD principal: VD8-14, con VD8-13.

## 8. Matriz maestra VD8 — criterio observable — evidencia — prueba

| VD | Criterio observable F8 | Evidencia mínima | Prueba primaria |
|---|---|---|---|
| VD8-01 | orientación visible y persistente en puntos críticos | EO1+EO4 | recorrido de entrada y reentrada |
| VD8-02 | rutas esenciales permiten completar trayectorias sin callejones | EO4 | recorrido biaxial/navegación |
| VD8-03 | rúbricas/criterios accesibles antes de entregar | EO1+EO3 | inspección estudiante + acceso |
| VD8-04 | configuración representa 75/25 sin falsear autoridad curricular | EO2+EO3+EO6 | cálculo + inspección semántica |
| VD8-05 | cada foro expresa problema, evidencia, razonamiento y función | EO1+EO3 | prueba semántica de foro |
| VD8-06 | feedback previo puede localizarse y reutilizarse | EO3+EO4 | ciclo entrega→feedback→recuperación |
| VD8-07 | PROEMA se reconoce como investigación única a través del curso | EO4+EO5 | recorrido longitudinal PROEMA |
| VD8-08 | REC reaparece/progresa sin convertirse en ruido o tareas paralelas | EO4+EO5 | trazado REC H1–H10 |
| VD8-09 | U15 recupera evidencia existente y minimiza reconstrucción | EO3+EO5 | prueba de procedencia de evidencia |
| VD8-10 | variantes son accesibles y preservan REC/criterio/función/dignidad | EO5+EO6 | prueba doble accesibilidad+equivalencia |
| VD8-11 | Núcleo/Profundización/Exploración son distinguibles | EO1+EO4 | inspección transversal |
| VD8-12 | lenguaje estudiantil evita backstage innecesario y controla términos | EO1+EO5 | auditoría de copy/terminología |
| VD8-13 | recursos/enlaces/licencias/accesibilidad técnica son verificables | EO3+EO6 | QA técnico de recursos |
| VD8-14 | tecnología/IA/privacidad cumplen F6 y tienen contingencia | EO2+EO5+EO6 | auditoría sociotécnica |

## 9. Tests de no regresión CP7

### TNR-01 / CP7-01 — Orquestación H1

Pregunta: ¿la implementación hace reconocible la secuencia `caso/pregunta → foro → experiencia → REC → pregunta PROEMA → reflexión` sin presentarla como pila fragmentada?

Fallo potencial: F-P si altera estructura o función; F-T si es señalización/configuración corregible.

### TNR-02 / CP7-02 — Señalización H10

Pregunta: ¿H10 distingue entrega principal, lentes, criterios, apoyos y evidencia reutilizada?

### TNR-03 / CP7-03 — Foros analíticos

Pregunta: ¿el foro exige función analítica y no simple cuota de presencia?

### TNR-04 / CP7-04 — Feedback utilizable

Pregunta: ¿el feedback tiene destino posterior plausible y recuperable?

### TNR-05 / CP7-05 — U15 sin reentrega

Pregunta: ¿U15 reutiliza evidencia existente y delimita con claridad cualquier producción nueva?

### TNR-06 / CP7-06 — Gobernanza 75/25

Pregunta: ¿la representación operacional preserva la equivalencia piloto sin presentarla como modificación institucional?

Resultado F-P obligatorio si la interfaz/copy falsea autoridad curricular.

### TNR-07 / CP7-07 — Equivalencia de variantes

Pregunta: ¿cada variante preserva `REC + criterio + función + dignidad académica`?

### TNR-08 / CP7-08 — Jerarquía de recursos

Pregunta: ¿Núcleo/Profundización/Exploración son inequívocos y los opcionales no parecen obligatorios?

### TNR-09 / CP7-09 — Control terminológico

Pregunta: ¿los términos internos/backstage se ocultan, traducen o explican según necesidad estudiantil?

## 10. Integración G7-01–G7-10 al mecanismo de decisión

- G7-01: toda verificación relevante registra CP asociada.
- G7-02: cualquier cambio 75/25 que parezca curricular = F-P.
- G7-03: fragmentación de PROEMA en múltiples investigaciones = F-P.
- G7-04: herramienta que redefine REC = F-P.
- G7-05: U2/U13/U14 convertidas en familias paralelas de entrega = F-P.
- G7-06: U15 con reconstrucción innecesaria = F-P o F-T según origen.
- G7-07: variante que reduce criterio/función/dignidad = F-P.
- G7-08: foro convertido en cuota vacía = F-P si cambia función; F-T si copy/configuración reparable.
- G7-09: jerarquía invisible = F-T salvo que revele conflicto de arquitectura.
- G7-10: contradicción con herencia F1–F7 = F-P y retorno humano.

## 11. Biblioteca inicial de pruebas F8

### P8-01 — Prueba de presencia
¿Existe el objeto esperado y es accesible en su localización prevista?

### P8-02 — Prueba de configuración
¿Campos, permisos, fechas, pesos, condiciones y parámetros corresponden a la especificación?

### P8-03 — Prueba funcional
¿El objeto realiza realmente la función prevista?

### P8-04 — Prueba semántica
¿El lenguaje visible comunica la función correcta sin alterar pedagogía o autoridad?

### P8-05 — Prueba de recorrido
¿Puede completarse el trayecto estudiante de principio a fin y volver a contexto?

### P8-06 — Prueba matemática
¿Pesos, totales, categorías y cálculos producen el resultado esperado?

### P8-07 — Prueba de accesibilidad técnica
¿El artefacto satisface requisitos técnicos aplicables de accesibilidad?

### P8-08 — Prueba de equivalencia
¿La alternativa preserva REC, criterio, función y dignidad académica?

### P8-09 — Prueba longitudinal
¿El objeto mantiene continuidad con trabajo previo/posterior?

### P8-10 — Prueba de no regresión
¿La implementación preserva CP7/G7 y herencias protegidas?

### P8-11 — Prueba de recurso
¿Enlace, archivo, licencia, procedencia, medio y contingencia son adecuados y verificables?

### P8-12 — Prueba sociotécnica
¿Tecnología/IA/privacidad/minimización/proveniencia/contingencia preservan F6?

## 12. Perfil de evidencia por riesgo

### Riesgo bajo / Tipo C–D

Evidencia mínima típica: EO1+EO3.

### Riesgo pedagógico significativo / Tipo B

Evidencia mínima típica: EO1+EO3+EO5, con trazabilidad E1/E2.

### Riesgo arquitectónico / Tipo A

Evidencia mínima típica: E0/E1 + EO2/EO3/EO5; cualquier contradicción se clasifica F-P.

Principio:

> **La evidencia debe ser proporcional a la afirmación y al riesgo.**

## 13. Gobernanza H/M/IA operacional

### Humano obligatorio

- cambios de REC/RIA/criterios;
- evaluación y gobernanza 75/25;
- cambios de función de PROEMA;
- cambios de U1/U2/U13/U14/U15;
- equivalencia sustantiva;
- aceptación de F-P;
- excepciones estructurales;
- Gates.

### IA autorizada bajo reglas

- generar candidatos de copy;
- comparar objeto con especificación;
- detectar inconsistencias;
- preparar matrices;
- simular recorridos;
- revisar redundancia/terminología;
- proponer corrección F-T;
- preparar evidencia y reportes;
- clasificar provisionalmente.

### Máquina autorizada bajo reglas

- comprobar presencia/ausencia;
- enlaces;
- archivos;
- campos;
- permisos/estados cuando accesibles;
- cálculos;
- correspondencias;
- versiones;
- estructura;
- pruebas repetibles automatizables.

## 14. Protocolo formal F-P

### Paso 1 — Detener propagación

No replicar la decisión/objeto afectado.

### Paso 2 — Clasificar

`F-T técnico | ambigüedad de especificación | F-P pedagógico | regresión CP7/G7`

### Paso 3 — Registrar

`ID objeto → fuente → requisito → implementación → contradicción → impacto → herencia → alternativas`

### Paso 4 — Escalar

Toda alteración sustantiva pasa a decisión humana.

### Paso 5 — Resolver y reverificar

Solo después de decisión explícita se modifica la línea afectada.

## 15. Firewall F8/F9

### F8 sí puede afirmar

- existe orientación;
- la navegación funciona en prueba;
- el foro comunica función;
- el feedback es recuperable;
- PROEMA conserva continuidad estructural;
- REC es trazable;
- U15 reutiliza evidencia;
- la variante es equivalente por diseño/implementación;
- presencia docente está operacionalizada.

### F8 no puede afirmar aún

- carga H1 adecuada;
- carga H10 adecuada;
- fragmentación percibida reducida;
- foros auténticos en uso;
- feedback realmente utilizado;
- continuidad PROEMA experimentada;
- progresión REC internalizada;
- orientación intuitiva en estudiantes reales;
- fricción de navegación real;
- eficacia empírica de variantes;
- inclusión real;
- carga U15 sostenible;
- presencia docente percibida;
- sostenibilidad docente real.

Estas corresponden a VF9-01–VF9-14.

Regla:

> **Una affordance implementada no equivale a un comportamiento demostrado.**

## 16. Estrategia QM-B

QM-B verifica implementación concreta de aquello que F7 dejó como QM-RI o condicionado a G4.

### Evidencia QM-B admisible

- páginas LMS;
- configuraciones;
- archivos;
- rúbricas;
- gradebook;
- navegación;
- foros;
- recursos/medios;
- enlaces;
- evidencia de accesibilidad;
- documentación de herramienta;
- licencia/procedencia;
- vendor statement cuando aplique;
- contingencia;
- prueba funcional.

### Estados QM-B

- QM-B-C — Conforme.
- QM-B-CO — Conforme con observación.
- QM-B-F — Fallo de implementación.
- QM-B-GOV — Implica gobernanza humana.
- QM-B-NA — No aplicable justificado.

Cadena:

`QM SR → requisito F7 → objeto G4 → evidencia EO → VD8 → CP7/G7 → resultado`

F8 no afirma certificación QM, reconocimiento QM ni revisión oficial de Quality Matters.

## 17. Auditoría Biaxial operacional F8

### Eje horizontal

Comparar el mismo patrón a través de U1–U15:
- orientación;
- navegación;
- REC;
- feedback;
- terminología;
- jerarquía;
- variantes;
- criterios.

### Eje vertical

Recorridos completos por nodos sentinela:

`U1 → H1 → H5 → H10 → U15`

Recorridos especializados:
- PROEMA;
- feedback;
- evaluación;
- variante;
- recurso/medio;
- foro.

## 18. Regla de patrón antes de propagación

Todo patrón repetible debe pasar:

`especificar → construir muestra → P8 aplicables → corregir → aprobar patrón → propagar`

Patrones iniciales candidatos:
- unidad LMS;
- foro;
- rúbrica;
- variante;
- recurso;
- feedback;
- navegación.

La aprobación técnica del patrón no puede aprobar una nueva decisión pedagógica sustantiva.

## 19. Registro mínimo de objeto verificable

Plantilla:

| Campo | Contenido |
|---|---|
| ID | G4-XXX |
| Familia B8 | B8-XX |
| Nombre | objeto |
| Fuente canónica | ruta/sección |
| Función | función aprobada |
| VD8 | VD8-XX |
| CP7/G7 | controles |
| QM-B | estándar cuando aplique |
| Localización | LMS/recurso/configuración |
| Riesgo | A/B/C/D |
| Estado | NI/IP/IV/V/V-C/F-T/F-P/NA |
| Evidencia requerida | EO1–EO6 |
| Pruebas | P8-XX |
| Resultado | hallazgo |
| Acción/destino | corrección/escalamiento/cierre |

## 20. Registro inicial de objetos sentinela

| ID | Objeto | B8 | VD8 | CP/G7 dominante | Riesgo | Prueba inicial |
|---|---|---|---|---|---|---|
| G4-S01 | Entrada/orientación U1 | B8-01 | VD8-01/02 | G7-10 | B | P8-04/05/10 |
| G4-S02 | Orquestación H1 | B8-01/03/05 | VD8-02/05/07/08 | CP7-01 | A | P8-05/09/10 |
| G4-S03 | Foro histórico patrón | B8-03 | VD8-05 | CP7-03/G7-08 | B | P8-03/04/10 |
| G4-S04 | Configuración 75/25 | B8-02 | VD8-04 | CP7-06/G7-02 | A | P8-02/06/10 |
| G4-S05 | Feedback recuperable | B8-04 | VD8-06 | CP7-04 | B | P8-03/05/09 |
| G4-S06 | PROEMA longitudinal | B8-05 | VD8-07 | G7-03 | A | P8-05/09/10 |
| G4-S07 | REC progresivo | B8-05 | VD8-08 | G7-04 | A | P8-09/10 |
| G4-S08 | H10 señalizado | B8-01/05/07 | VD8-02/08/12 | CP7-02/G7-05 | A | P8-04/05/10 |
| G4-S09 | U15 recuperación | B8-04/05 | VD8-09 | CP7-05/G7-06 | A | P8-03/09/10 |
| G4-S10 | Variante patrón | B8-06 | VD8-10 | CP7-07/G7-07 | A | P8-07/08/10 |
| G4-S11 | Jerarquía de recursos | B8-07 | VD8-11 | CP7-08/G7-09 | B | P8-04/05 |
| G4-S12 | Copy/terminología | B8-07 | VD8-12 | CP7-09 | B | P8-04/10 |
| G4-S13 | Recurso/medio patrón | B8-08 | VD8-13 | G7-04 | C/B | P8-07/11 |
| G4-S14 | Tecnología/IA patrón | B8-09 | VD8-14 | G7-04/10 | A/B | P8-10/12 |

## 21. Definition of Done H1

H1 puede proponerse para aprobación cuando:

1. B8-01–B8-09 estén operacionalizados;
2. VD8-01–VD8-14 tengan criterios observables;
3. CP7-01–CP7-09 tengan tests de no regresión;
4. G7-01–G7-10 estén integradas al mecanismo de decisión;
5. exista inventario inicial de familias y objetos G4;
6. objetos sentinela posean fuente, riesgo y prueba;
7. exista jerarquía de evidencia F8;
8. exista biblioteca P8 de pruebas;
9. exista gobernanza H/M/IA operacional;
10. exista protocolo F-P;
11. exista firewall F8/F9;
12. exista estrategia QM-B;
13. exista patrón de trazabilidad extremo a extremo;
14. exista regla de muestra antes de propagación;
15. el documento funcione como manual operativo autosostenido de F8.

## 22. Autoevaluación del candidato v0.1

Estado provisional del DoD:

- 1–15: **cubiertos estructuralmente en el candidato**.
- Falta para PASS humano: revisión de suficiencia, precisión de inventario, granularidad de pruebas, relación con los 44 SR de QM cuando se construya el registro detallado QM-B y confirmación de que ninguna matriz introduce una decisión pedagógica nueva.

No se declara todavía PASS.

## 23. Próximo movimiento propuesto

Realizar revisión humana de H1 v0.1 con tres preguntas:

1. ¿el sistema ofrece trazabilidad suficiente sin caer en burocracia improductiva?;
2. ¿los 14 objetos sentinela cubren los riesgos que realmente pueden multiplicarse en producción?;
3. ¿la distinción `F-T vs F-P` es suficientemente clara para permitir producción expedita sin erosionar gobernanza?

Después de ajustes y aprobación humana, H1 podrá canonicalizarse como v1.0 APROBADO y autorizar H2.

## 24. Estado

**F8 Hito 1 v0.1 = CANDIDATO VISIBLE / NO CANÓNICO / APTO PARA REVISIÓN HUMANA.**

No se ha iniciado producción G4 en escala.
