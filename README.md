# Знакомство с Babel

## Установка

### Babel CLI

```bash
npm install babel-cli --save-dev
```

### Плагины и наборы

```bash
npm install babel-preset-es2015 --save-dev
```

---

## Настройка

### `.babelrc`

```json
{
    "presets": ["es2015"],
    "plugins": ["transform-es2015-arrow-functions"]
    // другие опции
}
```

### `package.json`

```json
{
    "name": "babel-intro",
    "version": "1.0.0",
    "scripts": {
        "build": "babel src -d dist"
    },
    "babel": {
        "presets": ["es2015"],
        "plugins": ["transform-es2015-arrow-functions"]
        // другие опции
    }
}
```

---

## Использование

### Траспилирование файлов

```bash
# Транспилировать файл es6.js и поместить в файл es5.js
babel es6.js --out-file es5.js
babel es6.js -o es5.js
```

### Наблюдение за файлами

```bash
babel es6.js --watch --out-file es5.js
babel es6.js -w -o es5.js
```

### Минификация

```bash
babel es6.js --out-file es5.js --minified
babel es6.js -o es5.js -m
```

### Траспилирование директорий

```bash
babel src --out-dir dist
babel src -d dist

# Транспилировать все файлы в директории и поместить их в один файл
babel src --out-file es5.js
```

### Игнорирование файлов

```bash
# Игнорировать файлы test.js и spec.js
babel src --out-dir lib --ignore test.js, spec.js
```

[Полный список опций](https://babeljs.io/docs/usage/options/)