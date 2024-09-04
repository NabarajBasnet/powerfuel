'use client'

import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const AllDepartmentsState = useSelector(state => state.rtkreducers.allDepartmentToggle);
  console.log('Toggle State: ', AllDepartmentsState);
  return (
    <div className="w-full">
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="flex justify-center">
          <div>
            <h1 className="text-8xl text-center font-bold">My Location</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.124526926339!2d85.33641636956494!3d27.701902998511628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1974cd39fa13%3A0x622dcab96b2b631f!2sKABELI%20GIRLS%20HOSTEL%20BANESHWOR%20HEIGHT!5e0!3m2!1sen!2snp!4v1725446731601!5m2!1sen!2snp" width="500" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
