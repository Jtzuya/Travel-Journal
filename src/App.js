import React from 'react';
import { Navbar, Travel, Footer } from './components/index'
import travelDatas from './data/travelDatas'

const App = () => {
    return (
        <div className="max-w-[550px] mx-auto p-5">
            <div className="shadow-lg">
                <Navbar />
                <div className="flex flex-col gap-[36px] overflow-x-hidden pt-11 pb-7 px-10">
                    {travelDatas.map(data => (<Travel key={data.id} data={data}/>))}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export { App }