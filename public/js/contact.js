$(function () {

    var url = "http://condatos.azurewebsites.net/api/email";

    function showSuccess(message, xhr, form) {
        var messageAlert = 'alert-' + (xhr && xhr.status == 200 ? 'success' : 'danger');
        var messageText = message;
        $.hideLoading();
        var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
        if (messageAlert && messageText) {
            $(form).find('.messages').html(alertBox);
            $(form)[0].reset();
        }
    }
    function showError(message, form) {
        $.hideLoading();
        var alertBox = '<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + message + '</div>';
        $(form).find('.messages').html(alertBox);
    }

    $('#contact-form').on('submit', function (e) {
        $('#contact-form').find('.messages').html('');
        if (!e.isDefaultPrevented() && $('#contact-form').valid()) {
            $.showLoading();
            $.ajax({
                type: "POST",
                url: url,
                data: { name: $("#form_name").val(), email: $("#form_email").val(), message: $("#form_message").val(), type: "CONTACT" },
                success: function (message, status, xhr) {
                    showSuccess(message, xhr, '#contact-form');
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    showError("Ha ocurrido un error, intentelo nuevamente en unos minutos.", '#contact-form');
                }
            });
            return false;
        }
    });

    $('#suscribe-form').on('submit', function (e) {
        $('#suscribe-form').find('.messages').html('');
        if (!e.isDefaultPrevented() && $('#suscribe-form').valid()) {
            $.showLoading();
            $.ajax({
                type: "POST",
                url: url,
                data: { name: "NOTIFICAME", email: $("#mailsub").val(), message: "NOTIFICAME", type: "NOTIFICATION" },
                success: function (message, status, xhr) {
                    showSuccess(message, xhr, '#suscribe-form');
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    showError("Ha ocurrido un error, intentelo nuevamente en unos minutos.", '#suscribe-form');
                }
            });
            return false;
        }

    });
});