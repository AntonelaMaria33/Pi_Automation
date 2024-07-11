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
                sh 'npx cypress run'
            }
        }

        stage('Publish Test Results') {
            steps {
                junit 'results/*.xml'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
