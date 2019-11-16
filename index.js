const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = (process.env.PORT || 5000);

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Customer API',
      description: 'Customer API Information',
      contact: {
        name: 'Amazing developer',
      },
      servers: ['http://localhost:5000'],
    },
  },
  apis: ['index.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
/**
 * @swagger
 * /customers:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/customers', (req, res) => res.status(200).send('Customer results'));

/**
 * @swagger
 * /customer:
 *  put:
 *    description: Use to update a customer
 *    responses:
 *      '201':
 *        description: A successful response
 */
app.put('/customers', (req, res) => res.status(201).send('Succesfully updated customer'));

app.listen(port, () => {
  console.log(`Sever running on port ${port}`);
});
