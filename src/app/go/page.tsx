'use client';

import { useState } from 'react';

const ExternalApiButtonPage = () => {
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleApiCall = async () => {
        setLoading(true);
        try {
            const res = await fetch('http://43.200.194.49:8080/login.html', {
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
            setResponse(JSON.stringify(data, null, 2)); // Format JSON response for display
        } catch (error) {
            // setResponse(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Call External API</h1>
            <button onClick={handleApiCall} disabled={loading}>
                {loading ? 'Loading...' : 'Call API'}
            </button>
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
