import React from 'react';
const logo = require('../assets/logo.png');

const Loading = () => {
  return (
    <section className="h-[100vh] bg-primary" >
        <div className="flex flex-col justify-center items-center h-[80vh] w-[100%]">
            <div className="my-4 scale-[0.7] md:scale-[0.8] lg:scale-[1]">
                <img src={logo} alt="logo" />
            </div>
            <div className="flex text-center my-2 [&>*]:mx-2">
                <p className="rounded-full bg-slate-900 p-2 md:p-3 animate-bounce "> </p>
                <p className="rounded-full bg-slate-900 p-2 md:p-3 animate-bounce "> </p>
                <p className="rounded-full bg-slate-900 p-2 md:p-3 animate-bounce"> </p>
                <p className="rounded-full bg-slate-900 p-2 md:p-3 animate-bounce "> </p>
            </div>
        </div>
    </section>
  )
}

export default Loading