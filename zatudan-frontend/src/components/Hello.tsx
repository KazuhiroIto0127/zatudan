import React from "react";

export default function Hello(){
  const handleClick = async () => {
    try{
      const apiUrl = "https://zatudan-backend.kazuhiroito0127.workers.dev";
      const url = `${apiUrl}/api/topics/random`;
      const response = await fetch(url);
      const data = await response.json();
      alert(data[0].body);
    } catch (error) {
      if (error instanceof Error) {
        alert('エラーが発生しました: ' + error.message);
      } else {
        // errorがErrorインスタンスではない場合の処理
        alert('予期せぬエラーが発生しました');
      }
    }
  }

  return (
    <button onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      話題を引く
    </button>
  )
}
