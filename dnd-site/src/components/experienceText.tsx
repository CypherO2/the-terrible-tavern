export interface experienceProps {
  role: string;
  campaign: string;
  name: string;
  race: string;
  campaignLink?: string;
}

export default function ExperienceText({
  name,
  campaign,
  role,
  race,
  campaignLink = "#",
}: experienceProps) {
  return (
    <>
      <div className="my-1 p-2">
        <span className="text-secondary" style={{ fontFamily: "monospace" }}>
          {role}
        </span>
        <h4 className="fw-bold " style={{ fontFamily: "monospace" }}>
          {name} -{" "}
          <a className="text-light" href={campaignLink}>
            {campaign}
          </a>
        </h4>
        <h6 className="mx-3">Race : {race}</h6>
      </div>
    </>
  );
}
