import { use } from 'react';

const Models = ({modelPromise}) => {
const models = use (modelPromise)
console.log(models);

    return (
        <div>
            <div className='text-center mb-20'>
            <h2 className='text-5xl font-bold mb-2'>Premium Digital Tools</h2>
            <p className='opacity-60'>Choose from our curated collection of premium digital products designed <br/> to boost your productivity and creativity.</p>
            </div>
        </div>
    );
};

export default Models;

