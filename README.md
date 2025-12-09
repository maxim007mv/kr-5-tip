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

## Contributing

1. Fork → branch `feature/...`
2. Commit/push/PR.

## License

MIT.

Sources
[1] An Empirical Study on README contents for JavaScript Packages http://arxiv.org/pdf/1802.08391.pdf
[2] Adapting Installation Instructions in Rapidly Evolving Software
  Ecosystems https://arxiv.org/pdf/2312.03250.pdf
[3] LARCH: Large Language Model-based Automatic Readme Creation with
  Heuristics https://arxiv.org/pdf/2308.03099.pdf
[4] Node Compass: Multilevel Tracing and Debugging of Request Executions in
  JavaScript-Based Web-Servers http://arxiv.org/pdf/2401.08595.pdf
[5] A horizontally-scalable multiprocessing platform based on Node.js http://arxiv.org/pdf/1507.02798.pdf
[6] Transforming Javascript Event-Loop Into a Pipeline https://arxiv.org/pdf/1512.07067.pdf
[7] RootJS: Node.js Bindings for ROOT 6 http://arxiv.org/pdf/1704.07887.pdf
[8] Advanced OOP and new syntax patterns for Javascript http://arxiv.org/pdf/2411.08833.pdf 