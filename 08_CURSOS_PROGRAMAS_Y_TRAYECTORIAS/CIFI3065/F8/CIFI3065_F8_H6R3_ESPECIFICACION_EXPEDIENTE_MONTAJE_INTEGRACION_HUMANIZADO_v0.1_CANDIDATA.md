# CIFI 3065 Virtual — Materia Mundi
# F8 H6-R3.3 — Especificación del Expediente de Montaje e Integración Humanizado

**Versión:** 0.1 CANDIDATA  
**Fecha:** 1 de septiembre de 2026  
**Estado:** CANDIDATA PARA REVISIÓN HUMANA / NO CANÓNICA  
**Fase:** F8 — Implementación y Readiness para F9  
**Hito:** H6-R3.3 — Rediseño humanizado del Expediente de Montaje e Integración  
**Fuente de verdad:** GitHub `main`  
**Bases autorizantes:** Adenda H6-R3.1 v1.0 APROBADA + Arquitectura A↔B H6-R3.2 v1.0 APROBADA  
**Genealogía:** Especificación Maestra del Expediente Unitario G4 v0.2 CANDIDATO (H6-R2)

---

## 1. Propósito

Definir la forma, profundidad y lógica de lectura del **Expediente de Montaje e Integración** que permanecerá en Carril A y servirá como plano estructural para activar sesiones de creación y montaje en Carril B.

El expediente debe cumplir simultáneamente cuatro funciones:

1. **orientar** al profesor mediante sentido y trayectoria;
2. **proteger** decisiones pedagógicas y relaciones sistémicas aprobadas;
3. **habilitar** creación situada sin predecir todos los detalles prácticos;
4. **verificar** que la unidad puede viajar A→B→A sin pérdida de coherencia ni trazabilidad.

Principio rector:

> **El expediente debe ser suficientemente estructural para gobernar y suficientemente humano para inspirar y orientar la creación.**

---

## 2. Corrección respecto a H6-R2

La Especificación v0.2 de H6-R2 fortaleció correctamente ejecutabilidad, contratos G4-C, copy mínimo y QA por objeto. Ese trabajo se conserva como genealogía y reserva técnica.

H6-R3 corrige una deriva detectada: exigir al expediente que anticipe demasiado copy final, selección concreta de recursos, producción multimedia, configuración fina LMS y microdecisiones que sólo adquieren sentido durante el montaje situado.

Se sustituye la pregunta dominante:

> “¿Puede una persona abrir el LMS y montar toda la unidad sin reinterpretación?”

por una pregunta más precisa:

> **¿Puede el profesor comprender qué debe preservar, qué debe lograr, qué puede decidir localmente y qué debe devolver a gobernanza, sin reconstruir F1–F8?**

El expediente deja de ser un pre-montaje exhaustivo. Pasa a ser un **contrato de sentido, alineación, libertad y límites**.

---

## 3. Usuario principal y experiencia de lectura

El usuario primario del expediente es el profesor que va a crear o montar la unidad, acompañado por IA y máquina.

Por tanto, el expediente debe permitir tres velocidades de lectura:

### Lectura 1 — Orientarse
En pocos minutos el profesor debe entender:
- por qué existe la unidad;
- qué transformación busca;
- de dónde viene y hacia dónde va;
- qué no puede perderse;
- qué queda abierto para creación.

### Lectura 2 — Diseñar
El profesor debe poder recorrer las categorías estructurales necesarias para tomar decisiones de contenido, experiencia, evidencia, evaluación, recursos e interacción.

### Lectura 3 — Verificar
Cuando sea necesario, profesor/IA/máquina deben poder entrar en anexos técnicos, G4, QA, genealogía, IDs y contratos de control.

Regla:

> **La profundidad técnica debe estar disponible sin convertirse en la puerta de entrada.**

---

## 4. Arquitectura de lectura por capas

Cada expediente tendrá cuatro capas.

### CAPA I — Sentido y orientación humana

Debe poder leerse de corrido y funcionar casi como una conversación de diseño.

Incluye:
1. identidad y nombre de la unidad;
2. correspondencia H si aplica;
3. propósito humano;
4. transformación intelectual/experiencial;
5. pregunta o tensión rectora;
6. qué recupera;
7. qué prepara;
8. experiencia que queremos provocar;
9. relaciones filosóficas, científicas, históricas y transdisciplinarias;
10. qué no debe perderse durante el montaje;
11. síntesis de libertad creativa disponible en B.

### CAPA II — Mapa estructural de la unidad

Presenta en una página o bloque compacto:

`entrada → experiencia → evidencia → criterio → feedback → continuidad`.

Incluye además:
- posición longitudinal;
- REC dominante;
- relación PROEMA/DR;
- evaluación aplicable;
- interacción principal;
- carga objetivo;
- recursos por función;
- accesibilidad/adaptabilidad;
- principales decisiones pendientes;
- estado de readiness G4.

### CAPA III — Fichas de diseño por categorías

Aquí se desarrolla sólo el detalle que gobierna o habilita creación.

Categorías base:
- REC;
- evidencia;
- evaluación;
- continuidad;
- carga;
- accesibilidad;
- adaptabilidad;
- interacción;
- PROEMA/DR;
- recursos;
- límites;
- decisiones pendientes;
- G4;
- QA.

### CAPA IV — Anexos técnicos y de trazabilidad

Sólo cuando aporten valor:
- genealogía F1–F8;
- IDs/objetos G4;
- contratos técnicos;
- configuración LMS ya determinada;
- inventarios de recursos/slots;
- EO/QA detallado;
- referencias a rúbricas/gradebook;
- CP7/G7/VD8/QM-B aplicables;
- F-T/F-P;
- trazabilidad de decisiones.

La Capa IV no debe invadir la lectura principal.

---

## 5. Capa I — Sentido de la unidad

El expediente deberá abrir con un texto breve, claro y docente que responda:

### 5.1 ¿Por qué existe esta unidad?
Explica su necesidad dentro de la trayectoria completa del curso. No es un resumen temático, sino la razón pedagógica de su existencia.

### 5.2 ¿Qué transformación busca?
Describe qué cambio de mirada, razonamiento, práctica o relación con la materia se espera provocar.

### 5.3 ¿Qué recupera?
Identifica saberes, experiencias, evidencias o preguntas previas que vuelven a entrar en juego.

### 5.4 ¿Qué prepara?
Declara qué capacidad, evidencia o problema deja listo para unidades futuras.

### 5.5 ¿Qué experiencia queremos provocar?
Describe la cualidad de la experiencia estudiantil: observar, contrastar, reconstruir, experimentar, argumentar, modelar, integrar, etc.

### 5.6 ¿Qué relaciones transdisciplinarias protege?
Hace visibles las conexiones filosóficas, científicas, históricas, culturales, éticas o metodológicas que no deben desaparecer al producir materiales.

### 5.7 ¿Qué no debe perderse durante el montaje?
Lista breve de invariantes de sentido y arquitectura.

### 5.8 ¿Dónde puede crear libremente el profesor?
Resume las zonas verdes de decisión local: ejemplos, tono, fuentes dentro de contrato, medios reversibles, apoyos, visualidad, copy y microsecuencia equivalente.

---

## 6. Capa II — Mapa estructural compacto

Debe permitir captar la unidad sin leer todos los anexos.

Formato recomendado:

| Dimensión | Síntesis operativa |
|---|---|
| Entrada | Qué trae el estudiante |
| Transformación | Qué cambia o se complejiza |
| Experiencia | Qué hace/observa/contrasta |
| Evidencia | Qué produce o deja visible |
| Criterio | Qué cuenta como logro |
| Feedback | Cómo vuelve sobre su trabajo |
| Continuidad | Qué se reutiliza después |
| REC | Qué función de experiencia/cognición domina |
| PROEMA/DR | Cómo se conecta longitudinalmente |
| Interacción | Con quién/qué y para qué |
| Carga | Núcleo + opciones + margen |
| Recursos | Qué funciones deben cumplir |
| Acceso/adaptación | Qué barreras/rutas se prevén |
| Pendientes | Qué queda abierto para B |
| G4 | Estado estructural de readiness |

---

## 7. Capa III — Fichas humanizadas por categoría

Cada ficha usa la misma microestructura:

**Qué es** → **por qué importa** → **qué debe quedar definido en A** → **qué puede resolverse en B** → **qué obligaría a regresar a A**.

Esto convierte cada categoría en una herramienta de pensamiento, no en una casilla.

### 7.1 REC — Registro de Experiencia y Cognición

**Qué es:** estructura cómo el estudiante observa, registra, interpreta, reconoce límites y mejora su juicio a partir de una experiencia.  
**Por qué importa:** evita convertir laboratorios/experiencias en ejecución mecánica.  
**A debe definir:** función REC, competencia dominante, evidencia, criterio, límite/incertidumbre, conexión posterior.  
**B puede resolver:** wording final, formato de registro, medio de entrega, ejemplos y apoyos equivalentes.  
**Regresa a A si:** cambia la función cognitiva, evidencia central o criterio.

### 7.2 Evidencia

**Qué es:** huella observable del aprendizaje.  
**Por qué importa:** hace comprobable la transformación buscada.  
**A debe definir:** tipo de evidencia, función, relación con criterio y destino longitudinal.  
**B puede resolver:** forma concreta, soporte, ejemplos, presentación, organización.  
**Regresa a A si:** se sustituye por evidencia que mide otra cosa.

### 7.3 Evaluación

**Qué es:** modo en que se juzga la evidencia y se devuelve feedback.  
**Por qué importa:** determina qué termina valorando realmente el curso.  
**A debe definir:** criterio, rúbrica/descriptores esenciales, valor/categoría, recuperación/feedback y 75/25 cuando aplique.  
**B puede resolver:** copy de instrucciones, visualidad de rúbrica, ejemplos de éxito, configuración técnica ya determinada.  
**Regresa a A si:** cambia criterio, valor, función o arquitectura evaluativa.

### 7.4 Continuidad

**Qué es:** relación entre lo que entra, lo que se transforma y lo que debe quedar reutilizable.  
**Por qué importa:** preserva el curso como trayectoria y no como colección de semanas.  
**A debe definir:** vínculos hacia atrás/adelante, feedback recuperado, evidencia que debe permanecer accesible.  
**B puede resolver:** transiciones, recordatorios, enlaces y copy de conexión.  
**Regresa a A si:** una decisión rompe PROEMA, REC, DR o funciones U1/U2/U13/U14/U15.

### 7.5 Carga

**Qué es:** tiempo, esfuerzo y densidad cognitiva.  
**Por qué importa:** protege viabilidad, foco y economía de experiencia.  
**A debe definir:** presupuesto aproximado, núcleo vs opcional, tareas que no deben duplicarse.  
**B puede resolver:** microajustes, extensión de recursos, distribución local.  
**Regresa a A si:** el cambio altera carga sustantiva o crea una nueva familia de tareas.

### 7.6 Accesibilidad

**Qué es:** condiciones para acceder, navegar, comprender y participar sin barreras evitables.  
**Por qué importa:** incorpora acceso al diseño desde el inicio.  
**A debe definir:** barreras previsibles, equivalencia, requisitos mínimos y dignidad académica.  
**B puede resolver:** formatos accesibles, alt text, subtítulos, estructura de página, versiones equivalentes.  
**Regresa a A si:** la variante cambia REC, criterio, función o rigor.

### 7.7 Adaptabilidad

**Qué es:** apoyos y rutas ajustables que preservan el núcleo académico.  
**Por qué importa:** permite responder a diversidad sin crear cursos paralelos.  
**A debe definir:** qué es núcleo, qué puede variar y condiciones de equivalencia.  
**B puede resolver:** apoyos, contraste adicional, extensión, opciones de medio.  
**Regresa a A si:** una ruta cambia la experiencia esencial o el criterio.

### 7.8 Interacción

**Qué es:** relación con pares, docente, evidencia, ambiente, objetos o trabajo previo con función académica explícita.  
**Por qué importa:** evita participación decorativa.  
**A debe definir:** función, tipo de contribución, criterio y presencia docente cuando aplique.  
**B puede resolver:** prompt final, ejemplos, organización y forma de intercambio.  
**Regresa a A si:** se convierte en cuota vacía o cambia la función pedagógica.

### 7.9 PROEMA / DR

**Qué es:** inserción de la unidad en la investigación longitudinal PROEMA y en los momentos de documentación/reflexión DR.  
**Por qué importa:** conecta evidencia y feedback a lo largo del semestre.  
**A debe definir:** qué entra/sale, cómo se reutiliza, función del DR y relación con U15.  
**B puede resolver:** instrucciones, enlaces, formato de recuperación y presentación.  
**Regresa a A si:** se fragmenta PROEMA, se crea tarea paralela o se fuerza reentrega innecesaria.

### 7.10 Recursos

**Qué es:** fuentes, medios, herramientas y materiales que cumplen una función pedagógica.  
**Por qué importa:** evita seleccionar por disponibilidad, novedad o decoración.  
**A debe definir:** función, jerarquía Núcleo/Profundización/Exploración, contratos de selección, límites y procedencia requerida.  
**B puede resolver:** fuente concreta dentro del contrato, formato, sustitución equivalente, curación final.  
**Regresa a A si:** el recurso cambia encuadre, rigor, carga, autoría o sensibilidad histórica/cultural.

### 7.11 Límites

**Qué es:** frontera de lo que la unidad puede afirmar, exigir o resolver.  
**Por qué importa:** protege foco e incertidumbre legítima.  
**A debe definir:** inferencias no autorizadas, temas que no se amplían, límites de evidencia y tecnología.  
**B puede resolver:** cómo comunicar esos límites al estudiante.  
**Regresa a A si:** la producción amplía/reduce sustantivamente el alcance.

### 7.12 Decisiones pendientes

**Qué es:** apertura deliberada que queda para el montaje situado.  
**Por qué importa:** distingue flexibilidad gobernada de omisión.  
**A debe definir:** qué está abierto, criterio de elección, opciones/prohibiciones y nivel verde/ámbar/rojo.  
**B puede resolver:** decisiones verdes y propuestas para ámbar.  
**Regresa a A si:** el contrato no basta o aparece bifurcación material.

### 7.13 G4

**Qué es:** estado de preparación operacional de objetos/decisiones.  
**Por qué importa:** permite distinguir listo, suficientemente especificado y válidamente diferido.  
**A debe definir:** estado inicial y criterio para avanzar.  
**B puede producir:** evidencia que permita reclasificar readiness.  
**Regresa a A:** para integración/verificación final del cambio de estado.

Estados preservados:
- G4-A: implementado/verificable;
- G4-B: suficientemente especificado para producción;
- G4-C: diferido bajo contrato fuerte.

### 7.14 QA — Aseguramiento de Calidad

**Qué es:** pruebas para comprobar alineación, claridad, navegación, accesibilidad, configuración y no regresión.  
**Por qué importa:** hace la calidad reproducible.  
**A debe definir:** pruebas estructurales y criterios de aceptación.  
**B puede ejecutar:** QA práctico, técnico y de claridad.  
**Regresa a A si:** aparece fallo estructural, repetido o F-P.

---

## 8. Categorías transversales que deben permanecer visibles

Además de las 14 fichas, el expediente debe mantener visibles, sin necesariamente crear secciones largas separadas:

- identidad/genealogía;
- autoría/IA/privacidad;
- tecnología mínima suficiente;
- feedback y recuperación;
- seguridad/contingencia cuando aplique;
- terminología CP7-09;
- F-T/F-P;
- frontera F8/F9.

Estas dimensiones pueden aparecer integradas en las fichas correspondientes y en anexos técnicos.

---

## 9. Qué debe quedar fuera del cuerpo principal

Por defecto, no incluir en la lectura principal:

- copy editorial completo de todas las superficies;
- lista final de todos los enlaces;
- configuración LMS campo por campo;
- inventarios técnicos extensos;
- evidencia EO repetitiva;
- matrices de trazabilidad completas;
- historial de todas las decisiones exploratorias;
- especificaciones multimedia detalladas aún no producidas.

Estos elementos pertenecen a Carril B, al Documento de Montaje Explícito o a anexos cuando sean necesarios.

Regla:

> **Si un detalle no cambia sentido, criterio, función, continuidad, acceso, carga, autoría, verificación o gobernanza, probablemente no necesita ocupar el cuerpo principal del Expediente.**

---

## 10. Cómo expresar decisiones diferidas

Una decisión pendiente válida debe usar un contrato breve:

`qué queda abierto → para qué función → criterios de selección → límites/prohibiciones → equivalencias aceptables → nivel de semáforo → evidencia de cierre`.

Ejemplo abstracto:

`Fuente histórica pendiente → sostener contraste entre dos modelos → debe ser contextualizable, verificable y compatible con carga → evitar lectura lineal eurocéntrica → sustitución permitida si preserva función → ÁMBAR si cambia tradición/contexto → registrar selección en Documento de Montaje Explícito`.

No basta escribir “seleccionar recurso”.

---

## 11. Relación con Carril B

El expediente debe poder convertirse en Kit de Activación sin reescribirse por completo.

Del expediente se extraerán:

1. Sentido de la unidad;
2. mapa estructural;
3. invariantes;
4. decisiones pendientes;
5. categorías relevantes para la sesión;
6. límites;
7. estado G4;
8. objetivo del taller;
9. semáforo;
10. entregables de retorno.

Carril B no recibe necesariamente las cuatro capas completas si no hacen falta.

---

## 12. Estados documentales del Expediente

Se proponen:

- **CANDIDATO:** en diseño/revisión;
- **APROBADO PARA ACTIVACIÓN B:** estructura suficiente para talleres;
- **EN APRENDIZAJE DE MONTAJE:** existe retorno B que puede mejorar claridad/contratos;
- **ESTABLE:** patrón probado y sin ambigüedades materiales conocidas;
- **AS-BUILT / CIERRE DE CICLO:** síntesis opcional al cierre de una versión/semestre, integrando lecciones del montaje sin borrar Documento de Montaje Explícito ni genealogía.

Estos estados no sustituyen G4.

---

## 13. Prueba de suficiencia del Expediente

Antes de aprobar un expediente para Carril B, preguntar:

1. ¿entiende el profesor por qué existe esta unidad?
2. ¿puede identificar la transformación y trayectoria sin consultar F1–F8?
3. ¿sabe qué evidencia y criterios no puede improvisar?
4. ¿entiende dónde tiene libertad creativa?
5. ¿las decisiones pendientes tienen contratos suficientes?
6. ¿puede reconocer cuándo regresar a A?
7. ¿la carga y accesibilidad están suficientemente gobernadas?
8. ¿PROEMA/DR/REC y continuidad están protegidos?
9. ¿G4 y QA pueden verificarse sin que dominen la lectura?
10. ¿el expediente puede alimentar un Kit B compacto?

Si la respuesta es sí, el expediente es estructuralmente montable aunque aún no contenga todos los detalles prácticos.

---

## 14. Definition of Done R3.3

La especificación queda lista para aprobación cuando:

1. distingue claramente expediente de montaje real;
2. define usuario principal y tres velocidades de lectura;
3. establece cuatro capas;
4. humaniza las 14 categorías estructurales;
5. conserva gobernanza H/M/IA y semáforo;
6. preserva G4, QA y trazabilidad sin ponerlos al frente;
7. define decisiones diferidas fuertes pero compactas;
8. delimita qué pertenece a B;
9. permite derivar Kit de Activación;
10. define prueba de suficiencia y estados documentales;
11. no reabre H1–H5 ni F1–F7;
12. puede aplicarse a U03/H1 en R3.5.

---

## 15. Efecto sobre la Especificación v0.2 H6-R2

Si esta especificación es aprobada:

- la v0.2 H6-R2 se preserva como genealogía técnica;
- A–W sigue disponible como repertorio/checklist de cobertura y reserva de detalle;
- el patrón operativo vigente pasa a ser el expediente humanizado por capas;
- R3.4 definirá formatos concretos de Prompt, Documento de Montaje Explícito y Bitácora;
- R3.5 probará el patrón con U03/H1;
- sólo después se propagará a U1–U15.

---

## 16. Decisión requerida

La persona gobernante debe decidir si esta especificación logra la combinación buscada:

> **estructura suficiente para proteger el diseño + lectura humana suficiente para facilitar creación + detalle técnico disponible sin dominar la experiencia del profesor.**

Opciones:

- APROBADO;
- APROBADO CON AJUSTES;
- DEVOLVER A REFLEXIÓN;
- NO APROBADO.

---

## 17. Dictamen candidato

**H6-R3.3 = PATRÓN HUMANIZADO POR CAPAS / CONSERVA RIGOR SIN PRE-MONTAJE EXHAUSTIVO / PREPARA ACTIVACIÓN CARRIL B / PENDIENTE DE APROBACIÓN HUMANA.**
