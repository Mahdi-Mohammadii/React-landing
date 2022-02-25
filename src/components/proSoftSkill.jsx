export const ProSS = (props) => {
  return (
    <div id="services" className="text-center" style={{ paddingTop: "0" }}>
      <h3>دوره های پیشرفته مدیریتی</h3>
      <div className="row">
        {props.data
          ? props.data.map((d, i) => (
              <div key={`${d.hsName}-${i}`} className="col-md-4">
                {" "}
                <img src={d.hsImg} alt={d.hsAlt} />
                <div className="service-desc">
                  <h3>{d.hsTitle}</h3>
                  <p>{d.hsText}</p>
                </div>
              </div>
            ))
          : "loading"}
      </div>
    </div>
  );
};
