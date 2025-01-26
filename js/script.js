document.addEventListener("DOMContentLoaded", () => {
  console.log("페이지 로드 완료!");

  // 현재 페이지 URL에 따라 활성화된 네비게이션 항목 설정
  const currentPage = window.location.pathname.split("/").pop(); // 현재 페이지 파일 이름 가져오기
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active"); // 활성화된 페이지에 클래스 추가
    }
  });

  // 구글 드라이브 링크로 이동
  const driveLinks = document.querySelectorAll(".drive-link");
  driveLinks.forEach(button => {
    button.addEventListener("click", () => {
      const url = button.getAttribute("data-url");
      window.open(url, "_blank"); // 새 탭에서 열기
    });
  });

  // "코드 보러 가기" 버튼 기능
  const codeButton = document.getElementById("view-code");
  if (codeButton) {
    codeButton.addEventListener("click", () => {
      window.location.href = "code-files.html";
    });
  }

  // 메일 전송 버튼 기능
  const emailButton = document.getElementById("send-email");
  if (emailButton) {
    emailButton.addEventListener("click", () => {
      window.location.href = "mailto:artplantcontact@gmail.com";
    });
  }

  // 외부 링크 클릭 시 경고창 표시
  const externalLinks = document.querySelectorAll(".external-link");
  externalLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      if (!confirm("외부 사이트로 이동합니다. 계속하시겠습니까?")) {
        event.preventDefault(); // 사용자가 취소를 선택하면 이동하지 않음
      }
    });
  });
});
