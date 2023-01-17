/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Atropos from 'atropos/react';
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [active, setActive] = useState(0)

  const onChangeCarousel = (index: number) => {
    setActive(index)
  }

  const onViewResume = () => {
    window.open('/resume/test-resume.png')
  }

  useEffect(() => {
    let thumb1 = document.querySelectorAll(`.thumb`)[0]
    let thumb2 = document.querySelectorAll(`.thumb`)[1]
    let thumb3 = document.querySelectorAll(`.thumb`)[2]
    let thumb4 = document.querySelectorAll(`.thumb`)[3]
    let thumb5 = document.querySelectorAll(`.thumb`)[4]

    const menu1 = document.createElement("p");
    const menu2 = document.createElement("p");
    const menu3 = document.createElement("p");
    const menu4 = document.createElement("p");
    const menu5 = document.createElement("p");

    menu1.innerHTML = "HOME";
    menu2.innerHTML = "RESUME";
    menu3.innerHTML = "PORTFOLIO";
    menu4.innerHTML = "REFERENCE";
    menu5.innerHTML = "CONTACT ME";

    thumb1.replaceChild(menu1, thumb1.childNodes[0]);
    thumb2.replaceChild(menu2, thumb2.childNodes[0]);
    thumb3.replaceChild(menu3, thumb3.childNodes[0]);
    thumb4.replaceChild(menu4, thumb4.childNodes[0]);
    thumb5.replaceChild(menu5, thumb5.childNodes[0]);

  }, [])

  return (
    <>
      <Head>
        <title>Pitchayatisa Hirunwong</title>
        <meta name="description" content="My Profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="path/to/atropos.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Train+One&display=swap" rel="stylesheet" />
      </Head>
      <Carousel axis="vertical" onChange={(index) => onChangeCarousel(index)} width={"100%"} showStatus={false} showArrows={false} showThumbs={true} infiniteLoop swipeable emulateTouch >
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#fae0c3] h-screen">
          <div className="flex order-last lg:order-none items-center justify-center w-full">
            <h2 className="font-bold px-5 lg:px-16 xl:px-24 text-gray-900 text-center lg:text-left">
              <span id="header" className="cs-transition text-3xl sm:text-4xl block pb-3">HI THERE!</span>
              <span className="text-4xl md:text-5xl block mb-3">I'M <span className="cs-text-5xl text-orange-500 font-train ">PITCHAYATISA</span></span>
              <span className="justify-center bg-orange-400 w-fit px-2 text-orange-900">FRONTEND DEVELOPER</span>
              <span className="font-medium block my-2">
                My name is Pitchayatisa Hirunwong (Faye). I'm a Front End Developer based in Nonthaburi. I describe myself as a passionate developer who loves coding, web application, website and ui design.              </span>
            </h2>
          </div>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <div className="block m-auto">
            <Atropos className="my-atropos" shadowScale={1} shadowOffset={50}>
              <img src="/images/home.webp" alt="home" data-atropos-offset="-2" />
            </Atropos>
          </div>
          <img src="/images/home.webp" alt="home" className="hidden" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#fae0c3] h-screen">
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img src="/images/work.webp" alt="resume" className="hidden" />
          <div className="block m-auto -scale-x-100">
            <Atropos className="my-atropos" shadowScale={1} shadowOffset={50}>
              <img src="/images/work.webp" alt="resume" data-atropos-offset="-2" className="" />
            </Atropos>
          </div>
          <div className="flex order-last lg:order-none items-center justify-center w-full">
            <h2 className="font-bold px-5 lg:px-16 lg:pr-24 text-gray-900 text-left">
              <span className="text-2xl sm:text-4xl block text-zinc-800">About me</span>
              <div className="font-medium block my-0 sm:my-2 rounded-2xl">
                <div className="grid grid-cols-6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 gap-4">
                  <div className="col-span-2 md:col-span-1 lg:col-span-2 xl:col-span-1 space-y-1">
                    <p className="text-sm sm:text-base text-orange-500 font-semibold">Age</p>
                    <p className="text-sm sm:text-base text-orange-500 font-semibold">Birthdate</p>
                    <p className="text-sm sm:text-base text-orange-500 font-semibold">Email</p>
                    <p className="text-sm sm:text-base text-orange-500 font-semibold">Education</p>
                  </div>
                  <div className="text-sm sm:text-base col-span-4 md:col-span-3 lg:col-span-3 xl:col-span-3 space-y-1">
                    <p><span className="text-sm sm:text-base text-zinc-800">30</span></p>
                    <p><span className="text-sm sm:text-base text-zinc-800">11-04-1992</span></p>
                    <p><span className="text-sm sm:text-base text-zinc-800">pitchayatisa@gmail.com</span></p>
                    <p><span className="text-sm sm:text-base text-zinc-800">Sripatum University <span className="text-orange-600">(Bachelor of business administration GPA 2.63)</span></span></p>
                  </div>
                </div>
              </div>
              <span className="text-2xl sm:text-4xl mt-0 sm:mt-4 block text-zinc-800">Experience</span>
              <div className="font-medium block mt-4 mb-5 rounded-2xl">
                <div className="grid grid-cols-6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 gap-4">
                  <div className="col-span-2 md:col-span-1 lg:col-span-2 xl:col-span-1 space-y-3 sm:space-y-5">
                    <div className="text-sm sm:text-base">
                      <p className="bg-orange-400 font-semibold rounded-md w-fit px-2 text-orange-900">2021-2022</p>
                      <p>Apr. - Dec.</p>
                    </div>
                    <div className="text-sm sm:text-base">
                      <p className="bg-orange-400 font-semibold rounded-md w-fit px-2 text-orange-900">2019-2020</p>
                      <p>Dec. - Dec.</p>
                    </div>
                    <div className="text-sm sm:text-base">
                      <p className="bg-orange-400 font-semibold rounded-md w-fit px-2 text-orange-900">2018-2019</p>
                      <p>Oct. - Nov.</p>
                    </div>
                  </div>
                  <div className="col-span-4 md:col-span-3 lg:col-span-3 xl:col-span-3 space-y-3 sm:space-y-5">
                    <div className="text-sm sm:text-base">
                      <p><span className="text-zinc-800 font-semibold">Texion Business Solutions</span></p>
                      <p className="text-orange-600">(Frontend Developer)</p>
                    </div>
                    <div className="text-sm sm:text-base">
                      <p><span className="text-zinc-800 font-semibold">Mostori Automation Co.,Ltd</span></p>
                      <p className="text-orange-600">(Programmer)</p>
                    </div>
                    <div className="text-sm sm:text-base">
                      <p><span className="text-zinc-800 font-semibold">Sripatum University</span></p>
                      <p className="text-orange-600">(Web Developer)</p>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="#" target={`_blank`} onClick={onViewResume} className="cursor-pointer transition ease-in duration-150 hover:-translate-y-1 hover:scale-110 inline-block rounded-full bg-orange-500 px-4 py-1 my-0 sm:my-3 text-base font-semibold leading-7 text-white shadow-md hover:bg-orange-600">
                RESUME
              </Link>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#fae0c3] h-screen">
          <div className="flex order-last lg:order-none items-center justify-center w-full">
            <div className="h-32 w-32">
              <img src="/images/songserm.png" alt="songserm" />
            </div>
          </div>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <div className="block m-auto">
            <Atropos className="my-atropos" shadowScale={1} shadowOffset={50}>
              <img src="/images/porfolio.webp" alt="porfolio" data-atropos-offset="-2" />
            </Atropos>
          </div>
          <img src="/images/porfolio.webp" alt="porfolio" className="hidden" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#fae0c3] h-screen">
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img src="/images/testimonial.webp" alt="reference" className="hidden" />
          <div className="block m-auto -scale-x-100">
            <Atropos className="my-atropos" shadowScale={1} shadowOffset={50}>
              <img src="/images/testimonial.webp" alt="reference" data-atropos-offset="-2" className="" />
            </Atropos>
          </div>
          <div className="flex order-last lg:order-none items-center justify-center w-full">
            <h2 className="font-bold px-5 lg:px-16 xl:px-24 text-gray-900 text-center xl:text-left">
              <span id="header" className="cs-transition text-3xl sm:text-4xl block pb-3">HI THERE!</span>
              <span className="text-4xl md:text-5xl block">I'M <span className="cs-text-5xl text-orange-500 font-train ">PITCHAYATISA</span></span>
              <span className=" justify-center bg-orange-400 w-fit px-2 my-4 text-orange-900">FRONTEND DEVELOPER</span>
              <span className="font-medium block my-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </span>
              <Link href="/about" className="transition ease-in duration-150 hover:-translate-y-1 hover:scale-110 inline-block rounded-full bg-orange-500 px-4 py-1 my-3 text-base font-semibold leading-7 text-white shadow-md hover:bg-orange-600">
                MORE ABOUT ME
              </Link>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#fae0c3] h-screen">
          <div className="flex order-last lg:order-none items-center justify-center w-full space-x-5">
            <div className="w-28">
              <Link href="https://web.facebook.com/pitchayatisa" target={`_blank`} className="cursor-pointer">
                <Atropos className="my-atropos" shadowScale={1} shadowOffset={50}>
                  <img src="/images/facebook.webp"
                    data-atropos-offset="-10"
                    alt="facebook"
                    width={100}
                    height={100}
                  />
                </Atropos>
              </Link>
            </div>
            <div className="w-28">
              <Link href="https://www.instagram.com/_pitchayatisa" target={`_blank`} className="cursor-pointer">
                <Atropos className="my-atropos" shadowScale={1} shadowOffset={50}>
                  <img src="/images/instagram.webp"
                    data-atropos-offset="-10"
                    alt="instagram"
                    width={100}
                    height={100}
                  />
                </Atropos>
              </Link>
            </div>
            <div className="w-28">
              <Link href="https://www.linkedin.com/in/pitchayatisa-hirunwong-951469233" target={`_blank`} className="cursor-pointer">
                <Atropos className="my-atropos" shadowScale={1} shadowOffset={50}>
                  <img src="/images/linkedin.webp"
                    data-atropos-offset="-10"
                    alt="linkedin"
                    width={100}
                    height={100}
                  />
                </Atropos>
              </Link>
            </div>
            <div className="w-28">
              <Link href="https://web.facebook.com/pitchayatisa" target={`_blank`} className="cursor-pointer">
                <Atropos className="my-atropos" shadowScale={1} shadowOffset={50}>
                  <img src="/images/instagram.webp"
                    data-atropos-offset="-10"
                    alt="instagram"
                    width={100}
                    height={100}
                  />
                </Atropos>
              </Link>
            </div>
          </div>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <div className="block m-auto">
            <Atropos className="my-atropos" shadowScale={1} shadowOffset={50}>
              <img src="/images/contact.webp" alt="contact" data-atropos-offset="-2" />
            </Atropos>
          </div>
          <img src="/images/contact.webp" alt="contact" className="hidden" />
        </div>
      </Carousel >
    </>
  )
}
