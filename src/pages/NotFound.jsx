import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className='contenedor grid place-items-center gap-10'>
      <h1 className='text-xl font-bold text-[#f17706]/50'>
        Not Found
      </h1>
      <img
        src='/404.gif'
        alt='404'
        className='max-w-xs md:max-w-lg rounded-xl'
      />
      <Link
        to='/'
        className='font-bold bg-[#f17706]/80 hover:bg-[#f17706] transition-colors duration-300 px-4 py-2 rounded-full'
      >
        Back to Home
      </Link>
    </main>
  )
}
export default NotFound
