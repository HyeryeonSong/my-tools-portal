'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '@/app/components/Layout';
import { Solar } from 'lunar-javascript';

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

// 한자를 한글로 변환
const zodiacMap: { [key: string]: string } = {
  '鼠': '쥐',
  '牛': '소',
  '虎': '호랑이',
  '兔': '토끼',
  '龙': '용',
  '蛇': '뱀',
  '马': '말',
  '羊': '양',
  '猴': '원숭이',
  '鸡': '닭',
  '狗': '개',
  '猪': '돼지'
};

export default function ChineseZodiacSign() {
  const [birthdate, setBirthdate] = useState('');
  const [zodiacSign, setZodiacSign] = useState('');

  const calculateZodiacSign = () => {
    if (!birthdate) return;

    const solarDate = new Date(birthdate);
    const solar = Solar.fromDate(solarDate);
    const lunar = solar.getLunar();
    const chineseZodiac = lunar.getYearShengXiao();
    const koreanZodiac = zodiacMap[chineseZodiac] || chineseZodiac;

    setZodiacSign(koreanZodiac);
  };

  return (
    <Layout>
      <h1>중국 띠 계산기 (음력 기준)</h1>
      <InputContainer>
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <Button onClick={calculateZodiacSign}>띠 계산하기</Button>
      </InputContainer>
      {zodiacSign && <p>계산된 띠: {zodiacSign}띠</p>}
    </Layout>
  );
}
