# CIFI 3065 Virtual — Materia Mundi
# Especificación Maestra del Expediente Unitario G4

**Versión:** 0.2 CANDIDATO  
**Fecha:** 31 de agosto de 2026  
**Estado:** CANDIDATO H6-R2 / PATRÓN REFORZADO TRAS PROTOTIPO U3-H1  
**Fuente de verdad:** GitHub `main`

---

# 0. Motivo de v0.2

La v0.1 definió correctamente la arquitectura A–W del Expediente Unitario G4 y fue utilizada como patrón candidato para construir el prototipo U3/H1. La prueba confirmó la validez de la arquitectura federada, pero reveló que un patrón puede describir bien una unidad y aun dejar demasiada reinterpretación al momento de montarla.

La v0.2 conserva la estructura conceptual de v0.1 y refuerza cuatro propiedades:

1. **ejecutabilidad por objeto**, no sólo descripción global;
2. **copy mínimo suficiente** para superficies estudiantiles significativas;
3. **contratos fuertes G4-C** para decisiones diferidas sin rediseño;
4. **QA/EO verificable por objeto**, no sólo checklist unitario final.

Principio rector añadido:

> **La prueba de un Expediente G4 no es que explique la unidad, sino que reduzca suficientemente la reinterpretación durante el montaje.**

---

# 1. Propósito

Definir la unidad documental mínima autosostenida para montar, verificar, mantener y auditar cada U1–U15 de Materia Mundi en granularidad G4.

Un Expediente Unitario G4 no es plan de clase, resumen ni repositorio indiscriminado de detalle. Es el **plano constructivo pedagógico-operacional** de una unidad dentro de un sistema federado.

Debe cumplir simultáneamente:

`autosuficiencia local + continuidad longitudinal + referencias mantenibles + decisiones diferidas ejecutables + verificación reproducible`.

---

# 2. Definition of Done reforzada

Un expediente está suficientemente especificado cuando una persona competente puede, sin reconstruir F1–F8:

1. comprender la función de la unidad dentro del semestre;
2. identificar qué objetos concretos debe crear en el LMS;
3. saber dónde se ubica cada objeto y qué precede/sigue;
4. disponer de copy candidato suficiente para que la función sea inequívoca;
5. configurar evaluación, rúbrica, gradebook, feedback e interacción;
6. producir o seleccionar objetos pendientes usando contratos G4-C sin reinterpretar pedagogía;
7. implementar alternativas accesibles/equivalentes preservando REC, criterio, función y autoría;
8. registrar recursos, procedencia, licencias, tecnología, IA y contingencias;
9. ejecutar QA por objeto y recorrido;
10. reconocer F-T frente a F-P;
11. conectar la unidad con PROEMA, REC, DR y U1/U2/U13/U14/U15 según corresponda;
12. distinguir honestamente G4-A/B/C;
13. demostrar qué evidencia EO probará cada afirmación de implementación;
14. preservar variables F9 sin consumirlas;
15. completar el montaje con una cantidad razonable de decisiones humanas, reservadas a bifurcaciones pedagógicamente significativas.

## 2.1 Prueba de montabilidad

La pregunta de aceptación es:

> **¿Puede una persona competente abrir el LMS y construir esta unidad sin inventar decisiones pedagógicas que el expediente no haya resuelto o gobernado?**

Si la respuesta es no, el expediente aún no está listo para propagación o cierre.

---

# 3. Regla H/M/IA de producción

## 3.1 Humano

Debe decidir o ratificar cuando exista:
- más de una alternativa con consecuencias pedagógicas significativas;
- cambio de REC, criterio, función, autoría, evaluación o continuidad;
- selección cultural/histórica sensible o controvertida;
- excepción CP7/G7;
- colisión terminológica con impacto estudiantil;
- clasificación F-P;
- decisión que pueda reabrir una herencia F1–F7.

## 3.2 IA

Puede, a partir de fuentes canónicas:
- integrar decisiones ya resueltas;
- generar estructura del expediente;
- producir copy candidato;
- derivar tablas LMS, QA y EO;
- proponer candidatos G4-C contra criterios ya definidos;
- detectar inconsistencias, omisiones y regresiones;
- preparar alternativas para decisión humana;
- propagar patrones aprobados preservando variaciones unitarias.

No convierte una recomendación propia en decisión canónica.

## 3.3 Máquina

Puede:
- crear/ordenar archivos y objetos determinados;
- aplicar IDs y convenciones;
- configurar valores determinados;
- comprobar enlaces, permisos, visibilidad y estados;
- ejecutar verificaciones repetibles;
- registrar evidencia y trazabilidad.

## 3.4 Regla de escalamiento

> **Lo determinado por herencia canónica se ejecuta; la bifurcación pedagógica real se eleva.**

No se interrumpe al humano por microdecisiones cosméticas, reversibles o inequívocas.

---

# 4. Plantilla maestra A–W

## A. Identidad y genealogía

Registrar:
- ID de unidad;
- nombre;
- correspondencia H si aplica;
- función sistémica;
- transformación principal;
- NLEP/firma heredada cuando aplique;
- documentos fuente F1–F8;
- decisiones/IDs CP7, G7, VD8 y QM-B aplicables;
- herencias protegidas;
- decisiones humanas todavía abiertas.

**Criterio de suficiencia:** la genealogía debe explicar por qué la unidad tiene esta forma, no sólo listar archivos.

## B. Posición longitudinal

- qué recupera;
- qué transforma;
- qué deja preparado;
- U1/U2/U13/U14/U15 activas y con qué intensidad;
- relación PROEMA/REC/DR;
- feedback que entra;
- evidencia que debe quedar recuperable después.

## C. Experiencia estudiantil

- apertura visible;
- pregunta rectora;
- transformación esperada;
- objetivos operacionales;
- recorrido paso a paso;
- evidencia(s) que produce;
- evidencia(s) que recupera;
- criterios esenciales visibles;
- cierre y continuidad.

Debe poder leerse como una experiencia integrada, no como lista administrativa de tareas.

## D. Plano LMS objeto por objeto

Todo objeto relevante tendrá ID `Uxx-G4-##` y, como mínimo:

`ID → tipo LMS → nombre visible → ubicación → orden/prerrequisito → función → acción estudiantil → entrada → evidencia → criterio → valor/categoría si aplica → visibilidad → dependencia → feedback/destino → estado G4 → EO → prueba → decisión pendiente`.

Tipos posibles: página, módulo, archivo, enlace, foro, tarea, quiz/diagnóstico, rúbrica, gradebook item, feedback object, visualización, herramienta, recurso externo u otro equivalente.

### D1. Regla de objetos

Un ID no implica una tarea. El plano puede incluir páginas, rúbricas, recursos, transiciones y objetos de configuración. La unidad debe sentirse como secuencia coherente, no como acumulación de dieciséis obligaciones.

## E. Copy estudiantil mínimo

Para cada superficie significativa, incluir cuando aplique:
- título visible;
- propósito;
- instrucciones;
- criterios de éxito;
- evidencia que se reutiliza;
- qué no debe hacer el estudiante;
- feedback esperado;
- transición/qué sigue;
- lenguaje de apoyo o extensión;
- indicación de IA/autoría cuando corresponda.

G4-B no exige edición final, pero sí copy suficiente para montar sin inventar la experiencia.

## F. FEHE

- función pedagógica;
- pregunta/lente;
- contenido mínimo;
- objetos históricos/culturales;
- secuencia narrativa/analítica;
- presencia docente/avatar cuando aplique;
- qué no debe sustituir;
- modalidad principal;
- alternativa accesible;
- fuentes/proveniencia;
- contrato G4-C de diseño/medio si queda diferido;
- prueba de aceptación;
- estado G4.

## G. Fuente primaria / evidencia histórica

Para cada fuente central:

`ID → candidato concreto o slot → tradición/contexto → función → mínimo necesario → fragmento/alcance → procedencia → autoría → fecha/contexto → licencia/uso → accesibilidad → carga → relación REC → criterio de selección → criterio de exclusión → criterio de sustitución → evidencia de verificación → estado`.

### G1. Regla G4-C fuerte

Un slot de fuente no es válido si sólo dice “seleccionar fuente”. Debe permitir seleccionar, sustituir y verificar sin reabrir la unidad.

## H. Experiencia/Laboratorio

- función;
- fenómeno/operación;
- requisitos funcionales;
- modalidad física/simulada/otra;
- secuencia;
- evidencia producida;
- seguridad cuando corresponda;
- variante equivalente;
- contingencia;
- dependencia tecnológica;
- carga;
- criterios de selección/exclusión si la experiencia exacta es G4-C;
- prueba de aceptación.

No se elige tecnología antes de resolver REC y función.

## I. REC

- competencia dominante;
- prompt exacto candidato;
- evidencia;
- criterio;
- rúbrica/descriptores esenciales;
- límite/incertidumbre;
- mejora/prueba;
- valor/categoría;
- feedback;
- conexión posterior;
- configuración LMS.

## J. Foro/interacción

- nombre visible;
- problema/prompt candidato;
- evidencia exigida;
- razonamiento esperado;
- función del par;
- aportación sustantiva;
- qué no cuenta como interacción suficiente;
- criterio/rúbrica;
- puntos/categoría;
- presencia docente;
- feedback;
- reutilización;
- configuración LMS;
- prueba de aceptación.

No existe cuota de respuestas sin función académica explícita.

## K. PROEMA/DR

Cuando aplique:
- estado anterior;
- insumos recuperados;
- operación intelectual nueva;
- producto/evidencia;
- estructura candidata;
- feedback recuperado;
- autoría individual/grupal;
- IA permitida/límites;
- puntos/categoría;
- configuración LMS;
- siguiente estado;
- evidencia que debe persistir hasta U15.

PROEMA permanece una única investigación longitudinal.

## L. Evaluación y gradebook

Para cada objeto evaluado:

`objeto → evidencia → criterio → instrumento → puntos → categoría 75/25 → visibilidad estudiante → rúbrica → feedback → recuperación → configuración LMS → prueba PH3/EO`.

Debe ser posible configurar el gradebook sin inferir valores o categorías.

## M. Feedback y presencia

- escala cohorte/grupo/individuo;
- momento;
- función;
- quién responde;
- copy/plantilla cuando corresponda;
- qué puede apoyar IA/máquina;
- qué requiere autoridad humana;
- destino del feedback;
- señal visible de recuperación posterior.

Cadena mínima:

`evidencia → criterio → feedback → revisión/transferencia → nueva evidencia`.

## N. Recursos

Separar claramente:
- Núcleo;
- Profundización de recursos;
- Exploración;
- FEHE/media;
- fuentes primarias;
- videoteca/archivo/museo;
- simuladores/visualizadores.

Cada recurso importante registra:

`ID → jerarquía → función → título/tipo o slot → procedencia → licencia/uso → enlace/localización → accesibilidad → contingencia → carga → estado → criterio de sustitución`.

## O. Adaptabilidad

- núcleo común;
- puerto de apoyo;
- ruta base;
- puerto de extensión/desafío o denominación finalmente gobernada;
- regla de autoselección reversible;
- REC/criterio invariantes;
- andamiaje variable;
- autonomía variable;
- carga adicional opcional claramente separada.

### O1. Control terminológico

Mientras no se gobierne definitivamente la colisión entre el puerto adaptativo y la jerarquía de recursos **Profundización**, el expediente debe marcar la denominación adaptativa como **TERMINOLOGÍA PENDIENTE CP7-09** y no canonizar silenciosamente un término nuevo.

## P. Accesibilidad/equivalencia

Registrar:

`barrera → objeto → alternativa → REC → criterio → función → autoría → dignidad → prueba → EO → estado`.

Incluir, según pertinencia:
- estructura/encabezados;
- teclado/foco;
- contraste;
- texto alternativo;
- subtítulos/transcripción;
- alternativa a visualidad exclusiva;
- archivos utilizables;
- enlaces descriptivos;
- instrucciones multimodales;
- variante de experiencia/laboratorio.

Equivalencia no significa identidad de medio; significa preservación del rigor y de la función.

## Q. Tecnología, IA, datos y privacidad

Por herramienta:

`función → REC → ventaja → datos → dependencia → barrera → alternativa → portabilidad → contingencia → soporte → decisión → estado`.

IA:

`uso permitido → límite → autoría humana → verificación → transparencia/atribución → datos → alternativa sin IA → contingencia`.

Privacidad:

`dato mínimo → propósito → exposición mínima → alternativa razonable`.

## R. Carga desglosada

Tabla por bloque con:
- minutos Núcleo;
- minutos opcionales;
- dependencia/reutilización;
- margen de contingencia.

Total Núcleo ≤ techo heredado. Profundización/Exploración no pueden convertirse en obligación encubierta.

## S. Inventario G4 unitario

Cada ID `Uxx-G4-##` debe declarar:

`A/B/C → dependencia → EO → prueba → decisión pendiente → responsable H/M/IA → criterio de sustitución → bloqueo sí/no`.

### S1. G4-A
Montado y verificable mediante evidencia reproducible.

### S2. G4-B
Estructura, función, copy y configuración suficientemente especificados para producir/montar sin reinterpretar pedagogía.

### S3. G4-C
Decisión sustituible diferida que posee contrato fuerte completo.

**Placeholder vacío nunca es G4-C válido.**

## T. QA y aceptación

Debe operar en dos niveles.

### T1. QA por objeto

Para cada objeto relevante:
`riesgo → prueba → evidencia EO → PASS/FAIL → F-T/F-P → corrección/destino`.

### T2. QA de recorrido unitario

Checklist mínimo:
- navegación;
- pregunta/propósito;
- secuencia integrada;
- evidencia;
- criterio visible;
- evaluación/gradebook;
- feedback/destino;
- interacción funcional;
- REC;
- continuidad PROEMA cuando aplique;
- accesibilidad/equivalencia;
- recursos/proveniencia/licencia;
- tecnología/contingencia;
- autoría/IA;
- carga;
- CP7/G7/VD8;
- G4-A/B/C correctamente clasificados;
- continuidad con unidad siguiente;
- ausencia de entregas paralelas innecesarias.

## U. F-T / F-P

### F-T
Defecto local corregible sin alterar pedagogía, por ejemplo enlace, visibilidad, permiso, configuración, subtítulo o archivo.

### F-P
Contradicción pedagógica o de gobernanza, por ejemplo cambio de REC, fragmentación PROEMA, reducción de rigor, reinterpretación 75/25, interacción vacía o IA sustituyendo autoría.

Todo F-P se eleva a humano.

## V. F9 reservado

Lista explícita de variables/hipótesis que F8 sólo prepara y no interpreta empíricamente, incluyendo cuando aplique:
- carga real;
- navegación/fricción real;
- autenticidad de interacción;
- uso real de feedback;
- continuidad vivida;
- efectividad de variantes;
- sostenibilidad docente;
- pertenencia;
- privacidad percibida.

## W. Dictamen unitario

Usar:

`MONTABLE | MONTABLE CON SLOTS | REQUIERE DECISIÓN | NO MONTABLE`

Debe incluir:
- condiciones;
- bloqueos reales;
- G4-A/B/C;
- decisiones humanas pendientes;
- pruebas aún no ejecutadas;
- próximo movimiento.

---

# 5. Contrato fuerte de G4-C

Todo G4-C debe responder, como mínimo:

1. ¿qué función debe cumplir?;
2. ¿qué invariantes debe preservar?;
3. ¿qué clase de candidatos son aceptables?;
4. ¿qué candidatos o propiedades son inaceptables?;
5. ¿quién puede seleccionar: humano, IA bajo criterio, máquina?;
6. ¿qué procedencia/licencia/accesibilidad debe verificarse?;
7. ¿cómo se prueba que la selección cumple?;
8. ¿qué alternativa existe si falla?;
9. ¿qué criterio permite sustituirla sin reabrir pedagogía?;
10. ¿qué condición obligaría a elevar F-P?

Un G4-C que no responda suficientemente estas preguntas vuelve a ser una brecha de diseño.

---

# 6. Regla de referencias

El expediente puede referenciar registros transversales para evitar duplicación, pero nunca depender de una cadena documental que impida reconstruir la unidad.

> **Referenciar para mantener; resumir lo suficiente para montar.**

Información que afecta directamente acción estudiantil, evaluación, REC, autoría, accesibilidad o selección G4-C debe estar visible localmente o referenciada de forma inequívoca.

---

# 7. Regla de variación

U1, H1–H10, U13, U14 y U15 no son simétricas. El patrón define contratos y controles, no obliga a rellenar bloques irrelevantes.

La variación debe conservar:

`función sistémica + continuidad + REC/evidencia + criterio + montabilidad + verificabilidad`.

---

# 8. Validación arquetípica y propagación

La aprobación del patrón no depende de un solo tipo de unidad.

Se utilizarán tres arquetipos:

1. **U1** — orientación, persistencia, presencia, acceso y baseline;
2. **U3/H1** — unidad histórica compleja con FEHE, fuentes, foro, Lab, REC, PROEMA y DR;
3. **U15** — recuperación, autoría individual, metacognición, cierre y frontera F8/F9.

## 8.1 Estrategia híbrida C+D

Después de validar los tres arquetipos:

- se propagará el patrón unidad por unidad;
- IA/máquina ejecutarán automáticamente lo determinado por herencia y patrón aprobado;
- no habrá mini-Gate humano para cada unidad;
- se generará un reporte compacto por unidad;
- sólo se solicitará decisión humana ante bifurcación pedagógica significativa, F-P, excepción, colisión no resuelta o decisión G4-C materialmente sensible;
- se realizarán controles humanos periódicos por muestra y en nodos de alta criticidad.

Esto busca máxima eficiencia sin perder gobernanza ni detalle relevante.

---

# 9. Regla anti-detalle improductivo

No se documentará un detalle sólo porque pueda documentarse.

Un detalle merece vivir en el expediente si afecta al menos uno de estos factores:
- experiencia estudiantil;
- REC/evidencia;
- criterio/evaluación;
- feedback;
- continuidad;
- accesibilidad/equivalencia;
- autoría/IA;
- carga;
- seguridad/privacidad;
- proveniencia/licencia;
- montaje/configuración;
- verificabilidad;
- sustitución futura;
- CP7/G7/VD8/QM-B.

Detalles puramente cosméticos, reversibles y sin consecuencia pedagógica permanecen en implementación local o diseño visual, no inflan el expediente.

---

# 10. Dictamen candidato

**ESPECIFICACIÓN MAESTRA DEL EXPEDIENTE UNITARIO G4 v0.2 = CANDIDATO REFORZADO / INCORPORA APRENDIZAJES U3-H1 / LISTO PARA VALIDACIÓN ARQUETÍPICA U1 + U3-H1 + U15 / PENDIENTE DE APROBACIÓN HUMANA FINAL.**

No autoriza todavía propagación total U1–U15.