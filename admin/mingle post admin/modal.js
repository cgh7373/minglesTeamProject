

const Editor = toastui.Editor;
const { colorSyntax } = toastui.Editor.plugin;
const editor = new Editor({
    el: document.querySelector('#content'), // 에디터를 적용할 요소 (컨테이너)
    height: '500px',                        // 에디터 영역의 높이 값 (OOOpx || auto)
    initialEditType: 'wysiwyg',            // 최초로 보여줄 에디터 타입 (markdown || wysiwyg)
    initialValue: '<h2 id="notice-title">제목 :</h2><p id="notice-content">내용 : </p>',     // 내용의 초기 값으로, 반드시 마크다운 문자열 형태여야 함
    previewStyle: 'tab',                // 마크다운 프리뷰 스타일 (tab || vertical)
    plugins: [colorSyntax],
    usageStatics: false,
});

console.log(editor.getHTML());


$(function(){
    $("#notice-enroll").click(function(){
        console.log(editor.getHTML());
    });

})