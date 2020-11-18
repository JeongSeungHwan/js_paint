# js_paint

painting tool

1. reset css
   css 초기 셋팅
   good! 구글에 검색하면 나옴.
   reset.css 파일 만들고 복붙 후에
   사용할 css 최상위 줄에
   @import "reset.css";

2. html빠르게 작성하는 tip
   div.someting >> <div class="somthing"></div>
   div.someting \* 9 >> <div class="somthing"></div>
                        <div class="somthing"></div>
                        <div class="somthing"></div>
                        <div class="somthing"></div>
                        <div class="somthing"></div>
                        <div class="somthing"></div>
                        <div class="somthing"></div>
                        <div class="somthing"></div>
                        :
                        :
                        :
                        div.something>button.justhing+button.nothing >>
                        <div class = something>
                        <button class = justhing></button>
                        <button class = nothing></button>
                        </div>

3. prettier 예외처리
   .prettierignore 파일 생성후
   파일 지정 ( *.md 등)

4. prettier 최초 설정
   preference > editor format on save 검색 후 체크
   json 검색 후 Launch 에 edit in ~~ 클릭
   json 파일의 onsave 위쪽에 
   "editor.defaultFormatter": "esbenp.prettier-vscode", 작성
   후에 아래에 설정 적용 (https://uxgjs.tistory.com/150)

5. prettier 적용 단계
   settings.json(전역) > .editorconfig(프로젝트 에디터 설정) > .prettierrc(프로젝트 단위 프레티어 설정)

7. 캔버스 사용 주의점
   css에서 크기 지정은 > 사용자에게 보여지는 크기
   js에서 크기 지정은 > 좌표값을 인식하기 위한 크기
   #html로 애초에 지정하면 둘다 적용

8. 캔버스 콘텍스트 기본
    if (!painting) {
        ctx.beginPath(); // 새로운 경로 시작. 없으면 이전에 끝난 위치에서 다시시작
        ctx.moveTo(x, y); // path 이동
    } else {
        ctx.lineTo(x, y); // sub좌표(마우스 위치) 지정
        ctx.stroke(); // path와 sub-path들을 연결
    }

9. Array.from(OBJECT);
   OBJECT로부터 리스트를 생성

10. forEach문의 형태 기억
   Array.from(colors).forEach((color) =>
      color.addEventListener("click", changeColor)
   );

11. 필요한 값 찾기
   handler에서 event 출력 후 찾아가기 단계별로

12. ctx.fillstyle = COLOR / ctx.fillRect(X,Y,W,H)
   >> 색 지정 / 그리기 >> 세트임

13. addEventListne("contextmenu")
   >> 우클릭 시에 나타나는 메뉴에 대한 이벤트

14. event.preventDefault
   >> 이벤트가 기본적으로 가지고 있는 기능 막음

15. canvas 데이터를 이미지로 전환
   canvas.toDataURL("image/jpeg");
   >> 이미지 URL 반환

16. <a href = LINK download = NAME>
   해당 링크 내의 데이터를 다운로드 하는 링크 생성

17. 16을 활용해 버튼 하나로 다운로드 링크 만들기
   function handleSaveClick(event) {
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "painting";
      link.click();
   }