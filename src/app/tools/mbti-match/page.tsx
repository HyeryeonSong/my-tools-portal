"use client";

import Layout from "@/app/components/Layout";
import { useState } from "react";
import { getMbtiMatch } from "@/app/utils/mbtiMatch";

type MbtiType =
  | "INTJ"
  | "INTP"
  | "ENTJ"
  | "ENTP"
  | "INFJ"
  | "INFP"
  | "ENFJ"
  | "ENFP"
  | "ISTJ"
  | "ISFJ"
  | "ESTJ"
  | "ESFJ"
  | "ISTP"
  | "ISFP"
  | "ESTP"
  | "ESFP";

const MBTI_LIST: MbtiType[] = [
  "INTJ",
  "INTP",
  "ENTJ",
  "ENTP",
  "INFJ",
  "INFP",
  "ENFJ",
  "ENFP",
  "ISTJ",
  "ISFJ",
  "ESTJ",
  "ESFJ",
  "ISTP",
  "ISFP",
  "ESTP",
  "ESFP",
];

export default function MBTIMatchPage() {
  const [myMbti, setMyMbti] = useState<MbtiType>("INTJ");
  const [theirMbti, setTheirMbti] = useState<MbtiType>("ENFP");
  const [result, setResult] = useState<{
    score: number;
    description: string;
  } | null>(null);

  const handleMatch = () => {
    setResult(getMbtiMatch(myMbti, theirMbti));
  };

  return (
    <Layout>
      <h1>MBTI 궁합 테스트 💘</h1>
      <p>본인의 MBTI와 상대방의 MBTI를 선택하세요!</p>

      <div style={{ display: "flex", gap: "1rem", margin: "1rem 0" }}>
        <select
          value={myMbti}
          onChange={(e) => setMyMbti(e.target.value as MbtiType)}
        >
          {MBTI_LIST.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          value={theirMbti}
          onChange={(e) => setTheirMbti(e.target.value as MbtiType)}
        >
          {MBTI_LIST.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <button onClick={handleMatch}>궁합 보기</button>
      </div>

      {result && (
        <div style={{ marginTop: "2rem" }}>
          <h2>💖 궁합 점수: {result.score}점</h2>
          <p>{result.description}</p>
        </div>
      )}
    </Layout>
  );
}
