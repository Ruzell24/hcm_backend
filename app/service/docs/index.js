const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Express API with Swagger',
        version: '1.0.0',
        description: 'API documentation for My Hcm app',
    },
};

const options = {
    swaggerDefinition,
    apis: ['./app/api/**/*.js'], // Path to your route files
};


const swaggerSpec = swaggerJsdoc(options);

export default {
    swaggerSpec,
    swaggerUi
}


