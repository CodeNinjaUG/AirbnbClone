
import React from 'react'
import { useRouter } from 'next/router';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { format } from 'date-fns';
function Search() {
  const router = useRouter();
  const { location , startDate, endDate, noOfGuests} = router.query;
  const formattedStartDate = format(new Date(startDate),"dd MMMM yy");
  const formattedEndDate = format(new Date(endDate),"dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
         <Header/>
            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'> 300 + Stays - {range}   for {noOfGuests} guests</p>
                    <h1 className='text-2xl font-semibold mt-2 mb-6'> Stas in {location }</h1>
                    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='button'> Cancellation Flexibility </p>
                        <p className='button'> Type of Place </p>
                        <p className='button'> Price </p>
                        <p className='button'> Rooms and Beds </p>
                        <p className='button'> More Filters </p>
                    </div>
                </section>
            </main>
         <Footer/>
    </div>
  )
}

export default Search