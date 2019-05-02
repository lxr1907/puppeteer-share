$(function () {
    $("#getPngBtn").click(function () {
        var url = $("#url").val();
        $.ajax({
                url: "/htmlToPng",
                data: {
                    url: url
                },
                type: "post",
                dataType: "json",
                success: function (ret) {
                    console.log(ret);
                }
            }
        );
    });
});