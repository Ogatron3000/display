import Banner from "../components/Banner";
import Container from "../components/Container";
import GoogleMapReact from 'google-map-react'
import ContactForm from "../components/ContactForm";
import {Helmet} from "react-helmet";
import Marker from "../components/Marker";

export default function Contact() {
    return (
        <>
            <Helmet>
                <title>Display - Contact</title>
                <meta name="description" content="Display contact." />
                <link rel="canonical" href="http://localhost:3000/contact" />
            </Helmet>

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
                    <div className="col-span-12 md:col-span-7">
                        <ContactForm />
                    </div>

                    <div className="flex flex-wrap justify-between gap-12 text-sm row-start-1 col-span-12 md:col-start-9 md:col-span-4 self-start">
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
                            <table className="w-full">
                                <tbody>
                                    <tr>
                                        <td>Monday - Thursday</td>
                                        <td>8 am - 5 pm</td>
                                    </tr>
                                    <tr>
                                        <td>Friday</td>
                                        <td>8 am - 6 pm</td>
                                    </tr>
                                    <tr>
                                        <td>Saturday</td>
                                        <td>9 am - 5 pm</td>
                                    </tr>
                                    <tr>
                                        <td>Sunday</td>
                                        <td>Closed</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
