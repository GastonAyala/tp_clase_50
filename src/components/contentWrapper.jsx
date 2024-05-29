import React from 'react'
import TopBar from './Topbar.jsx'
import Footer from './Footer.jsx';
import ContentRowTop from './ContentRowTop.jsx';

function ContentWrapper() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        < TopBar />
        < ContentRowTop />
      </div>
      <Footer />
    </div>
  )
}

export default ContentWrapper