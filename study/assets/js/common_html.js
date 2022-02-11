// 퀴즈 타이틀
$('#quizTitle').html(`
	<div class="quiz-title">
		<div class="title d-none d-lg-block mb-3"><span class="mr-2 d-none">Review /</span><span
				class="mr-1">Step1</span><span class="mr-1">:</span><span>Listening Activity</span>
		</div>
		<div class="title d-none d-lg-block mb-3 text-truncate"><span class="mr-1">EB-KB-005</span><span
				class="mr-1">/</span><span>The Saling</span>
		</div>
	</div>
`)

// 퀴즈 정보
$('#quizInfo').html(`
	<div class="quiz-info">
		<div class="left d-flex align-items-center">
			<div class="number">3</div>
			<!--! 타이머 / 30초 남았을 때 (- timeout30) -->
			<div class="timer">20:00</div>
			<div class="life">
				<!--! heart icon (- delete) -->
				<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" class="heart">
					<path d="M 12.157 2.689 C 11.555 2.087 10.739 1.749 9.887 1.749 C 9.036 1.749 8.22 2.087 7.618 2.689 L 7 3.308 L 6.382 2.689 C 5.128 1.436 3.097 1.436 1.843 2.689 C 0.59 3.942 0.59 5.974 1.843 7.228 L 2.462 7.846 L 7 12.384 L 11.538 7.846 L 12.157 7.227 C 12.759 6.626 13.097 5.809 13.097 4.958 C 13.097 4.107 12.759 3.291 12.157 2.689 Z" fill="#FF88AA" stroke-width="1.1666666666666667" stroke="#FF88AA" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path>
				</svg>
				<!--! heart icon (- delete) -->
				<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" class="heart">
					<path d="M 12.157 2.689 C 11.555 2.087 10.739 1.749 9.887 1.749 C 9.036 1.749 8.22 2.087 7.618 2.689 L 7 3.308 L 6.382 2.689 C 5.128 1.436 3.097 1.436 1.843 2.689 C 0.59 3.942 0.59 5.974 1.843 7.228 L 2.462 7.846 L 7 12.384 L 11.538 7.846 L 12.157 7.227 C 12.759 6.626 13.097 5.809 13.097 4.958 C 13.097 4.107 12.759 3.291 12.157 2.689 Z" fill="#FF88AA" stroke-width="1.1666666666666667" stroke="#FF88AA" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path>
				</svg>
				<!--! heart icon (- delete) -->
				<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" class="heart">
					<path d="M 12.157 2.689 C 11.555 2.087 10.739 1.749 9.887 1.749 C 9.036 1.749 8.22 2.087 7.618 2.689 L 7 3.308 L 6.382 2.689 C 5.128 1.436 3.097 1.436 1.843 2.689 C 0.59 3.942 0.59 5.974 1.843 7.228 L 2.462 7.846 L 7 12.384 L 11.538 7.846 L 12.157 7.227 C 12.759 6.626 13.097 5.809 13.097 4.958 C 13.097 4.107 12.759 3.291 12.157 2.689 Z" fill="#FF88AA" stroke-width="1.1666666666666667" stroke="#FF88AA" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path>
				</svg>
			</div>
		</div>
		<div class="right d-flex">
			<!--! 꾸미기 실행 -->
			<div class="setting">
				<img src="../../assets/image/icons/image.svg" alt="" width="14">
			</div>
			<!--! info 실행 -->
			<div class="book-info">
				<img src="../../assets/image/icons/info.svg" alt="" width="14">
			</div>
			<!--! story로 가기 -->
			<div class="story d-none d-lg-flex">
				<img src="../../assets/image/icons/book-open.svg" alt="" width="14">
			</div>
			<!--! stoty, to-do로 가기 -->
			<div class="exit">
				<img src="../../assets/image/icons/log-out.svg" alt="" width="14">
			</div>
		</div>
	</div>
`)

// Next 버튼
$('#nextBox').html(`
	<div class="next-box">
		<button class="btn btn-secondary"><img src="../../assets/image/icons/arrow-right-white.svg" alt=""></button>
		<button class="btn btn-primary d-none"><img src="../../assets/image/icons/arrow-right-white.svg" alt=""></button>
	</div>
`)

// Vocabulary Test로 넘어가기 (타이핑)
$('#nextBoxVocaTest').html(`
    <div class="voca-test-intro">
        <div class="voca-test-text">
            <div>
                <div class="title">Vocabulary Test</div>
                <div class="p">Are you ready?</div>
            </div>
        </div>
        <div class="voca-btn-next-position">
            <button class="btn btn-primary"><img src="../../assets/image/icons/arrow-right-white.svg" alt=""></button>
        </div>
        <div class="voca-btn-next-position again">
            <button class="btn btn-primary"><img src="../../assets/image/icons/rotate-ccw-white.svg" alt=""></button>
        </div>
    </div>
`)

// 퀴즈 스코어
$('#quizScore').html(`
	<div class="quiz-score px-1">
		<div class="scroll">
			<div class="d-flex" style="height: 60px;">
				<div class="score-item" id="1">
					<span class="number active">1</span>
					<span class="score incorrect"></span>
					<span class="score correct"></span>
					<span class="score"></span>
				</div>
				<div class="score-item" id="2">
					<span class="number active">2</span>
					<span class="score incorrect"></span>
					<span class="score correct"></span>
					<span class="score"></span>
				</div>
				<div class="score-item this" id="3">
					<span class="number active">3</span>
					<span class="score"></span>
					<span class="score"></span>
					<span class="score"></span>
				</div>
				<div class="score-item">
					<span class="number">4</span>
					<span class="score"></span>
					<span class="score"></span>
					<span class="score"></span>
				</div>
				<div class="score-item">
					<span class="number">5</span>
					<span class="score"></span>
					<span class="score"></span>
					<span class="score"></span>
				</div>
				<div class="score-item">
					<span class="number">6</span>
					<span class="score"></span>
					<span class="score"></span>
					<span class="score"></span>
				</div>
				<div class="score-item">
					<span class="number">7</span>
					<span class="score"></span>
					<span class="score"></span>
					<span class="score"></span>
				</div>
				<div class="score-item">
					<span class="number">8</span>
					<span class="score"></span>
					<span class="score"></span>
					<span class="score"></span>
				</div>
				<div class="score-item">
					<span class="number">9</span>
					<span class="score"></span>
					<span class="score"></span>
					<span class="score"></span>
				</div>
				<div class="score-item">
					<span class="number">10</span>
					<span class="score"></span>
					<span class="score"></span>
					<span class="score"></span>
				</div>
			</div>
		</div>
	</div>
`)

// 키보드
$('#keyboard').html(`
    <div class="keyboard">
        <!--! 소문자 -->
        <div class="keys1 small">
            <div class="key hint">q</div>
            <div class="key">w</div>
            <div class="key">e</div>
            <div class="key">r</div>
            <div class="key">t</div>
            <div class="key">y</div>
            <div class="key">u</div>
            <div class="key">i</div>
            <div class="key">o</div>
            <div class="key">p</div>
            <div class="key">a</div>
            <div class="key">s</div>
            <div class="key">d</div>
            <div class="key">f</div>
            <div class="key">g</div>
            <div class="key">h</div>
            <div class="key">j</div>
            <div class="key">k</div>
            <div class="key">l</div>
            <div class="key">-</div>
            <div class="key">z</div>
            <div class="key">x</div>
            <div class="key">c</div>
            <div class="key">v</div>
            <div class="key">b</div>
            <div class="key">n</div>
            <div class="key">m</div>
            <div class="key">'</div>
            <div class="key">"</div>
            <div class="key"><img src="../../assets/image/icons/delete.svg" alt="" width="18px"></div>
        </div>
        <!--! 대문자 -->
        <div class="keys1 large d-none">
            <div class="key">Q</div>
            <div class="key">W</div>
            <div class="key">E</div>
            <div class="key">R</div>
            <div class="key">T</div>
            <div class="key">Y</div>
            <div class="key">U</div>
            <div class="key">I</div>
            <div class="key">O</div>
            <div class="key">P</div>
            <div class="key">A</div>
            <div class="key">S</div>
            <div class="key">D</div>
            <div class="key">F</div>
            <div class="key">G</div>
            <div class="key">H</div>
            <div class="key">J</div>
            <div class="key">K</div>
            <div class="key">L</div>
            <div class="key">-</div>
            <div class="key">Z</div>
            <div class="key">X</div>
            <div class="key">C</div>
            <div class="key">V</div>
            <div class="key">B</div>
            <div class="key">N</div>
            <div class="key">M</div>
            <div class="key">'</div>
            <div class="key">"</div>
            <div class="key"><img src="../../assets/image/icons/delete.svg" alt="" width="18px"></div>
        </div>
        <!--! 특수기호 -->
        <div class="keys1 number d-none">
            <div class="key">1</div>
            <div class="key">2</div>
            <div class="key">3</div>
            <div class="key">4</div>
            <div class="key">5</div>
            <div class="key">6</div>
            <div class="key">7</div>
            <div class="key">8</div>
            <div class="key">9</div>
            <div class="key">0</div>
            <div class="key">!</div>
            <div class="key">@</div>
            <div class="key">#</div>
            <div class="key">$</div>
            <div class="key">%</div>
            <div class="key">^</div>
            <div class="key">&</div>
            <div class="key">*</div>
            <div class="key">(</div>
            <div class="key">)</div>
            <div class="key">-</div>
            <div class="key">=</div>
            <div class="key">[</div>
            <div class="key">]</div>
            <div class="key">;</div>
            <div class="key">:</div>
            <div class="key">,</div>
            <div class="key">.</div>
            <div class="key">?</div>
            <div class="key"><img src="../../assets/image/icons/delete.svg" alt="" width="18px"></div>
        </div>
        <div class="keys2">
            <div class="key active">A/a</div>
            <div class="key">123</div>
            <div class="key">space</div>
            <div class="key"><img src="../../assets/image/icons/arrow-right-white.svg" alt="" width="18px">
            </div>
        </div>
    </div>
    <div class="keypad d-none">
        <div class="key">1</div>
        <div class="key">2</div>
        <div class="key">3</div>
        <div class="key">4</div>
        <div class="key">5</div>
        <div class="key">6</div>
        <div class="key">7</div>
        <div class="key">8</div>
        <div class="key">9</div>
        <div class="key">abc</div>
        <div class="key">0</div>
        <div class="key"><img src="../../assets/image/icons/delete.svg" alt="" width="18px"></div>
    </div>
`)

// 각종 팝업
$('#popup').html(`
	<!--! 각종팝업(- active, result) -->
	<div class="item-container">
        <!--! 학습창 배경꾸미기 (- active) -->
        <div class="edit-window">
            <!--! 타이틀 -->
            <div class="style-title">
                <div class="title mb-3 mr-3 text-truncate"><span>Window Theme</span>
                </div>
                <div class="modal-delete"><img src="../../assets/image/icons/x.svg" alt=""></div>
            </div>
            <!--! 스타일(배경)고르기 -->
            <div class="style-list d-flex flex-column justify-content-between">
                <div>
                    <div class="style-info mb-3">
                        <!--! 백그라운드 스타일 -->
                        <div class="style-name ml-1 mb-2">
                            Background
                        </div>
                        <div class="d-flex justify-content-between mb-3">
                            <div class="bg-item bg-warm">
                                <div class="bg-check ckecked"></div>
                            </div>
                            <div class="bg-item bg-red">
                                <div class="bg-check"></div>
                            </div>
                            <div class="bg-item bg-yellow">
                                <div class="bg-check"></div>
                            </div>
                            <div class="bg-item bg-green">
                                <div class="bg-check"></div>
                            </div>
                            <div class="bg-item bg-blue">
                                <div class="bg-check"></div>
                            </div>
                            <div class="bg-item bg-purple">
                                <div class="bg-check"></div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div class="bg-item bg-study">
                                <div class="bg-check ckecked"></div>
                            </div>    
                            <div class="bg-item bg-wood">
                                <div class="bg-check"></div>
                            </div>
                            <div class="bg-item bg-work">
                                <div class="bg-check"></div>
                            </div>
                            <div class="bg-item bg-geometry">
                                <div class="bg-check"></div>
                            </div>
                            <div class="bg-item bg-doddles">
                                <div class="bg-check"></div>
                            </div>
                            <div class="bg-item bg-dot">
                                <div class="bg-check"></div>
                            </div>
                        </div>
                    </div>
                    <div class="style-info mb-3">
                        <div class="style-name ml-1 mb-2">
                            Window
                        </div>
                        <div class="d-flex justify-content-between">
                            <div class="bg-item-w basic">
                                <div class="bg-check ckecked"></div>
                            </div>
                            <div class="bg-item-w space">
                                <div class="bg-check"></div>
                            </div>
                            <div class="bg-item-w grass">
                                <div class="bg-check"></div>
                            </div>
                            <div class="bg-item-w night-sky">
                                <div class="bg-check"></div>
                            </div>
                            <div class="bg-item-w table2">
                                <div class="bg-check"></div>
                            </div>
                            <div class="bg-item-w wood">
                                <div class="bg-check"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button class="btn btn-primary w-100">Save</button>
                </div>
            </div>
        </div>

        <!--! study info(- active) -->
        <div class="study-info">
            <!--! 학습타이틀 -->
            <div class="quiz-title">
                <div class="title mb-3 mr-3 text-truncate"><span class="mr-1">EB-KB-005</span><span
                        class="mr-1">/</span><span>The Saling</span>
                </div>
                <div class="modal-delete"><img src="../../assets/image/icons/x.svg" alt=""></div>
            </div>
            <!--! Step 정보 -->
            <div class="step-list">
                <div class="step-info active">
                    <div class="study-name d-flex justify-content-between">
                        <span>eBook</span><span><img src="../../assets/image/icons/arrow-right.svg" alt=""
                                width="14px"></span>
                    </div>
                </div>
                <div class="text-center">
                    <img src="../../assets/image/icons/arrow-down.svg" alt="" width="14px">
                </div>
                <div class="step-info active">
                    <div class="step">
                        <div class="title">Step1</div>
                    </div>
                    <div class="study-name">
                        Listening Activity
                    </div>
                    <hr>
                    <div class="total-score">
                        <span>corret : </span><span class="mr-2">5</span>
                        <span>incorrect : </span><span>5</span>
                    </div>
                </div>
                <div class="text-center">
                    <img src="../../assets/image/icons/arrow-down.svg" alt="" width="14px">
                </div>
                <div class="step-info">
                    <div class="step">
                        <div class="title">Step2</div>
                    </div>
                    <div class="study-name">
                        Vocabulary
                    </div>
                    <hr>
                    <div class="total-score">
                        <span>corret : </span><span class="mr-2">-</span>
                        <span>incorrect : </span><span>-</span>
                    </div>
                </div>
                <div class="text-center">
                    <img src="../../assets/image/icons/arrow-down.svg" alt="" width="14px">
                </div>
                <div class="step-info">
                    <div class="step">
                        <div class="title">Step3</div>
                    </div>
                    <div class="study-name">
                        Reading Comprehension
                    </div>
                    <hr>
                    <div class="total-score">
                        <span>corret : </span><span class="mr-2">-</span>
                        <span>incorrect : </span><span>-</span>
                    </div>
                </div>
                <div class="text-center">
                    <img src="../../assets/image/icons/arrow-down.svg" alt="" width="14px">
                </div>
                <div class="step-info">
                    <div class="step">
                        <div class="title">Step4</div>
                    </div>
                    <div class="study-name">
                        Writing Activity
                    </div>
                    <hr>
                    <div class="total-score">
                        <span>corret : </span><span class="mr-2">-</span>
                        <span>incorrect : </span><span>-</span>
                    </div>
                </div>
            </div>
        </div>

        <!--! 정오답체크 : 리딩유닛(- correct, done/incorrect - active, done) -->
        <div class="reading-unit correct">
            <img src="../../assets/image/study_img/character_correct/baro_correct.png" alt="">
        </div>
        <div class="reading-unit incorrect">
            <img src="../../assets/image/study_img/character_incorrect/baro_incorrect.png" alt="">
        </div>

        <!--! Test Result (- active) -->
        <div class="test-result">
            <div>
                <div class="title">
                    Test Result
                </div>
                <!--! 토탈 점수 -->
                <div class="d-flex">
                    <div class="result-box">
                        <div class="correct">Correct</div>
                        <div class="result">10</div>
                    </div>
                    <div class="result-box">
                        <div class="incorrect">Incorrect</div>
                        <div class="result">10</div>
                    </div>
                </div>
                <!--! 스코어 -->
                <div class="quiz-score result">
                    <div class="details">
                        Details
                    </div>
                    <hr>
                    <div class="score-item" id="1">
                        <span class="number active">1</span>
                        <span class="score incorrect"></span>
                        <span class="score correct"></span>
                        <span class="score"></span>
                    </div>
                    <hr>
                    <div class="score-item" id="2">
                        <span class="number active">2</span>
                        <span class="score incorrect"></span>
                        <span class="score correct"></span>
                        <span class="score"></span>
                    </div>
                    <hr>
                    <div class="score-item" id="3">
                        <span class="number active">3</span>
                        <span class="score incorrect"></span>
                        <span class="score correct"></span>
                        <span class="score"></span>
                    </div>
                    <hr>
                    <div class="score-item" id="4">
                        <span class="number active">4</span>
                        <span class="score incorrect"></span>
                        <span class="score correct"></span>
                        <span class="score"></span>
                    </div>
                    <hr>
                    <div class="score-item" id="5">
                        <span class="number active">5</span>
                        <span class="score incorrect"></span>
                        <span class="score correct"></span>
                        <span class="score"></span>
                    </div>
                    <hr>
                    <div class="score-item" id="6">
                        <span class="number active">6</span>
                        <span class="score incorrect"></span>
                        <span class="score correct"></span>
                        <span class="score"></span>
                    </div>
                    <hr>
                    <div class="score-item" id="7">
                        <span class="number active">7</span>
                        <span class="score incorrect"></span>
                        <span class="score correct"></span>
                        <span class="score"></span>
                    </div>
                    <hr>
                    <div class="score-item" id="8">
                        <span class="number active">8</span>
                        <span class="score incorrect"></span>
                        <span class="score correct"></span>
                        <span class="score"></span>
                    </div>
                    <hr>
                    <div class="score-item" id="9">
                        <span class="number active">9</span>
                        <span class="score incorrect"></span>
                        <span class="score correct"></span>
                        <span class="score"></span>
                    </div>
                    <hr>
                    <div class="score-item" id="10">
                        <span class="number active">10</span>
                        <span class="score incorrect"></span>
                        <span class="score correct"></span>
                        <span class="score"></span>
                    </div>
                    <hr>
                </div>
                <div>
                    <button class="btn btn-primary w-100">Next</button>
                </div>
            </div>
        </div>
    </div>
`)

// 시즌 테마 (애니메이션 배경 효과 등)
$('#seasonTheme').html(`
	<!--! 눈내리기 실행 (- d-none) -->
	<div id="outer" class="d-none">
		<div class="snowflakes" aria-hidden="true">
			<div class="snowflake" style="font-size: 12px">❉</div>
			<div class="snowflake" style="font-size: 26px">❆</div>
			<div class="snowflake" style="font-size: 28px">❉</div>
			<div class="snowflake" style="font-size: 16px">❆</div>
			<div class="snowflake" style="font-size: 20px">❉</div>
			<div class="snowflake" style="font-size: 28px">❆</div>
			<div class="snowflake" style="font-size: 20px">❆</div>
			<div class="snowflake" style="font-size: 22px">❆</div>
			<div class="snowflake" style="font-size: 28px">❉</div>
			<div class="snowflake" style="font-size: 10px">❆</div>
			<div class="snowflake" style="font-size: 28px">❉</div>
			<div class="snowflake" style="font-size: 28px">❆</div>
			<div class="snowflake" style="font-size: 24px">❆</div>
			<div class="snowflake" style="font-size: 22px">❆</div>
			<div class="snowflake" style="font-size: 20px">❆</div>
			<div class="snowflake" style="font-size: 16px">❉</div>
			<div class="snowflake" style="font-size: 18px">❆</div>
			<div class="snowflake" style="font-size: 26px">❉</div>
			<div class="snowflake" style="font-size: 28px">❆</div>
			<div class="snowflake" style="font-size: 12px">❆</div>
		</div>
	</div>
`)


// 효과음
let 효과음 = {
    정답: '../../assets/audio/answer_correct.mp3',
    오답: '../../assets/audio/answer_incorrect.mp3',
    리뷰: 1,
    넥스트: 1,
    팝업: '../../assets/audio/pop2.mp3',
    팝업2: '../../assets/audio/pop.mp3'
}


// 문제를 틀렸을 때 하트차감 효과
let 하트갯수 = $('.heart').length;

function 하트차감() {
    $('.heart').eq(하트갯수 - 1).addClass('delete');
    하트갯수 = 하트갯수 - 1;
};

// 모달
let 모달배경 = $('.item-container');
let 팝업오디오 = new Audio(효과음.팝업);
let 팝업오디오2 = new Audio(효과음.팝업2);
let 정답오디오 = new Audio(효과음.정답);
let 오답오디오 = new Audio(효과음.오답);

// 테마변경모달 실행
$('.setting').on('click', function () {
    팝업오디오.play();
    모달배경.addClass('active');
    $('.edit-window').addClass('active');
});

// 학습정보모달 실행
$('.book-info').on('click', function () {
    팝업오디오.play();
    모달배경.addClass('active');
    $('.study-info').addClass('active')
});

// 모달 닫기
$('.modal-delete').on('click', function () {
    팝업오디오.load();
    모달배경.removeClass('active');
    $('.edit-window').removeClass('active');
    $('.study-info').removeClass('active');
});

// 사운드버튼 재생 및 효과
let 오디오파일 = 'https://wcfresource.a1edu.com/newsystem/sound/words/moon.mp3';
let 오디오소스 = new Audio(오디오파일);
let 사운드재생중지 = function () {
    $('.btn-sound').removeClass('active')
};
$('.btn-sound').on('click', function () {
    $('.btn-sound').addClass('active');
    오디오소스.play();
    setTimeout(사운드재생중지, 오디오소스.duration * 1000);
});

// 배경고르기
$('.bg-item').on('click', function () {
    팝업오디오2.play();
    let 선택한배경;
    선택한배경 = event.currentTarget.className;
    $('#Main').removeClass();
    $('#Main').addClass('main-container')
    $('.main-container').addClass(선택한배경);
    $('.main-container').removeClass('bg-item');
    setTimeout(() => {
        팝업오디오2.load();
    }, 500);
});

// 윈도우배경고르기
$('.bg-item-w').on('click', function () {
    팝업오디오2.play();
    let 선택한배경2;
    선택한배경2 = event.currentTarget.className;
    $('#Quiz').removeClass();
    $('#Quiz').addClass('quiz-container')
    $('.quiz-container').addClass(선택한배경2);
    $('.quiz-container').removeClass('bg-item-w');
    setTimeout(() => {
        팝업오디오2.load();
    }, 500);
});

// 답 선택후 정답 효과
function 정답체크효과() {
    정답오디오.play();
    모달배경.addClass('active');
    $('.reading-unit.correct').addClass('active');
    setTimeout(() => {
        $('.reading-unit.correct').addClass('done')
    }, 1200);
    setTimeout(() => {
        답체크종료();
        정답오디오.load();
    }, 2000);
};

function 오답체크효과() {
    오답오디오.play();
    모달배경.addClass('active');
    $('.reading-unit.incorrect').addClass('active');
    setTimeout(() => {
        $('.reading-unit.incorrect').addClass('done')
    }, 1000);
    setTimeout(() => {
        답체크종료();
        오답오디오.load();
    }, 1600);
    setTimeout(() => {
        하트차감();
    }, 1670);
};

function 답체크종료() {
    모달배경.removeClass('active');
    $('.reading-unit.correct').removeClass('active');
    $('.reading-unit.correct').removeClass('done')
    $('.reading-unit.incorrect').removeClass('active');
    $('.reading-unit.incorrect').removeClass('done')
};

// Listening Activity 1 정오답 체크
function listeningActivity1(정답) {
    $('.quiz-answer').on('click', function () {
        if (정답 == event.currentTarget.querySelector('.word').innerText) {
            정답체크효과();
        } else {
            오답체크효과();
        };
    });
};