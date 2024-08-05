import React from 'react'

const Footer = () => {
    return (
        <>
            {/* copy right start */}
            <section className='bg-[#212122] py-[20px]'>
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <p className='text-white text-[14px] font-poppins py-[20px]'>Copyright 2023 Pro Logo Biz | All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* copy right end */}

            {/* desclaimer start */}
            <section className='bg-[#000] py-[20px]'>
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <p className='text-white text-[13px] font-poppins'><strong>Disclaimer:</strong> The trademarks of Pro Logo Biz, including its logo, name, and graphics, are the sole property of Pro Logo Biz. Any other company names, brand names, trademarks, and logos mentioned on this website belong to their respective owners. Their inclusion does not indicate endorsement, sponsorship, or recommendation by Pro Logo Biz, nor does it imply endorsement, sponsorship, or recommendation of Pro Logo Biz by the respective trademark owner.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* desclaimer end */}
        </>
    )
}

export default Footer
