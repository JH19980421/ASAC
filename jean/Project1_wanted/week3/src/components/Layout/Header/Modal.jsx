import { useState, useEffect } from 'react';
import { useRef } from 'react';

const Modal = ({ setmodalOpen, modalOpen }) => {
    const [choice, setChoice] = useState([false, false, false]);
    const [visual, setVisual] = useState(false);
    const modal = useRef();

    function choiceChange(e) {
        const idArray = [];
        choice.forEach(el => idArray.push(el));
        const value = e.target.alt;
        console.log(e.target.value);
        if (value == 0) {
            let flag = !idArray[0];
            for (let i = 0; i < idArray.length; i++) {
                idArray[i] = flag;
            }
        } else {
            idArray[value] = !idArray[value];
            let count = 0;
            for (let i = 1; i < idArray.length; i++) {
                if (idArray[i]) count++;
            }

            if (count == 2) idArray[0] = true;
            else idArray[0] = false;
        }
        // idArray[1] = !idArray[1];
        setChoice(idArray);
    }
    const handleClickButton = () => {
        setmodalOpen(-1);
    };
    function toNext() {
        setmodalOpen(1);
    }

    const [name, setName] = useState('');
    const [nameerror, setNameError] = useState(false);
    const namecheck = e => {
        const value = e.target.value; // 우선 e.target 에서 name 과 value 를 추출

        if (value.length < 2 || value.length > 5) {
            setNameError(false);
        } else if (!nameerror) {
            setNameError(true);
        }

        setName(value);
    };

    const [email, setEmail] = useState('');
    const [emailerror, setEmailerror] = useState(false);
    const emailcheck = e => {
        const value = e.target.value; // 우선 e.target 에서 name 과 value 를 추출
        var reg = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

        if (!reg.test(value)) {
            setEmailerror(false);
        } else if (!emailerror) {
            setEmailerror(true);
        }

        setEmail(value);
    };

    const [phone, setPhone] = useState('');
    const [phoneerror, setphoneerror] = useState(false);
    const phonecheck = e => {
        const value = e.target.value; // 우선 e.target 에서 name 과 value 를 추출
        var reg = /^[0-9]{2,3}[0-9]{3,4}[0-9]{4}/;
        if (!reg.test(value)) {
            setphoneerror(false);
        } else if (!phoneerror) {
            setphoneerror(true);
        }
        setPhone(value);
    };

    const [password, setPassword] = useState('');
    const [passworderror, setPassworderror] = useState(false);
    const passwordcheck = e => {
        const value = e.target.value; // 우선 e.target 에서 name 과 value 를 추출
        var reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (!reg.test(value)) {
            setPassworderror(false);
        } else if (!passworderror) {
            setPassworderror(true);
        }
        setPassword(value);
    };

    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [passwordcommiterror, setPasswordcommiterror] = useState(false);
    const passwordcommitcheck = e => {
        const value = e.target.value; // 우선 e.target 에서 name 과 value 를 추출

        if (value != password) {
            setPasswordcommiterror(false);
        } else if (!passwordcommiterror) {
            setPasswordcommiterror(true);
        }
        setPasswordConfirm(value);
    };

    function outsideClick(e) {
        console.log(e.target);
        console.log(modal);
    }
    return (
        <div id="modal" className="modal-overlay" ref={modal} nClick={outsideClick}>
            <div className="modal-window">
                <div className="modal-header">
                    <img src={require('../../../images/logo.png')} alt="" />
                    <h1> </h1>
                    <button className="close-area" onClick={handleClickButton}>
                        <svg width="24" height="24" viewBox="0 0 24 24" color="#999">
                            <path
                                fill="currentColor"
                                d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"
                            ></path>
                        </svg>
                    </button>
                </div>
                {modalOpen == 0 && (
                    <div className="modal-body">
                        <div className="title">
                            <h1>
                                직장인을 위한
                                <br />
                                커리어 플랫폼, 원티드!
                            </h1>
                            <h2>
                                커리어 성장과 행복을 위한 여정
                                <br /> 지금 원티드에서 시작하세요.
                            </h2>
                        </div>

                        <div className="login">
                            <div className="login_email">
                                <label htmlFor="email" className="email_label">
                                    이메일
                                </label>
                                <div className="email_inputobx">
                                    <input
                                        type="email"
                                        placeholder="이메일을 입력해 주세요."
                                        name="email"
                                        onChange={emailcheck}
                                        style={emailerror || email.length == 0 ? { border: '1px solid #999999' } : { border: '1px solid red' }}
                                    />
                                </div>
                                <div className="email_error" style={emailerror || email.length == 0 ? { display: 'none' } : { display: 'block' }}>
                                    올바른 이메일 형식을 입력해주세요.
                                </div>
                            </div>

                            <div className="login_panel">
                                <button
                                    type="button"
                                    className="login_email_button"
                                    onClick={toNext}
                                    style={emailerror ? { backgroundColor: 'blue' } : { backgroundColor: 'gray' }}
                                    // disabled={emailerror ? false : true}
                                    disabled={!emailerror}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <g fill="none" fillRule="evenodd" stroke="#FFF" strokeWidth="2">
                                            <rect width="17.2" height="14" x="3.4" y="5" rx="3"></rect>
                                            <path d="M3.2 5.6L12 12l8.8-6.4"></path>
                                        </g>
                                    </svg>
                                    이메일로 계속하기
                                </button>
                                <div className="login_panel_divider"></div>
                                <div className="login_panel_social">다음 계정으로 계속하기</div>
                                <div className="login_panel_socialbox">
                                    <ul>
                                        <li>
                                            <a href="/">
                                                <img src={require('../../../images/kakao.png')} alt="" />
                                                <p>kakao</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <img src={require('../../../images/facebook.png')} alt="" />
                                                <p>facebook</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <img src={require('../../../images/google.png')} alt="" />
                                                <p>google</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <img src={require('../../../images/apple.png')} alt="" />
                                                <p>apple</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="modal_footer">
                                걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다.
                                <br />
                                회원가입 시<a href="https://help.wanted.co.kr/hc/ko/articles/360035484292">개인정보 처리방침</a> 과
                                <a href="https://help.wanted.co.kr/hc/ko/articles/360035844551">이용약관</a> 을 확인하였으며, 동의합니다.
                            </p>
                        </div>
                    </div>
                )}

                {modalOpen == 1 && (
                    <div className="modal_input_body">
                        <div className="email_box">
                            <h1>이메일</h1>
                            <div className="inputobx">
                                <input readOnly={true} type="text" value={email} placeholder="이메일을 입력해 주세요." />
                            </div>
                        </div>

                        <div className="name">
                            <h1>이름</h1>
                            <div className="inputobx">
                                <input type="text" placeholder="이름을 입력해 주세요." id="name" onChange={namecheck} />
                            </div>
                        </div>
                        {nameerror || name.length == 0 ? '' : <div className="certificationError">올바른 이름을 입력해주세요.</div>}

                        <div className="phone">
                            <h1>휴대폰 번호</h1>
                            <div className="inputobx">
                                <select type="text" id="phone" placeholder="(예시)01012345678">
                                    <option value="+82">+82 South Korea</option> <option value="+81">+81 Japan</option>
                                    <option value="+886">+886 Taiwan</option> <option value="+852">+852 Hong Kong</option>
                                    <option value="+65">+65 Singapore</option> <option value="+93">+93 Afghanistan</option>
                                    <option value="+355">+355 Albania</option> <option value="+213">+213 Algeria</option>
                                    <option value="+244">+244 Angola</option> <option value="+54">+54 Argentina</option>
                                    <option value="+374">+374 Armenia</option> <option value="+297">+297 Aruba</option>
                                    <option value="+61">+61 Australia</option> <option value="+43">+43 Austria</option>
                                    <option value="+994">+994 Azerbaijan</option> <option value="+973">+973 Bahrain</option>
                                    <option value="+880">+880 Bangladesh</option> <option value="+375">+375 Belarus</option>
                                    <option value="+32">+32 Belgium</option> <option value="+501">+501 Belize</option>
                                    <option value="+229">+229 Benin</option> <option value="+975">+975 Bhutan</option>
                                    <option value="+591">+591 Bolivia</option> <option value="+267">+267 Botswana</option>
                                    <option value="+55">+55 Brazil</option> <option value="+673">+673 Brunei</option>
                                    <option value="+359">+359 Bulgaria</option> <option value="+226">+226 Burkina Faso</option>
                                    <option value="+855">+855 Cambodia</option> <option value="+237">+237 Cameroon</option>
                                    <option value=" +1"> +1 Canada</option> <option value="+56">+56 Chile</option>{' '}
                                    <option value="+86">+86 China</option>
                                    <option value="+61">+61 Christmas Island</option> <option value="+61">+61 Cocos Islands</option>
                                    <option value="+57">+57 Colombia</option> <option value="+269">+269 Comoros</option>
                                    <option value="+506">+506 Costa Rica</option> <option value="+385">+385 Croatia</option>
                                    <option value="+53">+53 Cuba</option> <option value="+599">+599 Curacao</option>
                                    <option value="+357">+357 Cyprus</option> <option value="+420">+420 Czech Republic</option>
                                    <option value="+45">+45 Denmark</option> <option value="+253">+253 Djibouti</option>
                                    <option value="+593">+593 Ecuador</option> <option value="+20">+20 Egypt</option>
                                    <option value="+503">+503 El Salvador</option> <option value="+240">+240 Equatorial Guinea</option>
                                    <option value="+372">+372 Estonia</option> <option value="+251">+251 Ethiopia</option>
                                    <option value="+298">+298 Faroe Islands</option> <option value="+679">+679 Fiji</option>
                                    <option value="+358">+358 Finland</option> <option value="+33">+33 France</option>
                                    <option value="+689">+689 French Polynesia</option> <option value="+220">+220 Gambia</option>
                                    <option value="+995">+995 Georgia</option> <option value="+49">+49 Germany</option>
                                    <option value="+233">+233 Ghana</option> <option value="+30">+30 Greece</option>
                                    <option value="+299">+299 Greenland</option> <option value="+502">+502 Guatemala</option>
                                    <option value="+224">+224 Guinea</option> <option value="+592">+592 Guyana</option>
                                    <option value="+509">+509 Haiti</option> <option value="+504">+504 Honduras</option>
                                    <option value="+36">+36 Hungary</option> <option value="+354">+354 Iceland</option>
                                    <option value="+91">+91 India</option> <option value="+62">+62 Indonesia</option>
                                    <option value="+98">+98 Iran</option> <option value="+964">+964 Iraq</option>
                                    <option value="+353">+353 Ireland</option> <option value="+972">+972 Israel</option>
                                    <option value="+39">+39 Italy</option> <option value="+962">+962 Jordan</option>
                                    <option value="+7">+7 Kazakhstan</option> <option value="+254">+254 Kenya</option>
                                    <option value="+383">+383 Kosovo</option> <option value="+965">+965 Kuwait</option>
                                    <option value="+996">+996 Kyrgyzstan</option> <option value="+856">+856 Laos</option>
                                    <option value="+371">+371 Latvia</option> <option value="+961">+961 Lebanon</option>
                                    <option value="+218">+218 Libya</option> <option value="+423">+423 Liechtenstein</option>
                                    <option value="+370">+370 Lithuania</option> <option value="+352">+352 Luxembourg</option>
                                    <option value="+853">+853 Macau</option> <option value="+389">+389 Macedonia</option>
                                    <option value="+261">+261 Madagascar</option> <option value="+265">+265 Malawi</option>
                                    <option value="+60">+60 Malaysia</option> <option value="+960">+960 Maldives</option>
                                    <option value="+223">+223 Mali</option> <option value="+356">+356 Malta</option>
                                    <option value="+692">+692 Marshall Islands</option> <option value="+222">+222 Mauritania</option>
                                    <option value="+230">+230 Mauritius</option> <option value="+52">+52 Mexico</option>
                                    <option value="+373">+373 Moldova</option> <option value="+976">+976 Mongolia</option>
                                    <option value="+382">+382 Montenegro</option> <option value="+212">+212 Morocco</option>
                                    <option value="+258">+258 Mozambique</option> <option value="+95">+95 Myanmar</option>
                                    <option value="+264">+264 Namibia</option> <option value="+977">+977 Nepal</option>
                                    <option value="+31">+31 Netherlands</option> <option value="+687">+687 New Caledonia</option>
                                    <option value="+64">+64 New Zealand</option> <option value="+505">+505 Nicaragua</option>
                                    <option value="+227">+227 Niger</option> <option value="+234">+234 Nigeria</option>
                                    <option value="+47">+47 Norway</option> <option value="+968">+968 Oman</option>
                                    <option value="+92">+92 Pakistan</option> <option value="+680">+680 Palau</option>
                                    <option value="+970">+970 Palestine</option> <option value="+507">+507 Panama</option>
                                    <option value="+675">+675 Papua New Guinea</option> <option value="+595">+595 Paraguay</option>
                                    <option value="+51">+51 Peru</option> <option value="+63">+63 Philippines</option>
                                    <option value="+48">+48 Poland</option> <option value="+351">+351 Portugal</option>
                                    <option value="+974">+974 Qatar</option> <option value="+262">+262 Reunion</option>
                                    <option value="+40">+40 Romania</option> <option value="+7">+7 Russia</option>
                                    <option value="+250">+250 Rwanda</option> <option value="+685">+685 Samoa</option>
                                    <option value="+966">+966 Saudi Arabia</option> <option value="+221">+221 Senegal</option>
                                    <option value="+381">+381 Serbia</option> <option value="+248">+248 Seychelles</option>
                                    <option value="+232">+232 Sierra Leone</option> <option value="+421">+421 Slovakia</option>
                                    <option value="+386">+386 Slovenia</option> <option value="+677">+677 Solomon Islands</option>
                                    <option value="+252">+252 Somalia</option> <option value="+27">+27 South Africa</option>
                                    <option value="+211">+211 South Sudan</option> <option value="+34">+34 Spain</option>
                                    <option value="+94">+94 Sri Lanka</option> <option value="+249">+249 Sudan</option>
                                    <option value="+597">+597 Suriname</option> <option value="+46">+46 Sweden</option>
                                    <option value="+41">+41 Switzerland</option> <option value="+963">+963 Syria</option>
                                    <option value="+992">+992 Tajikistan</option> <option value="+255">+255 Tanzania</option>
                                    <option value="+66">+66 Thailand</option> <option value="+228">+228 Togo</option>
                                    <option value="+676">+676 Tonga</option> <option value="+216">+216 Tunisia</option>
                                    <option value="+90">+90 Turkey</option> <option value="+993">+993 Turkmenistan</option>
                                    <option value="+256">+256 Uganda</option> <option value="+380">+380 Ukraine</option>
                                    <option value="+971">+971 United Arab Emirates</option> <option value="+44">+44 United Kingdom</option>
                                    <option value="+1">+1 United States</option> <option value="+598">+598 Uruguay</option>
                                    <option value="+998">+998 Uzbekistan</option> <option value="+678">+678 Vanuatu</option>
                                    <option value="+58">+58 Venezuela</option> <option value="+84">+84 Vietnam</option>
                                    <option value="+967">+967 Yemen</option> <option value="+260">+260 Zambia</option>
                                    <option value="+263">+263 Zimbabwe</option>
                                </select>
                            </div>
                            <div className="certification">
                                <div className="left">
                                    <input name="phonenumber" type="text" placeholder="(예시) 01034567890" onChange={phonecheck} />
                                </div>
                                <div className="right">인증번호 받기</div>
                            </div>
                            {phoneerror || phone.length == 0 ? '' : <div className="certificationError">올바른 전화번호를 입력해주세요.</div>}

                            <div className="certification_number">
                                <input type="text" placeholder="인증번호를 입력해 주세요." id="certification_number" />
                            </div>
                        </div>
                        <div className="password">
                            <h1>비밀번호</h1>
                            <div className="inputobx">
                                <input type="password" placeholder="비밀번호를 입력해 주세요." id="password" onChange={passwordcheck} />
                            </div>

                            {passworderror || password.length == 0 ? '' : <div className="certificationError">올바른 비밀번호를 입력해주세요.</div>}

                            <h2>
                                영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여 8자 이상 입력해 주세요. <br />
                            </h2>
                        </div>
                        <div className="password_commit ">
                            <h1>비밀번호 확인</h1>
                            <div className="inputobx">
                                <input
                                    type="password"
                                    placeholder="비밀번호를 다시 한번 입력해 주세요."
                                    id="password_commit"
                                    onChange={passwordcommitcheck}
                                />
                            </div>
                            {passwordcommiterror || passwordConfirm.length == 0 ? (
                                passwordConfirm.length == 0 ? (
                                    ''
                                ) : (
                                    <div className="certificationOk">사용할수 있는 비밀번호 입니다.</div>
                                )
                            ) : (
                                <div className="certificationError">비밀번호가 서로 일치하지 않습니다.</div>
                            )}
                        </div>

                        <div className="agreement ">
                            <div>
                                <div className="checkbox">
                                    <input type="checkbox" name="allAgreement1" alt="0" onChange={choiceChange} checked={choice[0]} />
                                    전체 동의
                                </div>
                            </div>
                            <hr />
                            <div>
                                <div className="checkbox">
                                    <input type="checkbox" name="allAgreement2" alt="1" onChange={choiceChange} checked={choice[1]} />
                                    개인정보 수집 및 이용 동의
                                    <a
                                        href="https://help.wanted.co.kr/hc/ko/articles/360040127872"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="Agreement_link__qZ81b"
                                    >
                                        자세히
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="checkbox">
                                    <input type="checkbox" name="allAgreement3" alt="2" onChange={choiceChange} checked={choice[2]} />
                                    이벤트 소식 등 알림 정보 받기
                                    <a
                                        href="https://help.wanted.co.kr/hc/ko/articles/360040540111"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="Agreement_link__qZ81b"
                                    >
                                        자세히
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="sign">
                            {nameerror && phoneerror && passworderror && passwordcommiterror && choice[0] ? (
                                <button id="on">회원가입</button>
                            ) : (
                                <button id="off">회원가입</button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;
