class: middle, center

# WebAPI and ajax

---
class: middle, center

自己紹介は前回やりましたゆえ…

最近はダーツ熱が再燃して.marker[ボードを買った]のでちょいちょい夜投げております。
<br>

---
class: middle, center

![darts](./darts.jpg)

初ハットトリックの記念写真

---
class: middle, center

やってる人or興味ある人いたら是非是非一緒にやりましょう(´；ω；｀)ﾌﾞﾜｯ

.small[（スカッシュも募集してるよ！(´；ω；｀)ﾌﾞﾜｯ）]

---
class: middle

.u-mgl60[
# おしながき
.u-fs24[
1  用語や仕組みの確認<br>
2  ajax実装には何が必要？<br>
3  実装サンプル＆デモ？<br>
]
]

---
class: middle,center
# 用語や仕組みの確認

---
class: middle

## これらの用語を説明できますか

- API
- WebAPI
- ajax

---

class: middle, center

## できません。


---
class: middle, center

何となく使ってるし何となく知ってるけど説明できないって人が多いですよね（予想）

---
class: middle, center

なので調べました！

---
## API (Application Programming Interface)

APIとは、あるコンピュータプログラム（ソフトウェア）の機能や管理するデータなどを、.marker[外部の他のプログラムから呼び出して利用するための手順やデータ形式などを定めた規約]のこと。

個々のソフトウェアの開発者が毎回すべての機能をゼロから開発するのは困難で無駄が多いため、多くのソフトウェアが共通して利用する機能は、OSやミドルウェアなどの形でまとめて提供されている。
.marker[そのような汎用的な機能を呼び出して利用するための手続きを定めたものがAPI]で、個々の開発者はAPIに従って機能を呼び出す短いプログラムを記述するだけで、自分でプログラミングすることなくその機能を利用したソフトウェアを作成することができる。

[参照元](http://e-words.jp/w/API.html)

---

## WebAPI (Web Application Programming Interface)

Web APIとは、コンピュータプログラムの提供する機能を.marker[外部の別のプログラムから呼び出して利用するための手順、規約の類型の一つ]（APIの一つ）で、HTTPなどWebの技術を用いて構築されたもののこと。

Webサイトに外部のサイトの提供する機能や情報を組み込んだり、アプリケーションソフトからWeb上で公開されている機能や情報を利用する際などに用いられる。

Web APIで機能を公開しているサーバに対して、インターネットなどの通信ネットワークを通じて依頼内容をHTTPリクエストの形で送信すると、処理結果がHTTPレスポンスの形で送られてくる。
送受信されるデータの形式はAPIによって様々だが、Webでよく用いられるXMLやHTML、JSON、各種の画像ファイル形式などが用いられることが多い

[参照元](http://e-words.jp/w/Web_API.html)

※最近はほとんどが.marker[json]でのやり取りです。

---

## Ajax (Asynchronous JavaScript + XML)

Ajaxとは、Webブラウザに実装されている.marker[JavaScriptのHTTP通信機能を使って、Webページのリロードを伴わずにサーバとXML形式のデータのやり取りを行って処理を進めていく対話型Webアプリケーションの実装形態]。

従来、Webブラウザを使ったWebアプリケーションでは、データをサーバに通知して処理結果を得るにはページ全体をロードしなおさなければならず、ネイティブアプリケーションのような操作性を得ることは難しかった。Ajaxでは、指定したURLからXMLドキュメントを読み込む機能を使い、ユーザの操作や画面描画などと並行してサーバと非同期に通信を行うことで、サーバの存在を感じさせないシームレスなWebアプリケーションを実現することができる。

[参照元](http://e-words.jp/w/ajax)

代表例はgooglemap!

---

class: middle,center

## Ajaxという用語の実態

---

#### 「WebAPI」をAjaxと呼んでいたりする。

実際に...

状況：ajaxで使用するWebAPIの仕様を確認したかった

FE「APIの仕様が知りたいのですが」

BE「API？そのAPIというのはどのAPIを指してますか？」

FE「ええと…ajaxで使用する…」

BE「ああ、ajax（WebAPI）のことね」

伝えづらいのですが、こちらは.marker[ajaxで使用するWebAPIをAPI]として会話していましたが、
相手は.marker[ajax=WebAPI]という使い方をしていてちょっとややこしかったという話です。

ajaxという言葉は恐らく半分くらいの人はふわふわ使ってると思います。
なので用語を知ったとしても相手に合わせる事が大切です！

---

class: middle,center

# ajax実装には何が必要？

WebAPIの仕様を調べて次の内容を確認する事が必要。

---

## 必要な情報

- .marker[エンドポイント(URI)]
- .marker[リクエスト形式(GET/POST etc..)]
- .marker[リクエスト時に必要なデータの内容]
    - keyの名前
    - データの中身は何か、型は何か

- .marker[レスポンスの形式]
    - keyの名前
    - データの中身は何か、型は何か

sample:
[chatwork api](http://developer.chatwork.com/ja/endpoint_rooms.html#POST-rooms)

---
class: middle,center

# 実装サンプル＆デモ？

---
class: middle,center

## APIを確認してみる

[demo 01](http://localhost:3000/sample01/)

---
class: middle,center

## APIドキュメントを元に作成する

痔になるボタンの実装

---
class: middle,center

## API ドキュメント

localで動くAPIを＆ドキュメントを簡単に作っておきました

---

## Zininaru API Document

__エンドポイント__
/zininaru/

__リクエスト形式__
POST

---

__リクエスト時に必要なデータの内容__

- keyの名前
- データの中身は何か、型は何か

|key|type|description|
|:--:|:--:|:--:|
|user_id|string|ユーザーのID|
|severity|string|重症度（1-5)|

sample

```
{
	"user_id": "234",
	"severity": "3"
}
```

---
__レスポンスの形式（jsonの場合）__

- keyの名前
- データの中身は何か、型は何か

|key|type|description|
|:--:|:--:|:--:|
|state|int|現在の病院の状態|
|waiting|int|現在の病院の予約待ち人数|

- state:0
    - 予約が多すぎて今日の診察が難しい状態です。

- state:1
    - 予約が成功した状態です。

__その他仕様__

- stateが0の場合はその人数をcountしたいのでcount APIに送る

---

## Count API Document

- エンドポイント
/count/

- リクエスト形式
POST

- リクエスト時に必要なデータの内容
    - keyの名前
    - データの中身は何か、型は何か

|key|type|description|
|:--:|:--:|:--:|
|user_id|string|ユーザーのID|
|severity|string|重症度（1-5)|

- レスポンスの形式（jsonの場合）
なし

---
class: middle,center

[demo 02](http://localhost:3000/sample02/)

実装サンプル紹介＆実際に時間があれば実装してみるタイム

お手柔らかにお願いします。(´；ω；｀)ﾌﾞﾜｯ

---
class: middle,center

# (´；ω；｀)ﾌﾞﾜｯ

本物を見てみるタイム

---

class: middle,center

# おわりにもう一度

---
## WebAPIを使った実装は下記の内容があればいける！

- .marker[エンドポイント(URI)]
- .marker[リクエスト形式(GET/POST etc..)]
- .marker[リクエスト時に必要なデータの内容]
    - keyの名前
    - データの中身は何か、型は何か

- .marker[レスポンスの形式]
    - keyの名前
    - データの中身は何か、型は何か

---
class: middle,center

# ありがとうございました！

.small[.small[ダーツやりましょう！(´；ω；｀)ﾌﾞﾜｯ]]

---
class: middle,center

# ありがとうございました！

.small[.small[(´；ω；｀)ﾌﾞﾜｯ]]