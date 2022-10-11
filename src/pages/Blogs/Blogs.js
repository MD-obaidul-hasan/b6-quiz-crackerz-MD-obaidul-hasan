import React from 'react';

const Blogs = () => {
    return (
        <div className='min-h-screen w-full lg:w-8/12 mx-auto mt-10'>

            <div tabIndex={0} className="collapse collapse-arrow border border-primary bg-base-100 rounded-box my-3">
                <div className="collapse-title text-xl font-medium">
                    What is the purpose of react router ?
                </div>
                <div className="collapse-content">
                    <p>React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-primary bg-base-100 rounded-box my-3">
                <div className="collapse-title text-xl font-medium">
                    How does context API works?
                </div>
                <div className="collapse-content">
                    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-primary bg-base-100 rounded-box my-3">
                <div className="collapse-title text-xl font-medium">
                    What is useRef ?
                </div>
                <div className="collapse-content">
                    <p>useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React, React will set its .current property to the corresponding DOM node whenever that node changes.</p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;