# Session Portability — patrón compartido

Estado: **REUTILIZABLE / v1**

Módulo compartido para continuidad de investigaciones interactivas de Materia Mundi.

## Responsabilidades

- construir un paquete portable versionado;
- serializarlo como JSON legible;
- validar aplicación y versión durante la importación;
- delegar al consumidor la validación específica de su estado;
- descargar el archivo localmente sin backend.

## Contrato mínimo

Cada app define:

- `app`: identificador estable, por ejemplo `materia-mundi:h6-periodicidad`;
- `formatVersion`: versión entera del formato exportado;
- `state`: estado completo que la app necesita para continuar;
- `validateState`: type guard específico de la aplicación.

## Principio

La portabilidad pertenece al motor, no al contenido histórico.

Una app nueva debe poder adoptar el patrón sin copiar la implementación de H6.
