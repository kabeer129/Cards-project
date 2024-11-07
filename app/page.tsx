

import Image from "next/image"
export default function HomePage() {
  return (
    <div>
    <nav className="flex justify-end items-center w-full bg-black h-32">
    <div className="bg-blue-950 h-10 w-96  flex"></div>
    <div className="bg-orange-600 h-10 w-96"></div>
    <div className="bg-pink-700 h-10 w-96"></div>
   </nav>
   <main className="flex justify-around bg-gray-900 py-80">
     <div className="px-10">
      <div className="py-1 text-4xl font-bold text-white">Artificial intelligence</div><br></br>
      
      <div className="flex " >
      <Image
        src={require('../images (1).jpeg')}
        alt="Ai image"
        width={400}
        height={400}
        style={{marginRight:'20px'}}
        />
        <Image
        src={require('../images.jpeg')}
        alt="Ai image"
        width={400}
        height={400}
        style={{marginRight:'20px'}}
        />
        
        <Image
        src={require('../download (1).jpeg')}
        alt="ai image"
        width={400} height={400}
        />
        <footer>
          
        </footer>
        
        </div>
          
       </div>
     </main>
   
   
   
   
  
  
  
  
  
  
   </div>
 );
}
