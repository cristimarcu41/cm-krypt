import React from 'react';

const Loader = () => {
    return (
        <div className="flex justify-center items-center py-3">
            <div className="animate-spin rounded-full w-24 h-24 border-b-2 border-red-700" />
        </div>
    );
};

export default Loader;
