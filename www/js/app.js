// This is a JavaScript file
// This is a JavaScript file
//mobile backendのAPIキーを設定
var ncmb = new NCMB("709d06bb198b146b91315915b5a2fd6bff7e245c307aad8214a2c11c89e52d52","9593094fb040d14ee9e2f25366e8184b3bcb550b76472cf4b9c1b3ea3422fd6b");


//データをmobile backendに保存するメソッド
function saveData(){
    //クラス名を指定して新規クラスを作成
    var Data = ncmb.DataStore("Data");

    //Dataクラスのインスタンスを作成
    var data = new Data();

    //作成したインスタンスのaisatsuというフィールドに文字データを設定
    data.set("aisatsu", "hello, world!");

    //設定したデータをmobile backendに保存
    data.save()
        .then(function(object) {
              //成功する時の処理
              $("#message").html("<p>データ保存に成功!</p>");
          })
        .catch(function(error) {
              //エラーが発生する時の処理
              $("#message").html("error:" + error.message);
          });
}
