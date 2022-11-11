import Image from 'next/image';

const Logo = ()=>(
    <>
        <div className="d-flex align-items-center">
            <div className="me-1">
                <Image 
                    src="/nodewap-logo.png"
                    width={35}
                    height={35}
                    alt="nodewap-logo"
                />
            </div>
            <h5 style={{
                fontWeight: 'bold',
                fontFamily: 'aquire'
                }}>Nodewap</h5>
        </div>
    </>
);
export default Logo;