// utils/mbtiMatch.ts
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

export const getMbtiMatch = (type1: MbtiType, type2: MbtiType) => {
  // 임시로 기본 궁합 점수와 설명을 반환
  return {
    score: 75,
    description: `${type1}와(과) ${type2}의 궁합은 75점입니다. 
    서로의 차이를 이해하고 존중하면 좋은 관계를 이어갈 수 있습니다.`,
  };
};
