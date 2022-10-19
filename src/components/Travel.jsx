import React from 'react'
import RoomIcon from '@mui/icons-material/Room';

const Travel = (props) => {
    const {img, details, location, dates } = props.data

    return (
        <section className="__travelCase">
            <div className="__wrapper flex gap-x-5 items-center justify-start">
                <div className="__imageWrapper">
                    <div className="image relative h-auto min-h-[168px] w-[125px] rounded-md bg-card-light">
                        { img && <img src={img} loading="lazy" alt="" className="h-full absolute max-h-[168px] top-0 left-0 w-full object-cover rounded-md"/>}
                    </div>
                </div>

                <div className="__contentWrapper">
                    <div className="__location flex justify-start items-center gap-[12px]">
                        <div className="country flex items-center justify-center gap-[3px]">
                            <RoomIcon sx={{ fontSize: 12, color: '#0db14b', marginBottom: '2px' }}/>
                            <p className="country text-[10.24px] tracking-[1.7px] uppercase font-body font-light">{ location.country }</p>
                        </div>
                        {location.geoLocationUrl && <a href={location.geoLocationUrl} target="_blank" rel="noreferrer" className="map text-[10.24px] underline text-[rgb(0,0,0/15%)] text-[#918E9B] pb-[2px] font-body font-light">View on Google Maps</a>}
                    </div>

                    {location && <h2 className="__place font-logo capitalize tracking-wide text-[25px] pt-[4px] pb-[10px] leading-[100%]">{location.place}</h2>}

                    <div className="__date flex items-center">
                        {dates.start && <div className="start text-[10.24px] font-semibold font-body text-[#2B283A]">{dates.start}<span className="px-[5px]">~</span></div>}
                        {dates.end && <div className="end text-[10.24px] font-semibold font-body text-[#2B283A]">{dates.end}</div>}
                    </div>
                    
                    {details && <p className="__details text-[10.24px] text-[#2B283A] leading-[150%] pt-[7px]">{details}</p>}
                </div>
            </div>
        </section>
    )
}

export default Travel