# H6 — Guía mínima de accesibilidad Gate 3

Estado: **LISTA PARA EJECUCIÓN**

Objetivo: confirmar que todas las acciones esenciales pueden realizarse sin depender de ratón, precisión motora o color.

## Pruebas mínimas

### 1. Teclado completo
Recorre toda la aplicación usando sólo:
- Tab
- Shift+Tab
- Enter
- Barra espaciadora
- Flechas en selectores

Resultado:
- [ ] PASS
- [ ] FAIL

### 2. Foco visible
Confirma que siempre puedes identificar qué control tiene el foco.

Resultado:
- [ ] PASS
- [ ] FAIL

### 3. Orden lógico
Comprueba que el orden de tabulación sigue el flujo visual y pedagógico.

Resultado:
- [ ] PASS
- [ ] FAIL

### 4. Zoom
Prueba al menos 200%.

Resultado:
- [ ] PASS
- [ ] FAIL

### 5. Móvil o tableta
Comprueba que no desaparecen controles ni información esencial.

Resultado:
- [ ] PASS
- [ ] FAIL

### 6. Continuidad
Prueba:
- Deshacer
- Exportar sesión
- Importar sesión
- Descargar resumen

Resultado:
- [ ] PASS
- [ ] FAIL

### 7. Lector de pantalla
Verifica al menos:
- encabezados;
- etiquetas de formularios;
- botones;
- selector de archivos;
- anuncio de acciones.

Resultado:
- [ ] PASS
- [ ] FAIL

## Criterio PASS

Gate 3 = PASS si no existe una función esencial inaccesible.

No es requisito para el piloto:
- drag-and-drop;
- animaciones sofisticadas;
- personalización visual avanzada.

## Forma expedita de devolver resultados

```text
1 Teclado: PASS
2 Foco: PASS
3 Orden: PASS
4 Zoom: PASS
5 Móvil/tableta: PASS
6 Continuidad: PASS
7 Lector de pantalla: PASS

Fricciones:
- ...

Decisión: PASS / PASS CON AJUSTES / FAIL
```
