import React from 'react';

const Navbar = () => (
  <nav className='navbar is-info'>
    <div className='container'>
      <div className='navbar-brand'>
        <h1 className='navbar-item title is-5'>カロリー記録くん</h1>
      </div>
    </div>
  </nav>
);

const Layout: React.FC = ({ children }) => (
  <>
    <Navbar />
    <div className='section has-background-light'>
      <div className='container'>{children}</div>
    </div>
  </>
);

export default Layout;
