#hello-corodova
##cordovaのセットアップ
[cordova setup memo](https://gist.github.com/coppieee/9021abdca5178bf92e50)参照

##プロジェクトのスタートの仕方
`Donwload ZIP`ボタンからダウンロードするか、コマンドで`git clone git@github.com:coppieee/hello-cordova.git`でダウンロードする。


ダウンロードしたフォルダで
```
$ cordova platform add browser
$ npm install 
$ npm start
```
で実行できる。`npm insatll`は実行に必要なモジュールをインストールするコマンドで初回の一回のみでOK。
次回以降は`npm start`だけでOK。

##v0.1プロジェクトの実行
ボタンを押した時に.pageを`.addClass('show')`や`.removeClass('show')`することによって切り替えるところまで実装した。

##v0.2ページのアニメーション
.pageの切り替えをアニメーションで遷移させる実装。

前回はページを`display:none`で表示/非表示を切り替えてたが、
今回はページを左へスライドインさせることによって表示を切り替える。

メインとなるCSSは`transition`。

ちなみにサンプルで今回からnode-sass導入している。

