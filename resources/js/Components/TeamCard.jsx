const TeamCard = ({ classname = "", member }) => {
    const imageSrc = member.gender === "female" ? "./images/female.png" : "./images/male.png";

    return (
        <div className={classname}>
            <img
                src={imageSrc}
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
};

export default TeamCard;