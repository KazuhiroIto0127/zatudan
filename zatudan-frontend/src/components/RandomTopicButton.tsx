import React, { useState } from "react";

export default function RandomTopicButton(){
  const [text, setText] = useState(""); // 新しいstateを追加

  const handleClick = async () => {
    try{
      const apiUrl = process.env.REACT_APP_CF_BACKEND_API_URL;
      const url = `${apiUrl}/api/topics/random`;
      const response = await fetch(url);
      const data = await response.json();
      setText(data[0].body);
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
    <div className="container mb-16 flex justify-center flex-col">
      <div className="mb-4 mb-4 flex justify-center">
        <button onClick={handleClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          話題を引く!!
        </button>
      </div>

      <div className="w-full px-4">
        {text && <div className="text-center text-gray-700 text-9xl">{text}</div>}
      </div>
    </div>
  )
}
