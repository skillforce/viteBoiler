# <span style="color: green; font-weight: bold; font-size:30px">Запуск проекта</span>    

```
pnpm install - устанавливаем зависимости(node>18)
pnpm dev - запуск frontend проекта в dev режиме
```

----

# <span style="color: green; font-weight: bold; font-size:30px">Скрипты</span>

- `pnpm dev` - Запуск frontend проекта на vite dev server
- `pnpm generate:slice` - Скрипт для генерации FSD слайсов (для features, pages, entities,)
- `pnpm build` - Скрипт для генерации build проекта в папку dist в корень проекта
- `pnpm lint` - Линтинг проекта,
- `pnpm prettier` - Форматирование проекта,
- `pnpm typescript:check` - Проверка соблюдения ts,
- 

----

# <span style="color: green; font-weight: bold; font-size:30px">Архитектура проекта</span>

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

# <span style="color: green; font-weight: bold; font-size:30px">Pre commit хуки</span>

В прекоммит хуках проверяем проект линтерами, форматером и тайпскриптом, конфиг в /.husky

----