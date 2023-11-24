$(document).ready(function () {
            $(".button1").click(function () {
                $("polygon").toggleClass("remove2");
                if ($(this).text() == 'Aan') {
                    $(this).text('Uit');
                } else {
                    $(this).text('Aan');
                }
            });