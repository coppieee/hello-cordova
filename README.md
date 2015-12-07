#hello-corodova
##cordovaのセットアップ
(https://gist.github.com/coppieee/9021abdca5178bf92e50)[cordova setup memo]参照

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