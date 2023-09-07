"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var swaggerJsdoc = require('swagger-jsdoc');
var swaggerUi = require('swagger-ui-express');
var swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Your API',
    version: '1.0.0'
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        "in": 'header',
        name: 'Authorization',
        description: 'Bearer token to access these api endpoints',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  },
  security: [{
    bearerAuth: []
  }]
};
var options = {
  swaggerDefinition: swaggerDefinition,
  apis: ['./app/api/**/*.js'] // Path to your route files,
};

var swaggerSpec = swaggerJsdoc(options);
var _default = {
  swaggerSpec: swaggerSpec,
  swaggerUi: swaggerUi
};
exports["default"] = _default;