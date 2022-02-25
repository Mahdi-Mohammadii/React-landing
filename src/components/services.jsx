export const Services = (props) => {
  return (
    <div id="services" className="text-center" style={{ paddingBottom: "0" }}>
      <div className="container">
        <div className="section-title">
          <h2>دوره های آموزشی</h2>
          <p style={{ padding: "20px" }}>
            دوره های آموزشی که به صورت ویدئوها و کلاس های آنلاین در اختیار
            متقاضیان قرار می گیرد
          </p>
        </div>
        <h3>مهارت های نرم مدیریتی</h3>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.ssName}-${i}`} className="col-md-4">
                  {" "}
                  <img src={d.ssImg} alt={d.ssAlt} />
                  <div className="service-desc">
                    <h3>{d.ssTitle}</h3>
                    <p>{d.ssText}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
