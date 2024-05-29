import React from 'react'
import TopBar from './topbar'
import Footer from './footer.jsx';
import ContentRowTop from './contentRowTop.jsx';

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