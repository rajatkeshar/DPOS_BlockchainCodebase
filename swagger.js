const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const fs = require('fs');

module.exports = {
    docs: function(app) {
        // Swagger definition
        var jsonObj = {};
        fs.readdirSync('docs').forEach( (file) => {
            APIsPath = require('./docs/' + file);
            jsonObj = Object.assign(jsonObj, APIsPath.paths);
        }); 
        
        const swaggerDefinition = {
            openapi: "3.0.0",
            servers: [
                {
                    "description": "REST API For Public Blockchain",
                    "url": "http://0.0.0.0:9305/api/"
                }
            ],
            info: {
                title: 'REST API For Public Blockchain', // Title of the documentation
                version: '1.0.0', // Version of the app
                description: 'This is the REST API for public blockchain', // short description of the app
            },
            host: '0.0.0.0:9305', // the host or url of the app
            basePath: '/api/', // the basepath of your endpoint
            schemes: [
                "http",
                "https"
            ],
            tags: [
                {
                    "name": "Accounts Controller",
                    "description": "Contains Accounts API"
                },
                {
                    "name": "Votes Controller",
                    "description": "Contains Votes API"
                },
                {
                    "name": "Blocks Controller",
                    "description": "Contains Blocks API"
                },
                {
                    "name": "Delegates Controller",
                    "description": "Contains Delegates API"
                },
                {
                    "name": "Loaders Controller",
                    "description": "Contains Loaders API"
                },
                {
                    "name": "Peers Controller",
                    "description": "Contains Peers API"
                },
                {
                    "name": "Signatures Controller",
                    "description": "Contains Signatures API"
                },
                {
                    "name": "System Controller",
                    "description": "Contains System API"
                },
                {
                    "name": "Transactions Controller",
                    "description": "Contains Transactions API"
                },
                {
                    "name": "Applications Controller",
                    "description": "Contains Applications API"
                }
            ],
            paths: jsonObj
        };

        // options for the swagger docs
        const options = {
            // import swaggerDefinitions
            swaggerDefinition,
            // path to the API docs
            apis: [],
        };

        // initialize swagger-jsdoc
        const swaggerSpec = swaggerJSDoc(options);
        // use swagger-Ui-express for your app documentation endpoint
        app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    }
}