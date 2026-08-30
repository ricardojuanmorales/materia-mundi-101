# CIFI 3065 Virtual — Materia Mundi
# F8 Hito 2 — Arquitectura Operacional LMS, Navegación y Orientación

**Versión:** 0.1 CANDIDATO  
**Fecha:** 30 de agosto de 2026  
**Estado:** CANDIDATO VISIBLE / NO CANÓNICO / PENDIENTE DE REVISIÓN HUMANA  
**Fase:** F8 — Producción operacional G4 y verificación de implementación  
**Plan rector:** `CIFI3065_F8_PLAN_ESTRATEGICO_v1.0_APROBADO.md`  
**Sistema operativo:** `CIFI3065_F8_H1_SISTEMA_MAESTRO_PRODUCCION_TRAZABILIDAD_VERIFICACION_G4_v1.0_APROBADO.md`  
**Fuente de verdad:** GitHub `main`

## 1. Mandato

H2 traduce la navegabilidad pedagógica y epistemológica validada en F7 a una arquitectura operacional LMS verificable.

Pregunta rectora:

> **¿Puede una persona entrar, reentrar y desplazarse por Materia Mundi sabiendo dónde está, qué problema importa, qué debe hacer ahora, qué evidencia debe producir o recuperar, cómo se conecta con su trayectoria y qué ocurre después, sin que la interfaz fragmente la arquitectura aprobada?**

H2 no rediseña objetivos, REC, PROEMA, H1–H10, evaluación ni interacción. Materializa y especifica su habitabilidad operacional.

## 2. Herencia obligatoria

H2 adopta:
- VD8-01 orientación persistente;
- VD8-02 navegación operativa;
- VD8-11 jerarquía Núcleo/Profundización/Exploración;
- VD8-12 terminología estudiantil;
- CP7-01 orquestación H1;
- CP7-02 señalización H10;
- CP7-08 jerarquía de recursos;
- CP7-09 control terminológico;
- G7-03 PROEMA único;
- G7-04 REC precede al medio;
- G7-05 U2/U13/U14 no son tareas paralelas;
- G7-09 jerarquía distinguible;
- G7-10 contradicciones retornan a humano.

Se aplican P8-01, P8-02, P8-03, P8-04, P8-05, P8-07, P8-08 y P8-11.

## 3. Principio de navegación

La navegación no se organiza únicamente por ubicación técnica, sino por orientación académica.

Cada punto de decisión relevante debe ayudar a reconstruir:

`dónde estoy → qué problema importa → qué hago ahora → qué evidencia uso/produzco → cómo se conecta → qué sigue`

Principio:

> **La interfaz debe revelar la arquitectura sin obligar al estudiante a aprender el backstage del diseño.**

## 4. Arquitectura macro del LMS

Se propone una arquitectura de cinco superficies persistentes.

### S1 — Entrada / Inicio

Función:
- orientar;
- informar qué hacer ahora;
- permitir reentrada;
- dar acceso a ayuda y continuidad.

Debe incluir como mínimo:
- bienvenida/orientación breve;
- “Empieza aquí” o equivalente;
- acceso al mapa del curso;
- acceso al trabajo actual;
- ayuda/soporte;
- recordatorio de sistemas longitudinales sin saturación terminológica.

### S2 — Mapa del curso

Función:
- hacer visible la trayectoria completa U1–U15;
- distinguir H1–H10;
- mostrar sistemas longitudinales sin presentarlos como tareas paralelas.

Representación conceptual:

`U1 orientación → U2 lente epistemológica → H1–H10 experiencia histórica → U13/U14 funciones PROEMA integradas → U15 recuperación/metacognición`

La representación operacional puede adaptarse al LMS, pero no puede convertir U2/U13/U14 en módulos de trabajo paralelos obligatorios si el diseño no lo requiere.

### S3 — Unidad / OVAt actual

Cada unidad debe presentar una gramática reconocible, no una plantilla rígida.

Orden funcional recomendado:
1. ubicación;
2. problema/pregunta;
3. propósito;
4. secuencia de acciones;
5. evidencia/producto;
6. criterios o acceso a ellos;
7. interacción cuando aplique;
8. recursos por jerarquía;
9. conexión longitudinal;
10. siguiente paso.

### S4 — Trayectorias longitudinales

El estudiante debe poder reconocer continuidad de:
- REC;
- PROEMA;
- feedback/revisión;
- evidencia acumulada;
- U1↔U15.

Estas trayectorias pueden expresarse mediante etiquetas, enlaces contextuales, páginas de síntesis o mecanismos equivalentes, pero no deben crear familias paralelas de tareas.

### S5 — Ayuda y soporte

Debe ser localizable persistentemente e incluir, según corresponda:
- ayuda académica;
- ayuda técnica;
- accesibilidad;
- políticas relevantes;
- privacidad/IA cuando sea necesario;
- vías institucionales de apoyo.

## 5. Arquitectura de orientación por escala

### Macro

El estudiante puede entender:
- qué es el curso;
- cómo se organiza;
- cómo progresa;
- qué cuenta como evaluación;
- dónde buscar ayuda.

### Meso

El estudiante puede reconocer:
- dónde está dentro de H1–H10;
- cómo se conecta con REC/PROEMA/U15;
- qué trayectoria continúa.

### Micro

En cada experiencia puede reconstruir:

`entrada → problema → acción → evidencia → criterio/feedback → continuidad`

## 6. U1 como portal longitudinal persistente

U1 no debe desaparecer funcionalmente después de la primera semana.

Debe mantener accesibles durante el semestre:
- mapa general;
- orientación;
- evaluación;
- apoyos;
- accesibilidad;
- integridad/autoría;
- IA y tecnología cuando proceda;
- ayuda;
- convenciones recurrentes del curso.

### Test H2-U1

Una persona que regresa en H7 o H10 debe poder volver a U1 o a su función equivalente sin atravesar una cadena innecesaria de módulos.

Estado candidato esperado: VD8-01 / T8-L3 por relación con orientación persistente.

## 7. Patrón operacional H1

H1 requiere orquestación explícita para no parecer una acumulación de tareas.

Debe hacer visible la cadena:

`caso/pregunta → foro → experiencia/laboratorio → REC → pregunta PROEMA → reflexión/DR`

No todos los componentes necesitan ser páginas separadas.

Regla:

> **La interfaz debe presentar integración funcional, no contabilización de componentes.**

### Test TNR-01

Si el LMS muestra historia, foro, laboratorio, REC, PROEMA y DR como tareas independientes sin hilo conductor, H2 falla CP7-01 aunque todos los enlaces funcionen técnicamente.

## 8. Patrón operacional H10

H10 debe distinguir con claridad:
- entrega principal;
- lentes activas;
- criterios;
- apoyos;
- evidencia reutilizada;
- conexión PROEMA/REC/metacognición.

U2/U13/U14 deben aparecer como lentes, funciones o apoyos integrados cuando corresponda, no como tres nuevas familias de tareas.

### Test TNR-02

Si una lectura razonable de la interfaz hace pensar que U2/U13/U14 son entregables paralelos, clasificar F-P.

## 9. Jerarquía Núcleo / Profundización / Exploración

La arquitectura LMS debe distinguir de manera inequívoca:

### Núcleo
Necesario para completar la experiencia/REC o cumplir criterios.

### Profundización
Amplía comprensión o ofrece andamiaje adicional sin convertirse automáticamente en requisito.

### Exploración
Opcional y orientado a agencia, curiosidad o transferencia.

Reglas:
- la posición visual no puede contradecir la jerarquía semántica;
- “opcional” no debe quedar escondido en texto fino;
- un recurso de Profundización o Exploración no puede ser requisito encubierto de evaluación;
- la jerarquía debe ser consistente sin exigir uniformidad estética absoluta.

## 10. Terminología y copy estudiantil

Se adoptan tres categorías.

### Términos estudiantiles esenciales
Pueden aparecer recurrentemente porque ayudan a navegar la experiencia.

Ejemplos funcionales derivados de F7:
- pregunta;
- evidencia;
- huella;
- conexión;
- mapa;
- trayectoria;
- revisión;
- argumento;
- decisión;
- autoría.

### Términos útiles si se explican
Pueden utilizarse cuando mejoran comprensión y se definen en lenguaje claro.

### Backstage
RIA, taxonomías de desarrollo, G0–G4 y otras categorías internas no deben exponerse como requisito de navegación salvo necesidad pedagógica demostrada.

REC y PROEMA pueden aparecer cuando forman parte real del lenguaje académico del curso, pero deben ser comprensibles desde contexto y definición, no como siglas desnudas.

## 11. Convenciones de navegación

Se propone que todo OVAt relevante permita al menos:
- volver al nivel superior;
- avanzar al siguiente paso lógico;
- reconocer qué está completo y qué sigue cuando el LMS lo permita;
- recuperar recursos o evidencias previas sin rutas laberínticas;
- distinguir enlaces internos de recursos externos cuando sea útil.

No se prescribe un botón o componente técnico específico hasta conocer las affordances finales del LMS.

## 12. Navegación hacia evidencia previa

La arquitectura debe facilitar recuperación longitudinal.

Casos prioritarios:
- feedback previo;
- Fichas REC;
- materiales PROEMA;
- borradores o evidencias reutilizadas;
- U15.

H2 solo diseña la arquitectura de localización/retorno. H3/H4 verifican mecanismos específicos de evaluación y feedback.

## 13. Mapa de localización estudiantil

En puntos críticos debe poder responderse:

### Curso
¿Dónde estoy dentro de U1–U15?

### Historia
¿Dónde estoy dentro de H1–H10?

### Trayectoria
¿Qué sistema longitudinal está activo aquí?

### Acción
¿Qué hago ahora?

### Evidencia
¿Qué debo producir, interpretar o recuperar?

### Continuidad
¿Dónde vuelve a aparecer esto?

Este mapa puede materializarse mediante breadcrumbs, encabezados, tarjetas, índices, etiquetas o patrones equivalentes. La función precede al medio.

## 14. Estados de los objetos H2

H2 trabaja inicialmente con los siguientes objetos sentinela:

| ID | Objeto | Nivel T8 | VD | CP/G7 dominante |
|---|---|---|---|---|
| H2-O01 | entrada/reentrada U1 | L3 | VD8-01 | orientación persistente |
| H2-O02 | mapa U1–U15 | L2 | VD8-02 | G7-10 |
| H2-O03 | localización H1–H10 | L2 | VD8-02 | CP7-01/02 |
| H2-O04 | orquestación H1 | L3 | VD8-01/02 | CP7-01 |
| H2-O05 | señalización H10 | L3 | VD8-02 | CP7-02/G7-05 |
| H2-O06 | retorno/continuidad | L2 | VD8-02 | G7-03/04 |
| H2-O07 | jerarquía recursos | L3 | VD8-11 | CP7-08/G7-09 |
| H2-O08 | terminología/copy | L3 | VD8-12 | CP7-09 |
| H2-O09 | acceso a ayuda | L2 | VD8-01 | QM-B/support |
| H2-O10 | rastro PROEMA/REC | L3 | VD8-02 | G7-03/04 |

Estado inicial de todos los objetos: **NI/IV según disponibilidad real del LMS**. H2 v0.1 especifica patrón; la verificación de presencia requiere inspección del curso implementado.

## 15. Pruebas H2

### PH2-01 — Entrada
Desde el punto de entrada, identificar en máximo una trayectoria razonable:
- qué hacer primero;
- cómo ver el mapa del curso;
- dónde buscar ayuda.

### PH2-02 — Reentrada
Simular retorno después de varias semanas y comprobar que orientación y mapa siguen accesibles.

### PH2-03 — Vertical biaxial
Recorrer:

`U1 → H1 → H5 → H10 → U15`

registrando rupturas de localización, lenguaje o continuidad.

### PH2-04 — Horizontal
Comparar la gramática de navegación a través de H1–H10 sin exigir uniformidad visual perfecta.

### PH2-05 — H1
Verificar TNR-01.

### PH2-06 — H10
Verificar TNR-02.

### PH2-07 — Jerarquía
Revisar muestras distribuidas para determinar si Núcleo/Profundización/Exploración se distinguen sin ambigüedad.

### PH2-08 — Terminología
Auditar copy estudiantil y marcar backstage innecesario.

### PH2-09 — Recuperación
Intentar volver desde una unidad avanzada a evidencia/feedback/material previo relevante.

### PH2-10 — Ayuda
Comprobar localización de ayuda desde entrada, unidad media y unidad avanzada.

## 16. Evidencia esperada

Según disponibilidad G4:
- EO1 capturas/registro de presencia;
- EO2 configuración/estructura LMS;
- EO3 funcionamiento de rutas;
- EO4 recorridos documentados;
- EO5 no regresión semántica y longitudinal;
- EO6 pruebas técnicas cuando proceda.

Una captura aislada no demuestra navegación operativa.

## 17. Stop rules H2

Clasificar F-P si la implementación propuesta:
- convierte PROEMA en múltiples trayectorias independientes;
- convierte U2/U13/U14 en tareas paralelas;
- hace que tecnología redefina REC;
- expone 75/25 como modificación institucional en copy de orientación;
- borra la distinción Núcleo/Profundización/Exploración;
- exige backstage para comprender qué hacer;
- altera H1/H10 de manera sustantiva.

Clasificar F-T cuando:
- un enlace está roto;
- un botón/ruta está mal configurado;
- un encabezado o etiqueta contradice un patrón ya aprobado pero la corrección es inequívoca;
- una página está fuera de secuencia sin implicación pedagógica nueva.

## 18. Frontera H2 / H3–H5

H2 define dónde y cómo se localizan objetos y trayectorias.

H3 verificará evaluación/rúbricas/gradebook/feedback.
H4 verificará interacción/presencia/continuidad PROEMA/REC.
H5 verificará accesibilidad técnica, variantes, recursos, medios, tecnología y QM-B.

H2 no consume esos Hitos, pero debe dejar puertos de navegación suficientes para ellos.

## 19. Frontera F8/F9

H2 puede demostrar:
- que la navegación existe;
- que rutas funcionan;
- que el copy orienta;
- que U1 permanece accesible;
- que la jerarquía es visible.

H2 no puede demostrar todavía:
- que estudiantes encuentran todo con facilidad real;
- que la navegación reduce dudas;
- que la arquitectura es intuitiva bajo presión de tiempo;
- que la carga percibida mejora.

Esas preguntas permanecen VF9-08/VF9-09 y señales relacionadas.

## 20. Definition of Done H2

H2 queda listo para aprobación cuando:
1. existe arquitectura macro LMS explícita;
2. U1 queda definido como portal longitudinal persistente;
3. existe mapa U1–U15;
4. H1 tiene patrón de orquestación;
5. H10 tiene patrón de señalización;
6. PROEMA/REC poseen rastro longitudinal sin tareas paralelas;
7. Núcleo/Profundización/Exploración poseen reglas operacionales;
8. terminología/copy poseen reglas estudiantiles;
9. existen convenciones de retorno/continuidad;
10. ayuda/soporte tiene ubicación funcional prevista;
11. existen 10 objetos H2 trazados;
12. existen pruebas PH2-01–PH2-10;
13. existen stop rules F-T/F-P;
14. frontera H2/H3–H5 está protegida;
15. frontera F8/F9 está protegida;
16. el producto puede operar como especificación autosostenida para montaje/verificación LMS.

## 21. Dictamen candidato

**F8 Hito 2 v0.1 = CANDIDATO DE ARQUITECTURA OPERACIONAL / PENDIENTE DE REVISIÓN HUMANA.**

El candidato convierte la navegabilidad epistemológica validada en F7 en una arquitectura LMS orientada por función, sin prescribir innecesariamente componentes técnicos antes de observar las affordances reales de la plataforma.

**Siguiente decisión requerida:** revisión humana, ajustes si proceden y aprobación antes de canonicalización o propagación del patrón H2.
