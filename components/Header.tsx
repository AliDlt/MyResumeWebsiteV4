import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-dark p-6 text-center text-white">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold">علی دولت آبادی</h1>
                <p className="text-xl mt-2">Full-stack Developer</p>
                <div className="mt-4">
                    <button className="btn-primary">Portfolio</button>
                    <button className="btn-secondary ml-4">Contact</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
