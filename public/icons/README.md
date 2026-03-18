# SVG Іконки

Папка для зберігання SVG іконок, які використовуються на сайті.

## Файли, які потрібно додати

- `social-facebook.svg` - Іконка Facebook
- `social-twitter.svg` - Іконка Twitter
- `social-instagram.svg` - Іконка Instagram
- `social-linkedin.svg` - Іконка LinkedIn

## Рекомендації

1. **Формат**: SVG (масштабується без втрати якості)
2. **Розмір**: Оптимальний розмір 24x24px або 32x32px
3. **Колір**: Використовуйте `currentColor` для динамічного кольору
4. **Оптимізація**: Мінімізуйте SVG за допомогою SVGO

## Приклад SVG іконки

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M18 2h-3a6 6 0 0 0-6 6v3H2v4h7v8h4v-8h3l1-4h-4V8a2 2 0 0 1 2-2h3z"></path>
</svg>
```

## Як використовувати

```svelte
<img src="/icons/social-facebook.svg" alt="Facebook" class="h-5 w-5" />
```

Або з lucide-svelte (вже встановлено):

```svelte
<script>
  import { Facebook } from 'lucide-svelte';
</script>

<Facebook class="h-5 w-5" />
```
