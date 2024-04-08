import React from 'react'
import './breadcrumb.scss'

const Breadcrumb = () => {
  return (
    <>
    <section className="breadcrumbStylr m-0">
        <div className="container innerfluid h-100">
            <div className="row h-100 align-itemscenter flex-column justify-content-center">
                <div className="col-12"><div className="pageheading"><span>About Us</span></div></div>
                <div className="col-auto mx-auto">
                    <nav aria-label="breadcrumb" className="breadcrumbs">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Library</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Breadcrumb