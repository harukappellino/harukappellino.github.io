function sorry(language) {
    
    var message = "";
    
    if(language == 1){
        message = "ごめんなさい。騙しました。";
    } else if (language == 2){
        message = "すんまそん。";
    } else if (language == 3){
        message = "ゲームは作ってません";
    } else if (language == 4){
        message = "すみま千円二千円";
    }
    
    alert(message);
}