const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchaseController');

// GET /purchases - Получить все покупки или фильтровать по query параметрам
router.get('/', purchaseController.getAll);

// GET /purchases/:id - Получить покупку по ID
router.get('/:id', purchaseController.getById);

// POST /purchases - Создать новую покупку
router.post('/', purchaseController.create);

// PUT /purchases/:id - Обновить покупку по ID
router.put('/:id', purchaseController.update);

// DELETE /purchases/:id - Удалить покупку по ID
router.delete('/:id', purchaseController.delete);

module.exports = router;