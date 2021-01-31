# level

[zimekk.github.io/level](https://zimekk.github.io/level/)

```sh
docker-compose up --build
```

```sh
yarn start
yarn clean && yarn build && yarn serve
yarn type-coverage
```

```sh
yarn lerna version --conventional-commits --no-git-tag-version --no-push
GH_TOKEN=... yarn lerna version --conventional-commits --create-release github --message 'chore(release): publish'
```
