# CIFI 3065 Virtual — Materia Mundi
# Aprendizajes Metodológicos para Protocolo de Virtualización y Protocolo de Sesión

**Versión:** 0.3 CANDIDATO  
**Fecha:** 1 de septiembre de 2026  
**Origen:** F8 H6-R3.4–R3.5  
**Estado:** BITÁCORA METODOLÓGICA VIVA / NO INTEGRADA AÚN A PROTOCOLOS CANÓNICOS

## 1. Genealogía

Sucede a v0.2 y preserva sus aprendizajes anteriores.

## 2. Aprendizaje Q — Una prueba de concepto debe cruzar la frontera real del sistema

Si una arquitectura distingue un espacio de gobernanza y un espacio de realización, la prueba no puede simular el segundo desde el primero.

Patrón:
`preparar A → ejecutar B → retornar artefactos → verificar A`.

Principio:
> **Una prueba de integración sólo es válida si atraviesa las interfaces que pretende validar.**

## 3. Aprendizaje R — No declarar PASS con evidencia anticipada

El sistema debe distinguir claramente:
- documento listo para prueba;
- prueba ejecutada;
- retorno recibido;
- retorno verificado;
- PASS.

Esto evita que la calidad documental se confunda con evidencia operacional.

## 4. Aprendizaje S — Despacho y retorno como contratos explícitos

Para conversaciones satélite conviene crear:
- paquete de despacho;
- lista de entradas;
- productos obligatorios de retorno;
- criterios de reingreso;
- dictamen posterior.

Principio:
> **Toda salida gobernada necesita definir de antemano cómo se reconoce un retorno suficiente.**

## 5. Aprendizaje T — Probar el sistema con un bloque de alta densidad, no necesariamente con toda la unidad de una vez

La prueba U03/H1 recomienda comenzar por Archivo/FEHE + fuentes históricas porque concentra múltiples dimensiones de riesgo y gobernanza.

Un bloque de alta densidad puede revelar con menor carga:
- fallas de contexto;
- problemas de libertad/invariantes;
- accesibilidad;
- carga;
- selección de recursos;
- necesidad de escalamiento;
- suficiencia del retorno.

La prueba puede continuar por bloques hasta alcanzar evidencia suficiente del ciclo completo.

## 6. Aprendizaje U — Integridad metodológica como reducción de carga futura

Negarse a simular un PASS obliga a una pausa operativa real, pero evita reabrir después una falsa certeza. La disciplina de estados reduce deuda documental y cognitiva.

## 7. Hipótesis para actualización de protocolos

Evaluar incorporar al cierre F8:
- contratos de despacho/retorno;
- prueba de interfaces reales;
- estados diferenciados de preparación/ejecución/verificación/PASS;
- pruebas por bloques de alta densidad;
- prohibición explícita de validar una interfaz sin atravesarla.

## 8. Estado

**REGISTRO ABIERTO.** R3.5 está generando evidencia metodológica en dos carriles. La integración a protocolos canónicos sigue reservada al cierre F8 y decisión humana.
