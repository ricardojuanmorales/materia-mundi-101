# CIFI 3065 Virtual — Materia Mundi
# F8 H6-R3.3 — Especificación del Expediente de Montaje e Integración Humanizado

**Versión:** 1.0 APROBADA  
**Fecha:** 1 de septiembre de 2026  
**Estado:** APROBADA / CANÓNICA  
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
**B puede resolver:** decisiones verdes y preparar alternativas ámbar.  
**Regresa a A si:** aparece una opción fuera del contrato o una decisión roja.

### 7.13 G4

**Qué es:** grado de preparación operacional de objetos y decisiones.  
**Por qué importa:** separa lo montado/verificado de lo especificado o diferido bajo contrato.  
**A debe definir:** qué necesita existir, estados permitidos y evidencia requerida.  
**B puede resolver:** creación, selección y verificación de objetos pendientes.  
**Regresa a A si:** el estado obliga a cambiar arquitectura o criterios.

### 7.14 QA

**Qué es:** conjunto de pruebas para verificar que la unidad funciona como fue diseñada.  
**Por qué importa:** convierte calidad en evidencia reproducible.  
**A debe definir:** pruebas esenciales, invariantes y umbrales de aceptación.  
**B puede resolver:** ejecutar pruebas técnicas/locales y corregir defectos verdes.  
**Regresa a A si:** falla una condición estructural, aparece F-P o hay regresión.

---

## 8. Regla de suficiencia por categoría

Una ficha no debe crecer por acumulación. Debe contener sólo lo necesario para que:

1. el profesor entienda la función;
2. se preserve la alineación;
3. B conozca su libertad real;
4. una bifurcación pueda reconocerse;
5. A pueda verificar el retorno.

Regla:

> **Todo detalle del cuerpo principal debe justificar qué decisión, relación o control mejora.**

Si no mejora ninguno, mover a anexo o eliminar.

---

## 9. Decisiones diferidas fuertes, pero compactas

Cuando A deje algo abierto para B, no debe decir simplemente “seleccionar recurso”, “crear actividad” o “definir medio”.

Debe registrar como mínimo:

`qué está abierto → para qué sirve → condiciones obligatorias → qué puede variar → qué no puede variar → criterio de selección/aceptación → semáforo`.

Esto conserva la fortaleza de los contratos G4-C de H6-R2 sin convertir el expediente en catálogo previo de todas las opciones.

---

## 10. Relación con el Kit de Activación B

El Expediente completo permanece en Carril A.

R3.4 deberá poder extraer de él un **Kit de Activación** más corto que incluya:

- Sentido de la unidad;
- mapa estructural;
- invariantes;
- decisiones abiertas;
- categorías activas para esa sesión;
- contratos relevantes;
- semáforo;
- productos esperados;
- archivos/fuentes necesarios;
- formato de retorno.

No todo expediente debe copiarse al prompt.

---

## 11. Relación con H/M/IA

### Humano
Interpreta sentido, cura, crea, decide y resuelve bifurcaciones.

### IA
Puede traducir expediente a conversación de diseño, proponer alternativas, redactar, comparar, revisar coherencia y preparar retornos.

### Máquina
Mantiene estructura, IDs, archivos, estados, referencias y verificaciones determinadas.

Regla:

> **El expediente guía a la IA; la IA acompaña al profesor; ninguna de las dos sustituye la decisión humana material.**

---

## 12. QA del expediente humanizado

Antes de considerar un expediente listo para B, verificar:

- [ ] Capa I puede entenderse sin consultar F1–F8;
- [ ] propósito y transformación son claros;
- [ ] invariantes visibles;
- [ ] libertad B visible;
- [ ] mapa estructural coherente;
- [ ] categorías relevantes suficientemente desarrolladas;
- [ ] decisiones pendientes tienen contrato;
- [ ] no hay pre-montaje innecesario;
- [ ] recursos concretos sólo aparecen cuando ya están determinados;
- [ ] accesibilidad/equivalencia protegidas;
- [ ] continuidad protegida;
- [ ] G4 y QA presentes sin dominar lectura;
- [ ] anexos técnicos accesibles cuando se necesitan;
- [ ] semáforo reconocible;
- [ ] Kit de Activación puede derivarse sin reinterpretación.

---

## 13. Prueba de suficiencia

Pregunta de aceptación:

> **¿Puede un profesor abrir este expediente, entender el sentido de la unidad, reconocer las decisiones ya protegidas, identificar dónde puede crear libremente y entrar a Carril B sin reconstruir el proyecto ni sentirse atrapado por detalle innecesario?**

Si no, el expediente no está listo.

---

## 14. Definition of Done de R3.3

R3.3 queda completo cuando la especificación:

1. define usuario principal y tres velocidades de lectura;
2. establece cuatro capas;
3. humaniza las 14 categorías estructurales;
4. conserva gobernanza H/M/IA y semáforo;
5. preserva G4, QA y trazabilidad sin ponerlos al frente;
6. define decisiones diferidas fuertes pero compactas;
7. delimita qué pertenece a B;
8. permite derivar Kit de Activación;
9. define prueba de suficiencia y estados documentales;
10. no reabre H1–H5 ni F1–F7;
11. puede aplicarse a U03/H1 en R3.5.

---

## 15. Efecto sobre la Especificación v0.2 H6-R2

La v0.2 H6-R2 se preserva como genealogía técnica.

- A–W sigue disponible como repertorio/checklist de cobertura y reserva de detalle;
- el patrón operativo vigente pasa a ser el expediente humanizado por capas;
- R3.4 definirá formatos concretos de Prompt, Documento de Montaje Explícito y Bitácora;
- R3.5 probará el patrón con U03/H1;
- sólo después se propagará a U1–U15.

---

## 16. Decisión humana de aprobación

La persona gobernante aprobó F8 H6-R3.3 el 1 de septiembre de 2026 sin ajustes sustantivos adicionales.

Queda ratificada la combinación:

> **estructura suficiente para proteger el diseño + lectura humana suficiente para facilitar creación + detalle técnico disponible sin dominar la experiencia del profesor.**

**Dictamen humano:** APROBADO.

---

## 17. Dictamen aprobado

**H6-R3.3 = APROBADO / PATRÓN HUMANIZADO POR CAPAS CANÓNICO / CONSERVA RIGOR SIN PRE-MONTAJE EXHAUSTIVO / PREPARA ACTIVACIÓN CARRIL B / R3.4 EXPEDITO.**