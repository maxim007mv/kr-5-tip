const purchases = []; 
let nextId = 1;

// Конфиг категорий 
const CATEGORY_MAP = {
  'молоко': 'Молочные продукты', 'сыр': 'Молочные продукты', 'йогурт': 'Молочные продукты', 'масло': 'Молочные продукты',
  'мясо': 'Мясо', 'курица': 'Мясо', 'рыба': 'Мясо', 'колбаса': 'Мясо',
  'хлеб': 'Выпечка', 'булка': 'Выпечка', 'торт': 'Выпечка', 'печенье': 'Выпечка',
  'яблоко': 'Фрукты', 'банан': 'Фрукты', 'апельсин': 'Фрукты', 'груша': 'Фрукты',
  'морковь': 'Овощи', 'картофель': 'Овощи', 'лук': 'Овощи', 'помидор': 'Овощи',
  'сок': 'Напитки', 'вода': 'Напитки', 'чай': 'Напитки', 'кофе': 'Напитки'
};

const getCategory = (name) => {
  const lower = name.toLowerCase();
  for (const [key, cat] of Object.entries(CATEGORY_MAP)) {
    if (lower.includes(key)) return cat;
  }
  return 'Общее';
};

const purchaseController = {
  getAll: (req, res) => {
    let result = [...purchases]; // copy для безопасности
    const { category, completed } = req.query;

    if (category) result = result.filter(p => p.category === category);
    if (completed !== undefined) result = result.filter(p => p.completed === (completed === 'true'));

    res.json(result);
  },

  getById: (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

    const purchase = purchases.find(p => p.id === id);
    if (!purchase) return res.status(404).json({ error: 'Not found' });
    res.json(purchase);
  },

  create: (req, res) => {
    const { name, quantity, category, completed = false } = req.body;

    if (!name?.trim() || quantity == null || isNaN(Number(quantity)) || Number(quantity) < 1) {
      return res.status(400).json({ error: 'Name and positive quantity required' });
    }

    const newItem = {
      id: nextId++,
      name: name.trim(),
      quantity: Number(quantity),
      category: category || getCategory(name),
      completed: !!completed,
      createdAt: new Date().toISOString()
    };

    purchases.push(newItem);
    res.status(201).json(newItem);
  },

  update: (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

    const index = purchases.findIndex(p => p.id === id);
    if (index === -1) return res.status(404).json({ error: 'Not found' });

    const { name, quantity, category, completed } = req.body;
    const item = purchases[index];

    purchases[index] = {
      ...item,
      name: name?.trim() || item.name,
      quantity: quantity != null ? Math.max(1, Number(quantity)) : item.quantity,
      category: category || item.category,
      completed: completed !== undefined ? !!completed : item.completed,
      updatedAt: new Date().toISOString()
    };

    res.json(purchases[index]);
  },

  delete: (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

    const index = purchases.findIndex(p => p.id === id);
    if (index === -1) return res.status(404).json({ error: 'Not found' });

    purchases.splice(index, 1);
    res.status(204).send();
  }
};

module.exports = purchaseController;