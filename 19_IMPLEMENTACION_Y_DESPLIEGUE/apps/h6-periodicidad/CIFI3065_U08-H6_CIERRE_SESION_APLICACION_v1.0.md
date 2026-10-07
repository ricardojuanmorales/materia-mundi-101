# Cierre fuerte de sesión — Aplicación H6 · Ordenar el archivo

## CIFI 3065 Virtual — Materia Mundi

**Fecha:** 6 de octubre de 2026  
**Estado:** **CIERRE DE SESIÓN / PILOTO EN AULA v1.0 PUBLICADO**  
**Fuente versionada de verdad:** GitHub `main`

## 1. Resultado alcanzado

La aplicación H6 dejó de ser una línea externa en desarrollo y pasa a estado:

**PILOTO EN AULA · v1.0**

URL pública:

`https://ricardojuanmorales.github.io/materia-mundi-101/h6/`

Commit de liberación del piloto:

`7e082216984deb611bea34871f1c33b7b9ca5ea2`

CI post-merge: **SUCCESS**  
GitHub Pages post-merge: **SUCCESS**

## 2. Gates

### Gate 1 — QA histórico
**PASS**

- corpus de 41 tarjetas validado;
- masas y patrones históricos revisados;
- huecos ≈68 y ≈72 ratificados;
- caso Te/I corregido para evitar anacronismo;
- pistas RH ratificadas por validación humana.

### Gate 2 — carga cognitiva
**PASS**

La versión actual queda autorizada para avanzar sin rediseño previo.

### Gate 3 — accesibilidad funcional
**PENDIENTE / VALIDACIÓN SITUADA DURANTE PILOTO**

No bloquea el piloto. Cualquier falla esencial detectada se convierte en corrección prioritaria.

### Gate 4 — Moodle → app → evidencia → Moodle
**PENDIENTE / VALIDACIÓN SITUADA DURANTE PILOTO**

No bloquea el piloto. Debe observarse en uso real con estudiantes.

### Gate 5 — GO PILOTO
**AUTORIZADO EN MODO EXPEDITO**

## 3. Capacidades vigentes

La aplicación incluye:

- persistencia local automática;
- exportación e importación de sesión;
- continuidad entre dispositivos;
- undo semántico;
- registro de trayectoria;
- exportación de evidencia;
- clasificación por grupos;
- series y relaciones semánticas;
- hueco y predicción;
- contraste histórico;
- preparación REC6;
- flujo pedagógico con Gates;
- revelaciones y feedback contextual;
- publicación en GitHub Pages.

## 4. Motor compartido consolidado

`19_IMPLEMENTACION_Y_DESPLIEGUE/packages/`

Incluye:

- `session-portability/`
- `state-history/`
- `evidence-export/`
- `classification-engine/`
- `pedagogical-flow/`
- `reveal-feedback/`

Estos paquetes constituyen una baseline reutilizable para futuras aplicaciones de Materia Mundi.

## 5. Regla de congelación del piloto

Durante el piloto:

**NO ampliar el motor.**

Sólo se autorizan cambios si una observación real revela:

1. bloqueo de accesibilidad;
2. pérdida de trabajo o continuidad;
3. ambigüedad de entrega;
4. error histórico o químico;
5. fricción cognitiva que impida completar la experiencia.

No se añaden funciones por anticipación.

## 6. Evidencia a recoger durante el piloto

Registrar únicamente:

- problemas de acceso;
- problemas de teclado/lector de pantalla;
- fallas en exportar/importar;
- confusión sobre qué hacer;
- confusión sobre qué entregar;
- tiempo aproximado de ejecución;
- bloqueos recurrentes;
- necesidad de intervención docente.

No convertir el piloto en una encuesta extensa.

## 7. Relación con F9

F9 sigue sin activarse formalmente como fase empírica hasta que exista evidencia real de estudiantes.

El piloto H6 puede producir evidencia que contribuya posteriormente a F9, pero su mera publicación no constituye F9.

## 8. Punto de retorno

En la próxima sesión dedicada a la aplicación H6:

1. recuperar `main`;
2. confirmar que la URL pública sigue activa;
3. revisar evidencia real del piloto;
4. clasificar cada hallazgo como:
   - bloqueo;
   - fricción;
   - mejora opcional;
5. corregir sólo bloqueos y fricciones justificadas;
6. cerrar Gates 3 y 4 cuando exista evidencia suficiente;
7. decidir si procede `v1.0` estable o `v1.1` postpiloto.

## 9. No reabrir sin evidencia

No reabrir por defecto:

- corpus histórico;
- 24 + 7;
- dos olas de Mazo B;
- lógica del hueco;
- estructura de predicción;
- frontera app ↔ Moodle;
- arquitectura compartida;
- decisión de no usar backend/cuentas en este piloto.

## 10. Estado final de sesión

**CIERRE FUERTE COMPLETADO**

La aplicación H6 está publicada, documentada y autorizada para uso piloto con estudiantes.

El siguiente movimiento ya no es desarrollo preventivo.

Es:

`piloto real → evidencia → corrección situada → cierre Gates 3–4 → versión postpiloto`
