import React from "react";
import '../css/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>이력서 및 포트폴리오</h1>
                <p>안녕하세요.</p>
            </header> 
            
            {/* 1. 사진을 넣지 않고 소개만 작성하는 about*/}
            <section className="home-about-one">
                <h2>소개</h2>
                <p>제 이름은 김종찬 입니다. KH 정보교육원에서 FullStack 과정을 수료하였습니다.</p>
            </section>

            {/***** 총 2개의 about section 이 있다.*****/}

            {/* 2. 한 개의 row 를 두 개의 column 으로 나누어, 좌측에는 사진/우측에는 소개를 작성하는 about*/}
            <section className="home-about-two">
                        <h2>소개</h2>
                <div className="about-row">
                    <div className="about-image">
                        <img src="hancom.jpg" alt="프로필 이미지" />
                    </div>
                    <div className="about-text">
                        <p>이름: </p>
                        <p>나이: </p>
                        <p>이메일: </p>
                        <p>깃허브로 이동하기 ▶ <a href="https://www.github.com/kjch777">https://www.github.com/kjch777</a></p>
                    </div>
                </div>
            </section>

            {/***** 개발 기술 섹션 *****/}
            <section className="home-skills">
                <h2>기술</h2>
                <ul>
                    <li>Java</li>
                    <li>SpringBoot</li>
                    <li>SQL: Oracle, MySQL</li>
                    <li>HTML / CSS / JavaScript</li>
                    <li>React</li>
                </ul>
            </section>

            {/***** Project 소개 
                    1개의 프로젝트 당 1개의 섹션을 작성*****/}
            <section className="home-projects">
                <h2>Project</h2>
                <div className="project-item">
                    <h3>Semi-Project</h3>
                    <p>간단한 프로젝트 설명 작성 공간</p>
                    {/* Link to 를 이용하여 프로젝트로 이동하는 js 작성*/}
                </div>
            </section>
        </div>
    )
}

export default Home;