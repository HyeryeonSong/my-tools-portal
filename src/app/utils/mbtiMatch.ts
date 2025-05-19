// utils/mbtiMatch.ts
type MBTI =
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

type MatchResult = {
  score: number;
  description: string;
};

export const getMbtiMatch = (mine: MBTI, partner: MBTI): MatchResult => {
  const key = `${mine}-${partner}`;

  const fakeMatchDB: Record<string, MatchResult> = {
    "INTJ-ENFP": {
      score: 95,
      description: "반대 성향이지만 서로를 끌어당기는 운명적 케미!",
    },
    "ENFP-ISTJ": {
      score: 60,
      description: "감성파와 현실파의 충돌, 노력만이 답!",
    },
    "INTP-INTP": {
      score: 70,
      description: "대화는 잘 통하지만 연애는 혼자 하는 중.",
    },
    // 나머지 조합은 디폴트로
  };

  return (
    fakeMatchDB[key] ?? {
      score: Math.floor(Math.random() * 40) + 50,
      description: "서로 알아가는 재미가 있는 조합이에요!",
    }
  );
};
