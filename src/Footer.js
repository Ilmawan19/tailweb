import React from 'react';

export default function Footer(props) {
  const { companyName, currentYear } = props;

  return (
    <div className="bg-gray-800 text-blue-300 py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} {companyName}. All rights reserved.</p>
      </div>
    </div>
  );
}
