# Implementación y despliegue

Este cartapacio aloja implementaciones ejecutables y su infraestructura de publicación.

## Estructura inicial

- `apps/h6-periodicidad/` — vertical slice / futura aplicación H6.
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
