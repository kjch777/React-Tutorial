import React from 'react';
import { useForm } from 'react-hook-form';

export const Captcha = () => {
    // useForm 훅을 사용하여 폼 상태 및 핸들러를 설정합니다
    const { register, handleSubmit, formState: { errors } } = useForm();

    // 새로 고침 핸들러
    const getNewImg = (e) => {
        e.preventDefault();
        var rand = Math.random();
        var url = "/captchaImg?rand=" + rand;
        document.getElementById("captchaImg").setAttribute("src", url);
    };

    // 폼 제출 핸들러
    const onSubmit = (data) => {
        console.log(data);
        // 여기에 폼 데이터 처리 로직 추가
    };

    return (
        <div>
            <ul>
                <li>
                    <label htmlFor="captcha">
                        보안 문자
                    </label>
                </li>
                <li>
                    <img id="captchaImg" src="/captchaImg" />
                    <button onClick={e => getNewImg(e)}>새로고침</button>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input id="answer" type="text" autoComplete="off" {...register("answer", { required: true })} />
                        {errors.answer && <div style={{ color: "red" }}>보안 문자 입력 요망</div>}
                        <button type="submit">제출</button>
                    </form>
                </li>
            </ul>
        </div>
    );
}
