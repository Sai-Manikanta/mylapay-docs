import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useLoginStatus } from '../../hooks/useLoginStatus'
import 'react-toastify/dist/ReactToastify.css';

const ProfileChangesPage = () => {
    const [profileData, setProfileData] = useState(null);
    const router = useRouter();
    const { userId } = router.query; 
    const { token } = useLoginStatus();

    useEffect(() => {
        const fetchProfileChanges = async () => {
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/profile-changes/${userId}`,
                    {
                        headers: {
                            Authorization: token
                        }
                    }
                );

                if (response.status !== 200) {
                    throw new Error('Failed to fetch profile changes');
                }

                const data = response.data;
                setProfileData(data);
            } catch (error) {
                console.error('Error fetching profile changes:', error.message);
            }
        };

        fetchProfileChanges();
    }, [token, userId]); 

    const handleApproveAndUpdate = async () => {
        try {
            const response = await axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/approve-profile-changes/${userId}`);

            if (response.status !== 200) {
                throw new Error('Failed to fetch profile changes');
            }

            toast.success("Approved & Updated");
        } catch (error) {
            console.error('Error fetching profile changes:', error.message);
            toast.error("Something went wrong")
        }
    }

    if(profileData && profileData?.pendingChanges && !Object?.keys(profileData?.pendingChanges)?.length){
        return <p className='p-10'>You may have already updated</p>
    }

    return (
        <div className='p-10'>
            <h1 className="text-3xl font-bold mb-6">Profile Changes</h1>
            {profileData ? (
                <table className="divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Field
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Old Value
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                New Value
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {Object.keys(profileData.pendingChanges).map(key => (
                            <tr key={key}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {key}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {profileData.userPreviousData[key]}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {profileData.pendingChanges[key]}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="mt-4 text-lg text-gray-500">Loading...</p>
            )}
            <div className="mt-10">
                <button type="submit" onClick={handleApproveAndUpdate} className="btn bg-bluedark hover:bg-bluelight py-2 px-12 rounded capitalize text-white disabled:opacity-50">
                    Approve & Update
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ProfileChangesPage;
