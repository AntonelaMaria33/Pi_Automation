pipeline {
    agent any

    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                // Clonar el repositorio
                git https://github.com/AntonelaMaria33/Pi_Automation.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Instalar dependencias
                    sh 'npm install'
                }
            }
        }

        stage('Lint Code') {
            steps {
                script {
                    // Ejecutar ESLint
                    sh 'npx eslint .'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Ejecutar pruebas de Cypress
                    sh 'npx cypress run'
                }
            }
        }

        stage('Run Lighthouse') {
            steps {
                script {
                    // Ejecutar Lighthouse
                    sh 'node run-lighthouse.js'
                }
            }
        }

        stage('Run Pa11y') {
            steps {
                script {
                    // Ejecutar Pa11y
                    sh 'node run-pa11y.js'
                }
            }
        }

        stage('Publish Results') {
            steps {
                script {
                    // Publicar resultados de pruebas en Jenkins
                    junit '**/results/*.xml'
                }
            }
        }
    }

    post {
        always {
            // Limpiar después de la ejecución
            cleanWs()
        }
    }
}
