import Style from './rating.module.css';
import Image from 'next/image';

const Rating = () =>{
    return (
        <>
            <h6 className={` text-center mb-5 animate__animated animate__fadeIn animate__slower`} style={{fontSize:'18px', marginTop:'80px'}}>Challenges are just opportunities in disguise.
                <font className={`${Style.underlineText}`}><a href='/'>Take the challenge!</a></font>
            </h6>
            <div className={`container-fluid md-lg-5 p-0 m-0 ${Style.maniContainer}`}>
                <div className={`${Style.ratingCont}`}>
                    <div className="container-fluid p-0 m-0">
                        <div className={`row p-0 m-0`}>
                            <div className={`col-md-6 ${Style.manRow} d-flex align-items-center justify-content-center`}>
                                <div className=' d-flex '>
                                    <Image src="/man.webp" width={500} height={500} className=" mx-4" />
                                    </div>
                            </div>
                            <div className={`col-md-6  ${Style.manRow} d-flex flex-column aligin-items-center justify-content-center`}>
                                <div className={`d-flex flex-column align-items-center justify-content-center ${Style.rate}`}>
                                    <h1 className={`${Style.mainRate}`}>4.9/5.0</h1>
                                    <div className={`${Style.starGroup} mb-4`}>
                                        <i className={`fa fa-star text-warning ${Style.star} m-2`}></i>
                                        <i className={`fa fa-star text-warning ${Style.star} m-2`}></i>
                                        <i className={`fa fa-star text-warning ${Style.star} m-2`}></i>
                                        <i className={`fa fa-star text-warning ${Style.star} m-2`}></i>
                                        <i className={`fa fa-star text-warning ${Style.star} m-2`}></i>
                                    </div>
                                    <h6 className={`${Style.clint} mb-5`}>by 700+ customers for 3200+ clients</h6>
                                    <div className={`${Style.contact}`}>
                                        <div className={`d-flex  align-items-center ${Style.callDiv} mb-5}`}>
                                            <div className={`${Style.callIIcon}`}>
                                                <i className="fa fa-phone p-4" style={{fontSize:'50px', color:'#D2A98E'}}></i>
                                            </div>
                                            <div className={`${Style.callCont}`}>
                                                <p className={`${Style.call}`}>CALL FOR ADVICE NOW!</p>
                                                <h3 className={`${Style.num}`}>{process.env.NEXT_PUBLIC_PHONE_NUMBER}</h3>
                                            </div>
                                        </div>
                                        <div className={` d-flex align-items-center ${Style.callDiv}`}>
                                            <div className="callIcon ">
                                                <i className="fa fa-envelope-o p-4" style={{fontSize:'50px', color:'#D2A98E'}}></i>
                                            </div>
                                            <div className="callCont">
                                                <p className={`${Style.call}`}>SAY HELLO</p>
                                                <h3 className={`${Style.num}`}>{process.env.NEXT_PUBLIC_EMAI}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Rating;
