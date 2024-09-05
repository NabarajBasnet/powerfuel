'use client'

import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";

export default function Home() {

  const AllDepartmentsState = useSelector(state => state.rtkreducers.allDepartmentToggle);
  const departments = ['Protein', 'Creatine', 'Creatine Monohydrate', 'Creatine Dehydtate', 'Testosterone', 'Growth Hormone', 'Vitamin', 'Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D', 'Multi Vitamin', 'Fish Oil', 'Peanut Butters', 'Carbs'];

  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center">

        <div className="w-full flex justify-between items-start">
          <div className="w-full flex justify-between items-start">
            <div className="w-full flex items-start">
              <div className="w-0 md:w-3/12 flex justify-start">
                <div className={`w-10/12 hidden md:flex px-2 ${AllDepartmentsState ? 'border shadow-md' : "border-none"}`}>
                  {AllDepartmentsState ? (
                    <div className="w-full z-50">
                      {departments.map((department, index) => (
                        <div key={index}>
                          <h1 className="p-1 cursor-pointer">{department}</h1>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className={`w-full  ${AllDepartmentsState ? 'border shadow-md' : "border-none"}`}>
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full md:px-4 md:w-9/12 bg-gray-200 md:p-8 my-10 flex justify-between items-center">
                <div className="w-6/12 px-4">
                  <p className="my-8 font-bold text-green-500">BUILD YOUR PHYSIQUE</p>
                  <h1 className="my-8 text-4xl md:text-5xl font-bold">Supplements 100% Authentic</h1>
                  <p className="myy-8 text-sm">Free Pickup and Delivery Available</p>
                  <Button className='rounded-none font-bold bg-green-600 my-8'>SHOP NOW</Button>
                </div>

                <div className="w-6/12 flex justify-center">
                  <img src={`/images/kettlebell-protein.png`} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

