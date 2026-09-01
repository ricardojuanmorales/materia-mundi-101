# CIFI 3065 Virtual — Materia Mundi
# F8 H6-R3.4 — Sistema Documental del Carril B

**Versión:** 1.0 APROBADA  
**Fecha:** 1 de septiembre de 2026  
**Estado:** APROBADA / CANÓNICA  
**Fase:** F8 — Implementación y Readiness para F9  
**Hito:** H6-R3.4 — Sistema documental del Carril B  
**Fuente de verdad:** GitHub `main`  
**Bases autorizantes:** H6-R3.1 v1.0 APROBADA + H6-R3.2 v1.0 APROBADA + H6-R3.3 v1.0 APROBADA

---

## 1. Propósito

Definir el paquete documental mínimo que permite abrir, conducir y cerrar un Taller de Montaje en Carril B sin convertir la conversación en una fuente paralela de verdad.

El sistema se compone de tres instrumentos coordinados:

1. **Prompt Maestro de Activación del Taller Unitario**;
2. **Documento de Montaje Explícito (DME)**;
3. **Bitácora Ligera de Taller (BLT)**.

Principio rector:

> **La conversación es espacio de creación; el DME y la BLT son el puente documental que permite gobernar, verificar y recordar.**

---

## 2. Qué debe lograr el sistema

Al abrir una conversación B, el profesor debe poder:

- comprender rápidamente el sentido de la unidad;
- saber qué está protegido y qué está abierto;
- trabajar de forma conversacional, creativa y situada;
- recibir ayuda activa de IA sin ceder autoridad pedagógica;
- distinguir decisiones verdes, ámbar y rojas;
- crear materiales, copy, recursos y configuraciones concretas;
- registrar sólo decisiones significativas;
- cerrar la sesión con un producto que Carril A pueda revisar sin releer todo el chat.

La prueba de suficiencia es:

> **¿Puede Carril A entender qué se construyó, qué cambió, qué falta y qué requiere decisión humana usando sólo el paquete de retorno?**

---

## 3. Entradas mínimas del Taller B

Todo Taller B recibe un **Kit de Activación Unitario** derivado del Expediente de Montaje e Integración.

Debe incluir:

- unidad y versión del expediente;
- Sentido de la unidad;
- mapa estructural compacto;
- invariantes;
- zonas de libertad creativa;
- decisiones pendientes activas;
- contratos relevantes;
- categorías estructurales activas;
- semáforo de escalamiento;
- productos esperados de la sesión;
- archivos/fuentes necesarias;
- estado inicial de montaje;
- formato de retorno esperado.

No se exige llevar al Taller B la totalidad de F1–F8.

---

## 4. Prompt Maestro de Activación del Taller Unitario

El Prompt Maestro debe transformar el Kit en una conversación de diseño, no en una lista de cumplimiento.

### 4.1 Apertura requerida

El asistente de Carril B debe comenzar por:

1. identificar la unidad y la versión del Expediente;
2. resumir en lenguaje humano el Sentido de la unidad;
3. confirmar qué se pretende construir o curar en la sesión;
4. mostrar las invariantes relevantes;
5. señalar qué decisiones son libres y cuáles requieren escalamiento.

### 4.2 Regla de interacción

El asistente debe trabajar mediante bloques cortos:

`comprender → proponer → decidir → producir → verificar → registrar`

No debe saturar al profesor con toda la arquitectura a la vez.

### 4.3 Rol del profesor

El profesor:

- decide intención situada;
- selecciona entre alternativas materialmente diferentes;
- cura fuentes y ejemplos;
- valida tono y sentido;
- aprueba cambios pedagógicos;
- decide toda bifurcación ámbar/roja.

### 4.4 Rol de la IA

La IA puede:

- proponer alternativas;
- redactar copy;
- comparar fuentes;
- crear versiones;
- revisar accesibilidad;
- detectar incoherencias;
- preparar configuraciones;
- documentar decisiones;
- sugerir QA.

No puede convertir sus propias propuestas en decisiones canónicas.

### 4.5 Rol de la máquina

La máquina puede mantener:

- nombres/IDs;
- archivos;
- formatos;
- versiones;
- enlaces;
- estados determinados;
- verificaciones repetibles.

### 4.6 Semáforo

**VERDE:** reversible, local y dentro de invariantes. Se resuelve y registra.  
**ÁMBAR:** existe una bifurcación pedagógica material. Se formula pregunta al profesor.  
**ROJO:** contradicción, regresión, F-P o cambio de arquitectura. Se detiene esa línea y se devuelve a A.

---

## 5. Prompt Maestro operativo

### PROMPT DE ACTIVACIÓN — INICIO

Actúa como asistente de montaje situado de **CIFI 3065 Virtual — Materia Mundi** en **Carril B**.

Tu fuente de trabajo inmediato es el **Kit de Activación Unitario** suministrado por Carril A. No reconstruyas ni sustituyas las decisiones canónicas de F1–F8.

### Objetivo

Acompañar al profesor a convertir el Expediente estructural en una realización concreta, usable y humana, preservando:

- sentido;
- REC;
- evidencia;
- criterio;
- evaluación;
- continuidad;
- carga sustantiva;
- accesibilidad/equivalencia;
- autoría;
- relaciones protegidas;
- frontera F8/F9.

### Forma de trabajo

Trabaja en bloques breves:

1. **Comprender:** explica qué estamos intentando lograr.
2. **Proponer:** ofrece opciones concretas cuando ayuden.
3. **Decidir:** identifica qué decisión corresponde al profesor.
4. **Producir:** redacta, estructura, compara o configura.
5. **Verificar:** comprueba coherencia, accesibilidad y alineación.
6. **Registrar:** actualiza el DME y la BLT sólo cuando exista una decisión o resultado significativo.

### Gobernanza

- VERDE: resuelve y documenta.
- ÁMBAR: presenta la pregunta, 2–3 opciones materialmente distintas y recomendación razonada.
- ROJO: detén la línea afectada y prepara un retorno a Carril A.

No conviertas cambios cosméticos o reversibles en mini-Gates.

### Cierre obligatorio

Antes de cerrar la sesión:

1. completa o actualiza el **Documento de Montaje Explícito**;
2. completa la **Bitácora Ligera**;
3. lista decisiones ámbar/rojas abiertas;
4. registra qué objetos/materiales fueron creados o modificados;
5. ejecuta QA disponible;
6. prepara un **Resumen de Retorno B→A** que permita comprender la sesión sin releer la conversación.

### Kit de Activación Unitario

[PEGAR AQUÍ EL KIT DERIVADO DEL EXPEDIENTE]

### PROMPT DE ACTIVACIÓN — FIN

---

## 6. Documento de Montaje Explícito (DME)

El DME es el producto central del Taller B.

No sustituye al Expediente. Registra **cómo quedó realizada** la unidad o el bloque trabajado.

### 6.1 Encabezado

- unidad;
- versión del Expediente fuente;
- fecha/sesión;
- estado del montaje;
- participantes/roles;
- alcance trabajado.

### 6.2 Sentido preservado

Breve confirmación:

- qué propósito fue protegido;
- qué transformación sigue siendo central;
- qué no debía perderse;
- si surgió alguna tensión con el diseño original.

### 6.3 Realización concreta

Para cada objeto/material trabajado:

| Objeto | Qué quedó creado/seleccionado/configurado | Ubicación/uso | Estado | Evidencia/archivo |
|---|---|---|---|---|

### 6.4 Decisiones de diseño realizadas

Registrar sólo decisiones significativas:

| Decisión | Categoría | Resultado | Semáforo | Razón breve |
|---|---|---|---|---|

### 6.5 Recursos y fuentes concretas

- recurso/fuente;
- función;
- jerarquía N/P/E;
- procedencia/licencia cuando aplique;
- sustitución/equivalencia;
- accesibilidad;
- decisión pendiente si existe.

### 6.6 Copy y superficies estudiantiles

Registrar el copy final o enlace al archivo que lo contiene:

- apertura;
- instrucciones;
- criterios;
- transiciones;
- feedback esperado;
- lenguaje de apoyo/extensión;
- IA/autoría cuando aplique.

### 6.7 Configuración y tecnología

Sólo lo que realmente quedó configurado:

- LMS/superficie;
- visibilidad;
- dependencias;
- gradebook/rúbrica;
- herramienta;
- contingencia;
- privacidad/datos.

### 6.8 Accesibilidad y adaptabilidad

- barreras detectadas;
- solución implementada;
- variante/equivalencia;
- pendientes.

### 6.9 QA realizado

| Prueba | Resultado | Corrección | Estado |
|---|---|---|---|

### 6.10 Pendientes

Separar:

- **verde pendiente**: puede resolverse en B;
- **ámbar**: requiere decisión humana;
- **rojo/F-P**: debe volver a A.

### 6.11 Impacto propuesto en Carril A

Indicar si el retorno requiere:

- ninguna actualización estructural;
- actualización del mapa F8;
- ajuste del Expediente;
- nueva decisión de gobernanza;
- cambio de recurso/contrato;
- registro QA/QM-B;
- otro.

### 6.12 Estado de cierre

`B-ACTIVO / B-CERRADO-CON-PENDIENTES / B-LISTO-PARA-RETORNO`

---

## 7. Bitácora Ligera de Taller (BLT)

La BLT no es transcripción del chat.

Su función es capturar la genealogía de decisiones que podría ser útil después.

### 7.1 Formato mínimo

| Momento | Decisión / hallazgo | Tipo | Razón | Impacto | Acción siguiente |
|---|---|---|---|---|---|

Tipos recomendados:

- D = decisión;
- H = hallazgo;
- A = ámbar;
- R = rojo/F-P;
- QA = defecto/corrección;
- M = aprendizaje metodológico.

### 7.2 Qué registrar

Registrar cuando:

- se selecciona entre alternativas materialmente distintas;
- cambia una decisión práctica importante;
- aparece una excepción;
- se detecta una regresión;
- una prueba QA obliga a corregir;
- se aprende algo que puede mejorar el Expediente o el protocolo.

### 7.3 Qué no registrar

No registrar por defecto:

- cada intercambio;
- cada frase redactada;
- cambios cosméticos triviales;
- opciones descartadas sin consecuencia;
- pasos automáticos ya determinados.

Principio:

> **La bitácora conserva decisiones, no ruido conversacional.**

---

## 8. Resumen de Retorno B→A

Al cerrar, la IA debe producir un bloque compacto:

### RESUMEN DE RETORNO

**Unidad:**  
**Expediente fuente:**  
**Alcance trabajado:**  
**Resultado principal:**  

**Creado/modificado:**  
- ...

**Decisiones significativas:**  
- ...

**QA:**  
- ...

**Pendientes verdes:**  
- ...

**Ámbar para decisión humana:**  
- ...

**Rojo/F-P:**  
- ...

**Impacto propuesto en A:**  
- ...

**Archivos/productos entregados:**  
- ...

**Estado:** `LISTO PARA RETORNO / RETORNO CON BLOQUEO`

Este resumen no sustituye al DME ni a la BLT. Es su portada ejecutiva.

---

## 9. Contrato de cierre de un Taller B

Un Taller B no debe declararse cerrado hasta que:

- [ ] exista DME actualizado;
- [ ] exista BLT actualizada;
- [ ] se haya ejecutado QA disponible;
- [ ] decisiones ámbar/rojas estén explícitas;
- [ ] archivos creados estén identificados;
- [ ] estado del montaje esté declarado;
- [ ] exista Resumen de Retorno;
- [ ] no se haya convertido una recomendación de IA en decisión canónica sin humano.

---

## 10. Continuidad entre sesiones B

Si el montaje necesita varias conversaciones o sesiones:

1. la siguiente sesión recibe el último DME;
2. recibe la BLT acumulada o su versión vigente;
3. recibe los pendientes;
4. recibe el mismo Expediente fuente o nueva versión si A lo actualizó;
5. no depende de recuperar el chat anterior.

Principio:

> **La continuidad se transmite por artefactos, no por memoria conversacional.**

---

## 11. Separación de estados

No confundir:

- **estado de flujo:** A-PREPARADO, B-ACTIVO, B-LISTO-PARA-RETORNO, A-REVISIÓN, A-INTEGRADO;
- **estado G4:** readiness del objeto;
- **estado QA:** PASS / FAIL / PENDIENTE;
- **semáforo:** nivel de gobernanza de una decisión.

Estas dimensiones pueden coexistir.

---

## 12. QA del sistema documental B

El sistema pasa QA si:

- [ ] el Prompt no necesita F1–F8 completos;
- [ ] mantiene visible el sentido;
- [ ] distingue libertad de invariantes;
- [ ] el profesor conserva autoridad;
- [ ] IA puede producir sin autoconcederse autoridad;
- [ ] el DME describe la realización real;
- [ ] la BLT no se convierte en transcripción;
- [ ] el retorno puede entenderse sin el chat;
- [ ] ámbar/rojo son detectables;
- [ ] continuidad entre sesiones es documental;
- [ ] F8/F9 permanece separada.

---

## 13. Definition of Done de R3.4

R3.4 queda completo cuando existen y son coherentes:

1. Prompt Maestro;
2. plantilla DME;
3. plantilla BLT;
4. Resumen de Retorno;
5. contrato de apertura/cierre;
6. semáforo;
7. continuidad multisesión;
8. QA;
9. archivos operativos separados;
10. capacidad de probar el sistema en U03/H1 durante R3.5.

---

## Aprobación humana

**Dictamen:** APROBADO por la persona gobernante el 1 de septiembre de 2026.  
**Efecto:** H6-R3.4 cerrado; H6-R3.5 expedito.
