export default function TeamCard({ classname='', name, position}){
  return (
    <>
    <div className="w-full">
      <img src="/images/person.jpeg" alt="Team Member" className="w-full aspect-square rounded-lg"/>
      <h1 className="font-bold text-md md:text-lg">M. Wahyu Ardiansyah</h1>
      <p className="font-medium text-xs md:text-sm text-[#646464]">Head of Web Development</p>
    </div>
    </>
  );
}