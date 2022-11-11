import Style from './work.module.css';
import Image from 'next/image';
import content from './work.json';

const CardDesign = (data)=>{
    return (
        <>
            <div className={`col-md-4`}>
                <div className={`${Style.workCard}`}>
                    <div className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <Image src={data.cardContent.path} alt="pc" width="100" height="110" className='' />
                            <h3 className={`mb-3 mt-4 `}>{data.cardContent.title}</h3>
                                <p>{data.cardContent.description}</p>
                                <div className={`${Style.roundBox} d-flex align-items-center justify-content-center`}>
                            <i className={`${data.cardContent.icon} text-white ${Style.arrowIcon}`}></i>
                        </div>
                    </div>
                </div>
            </div>
       </>
    );
}
const Work = ()=>{
    const design = (
        <>
            <div className={`container-fluid ${Style.workCont} mb-5`}>
                <h1 className={`${Style.successHead} text-center`}>
                    Nodewap  Preparing the best it soluation to growing <font style={{color:'blue'}}> your business with affordable price.</font>
                </h1>
                <div className={`row`}>
                    {
                        content.map((item)=>{
                            return <CardDesign cardContent={item}  key={item.id}/>;
                        })
                    }
                </div>
            </div>
        </>
    );
    return design;
}
export default Work;