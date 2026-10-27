/**
 * ================================================================
 * PUNTO DE ENTRADA SERVERLESS PARA VERCEL
 * ================================================================
 * Exporta la aplicación Express para que Vercel la ejecute
 * como una función serverless sin requerir configuración manual.
 */
const app = require('../server');

module.exports = app;
