'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '@/app/components/Layout';

export default function AgeCalculatorPage() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState<number | ''>('');

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let ageInYears = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // 생일이 지나지 않았으면 나이에서 1살을 뺍니다.
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      ageInYears--;
    }

    setAge(ageInYears);
  };

  return (
    <Layout>
      <h1>만 나이 계산기</h1>
      <div>
        <StyledBirthdayInput
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          placeholder="생년월일을 입력하세요"
        />
        <button onClick={calculateAge}>나이 계산하기</button>
        <p>계산된 만 나이: {age}</p>
      </div>
    </Layout>
  );
}

const StyledBirthdayInput = styled.input`
  height: 50px;
  margin: 20px 0;

`