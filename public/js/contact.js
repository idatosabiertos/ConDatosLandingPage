$(function () {

    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = " http://localhost:65320/api/email";

            $.ajax({
                type: "POST",
                url: url,
                data: { name: $("#form_name").val(), email: $("#form_email").val(), message: $("#form_message").val() },
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
    })
});