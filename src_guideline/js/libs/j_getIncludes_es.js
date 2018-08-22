/*

MeganeTemplate

Version: 5.0.0
Website: http://megane-template.com/
License: Dentsu Isobar All Rights Reserved.

*/

export default class Include {

    constructor(t, s ,f) {

        this.id = document.getElementById(t.split("#")[1]);
        this.path = s;
        this.func = f != null ? f : function(){};

        this.getHtml(this.id, this.path, this.func)

    }

    getHtml(target, src, func) {

        const request = new XMLHttpRequest();
        request.open("GET", src, true);

        request.onload = (event) => {

            if (request.readyState === 4) {
                if (request.status === 200) {

                    if( this.id ){
                        target.innerHTML = request.responseText;
                        func();
                    }

                } else {
                    alert('通信エラーが発生しました。\n恐れ入りますが、時間をおいてもう一度送信してください。');
                }
            }

        };

        request.onerror = (event) => {
            alert('通信エラーが発生しました。\n恐れ入りますが、時間をおいてもう一度送信してください。');
        };

        request.send(null);

    }

}
