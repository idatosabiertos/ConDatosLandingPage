$(function () {

    $('#contact-form').validator();

    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "http://condatos.azurewebsites.net/api/email";

            $.ajax({
                type: "POST",
                url: url,
                data: { name: $("#form_name").val(), email: $("#form_email").val(), message: $("#form_message").val(), type: "CONTACT" },
                success: function (message, status, xhr) {
                    var messageAlert = 'alert-' + (xhr && xhr.status == 200 ? 'success' : 'error');
                    var messageText = message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });

    $('#suscribe-form').on('submit', function (e) {
        var url = "http://condatos.azurewebsites.net/api/email";
        $.ajax({
            type: "POST",
            url: url,
            data: { name: "NOTIFICAME", email: $("#mail-sub").val(), message: "NOTIFICAME", type: "NOTIFICATION" },
            success: function (message, status, xhr) {
                var messageAlert = 'alert-' + (xhr && xhr.status == 200 ? 'success' : 'error');
                var messageText = message;

                var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                if (messageAlert && messageText) {
                    $('#suscribe-form').find('.messages').html(alertBox);
                    $('#suscribe-form')[0].reset();
                }
            }
        });
        return false;

    });
});