<h1 align="center">
	<br>
	<br>
	<img width="400" src="media/logo.svg" alt="next-intl">
	<br>
	<br>
	<br>
</h1>

> A minimal, but complete solution for internationalization in Next.js apps.

![Gzipped size](https://badgen.net/bundlephobia/minzip/next-intl) ![Tree shaking supported](https://badgen.net/bundlephobia/tree-shaking/next-intl) [<img src="https://img.shields.io/npm/dw/next-intl.svg" />](https://www.npmjs.com/package/next-intl)

## Features

This library complements the [internationalized routing](https://nextjs.org/docs/advanced-features/i18n-routing) capabilities of Next.js by managing translations and providing them to components.

- 🌟 **Proven ICU syntax**: This covers interpolation, plurals, ordinal pluralization, label selection based on enums and rich text. I18n is an essential part of the user experience, therefore this library doesn't compromise on flexibility and never leaves you behind when you need to fine tune a translation.
- 📅 **Built-in date, time and number formatting**: You can use global formats for a consistent look & feel of your app and integrate them with translations.
- 💡 **Hooks-only API**: This ensures that you can use the same API for `children` as well as for attributes which expect strings.
- ✅ **Type-safe**: If you're using TypeScript, you'll benefit from autocompletion for available message keys and compile-time errors for typos.
- ⚔️ **Battle-tested building blocks**: This library is a minimal wrapper around built-in browser APIs and supplemental lower-level APIs from Format.JS.
- 🚀 **Fast**: By integrating with both static as well as server side rendering you always get the best possible performance from your app.

## What does it look like?

This library is based on the premise that messages can be grouped by namespaces (typically a component name).

```jsx
// LatestFollower.js
function LatestFollower({user}) {
  const t = useTranslations('LatestFollower');

  return (
    <>
      <Text>{t('latestFollower', {username: user.name})}</Text>
      <IconButton aria-label={t('followBack')} icon={<FollowIcon />} />
    </>
  );
}
```

```js
// en.json
{
  "LatestFollower": {
    "latestFollower": "{username} started following you",
    "followBack": "Follow back"
  }
}
```

### [→ Read the docs](https://next-intl-docs.vercel.app/)
