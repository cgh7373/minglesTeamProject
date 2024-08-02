$(function() {
    $('#homeKey').click(function() {
        console.log("homeKey clicked");
        $('#menuBar').animate({width: 'toggle'});
    });

    $('#menuBack').click(function() {
        console.log("menuBack clicked");
        $('#menuBar').animate({width: 'toggle'});
    });
    // 메뉴바 외의 부분 눌렀을때 메뉴바 사라지기
    $(document).click(function(event) {
        if (!$(event.target).closest('#menuBar, #homeKey').length) {
            if ($('#menuBar').is(":visible")) {
                $('#menuBar').animate({width: 'toggle'});
            }
        }
    }); 

    // $("#productReg").click(function() {
    //     window.open("../mingle product reg/product reg.html", "상품등록");
    // });

    $("#input-file").change(function (event) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var img = $("<img>");
            img.attr("src", event.target.result);
            $("#productImage").append(img);
        };
        reader.readAsDataURL(event.target.files[0]);
        console.log(event);
    });


    var input = document.querySelector('input[name=basic]')
    var tagify = new Tagify(input);
// 태그가 추가되면 이벤트 발생
    tagify.on('add', function() {
        console.log(tagify.value); // 입력된 태그 정보 객체
    });

    $(".openTag").click(function(){
        $(".detailCategory").css("display", "block");
        $(this).css("display", "none")
    });
    

});

