# CIFI 3065 Virtual — Materia Mundi
# F8 H6-R2 — Revisión del Patrón Federado U3/H1

**Versión:** 0.1 CANDIDATO  
**Fecha:** 31 de agosto de 2026  
**Estado:** REVISIÓN DEL PROTOTIPO / NO PROPAGAR TODAVÍA  
**Fuente de verdad:** GitHub `main`

## 1. Prueba decisiva

Pregunta: **¿Puede una persona abrir el LMS y montar U3/H1 desde el expediente, sin reconstruir decisiones pedagógicas dispersas?**

Dictamen: **PASS ESTRUCTURAL / PASS DE INTEGRACIÓN / CONDICIÓN DE MAYOR EJECUTABILIDAD ANTES DE PROPAGACIÓN.**

El expediente v0.1 conserva correctamente la riqueza G3 y añade plano LMS, copy parcial, FEHE, fuentes, Lab, REC1, Foro, E1/DR1, evaluación, feedback, recursos, adaptabilidad, accesibilidad, tecnología/IA, carga, estados G4 y QA. La arquitectura federada queda validada como dirección.

## 2. Hallazgos positivos

1. La unidad se percibe como secuencia única y no pila de tareas.
2. U2, PROEMA, REC, DR y U15 están integrados longitudinalmente.
3. El plano LMS utiliza IDs U03-G4-01–16 y distingue páginas, tareas, recursos y objetos evaluativos.
4. G4-B/C se usa honestamente; no se declara G4-A ficticio.
5. Foro H1, REC1 y E1 poseen prompts/criterios suficientemente definidos para reconocer su función.
6. La carga se preserva en 395/420.
7. Accesibilidad/equivalencia y contingencias están integradas, no añadidas al final.
8. F9 permanece protegido.

## 3. Brechas antes de aprobar patrón

### R2-B01 — Copy de superficies incompleto
El expediente ofrece copy de apertura, reactivación, Archivo y cierre, pero no copy operativo suficiente para cada objeto visible principal. Antes de propagar se requiere que todo objeto estudiantil relevante tenga al menos:
`nombre visible → propósito → instrucción → criterio/éxito → transición/destino`.

### R2-B02 — Configuración LMS insuficientemente explícita
Para objetos evaluativos y de interacción debe registrarse:
`tipo LMS → puntos/categoría → criterio/rúbrica → intentos/revisión → visibilidad → dependencia/prerrequisito → feedback → destino → evidencia EO`.

No se fijan fechas absolutas si dependen del calendario de cohorte.

### R2-B03 — Slots G4-C todavía demasiado abstractos
Fuente, laboratorio y medio FEHE pueden legítimamente seguir abiertos, pero cada slot debe tener contrato ejecutable:
`función → requisitos mínimos → 2–3 clases de candidato aceptables → prohibiciones → accesibilidad → licencia/procedencia → criterio de selección → criterio de sustitución → prueba de aceptación`.

### R2-B04 — QA necesita granularidad por objeto
El checklist unitario es útil, pero la propagación requiere una matriz `ID → estado → prueba → evidencia → defecto → destino`, de modo que H6 pueda auditar sin reinterpretar el expediente.

### R2-B05 — Terminología adaptativa
Debe distinguirse inequívocamente el **puerto de profundización adaptativo** de la jerarquía de recursos **Profundización**, para no rozar CP7-09. No se cambia el término canónico silenciosamente; se recomienda etiqueta operacional explícita en los expedientes hasta decisión humana terminológica final.

## 4. Criterio para v0.2

U3/H1 v0.2 debe añadir:
- Matriz de Producción LMS por objeto;
- Copy Pack completo para superficies principales;
- Contratos G4-C reforzados;
- Matriz QA/EO por objeto;
- nota de desambiguación terminológica;
- definición de qué información puede vivir en registros transversales sin romper autosuficiencia.

## 5. Estado del patrón

**ARQUITECTURA FEDERADA = VALIDADA COMO DIRECCIÓN.**  
**EXPEDIENTE U3/H1 v0.1 = NO PROPAGAR TODAVÍA.**  
**SIGUIENTE OBJETO = U3/H1 v0.2 CANDIDATO DE EJECUTABILIDAD REFORZADA.**
