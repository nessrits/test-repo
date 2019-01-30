
Installation:

`JDK 1.8:` Install JDK 1.8+ and make sure class path is set properly. JAVA is require to start `Selenium Server` nothing else.

`Node.JS:` Install  from the site - https://nodejs.org/en/  take the LTS version based on your Operating system. 
Once installation is done - open terminal (MAC OSX) or command prompt (for windows OS) and type below command to verify NodeJS has been installed properly.

        node --version
        npm --version


Now navigate to the framework's package.json folder and run `npm install` to grab all dependencies.

To take full advantage of the command line and use grunt tasks you will need to make sure that you have added `node_modules/.bin` to your `$PATH`.  Otherwise you will need to install the following globally:

  `npm install -g  grunt-cli`


Run Some Sample Tests:

To execute the entire test suite in local development, you can use any one of the options mentioned below

Option 1: `npm run test`

Option 2: `grunt webdriver:test`.  This executes all features in the [`./features/*.feature`]

CI integration: 

Jenkinsfile is created to integrate the test-case with jenkins. If you have a jenkins pipeline setup





