### setup the ts project with npm and node


setup this for node

```bash
npm init

# after init add "type": "module" in package.json
#

npm install --save-dev jest @types/jest

npm install --save-dev babel-jest @babel/preset-env
```

go to [babel](https://babeljs.io/setup#installation)


setup this for typescript

```shell
npm install --save-dev typescript

npx tsc --init
```

config in `tsconfig.json` change `"module"` from `"commonjs"` to `"ES6"`


setup this for using jest in typescript 

go to [jest](https://jestjs.io/docs/getting-started#using-typescript) and setup

```shell
npm install --save-dev @babel/preset-typescript
```

in `babel.config.json`, in array `present` add this string `"@babel/preset-typescript"`

```shell
npm install --save-dev ts-jest

npm install --save-dev @jest/globals

npm install --save-dev @types/jest
```

run jest / test

```shell
npx jest
```

compile typescript

create `dist`, `src` and `tests` folder in root project dir and uncomment and
change `"outDir": "./"` to `"outDir": "dist/"` in `tsconfig.json` and compile with

```shell
npx tsc
```

output compile in `dist/`

include exclude example in `tsconfig.json`
```json
{
  "include": [
    "src/**/*",
    "tests/**/*"
  ],
  "exclude": [
    "tests/**/*"
  ]
}
```

in test not error in compile error use this to watch compile

```shell
npx tsc --watch
```
