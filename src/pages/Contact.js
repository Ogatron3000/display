import Banner from "../components/Banner";
import Container from "../components/Container";
import GoogleMapReact from 'google-map-react'
import ContactForm from "../components/ContactForm";

function Marker() {
    return (
        <svg className="w-16 h-16 fill-green-500 absolute -translate-x-1/2 -translate-y-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
    )
}

export default function Contact() {
    return (
        <>
            <Banner content={"Got a Question or Inquiry?"} />
            <div className="mb-12">
                <div style={{ height: '500px', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                        defaultCenter={{lat: 52.12881389822379, lng: -106.66321235244948}}
                        defaultZoom={14}
                    >
                        <Marker
                            lat={52.12881389822379}
                            lng={-106.66321235244948}
                        />
                    </GoogleMapReact>
                </div>
            </div>

            <Container>
                <div className="grid grid-cols-12 gap-x-5 gap-y-12 mb-12 ">
                    <div className="col-span-12 sm:col-span-7">
                        <ContactForm />
                    </div>

                    <div className="flex flex-wrap justify-between gap-12 text-sm row-start-1 col-span-12 sm:col-start-9 sm:col-span-4 self-start">
                        <div className="w-[270px]">
                            <h2 className="font-title text-2xl uppercase mb-6">Contact Info</h2>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, provident?</p>
                            <div className="mb-4">
                                <div>
                                    <span className="font-bold">email: </span>
                                    <a href="mailto: info@display.com" className="text-green-500">info@display.com</a>
                                </div>
                                <div>
                                    <span className="font-bold">phone: </span>
                                    1.306.222.4545
                                </div>
                            </div>
                            <div>
                                <div>222 2nd Ave South</div>
                                <div>Saskabush, SK S7M 1T6</div>
                            </div>
                        </div>

                        <div className="w-[270px]">
                            <h2 className="font-title text-2xl uppercase mb-6">Store Hours</h2>
                            <div className="flex justify-between">
                                <span>Monday - Thursday</span>
                                <span>8 am - 5 pm</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Friday</span>
                                <span>8 am - 6 pm</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Saturday</span>
                                <span>9 am - 5 pm</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Sunday</span>
                                <span>Closed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
