pipeline {

	agent any
	stages {
	
			stage ('compile') {
			steps {
				withMaven(maven : 'maven_3_6_0') {
					sh 'mvn clean compile'
				}
				}
			}
			stage('Testing stage') {
			 steps {
				withMaven(maven : 'maven_3_6_0') {
					sh 'mvn test'
				}
				}
			}
			
			stage('deployment stage') {
			steps {
				withMaven(maven : 'maven_3_6_0') {
					sh 'mvn deploy'
				}
				}
			}
	}
}