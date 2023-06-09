import React, { useContext, useEffect, useState } from 'react'
import exr from '../../images/exr.png'
import plan from '../../images/plan.png'
import exam from '../../images/exam.png'
import store from '../../images/store.png'
import '../../Styles/style.css'
import { HashLink } from 'react-router-hash-link'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../../contexts/AuthContext'


const Cards = () => {
  useEffect(() => {
    AOS.init();
  }, [])


  const {auth, setAuth} = useContext(AuthContext);
  return (
    <>

  {/* Cards shortcuts link */}
  {/* <div className="container" id="cards">
    <div className="card-group text-center">
      <div className="card rounded-5" id='card-ele' data-aos="fade-down">
        <img src={plan} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title fw-bold fs-4">نموذج خطة الدرس</h5>
        { auth ? <HashLink smooth to='/plan/1#'>
            <button type="button" className="btn btn-dark">
              انتقل
            </button>
          </HashLink> :  <HashLink smooth to='/login#'>
            <button type="button" className="btn btn-dark">
              انتقل
            </button>
          </HashLink>}
        </div>
      </div>
      <div className="card rounded-5" id='card-ele' data-aos="fade-down">
        <img src={exr} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title fw-bold fs-4">الأنشطة اللامنهجية</h5>
          { auth ? <HashLink smooth to='/activities#'>
            <button type="button" className="btn btn-dark">
              انتقل
            </button>
          </HashLink> :  <HashLink smooth to='/login#'>
            <button type="button" className="btn btn-dark">
              انتقل
            </button>
          </HashLink>}
        </div>
      </div>
      <div className="card rounded-5" id='card-ele'  data-aos="fade-down">
        <img src={exam} className="card-img-top" alt="Exam IMG" />
        <div className="card-body">
          <h5 className="card-title fw-bold fs-4">إنشاء امتحان</h5>
          { auth ? <HashLink smooth to='/exam#'>
            <button type="button" className="btn btn-dark">
              انتقل
            </button>
          </HashLink> :  <HashLink smooth to='/login#'>
            <button type="button" className="btn btn-dark">
              انتقل
            </button>
          </HashLink>}
        </div>
      </div>
      <div className="card rounded-5" id='card-ele' data-aos="fade-down">
        <img src={store} className="card-img-top" alt="Exam IMG" />
        <div className="card-body">
          <h5 className="card-title fw-bold fs-4">متجر المعلم</h5>
          { auth ? <HashLink smooth to='/shop#'>
            <button type="button" className="btn btn-dark">
              انتقل
            </button>
          </HashLink> :  <HashLink smooth to='/login#'>
            <button type="button" className="btn btn-dark">
              انتقل
            </button>
          </HashLink>}
        </div>
      </div>
    </div>
  </div> */}

<div className="container-fulid px-4 py-5" id="cards">
  <h2 className="pb-2 border-2 border-bottom border-white text-white">روابط سريعة</h2>
  <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
    <div className="feature col">
      <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
      <img src={plan} className="bg-transparent" width="60em" height="50em"/>
      </div>
      <h3 className="fs-2 text-black">خطة الدرس</h3>
      <p>
     اكتب خطة الدرس الخاصة بك بسهولة وبطريقة سريعة و منظمة لتسهيل العملية التعليمية.
      </p>
      { auth ? <HashLink smooth to='/plan/1#' className='icon-link text-white'>انتقل</HashLink>
        
        :  <HashLink smooth to='/login#' className='icon-link text-white'>انتقل</HashLink>}
    </div>
    <div className="feature col">
      <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
      <img src={store} className="bg-transparent" width="60em" height="50em"/>
      </div>
      <h3 className="fs-2 text-black">متجر المعلم</h3>
      <p>
   كل ما يحتاجه المعلم وأكثر. متجر مخصص لكل مستلزمات المعلمين والمعلمات.
      </p>
      { auth ? <HashLink smooth to='/shop#' className='icon-link text-white'>انتقل</HashLink>
        
      :  <HashLink smooth to='/login#' className='icon-link text-white'>انتقل</HashLink>}
    </div>
    <div className="feature col">
      <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
        <img src={exam} className="bg-transparent" width="60em" height="50em"/>
      </div>
      <h3 className="fs-2 text-black">إنشاء امتحان</h3>
      <p>
        يمكنك إنشاء امتحاناتك بسهولة، وفّر وقتك وجهدك!
      </p>
         { auth ? <HashLink smooth to='/exam#' className='icon-link text-white'>انتقل</HashLink>
        
      :  <HashLink smooth to='/login#' className='icon-link text-white'>انتقل</HashLink>}
    </div>
  </div>
</div>



</>


 
  )
}

export default Cards