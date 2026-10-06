# Implementación y despliegue

Este cartapacio aloja implementaciones ejecutables y su infraestructura de publicación.

## Estructura inicial

- `apps/h6-periodicidad/` — aplicación H6 candidata.
- `packages/session-portability/` — exportación/importación portable.
- `packages/state-history/` — historial semántico y undo.
- `packages/evidence-export/` — exportación de trayectoria/evidencia.
- `packages/classification-engine/` — grupos, pertenencia, relaciones, series y huecos semánticos.
- `packages/pedagogical-flow/` — etapas, transiciones y Gates configurables.
- `packages/reveal-feedback/` — revelaciones y feedback contextual sin corrección prematura.
- `site/` — shell del sitio de aplicaciones de Materia Mundi.

## Estrategia

Un repositorio puede alojar varias aplicaciones. GitHub Pages publica un solo sitio por repositorio, por lo que las aplicaciones se ensamblan como subrutas del mismo artefacto:

- `/h6/`
- futuras: `/h7/`, `/lab-x/`, etc.

## Gobernanza

- Código DEV puede vivir en ramas de trabajo.
- `main` sigue siendo fuente versionada de verdad.
- Publicación automática se ejecuta sólo desde `main`.
- Los datos históricos de aula no se incorporan hasta cerrar su QA.
