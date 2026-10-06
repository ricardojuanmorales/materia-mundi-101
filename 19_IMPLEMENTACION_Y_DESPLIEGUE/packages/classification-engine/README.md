# Classification Engine

Motor semántico compartido para actividades de clasificación de Materia Mundi.

## Responsabilidades

- crear grupos;
- mover ítems entre grupos;
- construir y reordenar series;
- derivar relaciones semánticas de la serie;
- registrar relaciones explícitas;
- marcar huecos entre ítems;
- separar el significado de la posición visual.

## Relaciones soportadas

- `pertenece_a_grupo`
- `precede_a`
- `sigue_a`
- `relacionado_con`
- `hueco_entre`
- `serie_propuesta`
- `fuera_de_clasificacion`

## Principio

La geometría de la interfaz no es el conocimiento.

Dos interfaces distintas pueden manipular el mismo estado semántico y producir la misma trayectoria de razonamiento.
