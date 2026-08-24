# CIFI 3065 Virtual — Materia Mundi
# Mapa de Ruta Maestro F0–F10

**Versión:** 1.0  
**Estado:** ACTIVO  
**Fecha:** 24 de agosto de 2026  
**Función:** carta de navegación estratégica; no sustituye Estado Maestro, Gates ni bitácoras  
**Fuente de verdad:** GitHub `main`

## 1. Propósito

Ofrecer una vista compacta y recuperable del proyecto completo para impedir que las sesiones pierdan el norte por exceso de detalle.

Debe permitir a Humano/Máquina/IA responder rápidamente:

- dónde estamos;
- qué está cerrado;
- qué puede decidirse ahora;
- qué debe esperar;
- cuál es el próximo Gate;
- cómo se relaciona cada fase con la implementación del semestre;
- qué productos sostienen continuidad y evolución.

## 2. Principios rectores transversales

1. `integrar antes que añadir`.
2. GitHub `main` = fuente versionada de verdad.
3. un producto vivo por función + Git como genealogía.
4. decidir temprano lo irreversible; diferir lo sustituible.
5. complejidad proporcional al problema.
6. Humano decide propósito, arquitectura, cambios sustantivos y Gates.
7. Máquina estructura, verifica, registra estados y trazabilidad.
8. IA analiza, integra, compara, propone y apoya decisiones reversibles bajo reglas.
9. DUA y accesibilidad se anticipan, no se remiendan al final.
10. F9 debe producir evidencia para F10 y para la siguiente iteración.

## 3. Vista ejecutiva F0–F10

| Fase | Pregunta dominante | Producto sistémico | Estado |
|---|---|---|---|
| **F0** | ¿Cómo gobernamos y hacemos recuperable el proyecto? | infraestructura, canonicalidad, protocolo, repositorio | CERRADA |
| **F1** | ¿Qué curso se está construyendo y sobre qué fundamentos? | arquitectura conceptual, FEHE, diagnóstico, decisiones | CERRADA — GO CON CONDICIONES |
| **F2** | ¿Cómo debe funcionar pedagógicamente? | RIA/REC/PSEC, DUA, evaluación, interacción, apoyos | CERRADA — GO CON CONDICIONES |
| **F3** | ¿Cómo se despliega longitudinalmente? | U1–U15, H1–H10, PROEMA, laboratorios, carga, fichas estratégicas | CERRADA — GO CON CONDICIONES |
| **F4** | ¿Qué vive y produce realmente el estudiante en cada OVAt? | Protocolo OVAt + prototipo + microdiseño profundo U1–U15 | ABIERTA |
| **F5** | ¿Funciona el diseño como sistema completo? | diseño integral + MVP didáctico + prototipo iterativo | PENDIENTE |
| **F6** | ¿Es inclusivo y tecnológicamente responsable? | DUA/IA/SAMR operacional, privacidad, sesgos, licencias | PENDIENTE |
| **F7** | ¿Cumple criterios de calidad antes de producción? | auditoría QM/QA + correcciones | PENDIENTE |
| **F8** | ¿Puede convertirse en curso operacional? | LMS, recursos definitivos, rúbricas, navegación, QA técnico | PENDIENTE |
| **F9** | ¿Qué ocurre con estudiantes reales? | piloto vivo, analíticas, encuestas, observación, iteración | PENDIENTE |
| **F10** | ¿Qué aprendimos y qué puede transferirse? | meta-evaluación, OER/difusión, mejoras, continuidad | PENDIENTE |

## 4. Fronteras de resolución

### F4

Resolver principalmente G2–G3:

- REC/resultado;
- experiencia;
- evidencia;
- evaluación;
- feedback;
- interacción;
- DUA;
- carga;
- longitudinalidad;
- requisitos funcionales de recursos.

### F5–F7

Comprobar coherencia sistémica, inclusión, tecnología responsable y calidad.

### F8

Resolver G4 para elementos concretos y sustituibles:

- documentos;
- videos;
- fuentes externas;
- simuladores;
- visualizadores;
- enlaces;
- herramientas;
- montaje LMS.

### F9

Usar el curso como laboratorio vivo controlado sin confundir iteración de bajo riesgo con rediseño estructural improvisado.

### F10

Cerrar el ciclo empírico y transferir lo aprendido al siguiente diseño/versionamiento.

## 5. Estrategia temporal del semestre

Se adopta **solapamiento controlado + ola progresiva**.

Una fase conserva su Gate conceptual, pero puede preparar componentes reversibles de la siguiente. Las unidades próximas a implementación pueden avanzar antes cuando estén suficientemente maduras según riesgo.

Ejemplo operacional:

`U1–U3 maduras → preparación F5–F8`

mientras

`U4–U8 → refinamiento`

mientras

`U9–U15 → diseño profundo`

sin perder la coherencia global ni reabrir herencias cerradas.

## 6. Umbral por riesgo

### Tipo A — arquitectónico / alto impacto

Ejemplos: REC, evaluación, PROEMA, carga, ética, Gate, cambio longitudinal.

**Autoridad:** Humano.

### Tipo B — pedagógico significativo

IA analiza y propone; humano valida cuando afecta resultados, evidencia, equidad, carga o trayectoria.

### Tipo C — operacional reversible

IA/Máquina pueden ejecutar bajo reglas aprobadas.

### Tipo D — recurso sustituible

Puede diferirse hasta F8 salvo dependencia crítica de accesibilidad, seguridad o viabilidad.

## 7. Modos Humano / Máquina / IA por tramo

### F4–F6

- humano: arquitectura, propósito, calidad pedagógica, riesgos;
- IA: análisis, síntesis, diseño candidato, comparación y auditoría asistida;
- máquina: estructura, trazabilidad, cálculos, estados y verificación.

### F7–F8

- humano: excepciones y decisiones sustantivas;
- IA: mayor apoyo a producción repetitiva y QA;
- máquina: configuración/verificación automatizable cuando sea seguro.

### F9–F10

- humano: interpretación, ética, decisiones de cambio;
- IA: patrones, síntesis de evidencia, apoyo analítico;
- máquina: captura/organización de datos y trazabilidad.

## 8. F4 en cinco hitos

1. **Activación, continuidad y gobernanza** — completado.
2. **Protocolo OVAt Materia Mundi** — teoría operativa, genealogía, patrón, matriz longitudinal, Ficha REC.
3. **OVAt prototipo profundo** — prueba representativa a G3.
4. **Calibración + Gate humano del patrón** — invariantes/condicionales/particulares.
5. **Documento Maestro U1–U15** — primer borrador profundo del curso + auditoría longitudinal.

## 9. Arquitectura longitudinal Materia Mundi

### Eje temporal

`U3–U12 = H1–H10`

### Sistemas persistentes

- U1: orientación/presencia/soporte;
- U2: epistemología;
- U13: metodología PROEMA;
- U14: producción intelectual PROEMA;
- U15: memoria, evidencias y metacognición.

Las unidades longitudinales no constituyen tareas paralelas. Se activan dentro de los OVAt cuando aportan función pedagógica necesaria.

## 10. Matriz longitudinal de intensidades

Escala inicial:

- 0 = latente;
- 1 = apoyo;
- 2 = activa;
- 3 = dominante.

Debe permitir observar continuidad y acumulación de U1/U2/U13/U14/U15 a través de H1–H10 y culminaciones.

## 11. Evolución del concepto OVAt

Genealogía de trabajo:

`OVA → OVAt original → OVAt validado → OVAt Materia Mundi`

Hipótesis F4 todavía no congelada:

> **OVAt Materia Mundi = nodo evolutivo transdisciplinario de experiencia, evidencia, interacción y continuidad, situado dentro de varias trayectorias longitudinales de aprendizaje.**

Su evolución debe quedar documentada en el Protocolo OVAt y en Git, distinguiendo herencia, evidencia previa, mutación conceptual, validación y mejoras empíricas.

## 12. MVP y primera implementación

Objetivo F8:

**Materia Mundi v1.0-MVP funcional, pedagógicamente coherente, segura, accesible y suficientemente instrumentada para aprender de la primera cohorte.**

No se busca perfección definitiva antes de F9.

## 13. F9 y F10

F9 operará como laboratorio vivo controlado:

- señales mínimas e hipótesis cuando sea útil;
- carga;
- comprensión;
- fricción;
- interacción;
- accesibilidad;
- uso;
- satisfacción/apreciación;
- evidencia de competencias.

F10 debe transformar esa evidencia en:

- mejoras priorizadas;
- meta-evaluación;
- documentación transferible;
- materiales abiertos cuando proceda;
- evolución del protocolo y del OVAt;
- preparación de una versión futura.

## 14. Uso de este mapa

Este documento debe consultarse al inicio de sesiones de alta complejidad o cuando aparezca riesgo de deriva.

No se actualiza por cada detalle. Sólo cuando cambien:

- estado de una fase;
- Gate;
- arquitectura macro;
- estrategia de implementación;
- gobernanza H/M/IA;
- definición/protocolo central;
- rumbo F0–F10.
