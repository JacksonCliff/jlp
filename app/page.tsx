import Image from "next/image";
export default function Restaurant() {
    return (
        <div className="relative min-h-screen font-[family-name:var(--font-geist-sans)]">
            {/* Sidebar */}
            <div className="absolute top-0 left-0 w-1/4 h-full pt-10">
                <aside className="sticky top-0 left-0 w-100 h-screen bg-black bg-opacity-90 p-4 z-10 flex flex-col justify-center items-center">
                    <Image
                        src="/image/logo.png"
                        alt="sidebar-logo"
                        width={150} // Set the width here
                        height={150} // Set the height here
                        className="rounded-lg shadow-lg"
                    />
                    <nav className="flex flex-col gap-4 text-center">
                        <div className="relative group">
                            <div className="absolute inset-x-1 mx-1 top-1/3 bg-red-500 transform scale-x-0 transition-transform duration-50 ease-in-out group-hover:scale-x-100 origin-left h-1/2 rounded"/>
                            <a href="#section1" className="relative z-10 text-blue-500 py-2 px-4">Welcome</a>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-x-1 mx-1 top-1/3 bg-red-500 transform scale-x-0 transition-transform duration-50 ease-in-out group-hover:scale-x-100 origin-left h-1/2 rounded"/>
                            <a href="#section2" className="text-blue-500 hover:underline">About Us</a>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-x-1 mx-1 top-1/3 bg-red-500 transform scale-x-0 transition-transform duration-50 ease-in-out group-hover:scale-x-100 origin-left h-1/2 rounded"/>
                            <a href="#section3" className="text-blue-500 hover:underline">Photo Gallery</a>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-x-1 mx-1 top-1/3 bg-red-500 transform scale-x-0 transition-transform duration-50 ease-in-out group-hover:scale-x-100 origin-left h-1/2 rounded"/>
                            <a href="#section4" className="text-blue-500 hover:underline">Food Menu</a>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-x-1 mx-1 top-1/3 bg-red-500 transform scale-x-0 transition-transform duration-50 ease-in-out group-hover:scale-x-100 origin-left h-1/2 rounded"/>
                            <a href="#section5" className="text-blue-500 hover:underline">Contact Us</a>
                        </div>
                    </nav>
                </aside>

            </div>
            {/* Hero Section with Background Image */}

            <section className="relative h-screen bg-[url('/image/background.jpg')] bg-cover bg-center">


                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-white z-0">
                    <div className="text-center">
                        <h1 className="text-6xl font-bold">Welcome to Our Restaurant</h1>
                        <p className="mt-4 text-lg">Fine dining experience like never before.</p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="p-16 bg-white text-center">
                <h2 className="text-4xl font-bold mb-4">About Us</h2>
                <p className="text-lg text-gray-700">
                    We are a family-owned restaurant bringing the best culinary experience with a fusion of flavors.
                </p>
            </section>

            {/* Menu Section */}
            <section id="menu" className="p-16 bg-gray-50 text-center">
                <h2 className="text-4xl font-bold mb-8">Our Menu</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h3 className="text-xl font-semibold">Grilled Salmon</h3>
                        <p className="text-gray-600 mt-2">$25</p>
                    </div>
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h3 className="text-xl font-semibold">Pasta Primavera</h3>
                        <p className="text-gray-600 mt-2">$20</p>
                    </div>
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h3 className="text-xl font-semibold">Steak Au Poivre</h3>
                        <p className="text-gray-600 mt-2">$30</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="p-16 bg-white text-center">
                <h2 className="text-4xl font-bold mb-8">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 italic">"The food was absolutely amazing! Can't wait to return."</p>
                        <p className="text-sm text-gray-500 mt-4">- John Doe</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 italic">"Best dining experience we've had in a long time."</p>
                        <p className="text-sm text-gray-500 mt-4">- Jane Smith</p>
                    </div>
                </div>
            </section>

            {/* Online Order Section */}
            <section id="order" className="p-16 bg-gray-50 text-center">
                <h2 className="text-4xl font-bold mb-8">Order Online</h2>
                <a
                    href="/order"
                    className="bg-orange-600 text-white py-3 px-8 rounded-full text-lg hover:bg-orange-700 transition"
                >
                    Start Your Order
                </a>
            </section>
        </div>
    );
}
