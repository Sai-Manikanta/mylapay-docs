import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditSandboxPageDataForm from '../../components/dashboard/sandbox/EditSandboxPageDataForm'

function SandboxCMS() {
    const [selectedPath, setSelectedPath] = useState("");
    const [sandboxPageData, setSandboxPageData] = useState({});

    const buttonData = [
        { id: 1, version: '3DSS V.2.2', path: '3DSS-v2.2' },
        { id: 2, version: '3DSS V.2.3', path: '3DSS-v2.3' },
        { id: 3, version: 'Payments', path: 'Payments' },
        { id: 4, version: 'Reversal', path: 'Reversal' }
    ];

    useEffect(() => {
        if (selectedPath) {
            const fetchData = async () => {
                try {
                    const response = await axios.get(`http://localhost:9000/v1/sandbox-page-data/${selectedPath}`);
                    setSandboxPageData(response.data);
                } catch (error) {
                    setSandboxPageData({});
                    console.error('Error fetching sandbox page data:', error);
                }
            };

            fetchData();
        }
    }, [selectedPath])

    return (
        <div className="p-8">
            <h2 className="text-xl font-semibold text-bluedark sm:text-2xl md:text-3xl mb-2">
                Sandbox CMS
            </h2>
            <hr className="bg-bggray my-5" />
            <div className="flex gap-3">
                {/* Map over buttonData array and render buttons */}
                {buttonData.map((button) => (
                    <button
                        key={button.id}
                        className="bg-bluedark hover:bg-blue-700 text-white py-2 px-4 rounded"
                        onClick={() => setSelectedPath(button.path)}
                    >
                        {button.version}
                    </button>
                ))}
            </div>



            {Object.keys(sandboxPageData).length > 0 && (
                <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-2">Sandbox Page Data Edit Form:</h3>
                    <EditSandboxPageDataForm sandboxData={sandboxPageData.data} />
                </div>
            )}


            {/* {Object.keys(sandboxPageData).length > 0 && (
                <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-2">Sandbox Page Data:</h3>
                    <pre className="whitespace-pre-wrap">{JSON.stringify(sandboxPageData, null, 2)}</pre>
                </div>
            )} */}

        </div>
    );
}

export default SandboxCMS;
