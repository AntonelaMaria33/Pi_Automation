# QA Automation Challenge

Este proyecto es parte de un desafío de automatización de pruebas proporcionado por el Equipo QA de PI. El objetivo es demostrar habilidades en la creación y ejecución de test cases automatizados, reporte de bugs, pruebas de API y la integración de estos procesos en un pipeline CI/CD.

## Objetivo 1: Test Cases Automatizados

### Descripción

- **Análisis y Creación de Test Cases**: Analicé la historia de usuario proporcionada y creé los test cases necesarios para ambos escenarios (Happy Path y No Happy Path).
- **Automatización**: Utilicé [Cypress](https://www.cypress.io/) para automatizar los test cases. El código está estructurado usando el patrón de diseño Page Object Model (POM) para asegurar legibilidad y escalabilidad.
- **Integración CI/CD**: Integré los tests automatizados con Jenkins para permitir la ejecución continua.

### Tecnologías Utilizadas

- **Herramientas de Automatización**: Cypress
- **Patrón de Diseño**: Page Object Model (POM)
- **CI/CD**: Jenkins

## Objetivo 2: Reporte de Bugs

### Descripción

- **Tipos de Bugs**: Reporté 15 bugs, divididos en funcionales, crashes, visuales, contenido y performance.
- **Automatización**: Utilicé JUnit para automatizar la detección de ciertos bugs y herramientas de análisis estático y dinámico para performance y contenido.

### Tecnologías Utilizadas
- **Framework de Testing**: JUnit
- **Análisis de Performance**: Herramientas de análisis estático y dinámico

## Objetivo 3: Pruebas de API

### Descripción

- **Requests**: Creé y ejecuté 12 requests de diferentes tipos (GET, POST, PATCH/PUT, DELETE) utilizando Postman.
- **Automatización**: Utilicé Postman Run Collections y Newman para automatizar las pruebas de API.
- **Assertions**: Añadí assertions para verificar status 200, tiempo de respuesta, Content-Type JSON, etc.
### Documentación de la API**
- **Documentación de la API*
### Tecnologías Utilizadas
- **Herramientas de API: Postman, Newman

## Objetivo 4: Uso de Pandas y Automatización

### Descripción

- **Pandas**: Utilicé la librería Pandas para leer, manipular y procesar datos desde archivos CSV.
- **Generación Dinámica de Requests**: Creé un script que genera y envía requests a la API utilizando datos procesados con Pandas.
### Tecnologías Utilizadas
- **Librería**: Pandas
- **Automatización de Requests**: Script en Python

## Objetivo Adicional: Integración de Pruebas en CI/CD

### Descripción

- **Generación de Reportes**: Configuré la generación de reportes automatizados utilizando Allure.
- **Notificaciones Automáticas**: Configuré notificaciones automáticas de los resultados de las pruebas a través de correo electrónico.
## Tecnologías Utilizadas
- **Reportes: Allure
- **CI/CD: Jenkins

-*Verzilli Ma Antonela**
