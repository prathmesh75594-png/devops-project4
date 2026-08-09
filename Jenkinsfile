pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out Project 4 source code...'
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t devops-project4:latest .'
            }
        }

        stage('Test Docker Image') {
            steps {
                echo 'Checking Docker image...'
                sh 'docker images devops-project4'
            }
        }

    }

    post {
        success {
            echo 'Project 4 pipeline completed successfully!'
        }

        failure {
            echo 'Project 4 pipeline failed.'
        }
    }
}