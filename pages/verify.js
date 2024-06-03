import React from 'react';
import axios from 'axios';

const VerifyPage = ({ message, status, userName }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className={`bg-white p-8 rounded shadow-md text-center ${status === "success" ? 'text-[#22C55E]' : 'text-[#EF4444]'}`}>
                <h1 className="text-2xl font-bold mb-4">Verification Status</h1>
                <p className={`text-lg`}>
                    {userName} - {message}
                </p>
            </div>
        </div>
    );
};

export async function getServerSideProps(context) {
    const { id } = context.query;
    let message = 'User verification failed';
    let status = 'failed';
    let userName = ''

    try {
        const response = await axios.patch(`http://localhost:9000/api/v1/auth/user/verify/${id}`);
        message = response?.data?.message;
        status = response?.data?.status;
        userName = response?.data?.userName;
    } catch (error) {
        if (error.response) {
            message = error?.response?.data?.message;
        } else {
            message = 'An unexpected error occurred';
        }
    }

    return {
        props: {
            id,
            message,
            status,
            userName
        },
    };
}

export default VerifyPage;
