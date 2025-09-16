import { useState } from "react";
import { Quote } from "lucide-react"; 

// Slide interface
interface Slide {
    img: string;        
    name: string;       
    age: string;        
    text: string;       
}

// Slide card props interface
interface SlideCardProps {
    slide: Slide;
}

export default function SlideCard({ slide }: SlideCardProps) {
  // State variable for details visibility
  const [visible, setVisible] = useState(false);

  // Function for toggle visibility management
  const toggleVisibility = () => setVisible(!visible);

  return (
    <div className="group relative w-full h-[25rem] lg:h-[30rem] overflow-hidden rounded-3xl mx-auto" onClick={toggleVisibility}>
      <img src={slide.img} alt={slide.name} className="w-full h-full object-cover rounded-3xl" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none">
        <p className="text-2xl font-montserrat text-white font-bold drop-shadow-lg">
          {slide.name}
        </p>
        <p className="text-xl font-montserrat text-white font-light drop-shadow-lg">
          {slide.age}
        </p>
      </div>

      <div className={`absolute inset-0 flex flex-col bg-black/60 p-6 rounded-3xl transition-opacity duration-300 ${ visible ? "opacity-100" : "opacity-0" } md:opacity-0 md:group-hover:opacity-100`}>
        <div className="absolute inset-0 flex flex-col px-6 py-24 gap-4 pointer-events-none">
          <Quote className="w-10 h-10 text-white" />
          <h2 className="text-2xl font-montserrat text-white font-light drop-shadow-lg px-8">
            {slide.text}
          </h2>
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none">
          <p className="text-2xl font-montserrat text-white font-bold drop-shadow-lg">
            {slide.name}
          </p>
          <p className="text-xl font-montserrat text-white font-light drop-shadow-lg">
            {slide.age}
          </p>
        </div>
      </div>
    </div>
  );
}