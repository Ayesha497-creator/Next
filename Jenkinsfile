
pipeline {
    agent any

    environment {
        REMOTE_USER = "ubuntu"
        REMOTE_HOST = "13.61.68.173"
        PROJECT = "Next"
        ENV_NAME = "${BRANCH_NAME}"          // ENV_NAME ab environment me
       // SLACK_WEBHOOK = credentials('SLACK_WEBHOOK')
    }

    stages {
        stage('Deploy') {
            steps {
                script {
                    def PROJECT_DIR = "/var/www/html/${ENV_NAME}/${PROJECT}"

                    sshagent(['jenkins-deploy-key']) {
                        sh """
                        ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${REMOTE_HOST} '
                            set -e
                            cd ${PROJECT_DIR}
                            echo "Deploying ${PROJECT} → ${ENV_NAME}"

                            git pull origin ${ENV_NAME}

                            if [ "${PROJECT}" = "vue" ] || [ "${PROJECT}" = "next" ]; then
                            npm install
                              
                                npm run build -- --mode ${ENV_NAME}
                           pm2 startOrRestart ecosystem.config.js
                                pm2 save
                            fi

                            if [ "${PROJECT}" = "laravel" ]; then
                                php artisan optimize
                            fi
                        '
                        """
                    }
                }
            }
        }
    }

    /*
    post {
        success {
            sh """
            curl -X POST -H 'Content-type: application/json' \
            --data '{"text":"✅ ${PROJECT} → ${ENV_NAME} deployed successfully!"}' \
            $SLACK_WEBHOOK
            """
        }
        failure {
            sh """
            curl -X POST -H 'Content-type: application/json' \
            --data '{"text":"❌ ${PROJECT} → ${ENV_NAME} deployment failed!"}' \
            $SLACK_WEBHOOK
            """
        }
    }
    */
}
