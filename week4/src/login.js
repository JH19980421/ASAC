import { useState } from "react";


function Login() {
    const [loginId, setLoginId] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [savedLoginId, setSavedLoginId] = useState("");
    const [savedLoginPassword, setSavedLoginPassword] = useState("");

    let sessionStorage = window.sessionStorage;

    return (
        <div>
            <div>
                id: <input type={text} onChange={(e)=> {setLoginId(e.target.value)}} />
            </div>
            <div>
                pw: <input type={text} onChange={(e)=> {setLoginPassword(e.target.value)}} />
            </div>

            <button
                onClick={() => {
                    sessionStorage.setItem("loginId", loginId);
                    sessionStorage.setItem("loginPassword", loginPassword);
                }}
            >
                login
            </button>
            <button>logout</button>

            <div>스토리지에 저장된 아이디: {savedLoginId}, 비밀번호: {savedLoginPassword}</div>
        </div>
    )
}

export default Login;