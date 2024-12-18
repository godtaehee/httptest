'use client';

import { useState } from 'react';

const ExternalApiButtonPage = () => {
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleApiCall = async () => {
        setLoading(true);
        try {
            const res = await fetch('http://localhost:8080/', {
                method: 'GET', // Change to POST, PUT, etc. if needed
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log(res)

            if (!res.ok) {
                throw new Error(`Error: ${res.status}`);
            }

            const data = await res.json();
            console.log(data,'datadatadata')
            setResponse(JSON.stringify(data, null, 2)); // Format JSON response for display
        } catch (error) {
            console.log(error)
            // setResponse(error.message);
        } finally {
            setLoading(false);
        }
    };const handleApiCall1 = async () => {
        setLoading(true);
        try {
            const res = await fetch('http://127.0.0.1:8080/', {
                method: 'GET', // Change to POST, PUT, etc. if needed
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log(res)

            if (!res.ok) {
                throw new Error(`Error: ${res.status}`);
            }

            const data = await res.json();
            console.log(data,'datadatadata')
            setResponse(JSON.stringify(data, null, 2)); // Format JSON response for display
        } catch (error) {
            console.log(error)
            // setResponse(error.message);
        } finally {
            setLoading(false);
        }
    };const handleApiCall2 = async () => {
        setLoading(true);
        try {
            const res = await fetch('http://43.202.55.110:8080/', {
                method: 'GET', // Change to POST, PUT, etc. if needed
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log(res)

            if (!res.ok) {
                throw new Error(`Error: ${res.status}`);
            }

            const data = await res.json();
            console.log(data,'datadatadata')
            setResponse(JSON.stringify(data, null, 2)); // Format JSON response for display
        } catch (error) {
            console.log(error)
            // setResponse(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h1>Call External API</h1>
            <button onClick={handleApiCall} disabled={loading}>
                {loading ? 'Loading...' : 'localhost'}
            </button><button onClick={handleApiCall1} disabled={loading}>
                {loading ? 'Loading...' : '127'}
            </button><button onClick={handleApiCall2} disabled={loading}>
                {loading ? 'Loading...' : 'publicIp'}
            </button>
            <br/>

            <a
                href="https://kauth.kakao.com/oauth/authorize?response_type=code&state=gd&client_id=027b19394251ac595b2ecc4bf27a3553&redirect_uri=http://localhost:8080/login/oauth2/code/kakao"
                // href="https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=027b19394251ac595b2ecc4bf27a3553&redirect_uri=http://43.200.194.49:8080/login/oauth2/code/kakao"
                // target="_blank"
                rel="noreferrer"
            >
                카카오로 시작하기
            </a>
            <br/>
            {response && (
                <pre
                    style={{
                        marginTop: '20px',
                        textAlign: 'left',
                        backgroundColor: '#f4f4f4',
                        padding: '10px',
                        borderRadius: '5px',
                        display: 'inline-block',
                        maxWidth: '80%',
                    }}
                >
                    {response}
                </pre>
            )}
        </div>
    );
};

export default ExternalApiButtonPage;
