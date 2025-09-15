
function Dashboard() {
    return (
        <>
            <h1 className='text-3xl font-bold text-center'>Dashboard</h1>
            <p className='text-center'>Welcome to your dashboard!</p>
            <div className='flex justify-center items-center h-screen'>
                <div className='bg-white shadow-lg rounded-lg p-6'>
                    <h2 className='text-xl font-semibold mb-4'>User Information</h2>
                    <p className='text-gray-700'>Here you can manage your account settings and preferences.</p>
                </div>
            </div>
        </>
    )
}

export default Dashboard