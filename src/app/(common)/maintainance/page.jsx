"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const MaintenancePage = () => {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Set the target date (3 days from now)
    useEffect(() => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 3);

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setCountdown({ days, hours, minutes, seconds });

            if (difference <= 0) {
                clearInterval(interval);
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 px-4 py-12">
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    {/* Left side with illustration */}
                    <div className="md:w-1/2 bg-blue-600 p-8 flex items-center justify-center">
                        <div className="text-center">
                            <div className="relative w-64 h-64 mx-auto mb-6">
                                <Image
                                    src="/images/maintenance-illustration.svg"
                                    alt="Maintenance Illustration"
                                    width={256}
                                    height={256}
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <h2 className="text-white text-2xl font-bold">We're improving our website</h2>
                            <p className="text-blue-100 mt-2">Thank you for your patience</p>
                        </div>
                    </div>

                    {/* Right side with content */}
                    <div className="md:w-1/2 p-8 md:p-12">
                        <div className="text-center md:text-left">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Under Maintenance</h1>
                            <p className="mt-4 text-gray-600">
                                We're currently updating our website to serve you better. We'll be back online shortly with new features and improvements.
                            </p>

                            {/* Countdown timer */}
                            <div className="mt-8 grid grid-cols-4 gap-2 md:gap-4">
                                <div className="bg-gray-50 rounded-lg p-3 md:p-4">
                                    <div className="text-2xl md:text-3xl font-bold text-blue-600">{countdown.days}</div>
                                    <div className="text-xs md:text-sm text-gray-500">Days</div>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-3 md:p-4">
                                    <div className="text-2xl md:text-3xl font-bold text-blue-600">{countdown.hours}</div>
                                    <div className="text-xs md:text-sm text-gray-500">Hours</div>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-3 md:p-4">
                                    <div className="text-2xl md:text-3xl font-bold text-blue-600">{countdown.minutes}</div>
                                    <div className="text-xs md:text-sm text-gray-500">Minutes</div>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-3 md:p-4">
                                    <div className="text-2xl md:text-3xl font-bold text-blue-600">{countdown.seconds}</div>
                                    <div className="text-xs md:text-sm text-gray-500">Seconds</div>
                                </div>
                            </div>

                            {/* Contact information */}
                            <div className="mt-8">
                                <h3 className="text-lg font-semibold text-gray-800">Need assistance?</h3>
                                <p className="mt-2 text-gray-600">
                                    If you have any questions or need immediate assistance, please contact us:
                                </p>
                                <div className="mt-4 space-y-2">
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                        <a href="mailto:info@mercyconstruction.com" className="ml-2 text-blue-600 hover:underline">info@mercyconstruction.com</a>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                        <span className="ml-2 text-gray-700">+1 (123) 456-7890</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} Mercy Construction. All rights reserved.</p>
                <p className="mt-1">
                    <Link href="/" className="text-blue-600 hover:underline">Return to Homepage</Link>
                </p>
            </div>
        </div>
    );
};

export default MaintenancePage;