# Pedagogical Flow Engine

Máquina de estados pedagógica compartida para aplicaciones de Materia Mundi.

## Permite declarar

- etapas;
- progreso;
- transiciones;
- Gates de entrada;
- condiciones de transición;
- revelaciones asociadas a etapas.

## Principio

La interfaz no decide arbitrariamente qué viene después. El recorrido pedagógico vive en una configuración explícita y auditable.

Ejemplo conceptual:

`archivo → criterio → evidencia → reorganización → hueco → predicción → contraste → reflexión`

Cada app puede conservar su propio flujo sin reescribir el motor.
