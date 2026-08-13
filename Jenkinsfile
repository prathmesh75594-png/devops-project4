pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
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

        stage('Deploy to EC2') {
            steps {
                echo 'Deploying application to EC2...'

                sshagent(['ubuntu']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no ubuntu@13.55.71.41 "
                            cd ~/devops-project4 &&
                            git pull origin main &&
                            sudo docker build -t devops-project4:latest . &&
                            sudo docker stop devops-project4-app || true &&
                            sudo docker rm devops-project4-app || true &&
                            sudo docker run -d --name devops-project4-app -p 3000:3000 devops-project4:latest
                        "
                    '''
                }
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