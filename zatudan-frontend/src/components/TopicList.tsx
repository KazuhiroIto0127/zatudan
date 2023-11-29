import React, { useState, useEffect } from 'react';

interface Topic {
  id: number;
  body: string;
  created_at: string;
  updated_at: string;
}

const TopicList = () => {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const apiUrl = process.env.REACT_APP_CF_BACKEND_API_URL;
        const response = await fetch(`${apiUrl}/api/topics`);
        if (!response.ok) {
          throw new Error('データの取得に失敗しました。');
        }
        const data = await response.json();
        setTopics(data);
      } catch (error) {
        console.error('エラー:', error);
      }
    };

    fetchTopics();
  }, []);

  return (
    <div className="overflow-x-auto container mx-auto">
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              ID
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              話題
            </th>
          </tr>
        </thead>
        <tbody>
          {topics.map((topic) => (
            <tr key={topic.id}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {topic.id}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {topic.body}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopicList;
