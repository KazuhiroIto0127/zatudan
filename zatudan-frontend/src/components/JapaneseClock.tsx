import React, { useState, useEffect } from 'react';

const JapaneseClock = () => {
    const weekday = ['日', '月', '火', '水', '木', '金', '土'];

    const [date, setDate] = useState<String>('');
    const [time, setTime] = useState<String>('');

    useEffect(() => {
        // 現在の日時を設定する関数
        const updateDateTime = () => {
            let d = new Date();
            let year = d.getFullYear();
            let month = d.getMonth() + 1;
            let day = d.getDate();
            let dayofweek = d.getDay();
            setDate(year + '年' + month + '月' + day + '日' + '(' + weekday[dayofweek] + ')');

            let hour = d.getHours().toString().padStart(2, '0');
            let minute = d.getMinutes().toString().padStart(2, '0');
            setTime(hour + ':' + minute);
        };

        // コンポーネントマウント時に一度実行
        updateDateTime();

        // その後、1秒ごとに更新
        const intervalId = setInterval(updateDateTime, 1000);

        // コンポーネントのアンマウント時にインターバルをクリア
        return () => clearInterval(intervalId);
    }, []);

    return (
      <div className='flex flex-wrap justify-between items-center'>
        <p>{date} <span>{time}</span></p>
      </div>
    );
}

export default JapaneseClock;
