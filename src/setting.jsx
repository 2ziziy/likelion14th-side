import React from 'react';
import { useNavigate } from 'react-router-dom';

function Setting() {
  const navigate = useNavigate();

  // 버튼 이름과 경로를 배열로 관리하겠습니당~~
  const routes = [
    { name: '메인', path: '/main' },
    { name: '질문', path: '/test' },
    { name: '결과', path: '/result' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <p>페이지</p>
      {routes.map(({ name, path }) => (
        <button
          key={path}
          onClick={() => navigate(path)}
          style={{
            backgroundColor: '#ff6000',
            border: 'none',
            margin: '0.5rem',
            padding: '1rem 2rem',
            fontSize: '16px',
            borderRadius: '8px',
          }}
        >
          {name} 페이지로 이동
        </button>
      ))}
    </div>
  );
}

export default Setting;