import React from 'react';
import FooterPublic from './FooterPublic';
import HeaderPublic from './HeaderPublic';

const PublicLayout = ({
   children
 }) => (
  <div className="flex flex-col justify-between h-screen bg-white-100">
    <div>
      <HeaderPublic />
      {children}
    </div>
    <FooterPublic />
  </div>
);

export default PublicLayout;
