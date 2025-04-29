# lovelivedb

prismdb(https://github.com/prickathon/prismdb) を基に、ラブライブの情報をまとめるプラットフォームを目指してます

## Environment

- docker
- docker-compose

## 開発

```bash
# csv(_data/)をrdf(virtuoso/)に変換する処理
$ docker-compose -f docker-compose.csv2rdf.yml up

# ローカルでサーバが立ち上がります(http://localhost:3000)
$ docker-compose build
$ docker-compose up
```

## 中身

### Webアプリケーション

基本 `Nuxt.js` で動いていますが `https://prismdb.takanakahiko.me/sparqle` のみ `virtuoso` にプロキシされています

- `web/` : nuxtのアプリケーションがあります
- `virtuoso/`(`csv2rdf`により自動生成) : sparqleエンドポイント用のファイルがあります

### csv2rdf

- `_data/` : RDFを生成するためのファイルがあります
- `csv2rdf/` : csv(`_data/`)をrdf(`virtuoso/`)に変換する処理があります

### デプロイ

GitHub Actions -> GCP Cloud Run

- `.github/workflows/` : GitHub Actions の設定があります

## コントリビューション

随時受け付けております！

1. Forkする
2. Cloneする
3. Branchを新しく作る
4. ソースコード等を編集する
5. Pushする
6. Pull Requestを作る

## 連絡先

X: @shsub
BlueSky: bluearchive.uk