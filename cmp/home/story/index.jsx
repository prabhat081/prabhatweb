import Style from './story.module.css';

const Story = () =>{
    return (
        <>
            <div className="container-fluid p-md-5">
                <div className='row'>
                    <div className="col-md-8">
                        <div className={`rounded ${Style.story}`}>
                            <div className="row h-100 w-100">
                                <div className="col-md-6 d-flex align-items-center justify-content-center">
                                    <div className='text-center'>
                                        <h1 className={`${Style.title}`}>49</h1>
                                        <p className={`${Style.para}`}>YEARS IN THE FIELD</p>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-center justify-content-center">
                                    <div className='p-4'>
                                        <h1 className={`${Style.h1title}`}>Read Further to Our Success Stories</h1>
                                        <div className={`${Style.btnlet}` }>
                                            <button className={`btn btn-primary py-3 px-5` }>Let's Talk </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className={`rounded ${Style.frm}`}>
                            <div className={`p-5 text-center ${Style.formdiv}`}>
                                <h6 className='mb-4'>Don’t miss our monthly newsletters with the best analyses.</h6>
                                <form>
                                    <input className="from-control p-3 mb-4 w-100 bg-white" type="text" placeholder="Your e-mail" />
                                    <button className='btn btn-primary mb-4 w-100 py-2'>Subscribe</button>
                                </form>
                                <p className='mb-4'>Join 25,000+ Subscribers</p>
                            </div> 
                        </div>           
                    </div> 
                </div>
            </div>
        </>
    );
}
export default Story;