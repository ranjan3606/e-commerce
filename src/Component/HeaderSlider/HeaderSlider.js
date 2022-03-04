import React from 'react'
import './HeaderSlider.css'

const MyCollection = [
    {
        imgPath:
            "https://images.bewakoof.com/uploads/grid/app/style-promotion1x1-m-superhero-3-1646073434.gif",
    },
    {
        imgPath:
            "https://images.bewakoof.com/uploads/grid/app/clearance-sale-1x1-M-1-1644848474-1645982037.jpg",
    },
    {
        imgPath:
            "https://images.bewakoof.com/uploads/grid/app/batman-collection-1x1-revised-2-1646232971.jpg",
    },
    {
        imgPath:
            "https://images.bewakoof.com/uploads/grid/app/chilled-out-green-march-cotm-launch-men-1646067807.jpg",
    }
];

function HeaderSlider() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    {
                        MyCollection.map((data) => {
                            return (
                                <div className='col-md-3'>
                                    <div className='card slider_card'>
                                        <img src={data.imgPath} alt="" />
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </>
    )
}

export default HeaderSlider