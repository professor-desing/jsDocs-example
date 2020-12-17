import express from 'express';
const app = express();

/**
 * @module api
 */

/**
 * Inndex Route
 * @name index
 * @path {GET} /
 */
app.get('/', (req, res) => res.send('welcome'));

/**
 * Inndex Route
 * @name users
 * @path {POST} /users
 */
app.post('/user', (req, res) => res.send('welcome'));

/**
 * Inndex Route
 * @name products
 * @path {DELETE} /products
 */
app.delete('/products', (req, res) => res.send('welcome'));

/**
 * Inndex Route
 * @name signin
 * @path {PUT} /signin
 */
app.put('/signin', (req, res) => res.send('welcome'));