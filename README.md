# Shopping List API

Node.js Express приложение для CRUD списка покупок с автоопределением категорий. Бэкенд + статический фронтенд [1].

## Функции

- CRUD: GET/POST/PUT/DELETE `/purchases`.
- Фильтры: `?category=...&completed=true`.
- Авто-категория по ключевым словам (молоко → Молочные продукты).
- Валидация, timestamps, error handling.
- Адаптивный UI в `public/index.html` (Tailwind).

## Установка

1. Клонировать: `git clone <url> && cd shopping-list-app`
2. `npm install`
3. `npm start` (PORT=3000 или env)
4. Открыть: http://localhost:3000

Dev: `npm run dev` (nodemon).

## API

Базовый URL: `http://localhost:3000/purchases`

| Метод | Endpoint | Описание | Пример |
|-------|----------|----------|--------|
| GET | `/` | `/purchases?category=Фрукты&completed=false` | `curl "localhost:3000/purchases"` |
| GET | `/:id` | По ID | `curl localhost:3000/purchases/1` |
| POST | `/` | `{ "name": "молоко", "quantity": 2 }` | `curl -X POST -H "Content-Type: json" -d '{...}' localhost:3000/purchases` |
| PUT | `/:id` | Patch `{ "completed": true }` | Аналогично POST |
| DELETE | `/:id` | - | `curl -X DELETE localhost:3000/purchases/1` |

Ошибки: 400/404/500 JSON.

## Структура

```
.
├── controllers/purchaseController.js
├── routes/purchases.js
├── public/index.html
├── server.js
├── package.json
└── README.md
```

## Стек

- Backend: Node 18+, Express 4.18+
- Frontend: HTML/JS, Tailwind CSS
- Tools: nodemon, curl

## Скриншоты
Главная страница 
https://imghost.fun/image/Screenshot-2025-12-09-at-11.14.34.gHr2

Поиск товара
https://imghost.fun/image/Screenshot-2025-12-09-at-11.15.11.gHlA



## Contributing

1. Fork → branch `feature/...`
2. Commit/push/PR.

## License

MIT.

