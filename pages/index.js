import Head from 'next/head'
// import Image from 'next/image'
import Logo from '../components/global/Logo'

import Header from '../components/global/Header'

export default function Home() {
  const Button = ({ type }) => {
    return (
      <button
        className={
          'Tags bg-green text-wsGrey-800 px-6 py-0.5 text-sm rounded-md shadow-sm' +
          type
        }
      >
        {type}
      </button>
    )
  }
  return (
    <div className='container px-6 mx-auto md:px-24'>
      <Head>
        <title>Bulu Furniture</title>
        <meta
          name='description'
          content='Custom furniture outfit providing joinery and carpentry products and services'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container h-screen mx-auto'>
        <Header />

        <div className='mb-12 MainWrapper'>
          <div className='w-7/12 ProductWrapper'>
            <h1 className='text-2xl'>Products</h1>
            <p className='my-3'>
              Look at regular things with unusual eyes. Browse through the list
              of products we have made and add it to your space.
            </p>
          </div>

          <div className='flex TagsWrapper gap-x-3'>
            <div>
              <Button type='Featured' />
            </div>
            <div>
              <Button type='Plants' />
            </div>
            <div>
              <Button type='Outdoor' />
            </div>
            <div>
              <Button type='Frames' />
            </div>
            <div>
              <Button type='Kitchen Ware' />
            </div>
            <div>
              <Button type='Living Room' />
            </div>
            <div>
              <Button type='Bedroom' />
            </div>
          </div>
        </div>

        <div className='mb-8 MainWrapper'>
          <h1 className='text-2xl'>Featured Work</h1>
          <p className='my-3'>
            A selection of furniture designed to accomodate any space or room
            they are put in.
          </p>
        </div>
        <div className='mb-12 ImageWrapper'>
          <div className='grid gap-4 grid-col-1 sm:grid-cols-2'>
            <div className='overflow-hidden '>
              <img
                src='/img/furniture/img07.jpg'
                alt=''
                className='object-cover w-full rounded-sm shadow-lg'
              />
            </div>
            <div className='overflow-hidden '>
              <img
                src='/img/furniture/img02.jpg'
                alt=''
                className='object-cover w-full rounded-sm shadow-lg'
              />
            </div>
            <div className='overflow-hidden '>
              <img
                src='/img/furniture/img05.jpg'
                alt=''
                className='object-cover w-full rounded-sm shadow-lg'
              />
            </div>
            <div className='overflow-hidden '>
              <img
                src='/img/furniture/img18.jpg'
                alt=''
                className='object-cover w-full rounded-sm shadow-lg'
              />
            </div>
          </div>
        </div>

        <div className='mb-12 CTAWrapper'>
          <div className='w-7/12 '>
            <h1 className='text-2xl'>We build custom furniture</h1>

            <p className='my-3'>
              Great furniture is hard to come by. Send us your request and we
              will assist you in making that dream a reality.
            </p>
          </div>
        </div>

        <div className='mb-12 Footer'>
          <div className='flex justify-between pb-12'>
            <div>
              <ul>
                <li>About Us</li>
                <li>Products</li>
                <li>Services</li>
                <li>Contacts</li>
              </ul>
            </div>
            <div>
              <div className='flex'>
                <div className='mr-4'>
                  <Logo />
                </div>
                <div>
                  <ul>
                    <li>Social Media</li>
                    <li>Email</li>
                    <li>Phone Number</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
