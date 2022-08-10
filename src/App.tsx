import { useEffect, useState } from 'react'
import './App.css'
import { StarIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'
import oneImage from './img/image3.jpg'
import twoImage from './img/image1.jpg'
import threeImage from './img/image2.jpg'

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


function App() {
  const [show, setCount] = useState(0);





  useEffect(() => {
    const interVal = setInterval(() => {
      if(show === 2){
        setCount(0);
      } else {
        setCount(show + 1)
      }
    }, 5000)

    console.log(show);
    return () => clearInterval(interVal);
  }, [show])
  
  return (
    <div>
        <div className="slideshow-container">

        <div className={classNames(show === 0 ? "mySlidesShow fade" :"mySlides fade" )}>
          <div className="numbertext">1 / 3</div>
          <img src={oneImage} />
          <div className="text">I</div>
        </div>

        <div className={classNames(show === 1 ? "mySlidesShow fade" :"mySlides fade" )}>
          <div className="numbertext">2 / 3</div>
          <img src={twoImage} />
          <div className="text">Love</div>
        </div>

        <div className={classNames(show === 2 ? "mySlidesShow fade" :"mySlides fade" )}>
          <div className="numbertext">3 / 3</div>
          <img src={threeImage} />
          <div className="text">You</div>
        </div>

        </div>

      {/* <div>
        <span className="dot"></span> 
        <span className="dot"></span> 
        <span className="dot"></span> 
      </div> */}
    </div>
  );
}

export default App;
