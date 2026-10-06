# H6 — QA histórico del corpus v0.1

Estado: **VALIDADO / Gate 1 PASS**

## Fuentes de control utilizadas

1. Science History Institute, reproducción de la tabla de Mendeleev de 1871.
2. Royal Society of Chemistry, desarrollo de la tabla periódica.
3. Royal Society of Chemistry, comparación eka-aluminio / galio.
4. Royal Society of Chemistry, comparación eka-silicio / germanio.
5. RSC Education, discusión histórica del caso Te/I.

## Hallazgos validados

### Tabla y masas
Las masas históricas usadas en las 41 tarjetas coinciden con la reproducción de la tabla de 1871 empleada como baseline del laboratorio.

### Patrones de grupo
Los patrones generales usados por la app se corresponden con los encabezados históricos:

- I: R₂O
- II: RO
- III: R₂O₃
- IV: RH₄ / RO₂
- V: RH₃ / R₂O₅
- VI: RH₂ / RO₃
- VII: RH / R₂O₇
- VIII: RO₄ como tipo superior histórico, con tratamiento especial de Fe/Co/Ni y tríadas relacionadas.

### Huecos
La tabla de 1871 contiene explícitamente los huecos aproximadamente 68 y 72 en las posiciones que fundamentan las predicciones de eka-aluminio y eka-silicio.

### Contraste histórico
- eka-aluminio: masa prevista ≈68; galio descubierto en 1875, masa histórica comparada ≈69.72.
- eka-silicio: masa prevista ≈72; germanio descubierto en 1886, comparación histórica ≈72.3.
- la predicción de volatilidad del eka-aluminio no coincidió con el galio observado, lo que sirve como límite histórico útil.

## Corrección realizada durante QA

### Te/I
La versión previa usaba Te/I como tensión de masa dentro del archivo de 1871.

Eso es inadecuado para este escenario porque la tabla de 1871 usada por la app presenta:

- Te ≈125
- I ≈127

Por tanto, en ese archivo el orden por masa no está invertido.

La famosa anomalía Te/I corresponde a valores aceptados posteriormente, cuando el peso de Te se situó por encima del de I.

**Corrección aplicada:**
- Te e I ahora refuerzan analogías de familia en el escenario de 1871;
- se eliminó el feedback que sugería una anomalía de masa en esa etapa;
- el caso Te/I puede aparecer posteriormente como extensión histórica, no como evidencia inicial.

## Procedencia

Se ajustó la etiqueta de procedencia visible:

- masa/patrón: **FH**
- pistas interpretativas: **RH**

Esto evita presentar frases pedagógicas reconstruidas como datos primarios.

## Pendiente para cerrar Gate 1

### Revisión tarjeta por tarjeta de las 41 pistas
Para cada tarjeta debe marcarse:

- inicial: APROBADA / REVISAR / SUSTITUIR;
- revelación: APROBADA / REVISAR / SUSTITUIR;
- riesgo de regalar el patrón;
- riesgo de anacronismo;
- carga cognitiva;
- necesidad real de la tarjeta.

### Decisión sobre propiedades
La versión actual se apoya principalmente en masas, fórmulas/patrones y analogías. No se deben añadir propiedades físicas o químicas específicas hasta validar su fuente y su función pedagógica.

## Estado del Gate 1

**PASS.**

La estructura histórica de masas, patrones, huecos y contraste quedó validada.

Las 41 pistas interpretativas RH fueron revisadas por aprobación humana y ratificadas **tal como están**.

### Decisión humana de cierre
- corpus: aprobado como está;
- pistas iniciales: aprobadas;
- revelaciones: aprobadas;
- densidad de pistas: aprobada;
- poder de descubrimiento: aprobado;
- corpus de 41 tarjetas: aprobado para avanzar a prueba humana prepíloto.

Gate 1 queda cerrado y no debe reabrirse salvo que Gate 2, 3 o 4 detecte un problema histórico o cognitivo concreto.
