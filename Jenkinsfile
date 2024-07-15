pipeline {
    agent any

    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/AntonelaMaria33/Pi_Automation.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx cypress run --reporter mocha-allure-reporter'
            }
        }

        stage('Generate Allure Report') {
            steps {
                sh 'npx allure generate allure-results --clean -o allure-report'
            }
        }

        stage('Publish Allure Report') {
            steps {
                allure([
                    includeProperties: false,
                    jdk: '',
                    properties: [],
                    reportBuildPolicy: 'ALWAYS',
                    results: [[path: 'allure-results']]
                ])
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'allure-report/**'
            junit 'results/*.xml'
            cleanWs()
        }
        success {
            emailext (
                subject: "Pipeline de Verzilli Antonela completado exitosamente",
                body: "El pipeline de pruebas de Anto con Cypress se ejecutó correctamente, MERECE UNA OPORTUNIDAD EN PI (guiño guiño).",
                to: "crisherreraoficial@gmail.com","carolaleme21@gmail,.com",
            )
        }
        failure {
            emailext (
                subject: "Error en el pipeline de pruebas Cypress, a cualquier le puede suuceder",
                body: "Hubo errores durante la ejecución del pipeline de pruebas de Anto. Revisa el reporte para más detalles y no se olviden que lo dio todo.",
                to: "crisherreraoficial@gmail.com","carolaleme21@gmail,.com",
            )
        }
    }
}

