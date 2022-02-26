export const ProSS = (props) => {
  return (
    <div id="pross" className="text-center">
      <div className="container">
        <div className="section-title">
          <h3>دوره های پیشرفته مدیریتی</h3>
        </div>
        {props.data
          ? props.data.map((d, i) => (
              <div key={`${d.hsName}-${i}`} className="col-md-4">
                {" "}
                <img src={d.hsImg} alt={d.hsAlt} />
                <div className="feature-desc">
                  <h3>{d.hsTitle}</h3>
                  <p>{d.ssText}</p>
                </div>
              </div>
            ))
          : "Loading..."}
      </div>
    </div>
  );
};
