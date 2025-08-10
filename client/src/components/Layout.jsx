import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children, showSideBar }) => {
    return (
        <div className="min-h-screen">
            <div className="flex">
                {showSideBar && <Sidebar />}
                <div className="flex-1 flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-1 overflow-y-auto min-h-screen">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Layout;
