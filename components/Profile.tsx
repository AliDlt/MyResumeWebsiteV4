import React from 'react';

const Profile: React.FC = () => {
    return (
        <section className="bg-white p-6 text-center">
            <div className="container mx-auto">
                <img src="/path/to/profile-pic.jpg" alt="Profile" className="w-40 h-40 rounded-full mx-auto" />
                <h2 className="text-2xl font-bold mt-4">درباره من</h2>
                <p className="mt-2">توضیحاتی در مورد من...</p>
            </div>
        </section>
    );
};

export default Profile;
