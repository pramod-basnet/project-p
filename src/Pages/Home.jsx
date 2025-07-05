import React from 'react';
import Footer2 from '../Components/Footer2';
import Header from '../Components/Header';
import ScrollablePlaces from '../Components/ScrollablePlaces';
import Footer1 from '../Components/Footer1';

import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <>
      <Header/>
      {/* About Section */}
      <section style={{ backgroundColor: '#ccffcc' }} className="py-16 px-6 text-center">

        <h1 className="text-3xl font-semibold text-amber-900 mb-4"> Tours & Travels In Nepal</h1>
        <h1 className="text-3xl font-semibold text-amber-900 mb-4">Travel made easy</h1>
        <p className="text-green-600 max-w-xl mx-auto mb-10">
          <h2>Write a paragraph that talks about your company here. You can talk about your company's background, history, mission, vision, or philosophy. Anything that will introduce your brand's persona to your clients. This will help build a connection between you and them, that hopefully leads into a working relationship..</h2>
        </p>
        </section>
      <ScrollablePlaces
        title=" Popular Places in Nepal"
        places={[
          {
            name: 'Pokhara',
            image: '/images/pokhara.jpg',
            description: 'Famous for lakes, adventure sports, and scenic mountain views.',
            price: 5000
          },
          {
            name: 'Lumbini',
            image: '/images/lumbini.jpg',
            description: 'Birthplace of Lord Buddha and a major pilgrimage site.',
            price: 3000
          },
          {
            name: 'Mustang',
            image: '/images/mustang.jpg',
            description: 'Known for its desert-like landscapes and unique culture.',
            price: 7000
          },
          {
            name: 'Kathmandu',
            image: '/images/kathmandu.jpg',
            description: 'Capital city rich in culture, temples, and history.',
            price: 4000
          },
          {
            name: 'Rara Lake',
            image: '/images/rara.jpg',
            description: 'Nepal\'s largest lake surrounded by pine forests and mountains.',
            price: 6000
          },
          {
            name: 'Chitwan',
            image: '/images/chitwan.jpg',
            description: 'Home to national parks and rare wildlife species.',
            price: 3500
          }
        ]}
      />
      <ScrollablePlaces
        title="Religion & Cultural Places in Nepal"
        places={[
          { name: 'Pashupatinath Temple', image: '/images/pashupatinath.jpg', description: 'Sacred Hindu temple dedicated to Lord Shiva in Kathmandu.',price: 3000 },
          { name: 'Swayambhunath Stupa', image: '/images/swayambhunath.jpg', description: 'Ancient Buddhist stupa with panoramic views of Kathmandu.', price: 2000 },
          { name: 'Boudhanath Stupa', image: '/images/boudhanath.jpg', description: 'One of the world’s largest Buddhist stupas.', price: 2500 },
          { name: 'Lumbini', image: '/images/lumbini.jpg', description: 'Birthplace of Lord Buddha and a UNESCO World Heritage Site.',  price: 4000 },
          { name: 'Changu Narayan Temple', image: '/images/changu_narayan.jpg', description: 'Nepal’s oldest Hindu temple, dedicated to Vishnu.' ,  price: 1500 },
          { name: 'Manakamana Temple', image: '/images/manakamana.jpg', description: 'Hilltop temple dedicated to Goddess Bhagwati, reachable by cable car.' ,  price: 3500 },
          { name: 'Janaki Mandir', image: '/images/janaki.jpg', description: 'Hindu temple dedicated to Goddess Sita in Janakpur.', price: 3000 },
          { name: 'Muktinath Temple', image: '/images/muktinath.jpg', description: 'Sacred site for Hindus and Buddhists in Mustang.' , price: 5000 },
          { name: 'Pathivara Temple', image: '/images/pathivara.jpg', description: 'Famous pilgrimage temple in eastern Nepal.' , price: 2000 },
          { name: 'Gosaikunda', image: '/images/gosaikunda.jpg', description: 'Sacred alpine lake revered by Hindus and Buddhists.' , price: 4500 },
          { name: 'Tengboche Monastery', image: '/images/tengboche.jpg', description: 'Important Buddhist monastery in Everest region.'   , price: 3000 },
          { name: 'Namobuddha Monastery', image: '/images/namobuddha.jpg', description: 'Popular Buddhist monastery near Dhulikhel.'  , price: 2500 },
          { name: 'Kopan Monastery', image: '/images/kopan.jpg', description: 'Buddhist monastery popular for meditation and retreats.' , price: 2000 },
          { name: 'Hiranya Varna Mahavihar', image: '/images/hiranya.jpg', description: 'Golden Buddhist monastery in Patan.' , price: 1500 },
          { name: 'Bhaktapur Durbar Square', image: '/images/bhaktapur.jpg', description: 'Historic square with temples and palaces.' , price: 3000 },
          { name: 'Patan Durbar Square', image: '/images/patan.jpg', description: 'Ancient royal palace and cultural hub.'  , price: 2500 },
          { name: 'Kathmandu Durbar Square', image: '/images/kathmandu_durbar.jpg', description: 'Center of old Kathmandu with palaces and temples.'  , price: 2000 },
          { name: 'Bhairabnath Temple', image: '/images/bhairabnath.jpg', description: 'Famous temple dedicated to Lord Bhairav.' , price: 1500 },
          { name: 'Ganesh Temple', image: '/images/ganesh.jpg', description: 'Popular temple dedicated to Lord Ganesh.'   , price: 1000 },
          { name: 'Siddha Gufa', image: '/images/siddha_gufa.jpg', description: 'One of the largest caves in Nepal with spiritual significance.'  , price: 2000 },
          { name: 'Dolakha Bhimsen Temple', image: '/images/dolakha_bhimsen.jpg', description: 'Temple famous for its mysterious idol.' , price: 3000 },
          { name: 'Rani Mahal', image: '/images/rani_mahal.jpg', description: 'Historic palace by the Kali Gandaki river.'  , price: 2500 },
          { name: 'Nuwakot Durbar', image: '/images/nuwakot.jpg', description: 'Ancient fort and palace complex.'   , price: 2000 },
          { name: 'Gorkha Durbar', image: '/images/gorkha.jpg', description: 'Historic royal palace and birthplace of King Prithvi Narayan Shah.' , price: 3000 },
          { name: 'Tilaurakot', image: '/images/tilaurakot.jpg', description: 'Ancient archaeological site believed to be King Gautam Buddha’s childhood home.' , price: 4000 },
          { name: 'Ramagrama Stupa', image: '/images/ramagrama.jpg', description: 'Ancient Buddhist stupa containing relics of Lord Buddha.'  , price: 3500 },
          { name: 'Gan Baha', image: '/images/gan_baha.jpg', description: 'Ancient Buddhist monastery in Patan.'  , price: 1500 },
          { name: 'Bajrayogini Temple', image: '/images/bajrayogini.jpg', description: 'Important Buddhist temple near Kathmandu.'  , price: 2000 },
          { name: 'Sinja Valley', image: '/images/sinja_valley.jpg', description: 'Ancient capital of the Khas Kingdom with cultural significance.' , price: 3000  },
          { name: 'Khokana Village', image: '/images/khokana.jpg', description: 'Traditional Newari village known for mustard oil production.'  , price: 1500 },
          { name: 'Tansen', image: '/images/tansen.jpg', description: 'Historic hill town with rich culture.' , price: 2000 },
          { name: 'Panauti', image: '/images/panauti.jpg', description: 'Ancient town with temples and festivals.'  , price: 1500 },
          { name: 'Ram Mandir', image: '/images/ram_mandir.jpg', description: 'Famous temple dedicated to Lord Rama.' , price: 1000 },
          { name: 'Changu Narayan Complex', image: '/images/changu_complex.jpg', description: 'Complex around Nepal’s oldest temple.' , price: 2000 },
          { name: 'Kalaswor Mahadev', image: '/images/kalaswor.jpg', description: 'Temple dedicated to Lord Shiva.'   , price: 1500 },
          { name: 'Narayanthan', image: '/images/narayanthan.jpg', description: 'Temple dedicated to Lord Vishnu.'  , price: 2000 },
          { name: 'Pharping', image: '/images/pharping.jpg', description: 'Sacred Buddhist sites including Asura Cave.' , price: 2500 },
          { name: 'Chabahil Stupa', image: '/images/chabahil.jpg', description: 'One of the oldest Buddhist stupas.'  , price: 1500 },
          { name: 'Janai Purnima', image: '/images/janai_purnima.jpg', description: 'Festival and pilgrimage sites around sacred lakes.'  , price: 2000 },
          { name: 'Shivapuri National Park Temples', image: '/images/shivapuri.jpg', description: 'Temples inside Shivapuri park.'  , price: 2500 },
          { name: 'Khaptad National Park', image: '/images/khaptad.jpg', description: 'Sacred area with temples and natural beauty.'  , price: 3000 },
          { name: 'Devi’s Fall (Patale Chhango)', image: '/images/devis_fall.jpg', description: 'Sacred waterfall with cultural legends.'     , price: 1500 },
          { name: 'Halesi Mahadev Temple', image: '/images/halesi.jpg', description: 'Famous cave temple in Khotang district.'  , price: 2000 },
          { name: 'Dakshinkali Temple', image: '/images/dakshinkali.jpg', description: 'Temple known for animal sacrifices and goddess worship.'  , price: 1500 },
          { name: 'Rani Mahal', image: '/images/rani_mahal2.jpg', description: 'Historic palace known as the “Taj Mahal of Nepal.”'   , price: 2000 },
          { name: 'Siddha Baba Temple', image: '/images/siddha_baba.jpg', description: 'Important temple on the way to Pokhara.'  , price: 2500 },
          { name: 'Maju Deval', image: '/images/maju_deval.jpg', description: 'Ancient temple in Kathmandu Durbar Square.'  , price: 1500 },
          { name: 'Ashoka Stupa', image: '/images/ashoka_stupa.jpg', description: 'Ancient Buddhist stupa built by Emperor Ashoka.' , price: 2000 },
          { name: 'Namo Buddha', image: '/images/namo_buddha.jpg', description: 'Sacred Buddhist pilgrimage site near Kathmandu.'   , price: 2500 },
          { name: 'Buddhanilkantha Temple', image: '/images/buddhanilkantha.jpg', description: 'Famous temple with a reclining statue of Lord Vishnu.' , price: 2000 },
          { name: 'Kirtipur', image: '/images/kirtipur.jpg', description: 'Historic town with temples and traditional Newari culture.', price: 1500 },
          { name: 'Bhaktapur Pottery Square', image: '/images/pottery_square.jpg', description: 'Cultural site known for traditional pottery making.', price: 1000 },
          { name: 'Gorkha Palace', image: '/images/gorkha_palace.jpg', description: 'Historic palace and birthplace of King Prithvi Narayan Shah.', price: 3000 },
          { name: 'Boudhanath Monastery', image: '/images/boudhanath_monastery.jpg', description: 'Monastery surrounding the Boudhanath Stupa.', price: 2000 }

        ]}
      />

          
            
      <ScrollablePlaces
        title="Himalayan Places in Nepal"
        places={[
          {
            name: 'Everest Base Camp',
            image: '/images/everest.jpg',
            description: 'Gateway to the world’s highest peak with stunning Himalayan views.',
            price: 10000
          },
          {
            name: 'Annapurna Base Camp',
            image: '/images/annapurna.jpg',
            description: 'A popular trekking destination with panoramic mountain scenery.', 
            price: 8000
          },
          {
            name: 'Langtang Valley',
            image: '/images/langtang.jpg',
            description: 'Rich in culture and glaciers, nestled near the Tibetan border.',
            price: 6000
          },
          {
            name: 'Manang',
            image: '/images/manang.jpg',
            description: 'A scenic village on the Annapurna Circuit with alpine beauty.',
            price: 7000
          },
          {
            name: 'Gosaikunda',
            image: '/images/gosaikunda.jpg',
            description: 'A sacred alpine lake surrounded by snow-capped mountains.',
            price: 5000
          },
          {
            name: 'Dolpo',
            image: '/images/dolpo.jpg',
            description: 'Remote high-altitude area known for mystic beauty and culture.',
            price: 12000
          },
          {
            name: 'Muktinath',
            image: '/images/muktinath.jpg',
            description: 'A sacred site for Hindus and Buddhists located in the Mustang region.',
            price: 4000
          },
          {
            name: 'Kalinchowk',
            image: '/images/kalinchowk.jpg',
            description: 'A famous pilgrimage and snow destination near Kathmandu.',
            price: 3000
          },
          {
            name: 'Poon Hill',
            image: '/images/poonhill.jpg',
            description: 'Offers a breathtaking sunrise view over the Annapurna and Dhaulagiri ranges.',
            price: 3500
          },
          {
            name: 'Rara Lake',
            image: '/images/rara.jpg',
            description: 'Nepal’s largest lake surrounded by forested hills and Himalayan peaks.',
            price: 9000
          },
          {
            name: 'Pathivara',
            image: '/images/pathivara.jpg',
            description: 'A revered hilltop temple offering panoramic Himalayan views.',
            price: 2500
          },
          {
            name: 'Upper Mustang',
            image: '/images/uppermustang.jpg',
            description: 'A restricted, semi-desert region with ancient Tibetan culture.',
            price: 11000
          }
        ]}
      />
      <ScrollablePlaces
        title="National Parks & Reserve Areas of Nepal"
        places={[
          {
            name: 'Chitwan National Park',
            image: '/images/chitwan.jpg',
            description: 'Home to one-horned rhinos, Bengal tigers, and rich biodiversity.',
            price: 3000
          },
          {
            name: 'Bardiya National Park',
            image: '/images/bardiya.jpg',
            description: 'Known for tigers, elephants, and peaceful jungle safaris.',
            price: 3500
          },
          {
            name: 'Sagarmatha National Park',
            image: '/images/sagarmatha.jpg',
            description: 'Includes Mount Everest and a UNESCO World Heritage Site.',
            price: 8000
          },
          {
            name: 'Shivapuri Nagarjun National Park',
            image: '/images/shivapuri.jpg',
            description: 'Popular for short hikes and rich flora near Kathmandu Valley.',
            price: 2000
          },
          {
            name: 'Rara National Park',
            image: '/images/rara.jpg',
            description: 'Protects Rara Lake, Nepal’s largest lake, and alpine ecosystems.',
            price: 6000
          },
          {
            name: 'Makalu Barun National Park',
            image: '/images/makalu.jpg',
            description: 'One of the most remote parks with diverse flora and fauna.',
            price: 7000
          },
          {
            name: 'Khaptad National Park',
            image: '/images/khaptad.jpg',
            description: 'Sacred land of Khaptad Baba with rolling meadows and forests.',
            price: 4000
          },
          {
            name: 'Parsa National Park',
            image: '/images/parsa.jpg',
            description: 'Tropical and subtropical forest, home to leopards and elephants.',
            price: 2500
          },
          {
            name: 'Banke National Park',
            image: '/images/banke.jpg',
            description: 'Established to protect tigers and connect ecological corridors.',
            price: 3000
          },
          {
            name: 'Koshi Tappu Wildlife Reserve',
            image: '/images/koshi.jpg',
            description: 'Wetland reserve, famous for birds and wild water buffalo.',
            price: 2000
          },
          {
            name: 'Bardia National Park',
            image: '/images/bardia.jpg',
            description: 'Less crowded than Chitwan, known for its rich wildlife.',
            price: 3500   
          },
          {
            name: 'Langtang National Park',
            image: '/images/langtang.jpg',
            description: 'Home to Langtang Valley, glaciers, and diverse wildlife.',
            price: 5000
          },
          {
            name: 'Annapurna Conservation Area',
            image: '/images/annapurna.jpg',
            description: 'Largest protected area in Nepal, rich in biodiversity.',
            price: 6000
          },
          {
            name: 'Shey Phoksundo National Park',
            image: '/images/shey_phoksundo.jpg',
            description: 'Known for its stunning turquoise lake and Tibetan culture.',
            price: 7000
          },
          {
            name: 'Dhorpatan Hunting Reserve',
            image: '/images/dhorpatan.jpg',
            description: 'Nepal’s only hunting reserve, known for blue sheep and pheasants.',
            price: 4000
          },
          {
            name: 'Gaurishankar Conservation Area',
            image: '/images/gaurishankar.jpg',
            description: 'Protects the Gaurishankar mountain range and surrounding ecosystems.',
            price: 4500   
          },
          {
            name: 'Api Nampa Conservation Area',
            image: '/images/api_nampa.jpg',
            description: 'Protects Api and Nampa mountains, rich in flora and fauna.',
            price: 5000 
          },


          
        ]}
      />
      <ScrollablePlaces
        title="Adventure & Trekking Places in Nepal"
        places={[
          {
            name: 'Everest Base Camp Trek',
            image: '/images/everest.jpg',
            description: 'The most iconic trek in Nepal, offering views of Mount Everest.',
            price: 12000
          },
          {
            name: 'Annapurna Circuit Trek',
            image: '/images/annapurna.jpg',
            description: 'One of the most diverse and scenic treks in the Himalayas.',
            price: 10000
          },
          {
            name: 'Mardi Himal Trek',
            image: '/images/mardi.jpg',
            description: 'A short and peaceful trek with stunning views of Machhapuchhre.',
            price: 6000
          },
          {
            name: 'Langtang Valley Trek',
            image: '/images/langtang.jpg',
            description: 'Close to Kathmandu with glaciers, mountains, and Tamang culture.',
            price: 7000
          },
          {
            name: 'Manaslu Circuit Trek',
            image: '/images/manaslu.jpg',
            description: 'A remote trail offering wilderness and Tibetan culture.',
            price: 9000
          },
          {
            name: 'Upper Mustang Trek',
            image: '/images/uppermustang.jpg',
            description: 'Explore desert landscapes and the hidden Buddhist kingdom of Lo.',
            price: 15000
          },
          {
            name: 'Gosaikunda Trek',
            image: '/images/gosaikunda.jpg',
            description: 'Sacred alpine lakes with rugged trails and mountain views.',
            price: 5000
          },
          {
            name: 'Rara Lake Trek',
            image: '/images/rara.jpg',
            description: 'A peaceful adventure to the biggest lake in Nepal.',
            price: 8000
          },
          {
            name: 'Dhampus-Australian Camp',
            image: '/images/dhampus.jpg',
            description: 'A short trek near Pokhara with panoramic views of Annapurna.',
            price: 3000
          },
          {
            name: 'Kalinchowk',
            image: '/images/kalinchowk.jpg',
            description: 'Perfect for snow adventure, short trek, and panoramic scenes.',
            price: 4000
          },
        
          {
            name: 'Bungee Jumping',
            image: '/images/bungee.jpg',
            description: 'Experience the thrill of jumping into the Bhote Koshi River gorge.',
            price: 5000
          },
          {
            name: 'Paragliding in Pokhara',
            image: '/images/paragliding.jpg',
            description: 'Soar above the stunning lakes and mountains of Pokhara.',
            price: 6000
          },
          {
            name: 'White Water Rafting',
            image: '/images/rafting.jpg',
            description: 'Adventure through thrilling rapids on rivers like Trishuli and Bhote Koshi.',
            price: 4000
          },
          {
            name: 'Zip Lining in Pokhara',
            image: '/images/zipline.jpg',
            description: 'One of the world’s longest zip lines with breathtaking views.',
            price: 3000
          },
          {
            name: 'Mountain Biking',
            image: '/images/mountainbiking.jpg',
            description: 'Explore rugged trails and scenic routes across the country.',
            price: 3500
          },
          {
            name: 'Rock Climbing',
            image: '/images/rockclimbing.jpg',
            description: 'Climb natural rock formations in various locations.',
            price: 2500
          },
          {
            name: 'Canyoning',
            image: '/images/canyoning.jpg',
            description: 'Adventure through waterfalls and canyons in the Himalayas.',
            price: 4500
          },
          {
            name: 'Jungle Safari in Chitwan',
            image: '/images/junglesafari.jpg',
            description: 'Explore diverse wildlife in one of Nepal’s premier national parks.',
            price: 3000
          },
          {
            name: 'Helicopter Tours',
            image: '/images/helicopter.jpg',
            description: 'Get a bird’s eye view of the majestic Himalayas.',
            price: 12000
          },
        ]}
      />
   <Footer1
  <Footer2 />


  </>
  );
};

export default Home;