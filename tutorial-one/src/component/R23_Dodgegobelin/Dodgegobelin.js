import React, { useRef, useEffect, useState } from 'react';
import './Dodgegobelin.css';

const Game = () => {
    const canvasRef = useRef(null);
    const [player, setPlayer] = useState({ x: 10, y: 50 }); // 플레이어 위치 설정(위치는 실시간으로 변경된다.)
    const [obstacles, setObstacles] = useState([{ x: 500, y: 100 }]); // 장애물 위치 설정(위치는 실시간으로 변경된다.)
    const [isRunning, setIsRunning] = useState(true); // boolean 값 설정
    const playerImageRef = useRef(null);
    const obstacleImageRef = useRef(null);

    useEffect(() => {
        const playerImg = new Image();
        playerImg.src = process.env.PUBLIC_URL + '/player.png'; 
        // 컴퓨터.환경에서, public 으로 시작하는 폴더에 player.png 라는 이미지가 있다면, 주소를 가져와 보여주겠다.
        playerImg.onload = () => {
            playerImageRef.current = playerImg; // 이미지를 정상적으로 가져왔는지, 개발자가 확인할 수 있게 해주는 코드
            console.log('Player 이미지 가져오기 성공');
        };
        playerImg.onerror = () => { // 플레이어 이미지를 가져오지 못했을 때, F12 콘솔에서 실패했다는 문구를 보여줌
            console.error('Player 이미지 가져오기 실패');
        };

        const obstacleImg = new Image();
        obstacleImg.src = process.env.PUBLIC_URL + '/obstacle.png';
        obstacleImg.onload = () => {
            obstacleImageRef.current = obstacleImg;
            console.log('Obstacle 이미지 가져오기 실패');
        };
        obstacleImg.onerror = () => {
            console.error('Obstacle 이미지 가져오기 실패');
        };
    }, []);


    useEffect(() => {
        const handleKeyDown = (event) => {
            let newPlayer = { ...player };
            switch (event.key) {
                case 'ArrowUp' : case 'w' : // ▲ 또는 w 버튼을 눌렀을 때, 위로 이동
                    newPlayer.y = Math.max(newPlayer.y - 50, 0);
                    break;
                case 'ArrowDown' : case 's' : // ▼ 또는 s 버튼을 눌렀을 때, 위로 이동
                    newPlayer.y = Math.min(newPlayer.y + 10, canvasRef.current.height - 40);
                    break;
                case 'ArrowLeft' : case 'a' : // ◀ 또는 a 버튼을 눌렀을 때, 위로 이동
                    newPlayer.x = Math.max(newPlayer.x - 50, 0);
                    break;
                case 'ArrowRight' : case 'd' : // ▶ 또는 d 버튼을 눌렀을 때, 위로 이동
                    newPlayer.x = Math.min(newPlayer.x + 10, canvasRef.current.width - 40);
                    break;
                default:
                    break;
            }
            setPlayer(newPlayer);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [player]);


    useEffect(() => {
        const canvas = canvasRef.current; // canvas: 사진이나 그림, 배경 등을 표현할 때 사용한다.
        const context = canvas.getContext('2d');

        const updateGame = () => {
            if (!isRunning) return;

            context.clearRect(0, 0, canvas.width, canvas.height);


            if (playerImageRef.current) { // public 에 이미지가 존재하면, 이미지 보여주기
                context.drawImage(playerImageRef.current, player.x, player.y, 10, 10);
            } else {
                context.fillStyle = 'blue'; // 이미지가 존재하지 않는다면, 40 X 40 크기의 파랑색 정사각형 모양으로 표현
                context.fillRect(player.x, player.y, 40, 40);
            }


            let newObstacles = obstacles.map(obstacle => ({
                ...obstacle,
                x: obstacle.x - 5
            })).filter(obstacle => obstacle.x > 0);


            newObstacles.forEach(obstacle => {
                if (obstacleImageRef.current) {
                    context.drawImage(obstacleImageRef.current, obstacle.x, obstacle.y, 40, 40);
                } else {
                    context.fillStyle = 'red';
                    context.fillRect(obstacle.x, obstacle.y, 10, 10);
                }

                if (
                    player.x < obstacle.x + 10 &&
                    player.x + 10 > obstacle.x &&
                    player.y < obstacle.y + 10 &&
                    player.y + 10 > obstacle.y
                ) {
                    setIsRunning(false);
                }
            });

            setObstacles(newObstacles);
        };

        const interval = setInterval(updateGame, 1000 / 60); 
        return () => clearInterval(interval);
    }, [player, obstacles, isRunning]);
    useEffect(() => {
        const addObstacle = () => {
            if (!isRunning) return;

            const newObstacle = {
                x: canvasRef.current.width,
                y: Math.random() * (canvasRef.current.height - 40) 
            };
            setObstacles(prevObstacles => [...prevObstacles, newObstacle]);
        };

        const interval = setInterval(addObstacle, 100); 
        return () => clearInterval(interval);
    }, [isRunning]);

    return (
        <div className="game-container">
            {/* canvas 는, 동영상 캡쳐나 사진을 찍고, 찍은 사진을 보여줄 때, 사진이 보여질 수 있는 틀을 제공하는 것이다.
                여기서는 게임 틀을 제공하는 것이다.*/}
            <canvas ref={canvasRef} width="1200" height="800" className="game-canvas" />
            <button onClick={() => setIsRunning(!isRunning)} className="game-button">
                {isRunning ? 'Pause' : 'Start'}
            </button>
            {!isRunning && <h2>Game Over</h2>}
        </div>
    );
};

export default Game;
