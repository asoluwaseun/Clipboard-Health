import React from "react";

import Header from '../components/header';
import Footer from '../components/footer';
import FilterModal from "../components/filter_modal";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header/>
            <div className="flex-grow container p-3">
                {children}
            </div>
            <FilterModal/>
            <Footer/>
        </div>
    );
}