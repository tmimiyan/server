
 document.getElementById('inputForm').addEventListener('submit', function (event) {
   event.preventDefault(); // フォームのデフォルト動作を防ぐ

      const key = "myData"; // localStorageで使うキー
      const inputValue = document.getElementById('userInput').value; // 入力値
      const savedValue = localStorage.getItem(key); // localStorageに保存されている値

      if (inputValue !== savedValue) {
        // 値が一致していない場合
        localStorage.setItem(key, inputValue); // localStorageを上書き
        window.location.href = "log.html"; // 新しいHTMLを開く
      } else {
        // 値が一致している場合
        document.querySelector("label").textContent = "この認証コードは使用できません";
      }
    });

document.getElementById('userInput').addEventListener('click', function () {
      document.querySelector("label").textContent = " ";
});