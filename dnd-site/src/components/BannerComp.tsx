export interface BannerProps {
  titleText: string;
  subtitleText?: string;
  firstButtonText?: string;
  firstRedirect?: string;
  secondButtonText?: string;
  secondRedirect?: string;
}

export default function MainBanner({
  titleText,
  subtitleText,
  firstButtonText,
  firstRedirect,
  secondButtonText,
  secondRedirect,
}: BannerProps) {
  return (
    <div
      className="p-5 text-center bg-image"
      style={{
        height: 450,
      }}
    >
      <div className="mask pb-2">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white ">
            {/* <h1 className="mb-3 fw-bold" style={{ fontFamily: "Verdana", fontSize: "3.5rem" }}>
              {titleText}
            </h1> */}
            <img
              src={titleText}
              alt={titleText}
              className="m-5"
              style={{ width: "80%" }}
            />
            <h4 className="mb-3 fw-bold" style={{ fontFamily: "monospace" }}>
              {subtitleText}
            </h4>
            {/* {firstButtonText && firstButtonText.length > 0 && (<a>test</a>)} */}
            {firstButtonText && firstButtonText.length > 0 && (
              <a
                className="btn btn-outline-light btn-lg m-1 fw-bold"
                href={firstRedirect}
                role="button"
              >
                {firstButtonText}
              </a>
            )}
            {secondButtonText && secondButtonText.length > 0 && (
              <a
                className="btn btn-outline-light btn-lg m-1 fw-bold"
                href={secondRedirect}
                role="button"
              >
                {secondButtonText}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
