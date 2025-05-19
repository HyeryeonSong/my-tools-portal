"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Layout from "@/app/components/Layout";

export default function DdayPage() {
  const [targetDate, setTargetDate] = useState("");
  const [dday, setDday] = useState(null);

  const calculateDday = () => {
    if (!targetDate) return;
    const today = new Date();
    const target = new Date(targetDate);
    // 오늘 날짜 기준 0시로 맞추기 (시간 오차 방지)
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);
    const diffTime = target.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDday(diffDays);
  };

  return (
    <Layout>
      <h1>디데이계산기</h1>
      <InputContainer>
        <input
          type="date"
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
          max="9999-12-31"
        />
        <Button onClick={calculateDday}>계산하기</Button>
      </InputContainer>
      {dday !== null && (
        <ResultText>
          {dday > 0
            ? `D-${dday}`
            : dday === 0
            ? "D-Day!"
            : `D+${Math.abs(dday)}`}
        </ResultText>
      )}
    </Layout>
  );
}

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #005bb5;
  }
`;

const ResultText = styled.p`
  font-size: 1.5em;
  color: #d32f2f;
  font-weight: bold;
`;
