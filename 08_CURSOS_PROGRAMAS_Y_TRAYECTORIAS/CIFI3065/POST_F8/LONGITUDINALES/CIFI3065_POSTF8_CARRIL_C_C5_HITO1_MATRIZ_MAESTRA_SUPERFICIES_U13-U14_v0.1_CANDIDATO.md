# CIFI 3065 Virtual — Materia Mundi
# Carril C — C5 Hito 1
# Matriz Maestra de Superficies U13/U14

**Versión:** 0.1 CANDIDATO  
**Fecha:** 24 de septiembre de 2026  
**Estado:** CANDIDATO PARA REVISIÓN HUMANA  
**Fuente de verdad:** GitHub `main`  
**Baseline:** C5-Hito 0 APROBADO + C4A/C4B APROBADAS  
**Principios operativos:** granularidad controlada · baja carga cognitiva · máxima eficiencia

---

## 1. Propósito

Convertir el bosquejo estructural aprobado en un plano operativo de superficies para Moodle.

La matriz no redacta aún el contenido final. Define:

- qué superficies deben existir;
- qué función cumple cada una;
- qué prioridad tiene;
- qué fuente ya existe;
- qué debe producirse;
- qué puede esperar;
- qué puentes U13⇄U14 son realmente necesarios.

Regla central:

> **No crear una superficie nueva si una existente puede cumplir la función con claridad.**

---

## 2. Escala de prioridad

- **A — Montar ahora:** necesario para activar U13/U14 y sostener la trayectoria inmediata.
- **B — Preparar después:** necesario antes de E3/E4.
- **C — Reservar para culminación:** necesario hacia E5, presentación y artículo.

Estados:

- **EXISTENTE:** ya hay contenido aprobado utilizable.
- **ADAPTAR:** hay contenido aprobado que debe convertirse a superficie Moodle.
- **PRODUCIR:** falta contenido específico.
- **MÍNIMO:** sólo requiere presencia/placeholder funcional por ahora.
- **DIFERIR:** no producir en esta onda.

---

# 3. U13 — Laboratorio de Metodología PROEMA

| Código | Superficie | Función dominante | Estado | Prioridad | Fuente/insumo | Puente U14 |
|---|---|---|---|---|---|---|
| U13-00 | Portada U13 | identidad + orientación | PRODUCIR | A | C3/C4A | U14-00 |
| U13-01 | Qué es PROEMA | introducir sistema | ADAPTAR | A | C4A | no necesario |
| U13-02 | Mapa de la ruta | navegación E1→artículo | PRODUCIR | A | C2/C4A | U14-01 |
| U13-03 | Cómo funciona una investigación longitudinal | conservar/revisar/reutilizar | ADAPTAR | A | C4A | U14-04 |
| U13-E1 | E1 — Problematización | recuperar fase ya realizada | EXISTENTE | A | Guía E1 + Fronteras | U14-05 |
| U13-E2 | E2 — Indagación | activar fase actual | EXISTENTE/ADAPTAR | A | C4B | U14-03/U14-04/U14-05 |
| U13-E3 | E3 — Comprensión | horizonte próximo | MÍNIMO | A | C2/C3 | U14-06 |
| U13-E4 | E4 — Sensibilización | horizonte | MÍNIMO | A | C2/C3 | U14-06/U14-07 |
| U13-E5 | E5 — Emancipación | horizonte culminante | MÍNIMO | A | C2/C3 | U14-08 |
| U13-08 | Formular/revisar preguntas | recurso metodológico transversal | PRODUCIR | B | PROEMA + C4A | U14-02 |
| U13-09 | Evaluar fuentes | criterio metodológico | PRODUCIR | A | C4B + manuales auditados | U14-03 |
| U13-10 | Trabajar con evidencia | criterio metodológico | PRODUCIR | B | U2 futuro + F8 | U14-06/U14-07 |
| U13-11 | Evidencia, inferencia y explicación | puerto epistemológico | MÍNIMO | B | U2 futuro | U14-06 |
| U13-12 | Límites, vacíos e incertidumbre | revisión crítica | PRODUCIR | B | PROEMA + Fronteras | U14-07 |
| U13-13 | De E5 al artículo original | puente de culminación | MÍNIMO | C | C2/C3/C4A | U14-08/U14-09 |

### Regla U13

U13 se organiza por **trayectoria metodológica**, no por herramientas.

La navegación principal debe ser:

`Comienza aquí → Mapa PROEMA → fase actual → recursos metodológicos`

---

# 4. U14 — Taller de Producción Intelectual

| Código | Superficie | Función dominante | Estado | Prioridad | Fuente/insumo | Puente U13 |
|---|---|---|---|---|---|---|
| U14-00 | Portada U14 | identidad + entrada por necesidad | PRODUCIR | A | C3/C4A | U13-00 |
| U14-01 | Cómo usar este taller | explicar lógica no secuencial | PRODUCIR | A | C3/C4A | U13-02 |
| U14-02 | Materia Mundi GPT | acompañamiento IA | PRODUCIR | A | C3 + MIS-ER-IA adaptado | U13-08/U13-E1–E5 |
| U14-03 | Buscar y encontrar | búsqueda + acceso | PRODUCIR | A | C4B + manuales auditados | U13-E2/U13-09 |
| U14-04 | Organizar y preservar | archivos + versiones + reutilización | PRODUCIR | A | C3/C4A | U13-03/U15 |
| U14-05 | Citar y documentar | APA + procedencia | PRODUCIR | A | C4B + E1 | U13-E1/U13-E2 |
| U14-06 | Escribir, comparar y representar | transformar evidencia en estructura | PRODUCIR | B | C3 + materiales auditados | U13-E3/U13-10/U13-11 |
| U14-07 | Visualizar y comunicar evidencia | tablas/gráficas/medios/accesibilidad | PRODUCIR | B | MIS-ER-IA adaptado | U13-E4/U13-12 |
| U14-08 | Presentar y defender | comunicación grupal | MÍNIMO | C | C2/C3 | U13-E5/U13-13 |
| U14-09 | Producir el artículo original | culminación U13×U14 | MÍNIMO | C | C2/C3/C4A | U13-13 |
| U14-10 | Banco de prompts | prompts por operación | PRODUCIR PROGRESIVO | A→C | C3 + MIS-ER-IA adaptado | transversal |
| U14-11 | Accesibilidad y diseño | DUA + legibilidad + equivalentes | PRODUCIR | B | G4 + MIS-ER-IA adaptado | transversal |

### Regla U14

U14 se organiza por **operaciones de producción**, no por E1–E5.

La navegación principal debe ser:

`Qué necesitas hacer → recurso operativo → volver a tu investigación`

---

# 5. Superficies que NO se crean

Para mantener baja carga y máxima eficiencia, no se crean por ahora:

- páginas separadas para cada herramienta;
- un manual APA completo;
- un tutorial distinto por base de datos;
- una página IA por ensayo;
- una página U14 duplicada para cada E1–E5;
- una bitácora IA obligatoria;
- un portafolio nuevo;
- una página de seguimiento por cada producto;
- un nodo separado para cada microcompetencia.

Si una necesidad puede resolverse dentro de una superficie madre, se integra allí.

---

# 6. Núcleo de montaje inmediato — Onda A

## U13

Montar primero:

1. **U13-00 Portada**
2. **U13-01 Qué es PROEMA**
3. **U13-02 Mapa de la ruta**
4. **U13-03 Investigación longitudinal**
5. **U13-E1 Recuperación**
6. **U13-E2 Indagación**
7. **U13-E3/E4/E5 como horizonte mínimo**
8. **U13-09 Evaluar fuentes**

Resultado: U13 queda usable sin estar “terminado”.

## U14

Montar primero:

1. **U14-00 Portada**
2. **U14-01 Cómo usar este taller**
3. **U14-02 Materia Mundi GPT**
4. **U14-03 Buscar y encontrar**
5. **U14-04 Organizar y preservar**
6. **U14-05 Citar y documentar**
7. **U14-10 Banco de prompts v0.1**

Resultado: U14 queda útil desde ahora y preparado para crecer.

---

# 7. Onda B — Antes de E3/E4

Activar sólo cuando exista necesidad real:

### U13
- U13-08 Formular/revisar preguntas
- U13-10 Trabajar con evidencia
- U13-11 Evidencia, inferencia y explicación
- U13-12 Límites, vacíos e incertidumbre
- expansión E3/E4

### U14
- U14-06 Escribir, comparar y representar
- U14-07 Visualizar y comunicar evidencia
- U14-11 Accesibilidad y diseño
- expansión banco de prompts

---

# 8. Onda C — Culminación

Activar hacia E5/presentación/artículo:

### U13
- expansión E5
- U13-13 De E5 al artículo original

### U14
- U14-08 Presentar y defender
- U14-09 Producir el artículo original
- prompts avanzados de revisión/defensa

---

# 9. Puertos longitudinales mínimos

## U1

Cada superficie principal debe poder responder:

`dónde estoy → qué toca → dónde encuentro ayuda → qué sigue`

No se duplica U1 dentro de U13/U14.

## U2

Se enlaza cuando una decisión requiere distinguir:

`dato → evidencia → inferencia → modelo → explicación → límite`

No se construye U2 todavía.

## U15

Se conecta mediante preservación ligera:

`producto → feedback → cambio → objeto recuperable`

No se crea portafolio nuevo.

---

# 10. Granularidad controlada

Regla de diseño de páginas:

- una superficie = una función dominante;
- máximo 5–7 elementos visibles principales por página;
- instrucciones breves;
- recursos secundarios bajo expansión o enlaces;
- evitar párrafos largos cuando una secuencia o tabla pequeña resuelva mejor;
- no duplicar instrucciones entre U13 y U14;
- los enlaces cruzados deben aparecer sólo cuando cambian la acción del estudiante.

---

# 11. Regla de eficiencia de producción

Antes de producir una nueva página, verificar en este orden:

1. ¿Existe ya un documento aprobado que puede adaptarse?
2. ¿Puede integrarse como sección de una superficie madre?
3. ¿Necesita realmente una página propia?
4. ¿El estudiante la utilizará ahora o más adelante?
5. ¿Puede diferirse sin afectar continuidad?

Si la respuesta a 3 o 4 es no, no se produce todavía.

---

# 12. Gate C5-Hito 1

**C5-Hito 1 = CANDIDATO PARA REVISIÓN HUMANA.**

Si se aprueba, autoriza:

### C5-Hito 2 — Guion de Montaje Onda A

Entregable:

- orden exacto de creación en Moodle;
- título de cada superficie;
- descripción breve;
- contenido mínimo;
- enlaces/recursos;
- relación U13⇄U14;
- criterio de “listo para montar”.

No se redactará todavía toda Onda B/C.

---

# 13. Resumen operativo

`Ahora: estructura mínima útil`

`Después: crecimiento por necesidad`

`Nunca: completar U13/U14 como enciclopedia antes de tiempo`

La meta es que ambas unidades estén **vivas, ligeras y ampliables**, no exhaustivas.

**Fin — C5 Hito 1 v0.1 CANDIDATO**
