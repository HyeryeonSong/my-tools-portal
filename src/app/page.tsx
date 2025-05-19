"use client";
import Layout from "@/app/components/Layout";
import Link from "next/link";
import styled from "styled-components";

const StyledToolList = styled.ul`
  margin-top: 50px;
  li {
    list-style: none;
    height: 50px;
    background-color: #f8dfb3;
    border-radius: 15px;
    display: flex;
    margin-bottom: 20px;
    a {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default function Home() {
  return (
    <Layout>
      <StyledToolList>
        <li>
          <Link href="/tools/age-calculator">나이 계산기</Link>
        </li>
        <li>
          <Link href="/tools/chinese-zodiac-sign">띠 계산기</Link>
        </li>
        <li>
          <Link href="/tools/d-day-calculator">디데이 계산기</Link>
        </li>
        <li>
          <Link href="/tools/mbti-match">MBTI별 궁합</Link>
        </li>
      </StyledToolList>
    </Layout>
  );
}
