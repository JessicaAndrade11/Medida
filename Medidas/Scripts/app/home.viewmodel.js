﻿function HomeViewModel(app, dataModel) {
    var self = this;

    self.myUserNome = ko.observable("");

    Sammy(function () {
        this.get('#home', function () {
            // Make a call to the protected Web API by passing in a Bearer Authorization Header
            $.ajax({
                method: 'get',
                url: app.dataModel.userInfoUrl,
                contentType: "application/json; charset=utf-8",
                headers: {
                    'Authorization': 'Bearer ' + app.dataModel.getAccessToken()
                },
                success: function (data) {
                   // self.myUserNome('Seu nome é : ' + data.MyUserNome);
                }
            });
        });
        this.get('/', function () { this.app.runRoute('get', '#home'); });
    });

    return self;
}

app.addViewModel({
    name: "Home",
    bindingMemberName: "home",
    factory: HomeViewModel
});
