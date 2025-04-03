const hotels = {
    "Trivandrum": [
        { name: "Taj Vivanta", category: "Luxury", price: "4200", url: "https://www.tajhotels.com" },
        { name: "Hotel Blue Nest", category: "Medium", price: "580", url: "https://www.bluenesthotel.com" }
    ],
    "Kollam": [
        { name: "The Raviz Ashtamudi", category: "Luxury", price: "1180", url: "https://www.theraviz.com" },
        { name: "Hotel Shah", category: "Medium", price: "175", url: "https://hotelshahinternational.com/roomandsuites" }
    ],
    "Pathanamthitta": [
        { name: "Royal Orchid", category: "Luxury", price: "2150", url: "https://www.royalorchidhotels.com" },
        { name: "Hotel 24 Inn", category: "Medium", price: "370", url: "https://www.hotel24inn.com/acommodations/index.html" }
    ],
    "Alappuzha": [
        { name: "Ramada by Windham", category: "Luxury", price: "4220", url: "https://www.ramadaalleppey.com/#1A" },
        { name: "Treebo Premium Palmyra Milford", category: "Medium", price: "990", url: "https://www.treebo.com/hotels-in-alleppey/treebo-premium-palmyra-milford-2-km-from-alleppey-beach-old-medical-college-329/?checkin=2025-04-04&checkout=2025-04-05&hotel_id=329&rateplan=EP&roomconfig=2-0&roomtype=oak" }
    ],
    "Kottayam": [
        { name: "Coconut Lagoon", category: "Luxury",price: "8175", url: "https://bookings.cghearth.com/?chainId=8850&propertyId=8856" },
        { name: "Hotel Mallika Residency", category: "Medium",price: "1075",  url: "https://hotelmalikaresidency.net/room-list/" }
    ],
    "Idukki": [
        { name: "Ragamaya Resort & Spa Munnar", category: "Luxury", price: "175", url: "https://www.ragamayamunnar.com/" },
        { name: "Hotel Shikara", category: "Medium",price: "175",  url: "http://hotelshikkara.com/about.php" }
    ],
    "Ernakulam": [
        { name: "Vivanta Hotels", category: "Luxury", price: "10175", url: "https://www.vivantahotels.com/en-in/vivanta-ernakulam-marine-drive/?gad_source=1&gclid=EAIaIQobChMIhbnx94K7jAMVfKhmAh1q7B7NEAAYASAAEgJQ8PD_BwE" },
        { name: "Windsor Castle", category: "Medium",price: "475",  url: "https://thewindsorcastle.co.in/" }
    ],
    "Thrissur": [
        { name: "Hyatt Regency", category: "Luxury", price: "6175", url: "https://www.hyatt.com/hyatt-regency/en-US/cokrt-hyatt-regency-thrissur" },
        { name: "Hotel Merlin International", category: "Medium", price: "1175", url: "https://app.axisrooms.com/beV2/home1.html?bookingEngineId=3696" }
    ],
    "Palakkad": [
        { name: "Distrikt-9", category: "Luxury",price: "9175",  url: "https://www.swiftbook.io/inst/#home?propertyId=901Mud0xMH3yKMbGVCLHfnWk34f2CRbiUEWitWXXAUSvk41lijQwOTA=&JDRN=Y" },
        { name: "ITL Residency", category: "Medium", price: "675", url: "https://www.itlresidency.com/booking.html" }
    ],
    "Kozhikode": [
        { name: "The Raviz Calicut", category: "Luxury",price: "10175",  url: "https://www.swiftbook.io/inst/#home?propertyId=503MjEVemfkPU0P9H1P3TvOaXHnMhAXwNDM=&JDRN=Y" },
        { name: "Hotel Paramount Tower", category: "Medium", price: "1075", url: "https://www.zotel.ai/hotels/hotel-paramount-tower" }
    ],
    "Malappuram": [
        { name: "La Rêve- The Beach Villa", category: "Luxury",price: "9175",  url: "https://larevethebeachvilla.com/" },
        { name: "KTDC Tamarind", category: "Medium",price: "875",  url: "https://www.ktdcbooking.com/booking/" }
    ],
    "Wayanad": [
        { name: "Crystal Kuruva Nature Resort & Spa", category: "Luxury", price: "11275", url: "https://www.crystalkuruva.com/" },
        { name: "Mazarine Hotels and Resorts", category: "Medium",price: "4175",  url: "https://bookings.simplotel.com/?&propertyId=10410" }
    ],
    "Kannur": [
        { name: "Benale International", category: "Luxury", price: "5175", url: "https://hotels.eglobe-solutions.com/benaleinternational/booking/hotels/hotel-benale-international-kannur#bookingsteps" },
        { name: "Royal Omars", category: "Medium", price: "975", url: "https://royalomars.in/rooms/" }
    ],
    "Kasaragod": [
        { name: "Taj Hotel", category: "Luxury",price: "4475",  url: "https://www.tajhotels.com/en-in/destination/hotels-in-kasaragod" },
        { name: "Bekal Village Homestay", category: "Medium", price: "375", url: "https://www.bekalvillagehomestay.com/booking.php" }
    ],
    //Here we have created a prototype of website showcasing both 
    // medium and luxury hotels of each distict provided the price range.
    // On clicking Book now it will redirect to 
    // the respective booking sites of each hotel websites thus ensuring safe and secure booking experience.
};

document.getElementById("district").addEventListener("change", function () {
    const selectedDistrict = this.value;
    const hotelsContainer = document.getElementById("hotels");

    hotelsContainer.innerHTML = "";

    if (hotels[selectedDistrict]) {
        hotels[selectedDistrict].forEach(hotel => {
            const hotelCard = document.createElement("div");
            hotelCard.className = "hotel-card";
            hotelCard.innerHTML = `
                <h3>${hotel.name}</h3>
                <p>Category: ${hotel.category}</p>
                <p>Price: ${hotel.price} per night</p>
                <a href="${hotel.url}" target="_blank">Book Now</a>
            `;
            hotelsContainer.appendChild(hotelCard);
        });
    }
});