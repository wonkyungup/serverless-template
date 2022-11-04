# serverless-template

```
1. git clone [url]
2. git checkout [branch]
3. npm install
4. npm run offline
```

```
[branch] serverless-offline

- [INTALL] serverless-offline
- [INTALL] nodemon
```


```
[branch] serverless-webpack

- [MERGE] serverless-offline (branch)
- [INTALL] serverless-webpack
- [INTALL] webpack-node-externals
- [INTALL] @babel/cli
- [INTALL] @babel/core
- [INTALL] @babel/preset-env
- [INTALL] babel-loader
- [ADD] webpack.config.js
```


```
[branch] serverless-dynamodb

- [MERGE] serverless-webpack (branch)
- [INTALL] aws-sdk
- [INTALL] serverless-dynamodb-local
- [ADD] package.json "postinstall"
- [ADD] /model/index.js
```
