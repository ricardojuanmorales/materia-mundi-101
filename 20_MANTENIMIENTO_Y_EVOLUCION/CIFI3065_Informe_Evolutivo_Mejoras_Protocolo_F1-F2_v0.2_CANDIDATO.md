# CIFI 3065 Virtual — Materia Mundi
# Informe Evolutivo de Aprendizajes y Mejoras al Protocolo de Virtualización — F1/F2
**Versión:** 0.2 CANDIDATA | **Propósito:** preparar futura V2.0 sin alterar retroactivamente V1.0

## Principio
**situación observada → respuesta aplicada → aprendizaje → mejora candidata → validación requerida**

## Aprendizajes F1
| ID | Aprendizaje | Mejora candidata |
|---|---|---|
| MP-F1-01 | F1 necesitó más granularidad que las cuatro subfases originales para hacer visible compatibilidad, FEHE, evaluación, bibliografía, riesgos y gate | permitir descomposición proporcional de subfases |
| MP-F1-02 | La granularidad profunda produjo identidad curricular y trazabilidad, pero elevó carga documental | adoptar granularidad adaptativa |
| MP-F1-03 | Un curso nunca ofrecido virtualmente no permite fingir evidencia de implementación | distinguir diagnóstico anticipatorio de evidencia empírica |
| MP-F1-04 | Cada fase necesita producto tangible y decisión de salida | incorporar gate explícito entre fases |
| MP-F1-05 | FEHE demuestra valor de artefactos disciplinares puente | permitir artefactos especializados sin sustituir el protocolo general |

## Aprendizajes F2
| ID | Aprendizaje | Mejora candidata |
|---|---|---|
| MP-F2-01 | V1.0 termina 2.6, pero la implementación necesitó apertura, simetría y cierre | patrón opcional F#.0 + cheque de simetría + gate |
| MP-F2-02 | Algunos entregables tempranos de V1.0 están redactados como si el LMS ya existiera | diferenciar arquitectura, microdiseño e implementación |
| MP-F2-03 | REC reduce redundancia y detecta huérfanos | incorporar Resultado→Evidencia→Criterio como cheque transversal |
| MP-F2-04 | PSEC permitió probar coherencia sin congelar OVAt | incorporar cheque de simetría funcional antes del macrodiseño/microdiseño |
| MP-F2-05 | Brechas pueden permanecer abiertas sin bloquear si tienen destino | formalizar “brecha controlada” |
| MP-F2-06 | Secuencia documental macro→puente→micro evita repetir decisiones | formalizar Guión Maestro→Ficha Estratégica→OVAt |
| MP-F2-07 | La riqueza metodológica puede producir sobrecarga | añadir modelado de carga y regla “integrar antes que añadir” |
| MP-F2-08 | Una conversación larga no es memoria de proyecto suficiente | bitácora maestra + estado + primer + repositorio versionado |
| MP-F2-09 | El cierre puede ejecutarse en bloque sin eliminar controles | modalidad expedita controlada además de secuencial/reflexiva |
| MP-F2-10 | Humano/Máquina/IA necesita reparto explícito de autoridad | humano decide; IA propone/critica; máquina verifica; documentación recuerda |

## Mejoras de continuidad/proyecto — candidatas, no integradas aún al protocolo curricular
- Framework de proyecto como infraestructura superior al protocolo curricular, no sustituto.
- Protocolo de sesión con activación, snapshot, movimiento autorizado, verificación, gate y transferencia.
- Project como espacio de deliberación; GitHub como fuente versionada; bitácora/estado como puente.
- Caleidoscopio usado pragmáticamente como orquestador de perfiles.
- Para futuras apps educativas: baseline inicial Human-Centered, Local-First, SDD, Security by Design, Security by Default y OOP; activación sólo ante necesidad educativa justificada.

## Qué requiere validación posterior
- utilidad real de la modalidad expedita;
- carga real de documentación;
- eficacia del Primer/Estado Maestro al cambiar de sesión;
- funcionamiento de la migración Project/GitHub;
- carga y experiencia de la primera cohorte;
- valor pedagógico de storytelling/avatares/IA;
- cualquier afirmación de efectividad educativa.

## Regla evolutiva
**hallazgo → propuesta → contraste humano/IA → decisión humana → versión → bitácora.**
Nada de este informe modifica automáticamente el Protocolo V1.0.
