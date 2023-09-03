const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Your API',
        version: '1.0.0',
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'Bearer',
                bearerFormat: 'JWT',
            },
        },
    },
};

const options = {
    swaggerDefinition,
    apis: ['./app/api/**/*.js'], // Path to your route files,

};


const swaggerSpec = swaggerJsdoc(options);

export default {
    swaggerSpec,
    swaggerUi
}


