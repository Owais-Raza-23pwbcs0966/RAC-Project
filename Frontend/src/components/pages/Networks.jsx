import React from "react"; // Import React for creating the component
import "../styles/Network.css"; // Import CSS for styling the component

export const Networks = () => {
    return (
        <div className="network"> {/* Container for the entire network section */}
            <div className="network-img"></div> {/* Placeholder for a network-related image */}

            {/* Section for "The City School" with title and description */}
            <div className="text-1">
                <h1>The City School</h1>
                <p>A prestigious institution known for academic excellence and holistic development of students.</p>
            </div>

            {/* Section for "Peshawar Model Boys 2" with title and description */}
            <div className="text-2">
                <h1>Peshawar Model Boys 2</h1>
                <p>A leading public school providing quality education and shaping future leaders through academic and extracurricular excellence.</p>
            </div>

            {/* Section for "UET Peshawar" with title and description */}
            <div className="text-3">
                <h1>UET Peshawar</h1>
                <p>A leading public school providing quality education and shaping future leaders through academic and extracurricular excellence.</p>
            </div>

            {/* Section for "Hadaf College" with title and description */}
            <div className="text-4">
                <h1>Hadaf College</h1>
                <p>A leading public school providing quality education and shaping future leaders through academic and extracurricular excellence.</p>
            </div>
        </div>
    );
};
