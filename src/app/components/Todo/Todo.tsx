import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

const Todo = () => {
  return (
    <section className="bg-slate-200 flex justify-center h-screen">
      <div className="bg-white w-[70%] rounded-sm shadow-md h-[80%] mt-[5rem] p-10 relative">
        <Header />
        <Body />
        <Footer />
      </div>
    </section>
  );
};

export default Todo;
