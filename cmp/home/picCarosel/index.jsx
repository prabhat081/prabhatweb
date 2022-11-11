import Image from 'next/image';
const picCarosel = ()=>{
    const design =(
      <>
         <div className='container-fluid px-md-5 mb-5'>
            <div className="row">
                    <div className="col-md-4 pb-4">
                      <div className="card border-0 ">
                        <Image src="/pic1.webp" alt="pic1" width={360} height={270} className='rounded' />
                        <div className="py-2">
                          <h5>Precise projection of risks and potentials via advanced tools</h5>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 pb-4">
                      <div className="card border-0 ">
                      <Image src="/pic2.webp" alt="pic2" width={360} height={270} className='rounded' />
                      <div className="py-2">
                      <h5>Precise projection of risks and potentials via advanced tools</h5>
                      </div>
                      </div>
                    </div>

                    <div className="col-md-4 pb-4">
                      <div className="card border-0 ">
                          <Image src="/pic3.webp" alt="pic3" width={360} height={270} className='rounded' />
                        <div className="py-2">
                          <h5>Precise projection of risks and potentials via advanced tools</h5>
                        </div>
                      </div>
                  </div>
              </div>
                <h5 className='text-center my-1'>Never underestimate your potentials. <font style={{color:'blue',cursor:'pointer'}}> It all started here.</font></h5>
         </div>
      </>
    );
    return design;
}

export default picCarosel;