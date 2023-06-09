import React, {useState} from "react";

const Diary = () => {
  // 이벤트 핸들러부터 state까지 모두 스스로 작성해보시길 바랍니다!
  // 과연 어떤 state를 생성해주어야하고, 또 어떤 이벤트 핸들러가 필요할까요?
  // 실습으로 다뤘던 두 문제를 참고하면 충분히 해결할 수 있으실거라 생각합니다!

  return (
    <div className="diary">
      <input name="subject" placeholder="제목을 입력해주세요" />
      <br />
      <textarea name="content" placeholder="내용을 입력해주세요" />
      <br />
      <button>초기화</button>
      <br />
      <button>입력 완료</button>
    </div>
  );
};

export default Diary;
