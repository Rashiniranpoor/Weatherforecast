import React from 'react'

export default function Aboutus() {
  return (
    
    <> 

    <div className="container mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">

        <section>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700">
                At <span className="font-semibold">Weather reporter</span>, we believe that weather isn't just about forecasts; it's about the impact it has on your daily life. Founded with a passion for making weather information more meaningful, we set out to create an application that not only delivers accurate forecasts but also empowers you to capture and share your unique weather experiences.
            </p>
        </section>

        <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">What Sets Us Apart?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Personalized Weather Insights</h3>
                    <p className="text-gray-700">Unlike traditional weather apps, we go beyond generic forecasts. Our application provides you with personalized weather insights tailored to your specific location and preferences.</p>
                </div>

                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Your Daily Weather Journal</h3>
                    <p className="text-gray-700">Ever wished you could document the weather for a special day or an unforgettable moment? With <span className="font-semibold">Weather reporter</span>, you can! We offer a unique feature that allows you to save your daily weather reports, creating a digital journal of your weather experiences.</p>
                </div>

                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Reliable Data Sources</h3>
                    <p className="text-gray-700">We take weather data seriously. Our application fetches real-time, accurate weather information from reliable APIs to ensure you have the most up-to-date forecasts. Trust us to be your go-to source for weather data that you can rely on.</p>
                </div>

            </div>
        </section>

        <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">At the heart of <span className="font-semibold">Weather reporter</span> is a commitment to making weather more personal, more accessible, and more enjoyable. We strive to empower you with the tools to not only plan your day but to cherish and share the moments influenced by the weather.</p>
        </section>

        <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Join Us on this Weather Journey</h2>
            <p className="text-gray-700">Thank you for choosing <span className="font-semibold">Weather reporter</span> as your weather companion. Whether you're a weather enthusiast or just looking for a reliable forecast, we invite you to join us on this exciting journey of transforming the way we experience and share the weather.</p>
            <p className="text-gray-700">Discover the power of personalized weather with <span className="font-semibold">Weather reporter</span> today!</p>
        </section>

    </div>
    </>
  )
}
