# Decap CMS Setup Guide

Админ-панель настроена с использованием **Decap CMS** (бесплатное решение для управления контентом).

## Быстрый старт (локальная разработка)

1. Установи зависимости:
```bash
npm install
```

2. Запусти dev сервер:
```bash
npm run dev
```

3. Открой админ-панель:
```
http://localhost:5173/admin/
```

Локально используется тестовый бэкенд, поэтому изменения сохраняются в браузере (не в Git).

## Настройка для продакшена (Vercel)

### 1. Создать OAuth приложение на GitHub

1. Перейди на https://github.com/settings/developers
2. Нажми "New OAuth App"
3. Заполни форму:
   - **Application name**: Women's Center Admin
   - **Homepage URL**: `https://yourdomain.com`
   - **Authorization callback URL**: `https://yourdomain.com/admin/`
4. Скопируй **Client ID** и **Client Secret**

### 2. Настроить переменные окружения на Vercel

1. Перейди в настройки проекта на Vercel
2. Добавь переменные окружения:
   - `GITHUB_CLIENT_ID`: твой Client ID
   - `GITHUB_CLIENT_SECRET`: твой Client Secret

### 3. Обновить config.yml

Открой `public/admin/config.yml` и замени:
```yaml
repo: YOUR_GITHUB_USERNAME/YOUR_REPO_NAME
```

На твои реальные значения, например:
```yaml
repo: myusername/womens-center
```

### 4. Деплой на Vercel

```bash
git push
```

Админ-панель будет доступна по адресу: `https://yourdomain.com/admin/`

## Использование

### Локально (тестовый режим)
- Открой `/admin/`
- Редактируй данные
- Изменения сохраняются в браузере (не в Git)

### На продакшене (с GitHub)
1. Перейди на `/admin/`
2. Нажми "Login with GitHub"
3. Авторизуйся через GitHub
4. Редактируй тендеры, партнеров и политики
5. Все изменения автоматически коммитятся в репозиторий

## Структура данных

- **Тендеры** (`src/lib/data/tenders.json`): активные и архивные тендеры
- **Партнеры** (`src/lib/data/partners.json`): список партнеров с логотипами
- **Политики** (`src/lib/data/policies.json`): политики организации (двуязычные)

## Примечания

- Локально используется тестовый бэкенд (изменения не сохраняются в Git)
- На продакшене все изменения сохраняются как коммиты в Git
- Изображения загружаются в `public/images`
- Поддерживается двуязычный интерфейс (украинский/английский)

## Troubleshooting

### Пустая страница на Vercel
- Проверь, что переменные окружения `GITHUB_CLIENT_ID` и `GITHUB_CLIENT_SECRET` установлены
- Убедись, что `public/admin/config.yml` содержит правильный репозиторий
- Проверь консоль браузера (F12) на ошибки

### Ошибка при авторизации
- Убедись, что Authorization callback URL в GitHub OAuth App совпадает с твоим доменом
- Проверь, что `/api/auth` endpoint доступен (это Vercel serverless function)
