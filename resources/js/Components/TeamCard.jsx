export default function TeamCard({ classname = "", children, member }) {
    return (
        <div className="">
            <img
                src="./images/person.png"
                className="rounded-lg bg-[#004877]"
                alt="Person"
            />
            <h1 className="font-semibold text-[1.25rem]">
               {member.name}
            </h1>
            <p className="text-[1rem] text-[#646464]">
               {member.position.position}
            </p>
        </div>
    );
}
