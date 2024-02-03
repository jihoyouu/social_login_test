import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RedirectHandler = () => {
  const code = new URL(document.location.toString()).searchParams.get("code");
  const navigate = useNavigate();

  useEffect(() => {
    axios.post("backend api").then((response) => {
      console.log(response.data); // data 확인

      // 토큰을 받아서 localStorage 같은 곳에 저장하는 코드를 여기에 쓴다.
      localStorage.setItem("name", response.data.user_name); // 일단 이름만 저장

      navigate("/main"); // 로그인 성공 후 이동시킬 페이지(사용자가 볼 화면)
    });
  }, []);

  return <div>로그인 중입니다.</div>; // TODO : 로딩 인디케이터 삽입
};

export default RedirectHandler;
